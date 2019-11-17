import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {ButtonContainer} from "./Button";

export default function() {
  return (
    <ContactWrapper>
      <div className="card">
          <ButtonContainer>
            <Link className="Links">
          <i className="fab fa-instagram" />
        </Link>
          </ButtonContainer>
          
       
          <ButtonContainer>
            <Link className="Links">
          <i className="fab fa-facebook" />
        </Link>
          </ButtonContainer>
          
       
        <ButtonContainer>
          <Link className="Links">
          <i className="fas fa-envelope" />
        </Link>
        </ButtonContainer>
        
      </div>
    </ContactWrapper>
  );
  }

  const ContactWrapper = styled.div`


  `
