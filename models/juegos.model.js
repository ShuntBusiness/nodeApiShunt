"use strict";
var dbConn = require("../config/db.config");
//videogame object create
var videogame = function(videogame) {
  this.IdVideogame = videogame.IdVideogame;
  this.VideogameName = videogame.VideogameName;
  this.status = videogame.status ? videogame.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};
videogame.create = function(newEmp, result) {
  dbConn.query("INSERT INTO videogames SET ?", newEmp, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
videogame.findById = function(IdVideogame, result) {
  dbConn.query("SELECT * FROM Videogames WHERE IdVideogame = ?", [IdVideogame], function(
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
videogame.findAll = function(result) {
  dbConn.query("SELECT * from Videogames", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("juegos: ", res);
      result(null, res);
    }
  });
  
};
videogame.update = function(IdVideogame, videogame, result) {
  dbConn.query(
    "UPDATE Videogames SET IdMovie=?,MovieName=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE IdVideogame = ?",
    [
      videogame.IdMovie,
      videogame.MovieName,
      videogame.email,
      videogame.phone,
      videogame.organization,
      videogame.designation,
      videogame.salary,
      IdVideogame
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
videogame.delete = function(IdVideogame, result) {
  dbConn.query(
    "DELETE FROM videogames WHERE IdVideogame = ?",
    [IdVideogame],
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

videogame.selectPersonaje = function(IdVideogame, result) {
  dbConn.query(
    "SELECT v.description FROM Videogames v, CharactersxVideogames cv, Characters c WHERE v.IdVideogame = ? AND v.IdVideogame = cv.IdVideogame AND cv.IdCharacter = c.IdCharacter",
    [IdVideogame],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("videogames: ", res);
        result(null, res);
      }
    }
  );
};


videogame.getKeyWords = function(IdVideogame, result) {
  dbConn.query(
    "SELECT * FROM KeyWordsxVideogames WHERE IdVideogame = ?",
    [IdVideogame],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("videogames: ", res);
        result(null, res);
      }
    }
  );
};

module.exports = videogame;
