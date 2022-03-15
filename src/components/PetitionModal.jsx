import React from "react";
import { Button, Modal } from "react-bootstrap";
import AddPetition from "./AddPetition";
import Register from "./Register"




class FirstModal extends React.Component {

    constructor() {
        super()
        this.state = {
            showModal: false

        }
    };
    HandleModal() {
        this.setState({ showModal: !this.state.showModal })
    };
    render() {
        return (
            <>
                <Button
                    onClick={() => this.HandleModal()}
                    className="btn btn-primary btn-lg btn3d"
                >
                    Publicar un aviso
                </Button>
                <Modal show={this.state.showModal} >
                    <Modal.Header>
                        Agregue aqui su peticion
                    </Modal.Header>
                    <Modal.Body>
                        <AddPetition />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.HandleModal()}> close </Button>
                    </Modal.Footer>
                </Modal>
            </>

        );
    };
};

export default FirstModal;
