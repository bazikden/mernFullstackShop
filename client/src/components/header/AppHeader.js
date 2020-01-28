import React, { useState } from 'react';
import { NavLink} from 'react-router-dom'
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

const styles = {
  links:{
    margin:"5px 10px",
    color:"white"
  }

}

const AppNavbar = ({toggleSignUpModal,toggleLoginModal,logined,loginedUser,logOut}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className='sticky-top'>
      <Navbar color="success" dark expand="md">
        <NavbarBrand href="/">Home Shop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>

            <NavItem >
              <NavLink style={styles.links} to='/food'>Food</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.links} to="/kitchen">Kitchen</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.links} to="/chemicals">Chemicals</NavLink>
            </NavItem>
            <NavItem>
              {
                logined && <NavLink style={styles.links} to="/addItem">Add Item</NavLink>
              }
            </NavItem>
            <NavItem>
              {
                !logined?
                  <NavLink style={styles.links} onClick={toggleLoginModal}  to=''>Login</NavLink>
                    :
                  <NavLink style={styles.links} onClick={()=>logOut()}  to=''>Log Out</NavLink>
              }
            </NavItem>
            <NavItem>
              <NavLink style={styles.links} onClick={toggleSignUpModal}  to=''>Sign Up</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>{loginedUser && loginedUser.name}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state =>({
  logined:state.auth.isAuth,
  loginedUser:state.auth.loginedUser
})


export default connect(mapStateToProps,{toggleSignUpModal,toggleLoginModal,logOut})(AppNavbar);