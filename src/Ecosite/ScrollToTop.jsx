import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const ScrollButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #333;
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: opacity 0.4s;
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollButton isVisible={isVisible} onClick={scrollToTop}>
      <FaArrowUp />
    </ScrollButton>
  );
};

export default ScrollToTop;
