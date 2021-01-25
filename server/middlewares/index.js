
module.exports = ({
  unHandledErrorMiddleware: (req, res, next) => { 
    try {
      next();
    } catch(e) {
      return res.status(500).send("Unhandled error", e.message);
    }
  },
  checkId: (req, res, next) => { 
    try {
      if(!req._id) throw new Error("no _id");
      next();
    } catch(e) {
      return res.status(500).send(e.message);
    }
  },
});
