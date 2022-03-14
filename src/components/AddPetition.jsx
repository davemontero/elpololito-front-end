import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const AddPetition = () => {

    const [form, setForm] = useState({});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    console.log(form)
    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="InputWork" className="form-label"> Que necesita ?</label>
                    <input type="text"
                        className="form-control"
                        id="InputWork"
                        aria-describedby="WorkHelp"
                        value={form.Work}
                        onChange={handleChange}
                    />
                    <div id="WorkHelp" className="form-text">Recuerde ser especifico</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputAddress" className="form-label">Direccion en que se realizara</label>
                    <input type="text"
                        className="form-control"
                        id="InputAddress"
                        aria-describedby="AdressHelp"
                        value={form.Address}
                        onChange={handleChange}  
                    />
                    <div id="AdressHelp" className="form-text">Su direccion nunca sera compartida con fines maliciosos..... bueno quizas si</div>
                </div>
                <div>
                <Link to="SignUp" className="btn btn-primary">Inciar Sesion</Link>
                </div>
                
            </form>

        </div>

    );
}


export default AddPetition;