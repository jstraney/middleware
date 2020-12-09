module.exports = (config = {}) => {

  const {
    body: fromBody = [],
    query: fromQuery = [],
    params: fromParams = [],
  } = config;

  const copyProperty = (key, from = {}, to = {}) => {
    if (from.hasOwnProperty(key)) {
      to[key] = from[key];
    }
  };

  return (req, res, next) => {

    const args = {};

    fromBody.forEach((key) => copyProperty(key, req.body, args));
    fromQuery.forEach((key) => copyProperty(key, req.query, args));
    fromParams.forEach((key) => copyProperty(key, req.params, args));

    // pass and use only args
    req.args = args;

    next();

  }

};
