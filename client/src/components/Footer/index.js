import React from "react";
import styled from "styled-components";
import emoji from "emoji-dictionary";

// eslint-disable-next-line import/no-unresolved
import theme from "style/theme";

const DivS = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 25px;
  background: ${theme.gray_footer};
  color: ${theme.light_blue};
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
