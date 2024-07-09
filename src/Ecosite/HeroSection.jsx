import React from "react";

const HeroSection = () => {
  return (
    <div>
      <Wrapper>
        <div className="container grid grid-two-column"></div>

        <div className="section-hero-data">

      <p className="herp-top-data">Welcome to</p>
      <h1 className="herp-heading">Creative Cloud</h1>
      <p className="herp-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>


          <div className="section-hero-image">



          </div>
        </div>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section``;

export default HeroSection;
