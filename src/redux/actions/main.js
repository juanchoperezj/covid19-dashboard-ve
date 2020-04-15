export const TEST_ACTION = "TEST_ACTION";
export const ACTION_WITH_NO_REDUCER = "ACTION_WITH_NO_REDUCER";
export const FETCH_COVID_SUMMARY_STATS = "FETCH_COVID_SUMMARY_STATS";
export const FETCH_COVID_CASES_BY_TYPE = "FETCH_COVID_CASES_BY_TYPE";
export const SAVE_COVID_CASES_BY_TYPE = "SAVE_COVID_CASES_BY_TYPE";
export const SAVE_SUMMARY_STATS = "SAVE_SUMMARY_STATS";
export const SAVE_COVID_CASES_BY_ALL_TYPES = "SAVE_COVID_CASES_BY_ALL_TYPES";
export const FETCH_COVID_CASES_BY_ALL_TYPES = "FETCH_COVID_CASES_BY_ALL_TYPES";
export const SAVE_SUMMARY_LOCAL_STATS = "SAVE_SUMMARY_LOCAL_STATS";

export const test_action = () => ({
  type: TEST_ACTION,
  text: "Prueba prueba"
});

export const no_reducer_action = () => ({
  type: ACTION_WITH_NO_REDUCER
});

export const fetch_covid_summary_stats = () => ({
  type: FETCH_COVID_SUMMARY_STATS
});

export const fetch_covid_cases_by_type = caseType => ({
  caseType,
  type: FETCH_COVID_CASES_BY_TYPE
});

export const save_covid_cases_by_type = ({ caseType, data }) => ({
  type: SAVE_COVID_CASES_BY_TYPE,
  caseType,
  data
});

export const save_summary_stats = global => ({
  type: SAVE_SUMMARY_STATS,
  global
});

export const fetch_covid_cases_by_all_types = () => ({
  type: FETCH_COVID_CASES_BY_ALL_TYPES
});

export const save_covid_cases_by_all_types = chartData => ({
  type: SAVE_COVID_CASES_BY_ALL_TYPES,
  chartData
});

export const save_summary_local_stats = local => ({
  type: SAVE_SUMMARY_LOCAL_STATS,
  local
});
