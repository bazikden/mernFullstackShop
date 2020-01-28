import React, {useState} from "react";
import {Alert, Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {login, toggleLoginModal} from "../../redux/actions/authActions";
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


const LoginModal = ({modal, toggleLoginModal, login, errors, history}) => {
    const [data, setData] = useState({})
    const onChange = e => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const toggleModal = () => {
        history.goBack()
        toggleLoginModal()
    }

    const onLogin = () => {
        login(data)
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggleModal} style={styles.modalStyle}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>

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
                    <Button color="primary" onClick={onLogin}>Confirm</Button>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
const mapStateToProps = (state) => ({
    modal: state.auth.loginModal,
    errors: state.errors
})
export default connect(mapStateToProps, {toggleLoginModal, login})(withRouter(LoginModal))