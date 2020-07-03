const faker = require("faker");

module.exports = {
  stringDotNotationToFaker: (str) => {
    const val = str.split(".").reduce((accum, next) => {
      if (typeof accum[next] === "function") {
        return accum[next]();
      }

      if (typeof accum[next] === "undefined") {
        return `Please use a valid faker data type: ${str}`;
      }

      return accum[next];
    }, faker);

    return val;
  },
};
