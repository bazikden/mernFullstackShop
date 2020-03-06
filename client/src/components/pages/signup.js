import React, {useState} from "react";
import {Alert, Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {signUp, toggleSignUpModal} from "../../redux/actions/authActions";
import {withRouter} from "react-router";


const styles = {
    modalStyle: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        minWidth: "30%"
    }
}


const SignUpModal = ({modal, toggleSignUpModal, signUp, errors, history}) => {
    const [data, setData] = useState({})

    const onChange = e => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const toggleModal = () => {
        history.goBack()
        toggleSignUpModal()
    }

    const onSignUp = () => {
        signUp(data)
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggleModal} style={styles.modalStyle}>
                <ModalHeader toggle={toggleModal}>Sign in</ModalHeader>
                <ModalBody>
                    <Label for="name">Name</Label>
                    <Input onChange={onChange} type="text" name="name" id="name" placeholder="Enter the name"/>

                    <Label for="email">Email</Label>
                    <Input onChange={onChange} type="email" name="email" id="email" placeholder="Email"/>

                    <Label for="password">Password</Label>
                    <Input onChange={onChange} type="password" name="password" id="password" placeholder="Password"/>
                    {errors.status === 400 ? (
                        <Alert color="danger" className='mt-3'>
                            {errors.msg}
                        </Alert>
                    ) : null}

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onSignUp}>Confirm</Button>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
const mapStateToProps = (state) => ({
    modal: state.auth.signUpModal,
    errors: state.errors
})
export default connect(mapStateToProps, {toggleSignUpModal, signUp})(withRouter(SignUpModal))