import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectModal,
  closeAuthModal,
  toggleModal,
} from "../store/slices/modalSlice";
import MyModal from "../components/Modal";

import { setCookie } from "../utils";

import "../styles/AuthModal.scss";

export default function AuthModal() {
  const { isAuthOpen } = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeAuthModal());
  };

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.origin !== "https://www.jotform.com") {
        return;
      }
      const data = e.data;
      if (!data) {
        handleClose();
      } else {
        const apiKey = data.split(":")[1];
        setCookie("apiKey", apiKey);
        handleClose();
        dispatch(toggleModal());
      }
    };
    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const props = {
    isOpen: isAuthOpen,
    ariaHideApp: document.getElementById("root"),
    appElement: document.getElementsByClassName("App")[0],
    onRequestClose: handleClose,
    contentLabel: "AuthModal",
  };

  return (
    <MyModal props={props}>
      <iframe
        data-testid="auth_iframe"
        style={{
          display: "block",
          width: "100%",
          height: "450px",
        }}
        className="autmodal"
        src="https://www.jotform.com/api/oauth.php?registrationType=oauth&ref=http://localhost:3000/&client_id=ImportSubmissions&access_type=full&auth_type=login"
      ></iframe>
    </MyModal>
  );
}
