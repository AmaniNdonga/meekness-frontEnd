import React, { Component } from "react";
import {Link} from 'react-router-dom';

import styled from "styled-components";
import {ButtonContainer} from "./Button";



export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
    <NavWrapper>
        <div>
        <Link to="/">
            <ButtonContainer>
                
                    shop
                
            </ButtonContainer>
        </Link>
        </div>
        <div>
        <Link to="/about" className="ml-auto">
            <ButtonContainer>
                
                    About
                
            </ButtonContainer>
        </Link>
        </div>
        <div>
        <Link to="/contact" className="ml-auto">
            <ButtonContainer>
                
                    <i className="fas fa-phone"/>
                
            </ButtonContainer>
        </Link>
        </div>
        <div>
        <Link to="/cart" className="ml-auto">
            <ButtonContainer>
                <span className="mr-2">
                    <i className="fas fa-cart-plus"/>
                </span>
            </ButtonContainer>
        </Link>
        </div>

    </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    display: flex;
    justify-content: space-between;
    .nav-link{
        color:var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;