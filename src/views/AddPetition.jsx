import React, { useState, useEffect, useContext } from "react";
import NavbarApp from "../components/NavbarApp";
import { Context } from "../store/pololitoContext";




const AddPetition = () => {

  const [form, setForm] = useState();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.WhoAmI();

  }, []);

  const HandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      "user_id": store.currentUser.id[0]

    });
  };

  console.log(form)
  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/create-publication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        console.log(response);
      })

      .catch((err) => {
        console.error(err);
      });
  }



  return (
    <>
      <NavbarApp />
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="inputTitle" className="form-label">
              Titulo de su peticion
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={HandleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputBody" className="form-label">
              Descripcion de la peticion
            </label>
            <input
              type="text"
              className="form-control"
              id="body"
              name="body"
              onChange={HandleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputBody" className="form-label">
              Direccion
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              onChange={HandleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPetition;
