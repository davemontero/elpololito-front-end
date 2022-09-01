import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {
  Form,
  Spinner,
  Button,
  Row,
  Col,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import { BsQuestionCircle } from "react-icons/bs";
import Input, { isValidPhoneNumber } from "react-phone-number-input/input";
import { useRut, removeSeparators } from "react-rut-formatter";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";

const Register = () => {
  let navigate = useNavigate()
  const [startDate, setStartDate] = useState();
  const [form, setForm] = useState({});
  const [phone, setPhone] = useState();
  const { rut, updateRut } = useRut();
  const [showSpinner, setShowSpinner] = useState(false);

  const ageValidator = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);

    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18 ? true : false;
  };

  const handleChangeform = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleDate = (date) => {
    setStartDate(date);
    setForm({
      ...form,
      dob: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    });
  };

  const handlePhone = (phone) => {
    setPhone(phone);
    setForm({
      ...form,
      phone: phone,
    });
  };

  const handleRUT = (e) => {
    setForm({
      ...form,
      [e.target.name]: removeSeparators(rut.raw),
    });
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Formato de contraseña</Popover.Header>
      <Popover.Body>
        <span>
          <b>1.</b> Al menos una minuscula
        </span>
        <br />
        <span>
          <b>2.</b> Al menos una mayuscula
        </span>
        <br />
        <span>
          <b>3.</b> Al menos un número
        </span>
        <br />
        <span>
          <b>4.</b> Al menos un ($@#*-){" "}
        </span>
        <br />
        <span>
          <b>5.</b> Al menos 6 caracteres
        </span>
      </Popover.Body>
    </Popover>
  );

  const handleRegister = (e) => {
    e.preventDefault()
  };

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/create-person", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(form)
    })
      .then(response => response.json())
      .then(response => {
        response.status ?
          swal({
            title: "Exito",
            text: response.msg,
            icon: "success",
            timer: 5000,
            button: "good"
          }).then(() => navigate("/login")) :
          swal({
            title: "Error",
            text: response.msg,
            icon: "error",
            timer: 5000
          })
      })
      .catch(() => swal({
        title: "Error",
        text: "No se pudo enviar su solicitud",
        icon: "error",
        timer: 5000
      }))

  }
  return (
    <main className="box-container">
      <div className="box">
          <Link to="/landing">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left flechita" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
            </svg>
          </Link>
        <div className="box-title">Registro de usuario</div>
        <Form onSubmit={handleRegister}>
          <Row className="mb-3">
            <Form.Group controlId="formRegisterFirstName" as={Col}>
              <Form.Label>Primer nombre <span className="span-require">*</span></Form.Label>
              <Form.Control
                type="text"
                name="fname"
                placeholder="Isabella"
                onChange={handleChangeform}
                required
                className="inputCustom"
              />
            </Form.Group>
            <Form.Group controlId="formRegisterSecondName" as={Col}>
              <Form.Label>Segundo nombre</Form.Label>
              <Form.Control
                type="text"
                name="sname"
                placeholder="Sofía"
                onChange={handleChangeform}
                className="inputCustom"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formRegisterLastName" as={Col}>
              <Form.Label>Primer apellido <span className="span-require">*</span></Form.Label>
              <Form.Control
                type="text"
                name="lname"
                placeholder="González"
                onChange={handleChangeform}
                className="inputCustom"
                required
              />
            </Form.Group>
            <Form.Group controlId="formRegisterLastName2" as={Col}>
              <Form.Label>Segundo apellido</Form.Label>
              <Form.Control
                type="text"
                name="lname2"
                placeholder="Muñoz"
                onChange={handleChangeform}
                className="inputCustom"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formRegisterRUT" as={Col}>
              <Form.Label>RUT <span className="span-require">*</span></Form.Label>
              <Form.Control
                type="text"
                name="rut"
                placeholder="9.999.999-0"
                value={rut.formatted}
                onChange={(e) => updateRut(e.target.value)}
                onBlur={handleRUT}
                className="inputCustom"
                required
              />
            </Form.Group>
            <Form.Group controlId="formRegisterDOB" as={Col}>
              <Form.Label>Fecha de nacimiento <span className="span-require">*</span></Form.Label>
              <DatePicker
                selected={startDate}
                onChange={handleDate}
                className="form-control inputCustom"
                dateFormat="dd-MM-yyyy"
                placeholderText="01-12-2000"
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formRegisterPhone" as={Col}>
              <Form.Label>Teléfono <span className="span-require">*</span></Form.Label>
              <div>
                <Input
                  country="CL"
                  value={phone}
                  onChange={handlePhone}
                  rules={{ required: true }}
                  placeholder="9 1234 5678"
                  className="form-control inputCustom"
                  required
                />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formRegisterGender"
              as={Col}
            >
              <Form.Label>Genero <span className="span-require">*</span></Form.Label>
              <Form.Select defaultValue="Elegir..." className="inputCustom" name="gender" onChange={handleChangeform} required >
                <option>Elegir...</option>
                <option value="Mujer">Mujer</option>
                <option value="Hombre">Hombre</option>
                <option value="no binario">Prefiero no decir</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <div className="dropdown-divider"></div>
          <Form.Group className="my-3" controlId="formRegisterEmail">
            <Form.Label>Email <span className="span-require">*</span></Form.Label>
            <Form.Control
              type="email"
              name="mail"
              onChange={handleChangeform}
              placeholder="isabellagonzalez@dominio.com"
              className="inputCustom"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRegisterPassword">
            <OverlayTrigger placement="top" overlay={popover}>
              <Form.Label>
                Contraseña
                <BsQuestionCircle className="align-text-top ms-1 span-require" />
              </Form.Label>
            </OverlayTrigger>

            <Form.Control
              type="password"
              className="inputCustom"
              name="password"
              onChange={handleChangeform}
            />
          </Form.Group>
          <Row className="justify-content-center">
            {showSpinner ? (
              <Button className="box-btn" disabled>
                <Spinner
                  className="me-1"
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Cargando...
              </Button>
            ) : (
              <Button type="submit" className="box-btn" onClick={handleSubmit}>
                Registrar
              </Button>
            )}
          </Row>
        </Form>
      </div>
    </main>
  );
};

export default Register;
