import { combineEpics } from "redux-observable";
import {
  startTestActionFlow,
  startNoReducerFlow,
  startFetchSummaryStatsFlow,
  startFetchStatsByType,
  startFetchStatsByAllType
} from "./main";

const rootEpic = combineEpics(
  // main epics
  startTestActionFlow,
  startNoReducerFlow,
  startFetchSummaryStatsFlow,
  startFetchStatsByType,
  startFetchStatsByAllType
);

export default rootEpic;
