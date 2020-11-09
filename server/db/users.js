var records = [
  {
    id: 1,
    username: "jack",
    password: "secret",
    displayName: "Jack",
    emails: [{ value: "jack@example.com" }],
  },
  {
    id: 2,
    username: "jill",
    password: "birthday",
    displayName: "Jill",
    emails: [{ value: "jill@example.com" }],
  },
];

const User = require("../scheme/user");

exports.findById = function (id, cb) {
  console.log("findById", id);
  // process.nextTick(function () {
  //   var idx = id - 1;
  //   if (records[idx]) {
  //     cb(null, records[idx]);
  //   } else {
  //     cb(new Error("User " + id + " does not exist"));
  //   }
  // });
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

  // console.log("username", username);
  // process.nextTick(function () {
  //   for (var i = 0, len = records.length; i < len; i++) {
  //     var record = records[i];
  //     if (record.username === username) {
  //       return cb(null, record);
  //     }
  //   }
  //   return cb(null, null);
  // });
};
