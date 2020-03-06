import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from "react-redux";
import {toggleInfoModal} from "../../redux/actions/authActions";

const styles = {
    modalStyle: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        width:'300px'
    }
}

const InfoModal = ({toggleInfoModal,infoModal,infoText}) => {
    const toggleModal = () => {
        toggleInfoModal()
    }
    return (
        <div>
            <Modal isOpen={infoModal} toggle={toggleModal}  style={styles.modalStyle}>
                <ModalHeader toggle={toggleModal}>Information</ModalHeader>
                <ModalBody>
                    <div>{infoText}</div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const mapStateToProps = state =>({
    infoModal:state.auth.infoModal,
    infoText:state.auth.infoText
})

export default connect(mapStateToProps,{toggleInfoModal})(InfoModal)