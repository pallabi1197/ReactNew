import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div>
     <Wrapper><img src='./images/404.jpg' style={{display:'block' , margin:'auto'}} />
     <NavLink to="/" className="btn-hero" style={{display:'block' , margin:'auto'}}>Go Back</NavLink>
     
     
     </Wrapper>
     
    </div>
  )
}

const Wrapper = styled.section`
padding: 2rem 0;
background-color: #f5f5f5;


;`;

export default Error
