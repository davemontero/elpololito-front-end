import React, { useState, useEffect, useContext } from "react";
import NavbarApp from "../components/NavbarApp";
import { Context } from "../store/pololitoContext";
import Form from 'react-bootstrap/Form'



const AddPetition = () => {
  const { store } = useContext(Context);
  const [form, setForm] = useState();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/get-professions", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then(response => response.json())
    
      .then(data => setJobs(data))
  }, []);


  const HandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      user_id: store.id,
      
    });
  };



  function handleSubmit(event) {
    event.preventDefault();
    console.log(form)
    fetch("http://localhost:5000/create-publication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        console.log(response.ok)
        response.ok ?
          swal({
            title: "Éxito",
            text: "Publicación creada con éxito",
            icon: "success",
            timer: 1500
          }) : swal({
            title: "Error",
            text: "Debe rellenar los campos",
            icon: "error",
            timer: 1500
          })
      })

      .catch((err) => {
        console.error(err);
      });

  }



  return (
    <>
      <NavbarApp />

      <br />
      <br />
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="inputTitle" className="form-label">
              Título de su Petición
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
              Rubro de la Petición
            </label>
            <Form.Select 
           
            className="form-control"
            aria-label="Default select example" 
            id="profession_id"
            name="profession_id"
            onChange={HandleChange}>   
             <option disabled>Pololitos</option> 
            
             {jobs.map((item)=>  <option value={item.id} key={item.id}>{item.profession} </option> )  
             }
                                            
            </Form.Select>
          </div> 


          <div className="mb-3">
            <label htmlFor="inputBody" className="form-label">
              Descripción de la petición
            </label>
            <textarea
              className="form-control"
              id="body"
              rows="4"
              name="body"
              onChange={HandleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputBody" className="form-label">
              Dirección
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
            Publicar
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPetition;
