const RegisterFormWorker = () => {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputWorkerFirstname" className="form-label">
          Primer Nombre <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputWorkerFirstname" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputWorkerSecondname" className="form-label">
          Segundo Nombre
        </label>
        <input type="text" className="form-control" id="inputWorkerSecondname" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputWorkerLastname" className="form-label">
          Primer Apellido <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputWorkerLastname" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputWorkerLastname2" className="form-label">
          Segundo Apellido
        </label>
        <input type="text" className="form-control" id="inputWorkerLastname2" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputWorkerRUT" className="form-label">
          RUT <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputWorkerRUT" />
      </div>
      <div className="col-12">
        <label htmlFor="inputWorkerAddress" className="form-label">
          Dirección <span className="input-require">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="inputWorkerAddress"
          placeholder="Av. Irarrazabal 1350"
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputWorkerAddress2" className="form-label">
          Dirección 2
        </label>
        <input
          type="text"
          className="form-control"
          id="inputWorkerAddress2"
          placeholder="Departamento, oficina, piso"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputWorkerCity" className="form-label">
          Ciudad <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputWorkerCity" />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputWorkerGender" className="form-label">
          Genero <span className="input-require">*</span>
        </label>
        <select id="inputWorkerGender" className="form-select">
          <option>Elegir...</option>
          <option>Mujer</option>
          <option>Hombre</option>
          <option>Prefiero no decir</option>
        </select>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheckWorker" />
          <label className="form-check-label" htmlFor="gridCheckWorker">
            He leido los terminos y condiciones
          </label>
        </div>
      </div>
    </form>
  );
};

export default RegisterFormWorker;
