module.exports = ( config = {} ) => {

  const {
    template,
  } = config;

  return async (req, res) => {

    return res.render(template, config);

  };

}
