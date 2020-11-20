import React from "react";
import styled from "styled-components";
import emoji from "emoji-dictionary";

const DivS = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 25px;
  background: #343a40;
  color: #b2d7ff;
  text-align: center;
`;

const Footer = () => {
  return (
    <DivS>
      MERN stack app &nbsp;&nbsp;&nbsp;
      {emoji.getUnicode(":rocket:")}
      {emoji.getUnicode(":rocket:")}
      {emoji.getUnicode(":rocket:")}
    </DivS>
  );
};

export default Footer;
