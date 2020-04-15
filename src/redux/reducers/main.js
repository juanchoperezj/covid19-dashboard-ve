import { createReducer } from "easy-redux-helpers";

const config = {
  initialState: {
    text: null,
    global: {
      newconfirmed: 0,
      totalconfirmed: 0,
      newdeaths: 0,
      totaldeaths: 0,
      newrecovered: 0,
      totalrecovered: 0
    },
    local: {
      confirmed: 0,
      recovered: 0,
      deaths: 0
    },
    chartData: []
  },
  TEST_ACTION: (state, action) => {
    state.text = action.text;
  },
  SAVE_SUMMARY_STATS: (state, action) => {
    console.log({ action });
    state.global = action.global;
  },
  SAVE_SUMMARY_LOCAL_STATS: (state, action) => {
    state.local = action.local;
  },
  SAVE_COVID_CASES_BY_TYPE: () => {},
  SAVE_COVID_CASES_BY_ALL_TYPES: (state, action) => {
    state.chartData = action.chartData;
  }
};

export default createReducer(config);
