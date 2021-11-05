"use strict";
import "../config/db.config.js";
import module from 'module';
//movie object create
var movie = function(movie) {
  this.IdMovie = movie.IdMovie;
  this.movieName = movie.movieName;
  this.status = movie.status ? movie.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};
movie.create = function(newEmp, result) {
  dbConn.query("INSERT INTO Movies set ?", newEmp, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
movie.findById = function(IdMovie, result) {
  dbConn.query("SELECT * FROM Movies WHERE IdMovie = ?", [IdMovie], function(
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
movie.findAll = function(result) {
  dbConn.query("SELECT * FROM Movies", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Movies : ", res);
      result(null, res);
    }
  });
};
movie.update = function(IdMovie, movie, result) {
  dbConn.query(
    "UPDATE Movies SET IdMovie=?,MovieName=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE IdMovie = ?",
    [
      movie.IdMovie,
      movie.MovieName,
      movie.email,
      movie.phone,
      movie.organization,
      movie.designation,
      movie.salary,
      IdMovie
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
movie.delete = function(IdMovie, result) {
  dbConn.query(
    "DELETE FROM Movies WHERE IdMovie = ?",
    [IdMovie],
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

movie.selectPersonaje = function(IdMovie, result) {
  dbConn.query(
    "SELECT v.description FROM Movies v, CharactersxMovies cv, Characters c WHERE v.IdMovie = ? AND v.IdMovie = cv.IdMovie AND cv.IdCharacter = c.IdCharacter",
    [IdMovie],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Movies : ", res);
        result(null, res);
      }
    }
  );
};


movie.getKeyWords = function(IdMovie, result) {
  dbConn.query(
    "SELECT * FROM KeyWordsxMovies WHERE IdMovie = ?",
    [IdMovie],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Movies: ", res);
        result(null, res);
      }
    }
  );
};


module.exports = movie;
export default movie;
