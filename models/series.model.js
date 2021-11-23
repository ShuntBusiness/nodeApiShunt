"use strict";
import dbConn from "../config/db.config.js";
import module from 'module';
//serie object create
var serie = function(serie) {
  this.IdSerie = serie.IdSerie;
  this.serieName = serie.serieName;
  this.status = serie.status ? serie.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};
serie.create = function(newEmp, result) {
  dbConn.query("INSERT INTO Series SET ?", newEmp, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
serie.findById = function(IdSerie, result) {
  dbConn.query("SELECT * FROM Series WHERE IdSerie = ?", [IdSerie], function(
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
serie.findAll = function(result) {
  dbConn.query("SELECT * FROM Series", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Series: ", res);
      result(null, res);
    }
  });
};
serie.update = function(IdSerie, serie, result) {
  dbConn.query(
    "UPDATE Series SET IdSerie=?,SerieName=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE IdSerie = ?",
    [
      serie.IdSerie,
      serie.SerieName,
      serie.email,
      serie.phone,
      serie.organization,
      serie.designation,
      serie.salary,
      IdSerie
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
serie.delete = function(IdSerie, result) {
  dbConn.query(
    "DELETE FROM Series WHERE IdSerie = ?",
    [IdSerie],
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

serie.selectPersonaje = function(IdSerie, result) {
  dbConn.query(
    "SELECT v.description FROM Series v, CharactersxSeries cv, Characters c WHERE v.IdSerie = ? AND v.IdSerie = cv.IdSerie AND cv.IdCharacter = c.IdCharacter",
    [IdSerie],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Series : ", res);
        result(null, res);
      }
    }
  );
};


serie.getKeyWords = function(IdSerie, result) {
  dbConn.query(
    "SELECT * FROM KeyWordsxSeries WHERE IdSerie = ?",
    [IdSerie],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Series: ", res);
        result(null, res);
      }
    }
  );
};

module.exports = serie;
export default serie;
