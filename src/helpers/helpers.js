/**
 *
 * @param {*} data
 */
export const converKeyToLowerCase = data => {
  if (!data) {
    throw Error;
  }
  return Object.fromEntries(
    Object.entries(data).map(([k, v]) => [k.toLowerCase(), v])
  );
};

/**
 * @param {*} text - String
 * @returns String - Capitalized text
 */
const capitalize = text => {
  if (typeof text !== "string") return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * @param {*} isoDate - ISODate format
 * @returns String - 19 - Mar.
 */
export const formatDateToChart = isoDate => {
  const locale = "es-ES";

  const date = new Date(isoDate);
  const month = date.toLocaleDateString(locale, { month: "short" });
  const day = date.toLocaleDateString(locale, { day: "numeric" });
  return `${day} - ${capitalize(month)}`;
};

export const flatten = arr => {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
};
