import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "easy-redux-helpers";
import { DetailContainer } from "./styled-details";

const Details = () => {
  return <DetailContainer>Details</DetailContainer>;
};

Details.propTypes = {};

Details.defaultProps = {};

export default connect(Details).to({});
