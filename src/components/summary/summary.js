import React from "react";
import PropTypes from "prop-types";
import { connect } from "easy-redux-helpers";
import {
  RegionContainer,
  CardContainer,
  Label,
  Quantity,
  Title,
  Row
} from "./styled-summary";

const Summary = ({ local, global }) => {
  return (
    <RegionContainer>
      {local && (
        <CardContainer>
          <Title>
            <span role="img" aria-label="country">
              🇻🇪
            </span>{" "}
            Resumen de Casos
          </Title>
          <Row>
            <div>
              <Label>Confirmados</Label>
              <Quantity>{local.confirmed}</Quantity>
            </div>
            <div>
              <Label>Personas recuperadas</Label>
              <Quantity>{local.recovered}</Quantity>
            </div>
          </Row>
          <Row>
            <div>
              <Label>Muertes</Label>
              <Quantity>{local.deaths}</Quantity>
            </div>
          </Row>
        </CardContainer>
      )}
      <CardContainer>
        <Title>
          <span role="img" aria-label="country">
            🌏
          </span>{" "}
          COVID-19 en el mundo
        </Title>
        <Row>
          <div>
            <Label>Nuevos confirmados</Label>
            <Quantity>{global.newconfirmed}</Quantity>
          </div>
          <div>
            <Label>Total confirmados</Label>
            <Quantity>{global.totalconfirmed}</Quantity>
          </div>
        </Row>
        <Row>
          <div>
            <Label>Nuevos recuperados</Label>
            <Quantity>{global.newrecovered}</Quantity>
          </div>
          <div>
            <Label>Total recuperados</Label>
            <Quantity>{global.totalrecovered}</Quantity>
          </div>
        </Row>
        <Row>
          <div>
            <Label>Total muertes</Label>
            <Quantity>{global.totaldeaths}</Quantity>
          </div>
          <div>
            <Label>Nuevas muertes</Label>
            <Quantity>{global.newdeaths}</Quantity>
          </div>
        </Row>
      </CardContainer>
    </RegionContainer>
  );
};

Summary.propTypes = {
  global: PropTypes.oneOf([PropTypes.array, PropTypes.shape({})]).isRequired,
  local: PropTypes.oneOf([PropTypes.array, PropTypes.shape({})]).isRequired
};

Summary.defaultProps = {};

export default connect(Summary).to({
  props: {
    global: "state.main.global",
    local: "state.main.local"
  }
});
