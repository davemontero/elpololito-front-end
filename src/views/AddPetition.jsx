import React, { useState } from "react"



const AddPetition = () => {

    const [form, setForm] = useState()

    const HandleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    

    function handleSubmit(event) {
        event.preventDefault();
        console.log('form', form)
        fetch("http://localhost:5000/create-publication", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(form)
        })
            .then(respuesta => {
                console.log(respuesta);
            })
            .catch(err => {
                console.error(err);
            });
    }



    console.log(form)

    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="inputTitle" className="form-label">Titulo de su peticion</label>
                    <input type="text" className="form-control" id="title" name="title" onChange={HandleChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="inputBody" className="form-label">Descripcion de la peticion</label>
                    <input type="text" className="form-control" id="body" name="body" onChange={HandleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputBody" className="form-label">Direccion</label>
                    <input type="text" className="form-control" id="address" name="address" onChange={HandleChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )



}

export default AddPetition;