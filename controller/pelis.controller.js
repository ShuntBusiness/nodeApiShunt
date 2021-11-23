"use strict";
import peli from "../models/pelis.model.js"
import exports from 'module';
exports.findAll = function(req, res) {
  peli.findAll(function(err, peli) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", peli);
    res.send(peli);
  });
};
exports.create = function(req, res) {
  const new_peli = new peli(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    peli.create(new_peli, function(err, peli) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "peli added successfully!",
        data: peli
      });
    });
  }
};
exports.findById = function(req, res) {
  peli.findById(req.params.id, function(err, peli) {
    if (err) res.send(err);
    res.json(peli);
  });
};

exports.getKeyWords = function(req, res) {
  peli.getKeyWords(req.params.id, function(err, peli) {
    if (err) res.send(err);
    res.json(peli);
  });
};

exports.update = function(req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    peli.update(req.params.id, new peli(req.body), function(err, peli) {
      if (err) res.send(err);
      res.json({ error: false, message: "peli successfully updated" });
    });
  }
};
exports.delete = function(req, res) {
  peli.delete(req.params.id, function(err, peli) {
    if (err) res.send(err);
    res.json({ error: false, message: "peli successfully deleted" });
  });
};

export default exports
