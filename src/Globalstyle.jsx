import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
 }
html {
  font-size: 1rem;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}


h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 2rem;
  font-weight: 900;
}

h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
   text-align: center;
  }

  h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
  font-size: 1rem;
  letter-spacing :1px;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  padding: 0 15rem;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.common-heading {
  font-size: 3.8rem;
  font-weight: 400;
  margin-bottom: 6rem;
  
}

input, textarea{
max-width: 50rem;
color: ${({ theme }) => theme.colors.black};
padding: 1rem 2rem;
border: 1px solid ${({ theme }) => theme.colors.border};
box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
input[type="submit"]{
max-width: 8rem;
background-color: ${({ theme }) => theme.colors.btn};
color: ${({ theme }) => theme.colors.white};
padding: 1rem 2rem;
border-style: solid;
border-width: .1rem;
font-size: 1rem;
cursor: pointer;
}

input:focus {
  outline: none;
  border: none;
}

textarea:focus {
  outline: none;
  border: none;
}

/* ===========================================
/* media queries  
======================================= */
/* px  */
/* rem  */
/* em  */
/* 1500px */

//998px
@media (max-width:${({ theme }) => theme.media.tab}) {
  .container{
    padding: 0 3.2rem;
  }

    .grid-three-column {
  grid-template-columns: 1fr 1fr;
}
}

@media (max-width:${({ theme }) => theme.media.mobile}) {

  html{
    font-size: 50%;
  }

  .grid{
    gap: 3.2rem;
  }

  .grid-two-column, .grid-three-column, .grid-four-column{
    grid-template-columns: 1fr;
  }
}



`;
