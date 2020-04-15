import React, { useEffect } from "react";
import { connect } from "easy-redux-helpers";
import {
  test_action,
  fetch_covid_summary_stats,
  fetch_covid_cases_by_type,
  fetch_covid_cases_by_all_types
} from "../../redux/actions/main";
import { HomeContainer, Title } from "./styled-home";
import Summary from "../summary/summary";
import Charts from "../charts/charts";
import Footer from "../footer/footer";

const Home = ({
  actions: { fetch_covid_summary_stats, fetch_covid_cases_by_all_types }
}) => {
  useEffect(() => {
    fetch_covid_summary_stats();
    fetch_covid_cases_by_all_types();
  }, [fetch_covid_summary_stats, fetch_covid_cases_by_all_types]);

  return (
    <HomeContainer>
      <Title>{process.env.REACT_APP_HOME_TITLE}</Title>
      <Charts />
      <Summary />
      <Footer />
    </HomeContainer>
  );
};

export default connect(Home).to({
  actions: {
    test_action,
    fetch_covid_summary_stats,
    fetch_covid_cases_by_type,
    fetch_covid_cases_by_all_types
  }
});
