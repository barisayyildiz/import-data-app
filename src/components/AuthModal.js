import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectModal, closeAuthModal } from "../store/slices/modalSlice";
import MyModal from "../components/Modal";

import "../styles/AuthModal.scss";

export default function AuthModal() {
  const { isAuthOpen } = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeAuthModal());
  };

  useEffect(() => {
    console.log(document.querySelector("iframe"));
    console.log(document.querySelector("#allowButton"));
  }, [isAuthOpen]);

  const props = {
    isOpen: isAuthOpen,
    ariaHideApp: document.getElementById("root"),
    appElement: document.getElementsByClassName("App")[0],
    onRequestClose: handleClose,
    contentLabel: "AuthModal",
  };

  // if (isAuthOpen) {
  //   return (
  //     <iframe
  //       style={{
  //         display: "block",
  //         width: "100%",
  //         height: "450px",
  //         position: "absolute",
  //         left: "auto",
  //         right: "auto",
  //         top: "15%",
  //       }}
  //       className="autmodal"
  //       src="https://www.jotform.com/api/oauth.php?registrationType=oauth&ref=https%3A%2F%2Fimport.jotform.io%2F&client_id=ImportSubmissions&access_type=full&auth_type=login"
  //     ></iframe>
  //   );
  // }

  return (
    <MyModal props={props}>
      <iframe
        style={{
          display: "block",
          width: "100%",
          height: "450px",
        }}
        className="autmodal"
        src="https://www.jotform.com/api/oauth.php?registrationType=oauth&ref=https%3A%2F%2Fimport.jotform.io%2F&client_id=ImportSubmissions&access_type=full&auth_type=login"
      ></iframe>
    </MyModal>
  );
}
