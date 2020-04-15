import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Label } from "./styled-checkbox";

const CheckBox = ({ label, name, onClick, value }) => (
  <Container>
    <input
      type="checkbox"
      id={`checkbox-${name}`}
      onClick={onClick}
      name={name}
      defaultChecked={value}
    />
    <Label>{label}</Label>
  </Container>
);

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.bool
};

CheckBox.defaultProps = {
  value: false
};

export default CheckBox;
