"use strict";
const juego = require("../models/juegos.model");
exports.findAll = function(req, res) {
  juego.findAll(function(err, juego) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", juego);
    res.send(juego);
  });
};
exports.create = function(req, res) {
  const new_juego = new juego(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    juego.create(new_juego, function(err, juego) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "juego added successfully!",
        data: juego
      });
    });
  }
};
exports.findById = function(req, res) {
  juego.findById(req.params.id, function(err, juego) {
    if (err) res.send(err);
    res.json(juego);
  });
};
exports.getKeyWords = function(req, res) {
  juego.getKeyWords(req.params.id, function(err, juego) {
    if (err) res.send(err);
    res.json(juego);
  });
};
exports.update = function(req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    juego.update(req.params.id, new juego(req.body), function(err, juego) {
      if (err) res.send(err);
      res.json({ error: false, message: "juego successfully updated" });
    });
  }
};
exports.delete = function(req, res) {
  juego.delete(req.params.id, function(err, juego) {
    if (err) res.send(err);
    res.json({ error: false, message: "juego successfully deleted" });
  });
};
