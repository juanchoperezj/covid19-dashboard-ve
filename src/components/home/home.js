import React, { useEffect } from "react";
import { connect } from "easy-redux-helpers";
import {
  test_action,
  fetch_covid_summary_stats,
  fetch_covid_cases_by_type,
  fetch_covid_cases_by_all_types
} from "../../redux/actions/main";
import { HomeContainer, Title, Button, SimpleRow } from "./styled-home";
import Summary from "../summary/summary";
import Charts from "../charts/charts";
import Footer from "../footer/footer";

const Home = ({
  actions: { fetch_covid_summary_stats, fetch_covid_cases_by_all_types },
  toggleDarkMode
}) => {
  useEffect(() => {
    fetch_covid_summary_stats();
    fetch_covid_cases_by_all_types();
  }, [fetch_covid_summary_stats, fetch_covid_cases_by_all_types]);

  return (
    <HomeContainer>
      <SimpleRow>
        <Title>{process.env.REACT_APP_HOME_TITLE}</Title>
        <Button onClick={toggleDarkMode}>Modo Oscuro</Button>
      </SimpleRow>
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
