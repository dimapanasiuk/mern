import React from "react";
import emoji from "emoji-dictionary";
import { DivS } from './style';

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
