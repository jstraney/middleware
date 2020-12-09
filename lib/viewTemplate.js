module.exports = ( config = {} ) => {

  if (!(config instanceof Object)) {
    throw new Error('viewTemplate expects an object for configuration');
  }

  const {
    template,
  } = config;

  return async (req, res) => {

    return res.render(template, config);

  };

}
