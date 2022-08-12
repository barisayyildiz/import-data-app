import { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash.debounce";

import { getEnabledForms } from "../utils/api";

import {
  selectForm,
  setAllForms,
  setSelectedForm,
} from "../store/slices/formSlice";
import { selectModal, closeModal } from "../store/slices/modalSlice";

import "../styles/FormSelector.scss";
import FormsList from "./FormsList";

import Modal from "./Modal";
import CloseIcon from "../assets/svg/IconClose";

import { mockForms } from "../constants/index";

function FormSelector() {
  const dispatch = useDispatch();
  const { allForms, selectedForm } = useSelector(selectForm);
  const { isOpen } = useSelector(selectModal);

  const inputRef = useRef(null);

  // TODO: API'ye istek atılarak getirilecek
  useEffect(() => {
    console.log("inside use effect");

    getEnabledForms()
      .then(({ data: { content } }) => {
        console.log(content);
        dispatch(setAllForms(content));
        // dispatch(setAllForms(content))
      })
      .catch((e) => {
        console.error(e);
      });

    // setTimeout(() => {
    //   dispatch(setAllForms(mockForms));
    // }, 1000);
  }, []);

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const handleSubmit = () => {
    dispatch(setSelectedForm(selected));
  };
  const handleClose = () => {
    console.log("handle close");
    dispatch(closeModal());
  };

  const filterForms = () => {
    if (query !== "") {
      const reg = new RegExp(query, "i");
      return allForms.filter((form) => reg.test(form.title));
    } else {
      return allForms;
    }
  };
  const filteredForms = filterForms();

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    []
  );

  return (
    <Modal isOpen={isOpen} ariaHideApp={false} onRequestClose={handleClose}>
      <div className="flex flex-col gap-4 modal-content-wrapper">
        <div
          className="flex flex-row justify-start gap-4 border-b"
          style={{ borderColor: "#DCE2F0", borderBottomWidth: "2px" }}
        >
          <div className="grow-1 flex flex-col gap-1.5">
            <h1 className="font-medium text-xl">Select Forms</h1>
            <h3 style={{ color: "#60658C" }}>
              Please select one of your forms to continue
            </h3>
          </div>
          <div>
            {/* TODO: clickable yapılacak */}
            <div onClick={handleClose} className="cursor-pointer">
              <CloseIcon />
            </div>
          </div>
        </div>
        <div className="modal-content">
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <input
              ref={inputRef}
              onChange={debouncedChangeHandler}
              // value={searched}
              // onChange={(e) => setSearched(e.target.value)}
              style={{ backgroundColor: "#F3F3FE" }}
              className="nosubmit color-navy-300 radius bg-navy-25 w-full"
              placeholder="Search in forms"
            ></input>
            <FormsList
              selected={selected}
              setSelected={setSelected}
              // forms={allForms}
              forms={filteredForms}
            />
          </div>
        </div>
        <div
          className="flex flex-row justify-between items-center"
          style={{
            backgroundColor: "#FAFAFC",
            borderColor: "#DCE2F0",
            borderTopWidth: "2px",
          }}
        >
          <a
            style={{
              backgroundColor: "#FAFAFC",
              border: "1px solid #ADB4D2",
              color: "#A0A6C3",
            }}
            className="radius py-3 px-8"
            onClick={handleClose}
          >
            CANCEL
          </a>
          <a
            style={{
              backgroundColor: "#78BB07",
              color: "#ffffff",
            }}
            href="/import"
            className="radius py-3 px-8"
            onClick={handleSubmit}
          >
            DONE
          </a>
        </div>
      </div>
    </Modal>
  );
}

export default FormSelector;
