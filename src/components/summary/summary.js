import React, { useEffect } from "react";
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
import useWindowDimensions from "../../hooks/useWindowDimensions";

const global = {
  newconfirmed: 65889,
  totalconfirmed: 1826633,
  newdeaths: 4672,
  totaldeaths: 108114,
  newrecovered: 27255,
  totalrecovered: 447732
};

const local = {
  deaths: 10,
  recovered: 50,
  confirmed: 150
};

const Regions = () => {
  console.log({ local });
  const { width } = useWindowDimensions();
  return (
    <RegionContainer>
      {local && (
        <CardContainer>
          <Title>🇻🇪 Resumen de Casos</Title>
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
        <Title>🌏 COVID-19 en el mundo</Title>
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

Regions.propTypes = {};

Regions.defaultProps = {};

export default connect(Regions).to({
  props: {
    global: "state.main.global",
    local: "state.main.local"
  }
});
