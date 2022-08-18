import { useState, useEffect, useRef, useMemo } from "react";
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

import MyModal from "./Modal";
import Modal from "react-modal";
import CloseIcon from "../assets/svg/IconClose";
import { getCookie } from "../utils";

const apiKey = getCookie("apiKey");

function FormSelector() {
  const dispatch = useDispatch();
  const { allForms, selectedForm } = useSelector(selectForm);
  const { isOpen } = useSelector(selectModal);

  const inputRef = useRef(null);

  const LIMIT = 6;

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [offset, setOffset] = useState(allForms.length);
  const [fetched, setFetched] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!apiKey || fetched || !isOpen) {
      return;
    }
    fetchData();
  }, [isOpen]);

  const fetchData = () => {
    console.log("fetch more data...");
    console.log(offset);
    getEnabledForms(offset, LIMIT)
      .then(({ data }) => {
        // status code her durumda 200 dönüyor
        // bu nedenle responseCode'a bakarak kontrol yaptım
        if (data.responseCode !== 200) {
          throw data.message;
        }
        console.log(data);
        if (data.content.length === 0) {
          setHasMore(false);
          return;
        }
        setOffset(data.content.length + offset);
        setFetched(true);
        dispatch(setAllForms([...allForms, ...data.content]));
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleSubmit = () => {
    dispatch(setSelectedForm(selected));
  };
  const handleClose = () => {
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

  const props = {
    isOpen,
    // ariaHideApp: false,
    ariaHideApp: document.getElementById("root"),
    // ariaHideApp: document.getElementsByClassName("App")[0],
    appElement: document.getElementsByClassName("App")[0],
    onRequestClose: handleClose,
    contentLabel: "Modal",
  };

  return (
    <MyModal props={props}>
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
            <div
              data-testid="modal_close"
              onClick={handleClose}
              className="cursor-pointer"
            >
              <CloseIcon />
            </div>
          </div>
        </div>
        <div className="modal-content">
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <input
              ref={inputRef}
              onChange={debouncedChangeHandler}
              style={{ backgroundColor: "#F3F3FE" }}
              className="nosubmit color-navy-300 radius bg-navy-25 w-full"
              placeholder="Search in forms"
            ></input>
            <FormsList
              selected={selected}
              setSelected={setSelected}
              forms={filteredForms}
              handleMore={fetchData}
              hasMore={hasMore}
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
            data-testid="modal_cancel"
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
    </MyModal>
  );
}

export default FormSelector;
