"use strict";
const razor = require("../models/razor.model");

exports.razeUrl = function(req, res) {
  razor.razeUrl(req.params.url, function(err, razor) {
    if (err) res.send(err);
    res.send(razor);
  });
};
