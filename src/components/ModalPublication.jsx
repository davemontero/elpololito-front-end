import FormPublication from "./FormPublication";

const ModalLogin = () => {
  
  return (
    <div
      className="modal fade"
      id="PublicationModal"
      tabIndex="-1"
      aria-labelledby="PublicationModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="PublicationModalLabel">
              Publicar Aviso
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <FormPublication />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
