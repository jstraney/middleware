module.exports = (config = {}) => {

  const {
    body: fromBody = [],
    query: fromQuery = [],
    params: fromParams = [],
    head: fromHead = {},
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

    for (header in head) {

      const key = head[header];

      const headerContent = req.get(header);
      if (headerContent !== undefined) {
        args[key] = headerContent;
      }

    }

    // pass and use only args
    req.args = args;

    next();

  }

};
