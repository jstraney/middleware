module.exports = () => {

  return async (req, res) => {

    const { result, error} = res.locals;

    if (result) {
      return res.json(result);
    } else if (error) {
      return res.status(500).json(result);
    }

    res.end();

  };

}
