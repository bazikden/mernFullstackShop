import React, { useState } from 'react';
import { NavLink} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {connect} from "react-redux";
import {toggleSignUpModal} from "../../redux/actions/authActions";

const styles = {
  links:{
    margin:"0 10px",
    color:"white"
  }

}

const AppNavbar = ({toggleSignUpModal}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
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
              <NavLink style={styles.links} to="/addItem">Add Item</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.links}  to='/login'>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.links} onClick={toggleSignUpModal}  to=''>Sign Up</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default connect(null,{toggleSignUpModal})(AppNavbar);