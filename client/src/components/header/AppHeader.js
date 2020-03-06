import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';
import {connect} from "react-redux";
import {logOut, toggleLoginModal, toggleSignUpModal} from "../../redux/actions/authActions";
import {toggleCartModal} from "../../redux/actions/cartActions";
import {cart} from "../../images/images";

const styles = {
    links: {
        margin: "5px 10px",
        color: "white",
        cursor: "pointer"
    },
    cart: {
        listStyle: "none",
    }

}

const AppNavbar = ({toggleSignUpModal, toggleLoginModal, toggleCartModal, logined, loginedUser, logOut}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div className='sticky-top'>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">Home Shop</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="m-auto" navbar>
                        <NavItem>
                            <NavLink style={styles.links} to='/food'>Food</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={styles.links} to="/kitchen">Kitchen</NavLink>
                        </NavItem>

                    </Nav>
                    <NavItem style={styles.cart} >
                        {
                            !logined && <NavLink style={styles.links} to="/addItem">Add Item</NavLink>
                        }
                    </NavItem>

                    <NavItem style={styles.cart}>
                        {
                            !logined ?
                                <NavLink style={styles.links} onClick={toggleLoginModal} to=''>Login</NavLink>
                                :
                                <NavLink style={styles.links} onClick={() => logOut()} to=''>Log Out</NavLink>
                        }
                    </NavItem>
                    <NavItem style={styles.cart}>
                        <NavLink style={styles.links} onClick={toggleSignUpModal} to=''>Sign Up</NavLink>
                    </NavItem>

                    <NavbarText>{loginedUser && loginedUser.name}</NavbarText>
                    <NavItem style={styles.cart}>
                        <NavLink style={styles.links} onClick={toggleCartModal} to=''>
                            <img style={{width: "30px", height: "30px"}} src={cart} alt=""/>
                        </NavLink>
                    </NavItem>
                </Collapse>
            </Navbar>
        </div>
    );
}

const mapStateToProps = state => ({
    logined: state.auth.isAuth,
    loginedUser: state.auth.loginedUser
})


export default connect(mapStateToProps, {toggleSignUpModal, toggleLoginModal, logOut, toggleCartModal})(AppNavbar);