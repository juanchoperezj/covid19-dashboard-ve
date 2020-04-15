import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "easy-redux-helpers";
import { CardContainer, Row } from "./styled-charts";
import StackChart from "./stack-chart";
import Checkbox from "../checkbox/checkbox";

const Charts = ({ chartData }) => {
  const [confirmed, toggleConfirm] = useState(true);
  const [recovered, toggleRecover] = useState(false);
  const [deaths, toggleDeath] = useState(false);

  const toggleCheckBox = event => {
    switch (event.target.name) {
      case "confirmed":
        toggleConfirm(!confirmed);
        break;
      case "recovered":
        toggleRecover(!recovered);
        break;
      case "deaths":
        toggleDeath(!deaths);
        break;
      default:
        return null;
    }
  };
  return (
    <CardContainer>
      <Row>
        <Checkbox
          label="Confirmados"
          onClick={toggleCheckBox}
          name="confirmed"
          value={confirmed}
        />
        <Checkbox
          label="Recuperados"
          onClick={toggleCheckBox}
          name="recovered"
          value={recovered}
        />
        <Checkbox
          label="Muertes"
          onClick={toggleCheckBox}
          name="deaths"
          value={deaths}
        />
      </Row>
      <StackChart
        chartData={chartData}
        activeCharts={{ recovered, deaths, confirmed }}
      />
    </CardContainer>
  );
};

Charts.propTypes = {
  chartData: PropTypes.shape({}).isRequired
};

Charts.defaultProps = {};

export default connect(Charts).to({
  props: {
    chartData: "state.main.chartData"
  }
});
