import "./ModalConfirm.css";
import { FiAlertCircle as Alert } from "react-icons/fi";
import { useContext } from "react";
import { CreateBussinesContext } from "../../context/CreateBussines/CreateBussinesContext";
import { BarLoader } from "react-spinners";
import { GiConfirmed as Confirmed } from "react-icons/gi";
import { VscError as ErrorIcon } from "react-icons/vsc";
//Alert
import { Message } from "../../UI/Message/Message";

export const ModalConfirm = () => {
  const {
    modalConfirm,
    setModalConfirm,
    bussinesRequest,
    loading,
    alert,
    errorAlert,
    errorText,
  } = useContext(CreateBussinesContext);

  const closeModal = () => {
    setModalConfirm(false);
  };

  return (
    <>
      <div className={`modal-login${modalConfirm ? " open" : " close"}`}>
        {loading ? (
          <BarLoader
            cssOverride={{
              margin: "auto",
              "justify-content": "center",
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              "z-index": 10000000000,
            }}
            height={8}
            color="#0373b4"
            size={90}
          />
        ) : null}
        <div
          className={`content_confirm_modal ${modalConfirm ? "open" : "close"}`}
        >
          <div className="confirm_modal_header">
            <Alert className="icon" />
            <h1>¿Listo para crear tu negocio?</h1>
          </div>
          <div className="buttons">
            <button onClick={closeModal} className="cancel">
              Cancelar
            </button>
            <button onClick={bussinesRequest} className="confirm">
              Aceptar
            </button>
          </div>
        </div>
        <Message
          text={"Error complete los campos"}
          icon={<ErrorIcon className="icon__error" />}
          message={errorAlert}
        />
        <Message
          text="Creado con exitoso"
          icon={<Confirmed className="icon__message" />}
          message={alert}
        />
      </div>
    </>
  );
};
