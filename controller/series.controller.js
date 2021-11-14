"use strict";
import serie from "../models/series.model.js";
import exports from 'module';
exports.findAll = function(res) {
  serie.findAll(function(err, serie) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", serie);
    res.send(serie);
  });
};
exports.create = function(req, res) {
  const new_serie = new serie(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    serie.create(new_serie, function(err, serie) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "serie added successfully!",
        data: serie
      });
    });
  }
};
exports.findById = function(req, res) {
  serie.findById(req.params.id, function(err, serie) {
    if (err) res.send(err);
    res.json(serie);
  });
};

exports.getKeyWords = function(req, res) {
  serie.getKeyWords(req.params.id, function(err, serie) {
    if (err) res.send(err);
    res.json(serie);
  });
};

exports.update = function(req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    serie.update(req.params.id, new serie(req.body), function(err, serie) {
      if (err) res.send(err);
      res.json({ error: false, message: "serie successfully updated" });
    });
  }
};
exports.delete = function(req, res) {
  serie.delete(req.params.id, function(err, serie) {
    if (err) res.send(err);
    res.json({ error: false, message: "serie successfully deleted" });
  });
};

export default exports;