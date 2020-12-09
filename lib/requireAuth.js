// using closure pattern to support future roles/permissions
// simple admin sign-in for now.
module.exports = () => {

  return async (req, res, next) => {

    const { session = {} } = req;

    if (session.user) {
      return next();
    }

    // TODO: consider a 403 page
    return res.status(404).render('404.pug');

  }

}
