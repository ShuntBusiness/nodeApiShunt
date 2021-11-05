"use strict";
var dbConn = require("../config/db.config");
//User object create
var User = function(User) {
  this.IdUser = User.IdUser;
  this.UserName = User.UserName;
  this.status = User.status ? User.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};

User.create = function(newEmp, result) {
  dbConn.query("INSERT INTO Users SET ?", newEmp, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
User.findById = function(IdUser, result) {
  dbConn.query("SELECT * FROM Users WHERE IdUser = ?", [IdUser], function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
User.findAll = function(result) {
  dbConn.query("SELECT * from Users", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("juegos: ", res);
      result(null, res);
    }
  });
  
};
User.update = function(IdUser, User, result) {
  dbConn.query(
    "UPDATE Users SET IdMovie=?,MovieName=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE IdUser = ?",
    [
      User.IdMovie,
      User.MovieName,
      User.email,
      User.phone,
      User.organization,
      User.designation,
      User.salary,
      IdUser
    ],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
User.delete = function(IdUser, result) {
  dbConn.query(
    "DELETE FROM Users WHERE IdUser = ?",
    [IdUser],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

User.selectPersonaje = function(IdUser, result) {
  dbConn.query(
    "SELECT v.description FROM Users v, CharactersxUsers cv, Characters c WHERE v.IdUser = ? AND v.IdUser = cv.IdUser AND cv.IdCharacter = c.IdCharacter",
    [IdUser],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Users: ", res);
        result(null, res);
      }
    }
  );
};


User.getKeyWords = function(IdUser, result) {
  dbConn.query(
    "SELECT * FROM KeyWordsxUsers WHERE IdUser = ?",
    [IdUser],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Users: ", res);
        result(null, res);
      }
    }
  );
};

module.exports = User;
