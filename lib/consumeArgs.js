module.exports = (fn) => {

  if (typeof fn !== 'function') {

    throw new Error('function required for consumeArgs middleware');

  }

  return async (req, res, next) => {

    const { args = {} } = req;

    try {

      const result = await fn(args);

      next();

    } catch (error) {

    }

  }
}
