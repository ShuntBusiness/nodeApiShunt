"use strict";
import razor from "../models/razor.model.js";
import exports from 'module';

exports.razeUrl = function(req, res) {
  razor.razeUrl(req.query.url, function(err, razor) {
    if (err) res.send(err);
    res.send(razor);
  });
};

export default exports;