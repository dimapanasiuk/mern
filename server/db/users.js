const User = require("../scheme/user");

exports.findById = function (id, cb) {
  User.find({ _id: id }, function (err, docs) {
    if (err) {
      console.log("err", err);
      return new Error("User " + id + " does not exist");
    }
    console.log("docs find", docs[0]);
    return cb(null, docs[0]);
  });
};

exports.findByUsername = function (username, cb) {
  User.find({ name: username }, function (err, docs) {
    if (err) {
      console.log("err", err);
      return cb(null, null);
    }
    console.log("findByUsername", docs[0]);
    return cb(null, docs[0]);
  });
};
