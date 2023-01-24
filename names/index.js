const namesList = require("../country/state/city/index");

const getFirstNames = require("../utilities/utils/index");

let getPeopleInCity = (namesList) => {
  return getFirstNames(namesList);
};

module.exports = getPeopleInCity;
