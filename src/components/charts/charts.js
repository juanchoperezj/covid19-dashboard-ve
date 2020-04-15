import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "easy-redux-helpers";
import { CardContainer, Row } from "./styled-charts";
import StackChart from "./stack-chart";
import Checkbox from "../checkbox/checkbox";

const mock = [
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 2,
    Status: "confirmed",
    Date: "2020-03-14T00:00:00Z",
    confirmed: 2,
    date: "13 - Mar.",
    deaths: 0,
    recovered: 0
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 10,
    Status: "confirmed",
    Date: "2020-03-15T00:00:00Z",
    confirmed: 10,
    date: "14 - Mar.",
    deaths: 0,
    recovered: 0
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 17,
    Status: "confirmed",
    Date: "2020-03-16T00:00:00Z",
    confirmed: 17,
    date: "15 - Mar.",
    deaths: 0,
    recovered: 0
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 33,
    Status: "confirmed",
    Date: "2020-03-17T00:00:00Z",
    confirmed: 33,
    date: "16 - Mar.",
    deaths: 0,
    recovered: 0
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 36,
    Status: "confirmed",
    Date: "2020-03-18T00:00:00Z",
    confirmed: 36,
    date: "17 - Mar.",
    deaths: 0,
    recovered: 0
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 42,
    Status: "confirmed",
    Date: "2020-03-19T00:00:00Z",
    confirmed: 42,
    date: "18 - Mar.",
    deaths: 0,
    recovered: 0
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 42,
    Status: "confirmed",
    Date: "2020-03-20T00:00:00Z",
    confirmed: 42,
    date: "19 - Mar.",
    deaths: 0,
    recovered: 0
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 70,
    Status: "confirmed",
    Date: "2020-03-21T00:00:00Z",
    confirmed: 70,
    date: "20 - Mar.",
    deaths: 0,
    recovered: 0
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 70,
    Status: "confirmed",
    Date: "2020-03-22T00:00:00Z",
    confirmed: 70,
    date: "21 - Mar.",
    deaths: 0,
    recovered: 15
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 77,
    Status: "confirmed",
    Date: "2020-03-23T00:00:00Z",
    confirmed: 77,
    date: "22 - Mar.",
    deaths: 0,
    recovered: 15
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 84,
    Status: "confirmed",
    Date: "2020-03-24T00:00:00Z",
    confirmed: 84,
    date: "23 - Mar.",
    deaths: 0,
    recovered: 15
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 91,
    Status: "confirmed",
    Date: "2020-03-25T00:00:00Z",
    confirmed: 91,
    date: "24 - Mar.",
    deaths: 0,
    recovered: 15
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 107,
    Status: "confirmed",
    Date: "2020-03-26T00:00:00Z",
    confirmed: 107,
    date: "25 - Mar.",
    deaths: 0,
    recovered: 15
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 107,
    Status: "confirmed",
    Date: "2020-03-27T00:00:00Z",
    confirmed: 107,
    date: "26 - Mar.",
    deaths: 1,
    recovered: 31
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 119,
    Status: "confirmed",
    Date: "2020-03-28T00:00:00Z",
    confirmed: 119,
    date: "27 - Mar.",
    deaths: 2,
    recovered: 39
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 119,
    Status: "confirmed",
    Date: "2020-03-29T00:00:00Z",
    confirmed: 119,
    date: "28 - Mar.",
    deaths: 2,
    recovered: 39
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 135,
    Status: "confirmed",
    Date: "2020-03-30T00:00:00Z",
    confirmed: 135,
    date: "29 - Mar.",
    deaths: 3,
    recovered: 39
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 135,
    Status: "confirmed",
    Date: "2020-03-31T00:00:00Z",
    confirmed: 135,
    date: "30 - Mar.",
    deaths: 3,
    recovered: 39
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 143,
    Status: "confirmed",
    Date: "2020-04-01T00:00:00Z",
    confirmed: 143,
    date: "31 - Mar.",
    deaths: 3,
    recovered: 41
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 146,
    Status: "confirmed",
    Date: "2020-04-02T00:00:00Z",
    confirmed: 146,
    date: "1 - Abr.",
    deaths: 5,
    recovered: 43
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 153,
    Status: "confirmed",
    Date: "2020-04-03T00:00:00Z",
    confirmed: 153,
    date: "2 - Abr.",
    deaths: 7,
    recovered: 52
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 155,
    Status: "confirmed",
    Date: "2020-04-04T00:00:00Z",
    confirmed: 155,
    date: "3 - Abr.",
    deaths: 7,
    recovered: 52
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 159,
    Status: "confirmed",
    Date: "2020-04-05T00:00:00Z",
    confirmed: 159,
    date: "4 - Abr.",
    deaths: 7,
    recovered: 52
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 165,
    Status: "confirmed",
    Date: "2020-04-06T00:00:00Z",
    confirmed: 165,
    date: "5 - Abr.",
    deaths: 7,
    recovered: 65
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 165,
    Status: "confirmed",
    Date: "2020-04-07T00:00:00Z",
    confirmed: 165,
    date: "6 - Abr.",
    deaths: 7,
    recovered: 65
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 167,
    Status: "confirmed",
    Date: "2020-04-08T00:00:00Z",
    confirmed: 167,
    date: "7 - Abr.",
    deaths: 9,
    recovered: 65
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 171,
    Status: "confirmed",
    Date: "2020-04-09T00:00:00Z",
    confirmed: 171,
    date: "8 - Abr.",
    deaths: 9,
    recovered: 84
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 171,
    Status: "confirmed",
    Date: "2020-04-10T00:00:00Z",
    confirmed: 171,
    date: "9 - Abr.",
    deaths: 9,
    recovered: 84
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 175,
    Status: "confirmed",
    Date: "2020-04-11T00:00:00Z",
    confirmed: 175,
    date: "10 - Abr.",
    deaths: 9,
    recovered: 93
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 181,
    Status: "confirmed",
    Date: "2020-04-12T00:00:00Z",
    confirmed: 181,
    date: "11 - Abr.",
    deaths: 9,
    recovered: 93
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Cases: 189,
    Status: "confirmed",
    Date: "2020-04-13T00:00:00Z",
    confirmed: 189,
    date: "12 - Abr.",
    deaths: 9,
    recovered: 110
  }
];
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
        chartData={mock}
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
