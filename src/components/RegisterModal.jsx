import React from "react";
import { Button, Modal } from "react-bootstrap";
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
                    className="btn btn-primary"
                >
                    Registrate
                </Button>
                <Modal show={this.state.showModal} >
                    <Modal.Header>
                       A continuacion sus datos
                    </Modal.Header>
                    <Modal.Body>
                        <Register />
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
