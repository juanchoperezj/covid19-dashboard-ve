import { ofType } from "redux-observable";
import { Observable } from "rxjs-compat";
import { flatMap } from "rxjs/operators";
import {
  fetchSummaryStats,
  fetchConfirmedCasesFromDayOne
} from "../../api/api";
import { converKeyToLowerCase, formatDateToChart } from "../../helpers/helpers";

// actions
import {
  TEST_ACTION,
  ACTION_WITH_NO_REDUCER,
  FETCH_COVID_CASES_BY_TYPE,
  FETCH_COVID_SUMMARY_STATS,
  FETCH_COVID_CASES_BY_ALL_TYPES,
  save_summary_stats,
  save_covid_cases_by_type,
  save_covid_cases_by_all_types,
  save_summary_local_stats
} from "../actions/main";

export const startTestActionFlow = action$ =>
  action$.pipe(
    ofType(TEST_ACTION),
    flatMap(() => {
      return Observable.of();
    })
  );

export const startNoReducerFlow = action$ =>
  action$.pipe(
    ofType(ACTION_WITH_NO_REDUCER),
    flatMap(() => {
      // alert("eso");
      return Observable.of();
    })
  );

export const startFetchSummaryStatsFlow = action$ =>
  action$.pipe(
    ofType(FETCH_COVID_SUMMARY_STATS),
    flatMap(() =>
      Observable.from(fetchSummaryStats()).pipe(
        flatMap(response => {
          console.log({ response });
          let global = converKeyToLowerCase(response.global);
          Object.keys(global).forEach(
            key => (global[key] = global[key].toLocaleString())
          );
          return Observable.of(save_summary_stats(global));
        })
      )
    )
  );

export const startFetchStatsByType = action$ =>
  action$.pipe(
    ofType(FETCH_COVID_CASES_BY_TYPE),
    flatMap(action => {
      const { caseType } = action;
      return Observable.from(fetchConfirmedCasesFromDayOne(caseType)).pipe(
        flatMap(response => {
          const chartData = Object.values(response).map(item => ({
            ...item,
            x: formatDateToChart(item.Date),
            y: item.Cases
          }));
          return Observable.of(
            save_covid_cases_by_type({
              caseType,
              data: chartData // serialize data
            })
          );
        })
      );
    })
  );

export const startFetchStatsByAllType = action$ =>
  action$.pipe(
    ofType(FETCH_COVID_CASES_BY_ALL_TYPES),
    flatMap(() => {
      const types = ["confirmed", "deaths", "recovered"];
      const promises = types.map(type =>
        Observable.from(fetchConfirmedCasesFromDayOne(type))
      );
      return Observable.forkJoin(promises).pipe(
        flatMap(allResponses => {
          const dates = [];
          const allCases = [];
          const casesByDate = [];
          allResponses.forEach(responseObject => {
            Object.values(responseObject).forEach(item => {
              const notExists =
                dates.findIndex(date => date === item.Date) === -1;
              if (notExists) {
                dates.push(item.Date); //guardar todas las fechas
              }
              allCases.push(item); //guardar todos los cases
            });
          });

          dates.forEach(date => {
            allCases.forEach(item => {
              if (date === item.Date) {
                const existsCaseIndex = casesByDate.findIndex(
                  c => c.Date === date
                );
                // sino existe la fechala creo
                if (existsCaseIndex === -1) {
                  return casesByDate.push({
                    ...item,
                    [item.Status]: item.Cases,
                    date: formatDateToChart(item.Date)
                  });
                }
                // si existe guardo el valor de siguiente status
                return (casesByDate[existsCaseIndex] = {
                  ...casesByDate[existsCaseIndex],
                  [item.Status]: item.Cases
                });
              }
            });
          });

          const localSummary = casesByDate[casesByDate.length - 1];
          // save_summary_stats
          return Observable.concat(
            Observable.of(save_covid_cases_by_all_types(casesByDate)),
            Observable.of(save_summary_local_stats(localSummary))
          );
        })
      );
    })
  );
