import React from "react";
import { Container, Label, Icon } from "./styled-footer";

const codeIcon = require("../../assets/code.png");
const gitIcon = require("../../assets/github.png");
const Footer = () => (
  <Container>
    <Label>Hecho con</Label>
    <Icon src={codeIcon} alt="code" />
    <Label>- Check the code on</Label>
    <a href="" target="_blank">
      <Icon src={gitIcon} alt="github" />
    </a>
  </Container>
);
export default Footer;
