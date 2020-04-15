import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "easy-redux-helpers";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const LineChart = ({ chartData, activeCharts }) => {
  const { width } = useWindowDimensions();

  return (
    <AreaChart data={chartData} width={width * 0.75} height={450}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      {activeCharts.confirmed && (
        <Area
          name="Confirmados"
          type="basis"
          dataKey="confirmed"
          stackId="3"
          stroke="#8884d8"
          fill="#f1c40f"
        />
      )}
      {activeCharts.recovered && (
        <Area
          name="Recuperados"
          type="basis"
          dataKey="recovered"
          stackId="2"
          stroke="#ffc658"
          fill="#27ae60"
        />
      )}

      {activeCharts.deaths && (
        <Area
          name="Muertes"
          type="basis"
          dataKey="deaths"
          stackId="1"
          stroke="#82ca9d"
          fill="#c0392b"
        />
      )}
    </AreaChart>
  );
};

LineChart.propTypes = {
  chartData: PropTypes.shape({}).isRequired
};

LineChart.defaultProps = {};

export default connect(LineChart).to({});
