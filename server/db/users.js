const User = require("../scheme/user");

exports.findById = function (id, cb) {
  User.find({ _id: id }, function (err, docs) {
    if (err) {
      console.log("err", err);
      return new Error("User " + id + " does not exist");
    }
    return cb(null, docs[0]);
  });
};

exports.findByUsername = function (username, cb) {
  User.find({ name: username }, function (err, docs) {
    if (err) {
      console.log("err", err);
      return cb(null, null);
    }
    return cb(null, docs[0]);
  });
};

// no sense of extra
