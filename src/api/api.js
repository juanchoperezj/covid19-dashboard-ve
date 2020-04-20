import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000
});

// aqui puedo filtrar los paises
// mas contaminados
// menos contaminados
// mas recuperados
// mas muertes

/**
 * @name fetchSummaryStats - get stats of covid globally
 */
export const fetchSummaryStats = async () => {
  try {
    const data = await apiInstance.get("summary");
    return data;
  } catch (error) {
    return error.code;
  }
};

/**
 * @name fetchConfirmedCasesFromDayOne - get all confirmed cases from day one by case type
 * @param {string} type - Case type, one of [confirmed, recovered, deaths]
 */
export const fetchConfirmedCasesFromDayOne = async type => {
  try {
    const data = await apiInstance.get(
      `total/dayone/country/${process.env.REACT_APP_COUNTRY_FOR_REQUEST}/status/${type}`
    );
    return data;
  } catch (error) {
    return error.code;
  }
};

/**
 * @name fetchCountrySummary - get country summary
 */
export const fetchCountrySummary = async () => {
  try {
    const data = await apiInstance.get(
      `live/country/${process.env.REACT_APP_COUNTRY_FOR_REQUEST}/status/confirmed`
    );
    return data;
  } catch (error) {
    return error.code;
  }
};

apiInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log("here", response);
    return Object.fromEntries(
      Object.entries(response.data).map(([k, v]) => [k.toLowerCase(), v])
    );
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
