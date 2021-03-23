import React, { Component } from "react";
import './styles.css'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavMenu'


class Navbar extends Component {
  render() {
      return (
            <Nav>
            <NavLink to='/'>
              <img src={process.env.PUBLIC_URL + '/img/Erebor-smwhitelabel.png'} height="33" alt="logo" />
            </NavLink>
              <Bars />
            <NavMenu>
              <NavLink to='/dashboard' activeStyle>
                  Mkt Dashboard
              </NavLink>
              <NavLink to='/tradenow' activeStyle>
                  Trade Now
              </NavLink>
              <NavLink to='/about' activeStyle>
                  About the team
              </NavLink>
              <NavLink to='/signup' activeStyle>
                  Sign Up
              </NavLink>       
            </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Log In</NavBtnLink>
                </NavBtn>

          </Nav>
      );
   
  }
}

export default Navbar;