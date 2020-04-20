import React from "react";
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
import useDarkMode from "../../hooks/useDarkMode";

const LineChart = ({ chartData, activeCharts }) => {
  const { width } = useWindowDimensions();
  const [theme] = useDarkMode();

  return (
    <AreaChart data={chartData} width={width * 0.75} height={450}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip
        wrapperStyle={{
          color: theme.text
        }}
      />
      {activeCharts.confirmed && (
        <Area
          name="Confirmados"
          type="basis"
          dataKey="confirmed"
          stackId="3"
          stroke="#f1c40f"
          fill="#f1c40f"
        />
      )}
      {activeCharts.recovered && (
        <Area
          name="Recuperados"
          type="basis"
          dataKey="recovered"
          stackId="2"
          stroke="#27ae60"
          fill="#27ae60"
        />
      )}

      {activeCharts.deaths && (
        <Area
          name="Muertes"
          type="basis"
          dataKey="deaths"
          stackId="1"
          stroke="#c0392b"
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
