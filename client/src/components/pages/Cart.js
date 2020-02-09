import React from "react";
import {
    Button, Col,
    Container,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,
    Table
} from "reactstrap";
import {connect} from "react-redux";
import {delFromCart, toggleCartModal} from "../../redux/actions/cartActions";
import {withRouter} from "react-router";


const styles = {
    modalStyle: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        minWidth: "30%",
        maxWidth: "90%",
    }
}


const CartModal = ({modal, toggleCartModal, history, orders, allPrice, quantity,delFromCart}) => {
    const toggleModal = () => {
        history.goBack()
        toggleCartModal()
    }




    return (
        <div>
            <Modal isOpen={modal} toggle={toggleModal} style={styles.modalStyle}>
                <ModalHeader toggle={toggleModal}>Cart</ModalHeader>
                <ModalBody>
                    <Container>


                        <Table>
                            <thead>
                            <tr>
                                <th>Number</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                orders.map((item, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item.category}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td><Button onClick={() => delFromCart(item)}>Delete</Button></td>
                                    </tr>
                                ))

                            }

                            </tbody>
                        </Table>
                        <Row>
                            <Col>
                                <div className="d-flex justify-content-between">
                                    <div><span style={{fontWeight: 700}}>Full Quantity</span> {quantity}</div>
                                    <div><span style={{fontWeight: 700}}>Full Price</span> {allPrice}</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleModal}>Confirm</Button>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
const mapStateToProps = (state) => ({
    modal: state.cart.cartModal,
    orders: state.cart.orderedGoods,
    allPrice: state.cart.allPrice,
    quantity: state.cart.quantity
})
export default connect(mapStateToProps, {toggleCartModal,delFromCart})(withRouter(CartModal))