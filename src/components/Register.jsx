import RegisterFormWorker from "./RegisterFormWorker"
import RegisterFormClient from "./RegisterFormClient"

const Register = () => {
  return (
    <>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-worker-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-worker"
            type="button"
            role="tab"
            aria-controls="pills-worker"
            aria-selected="true"
          >
            Trabajador
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-client-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-client"
            type="button"
            role="tab"
            aria-controls="pills-client"
            aria-selected="false"
          >
            Cliente
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-worker"
          role="tabpanel"
          aria-labelledby="pills-worker-tab"
        >
          <RegisterFormWorker />
        </div>
        <div
          className="tab-pane fade"
          id="pills-client"
          role="tabpanel"
          aria-labelledby="pills-client-tab"
        >
          <RegisterFormClient />
        </div>
      </div>
    </>
  );
};

export default Register;
