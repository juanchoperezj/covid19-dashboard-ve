import React, { useEffect } from "react";
import { connect } from "easy-redux-helpers";
import {
  test_action,
  no_reducer_action,
  fetch_covid_summary_stats,
  fetch_covid_cases_by_type,
  fetch_covid_cases_by_all_types
} from "../../redux/actions/main";
import { HomeContainer, Title } from "./styled-home";
import Summary from "../summary/summary";
import Charts from "../charts/charts";
import Details from "../details/details";
import Footer from "../footer/footer";

const Home = ({
  actions: {
    test_action,
    fetch_covid_summary_stats,
    fetch_covid_cases_by_type,
    fetch_covid_cases_by_all_types
  }
}) => {
  useEffect(() => {
    // test_action();
    // fetch_covid_summary_stats();
    // fetch_covid_cases_by_all_types();
    // fetch_covid_cases_by_type("confirmed");
    // setTimeout(() => no_reducer_action(), 3000);
  }, []);

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
