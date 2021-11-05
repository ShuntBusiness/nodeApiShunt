"use strict";
var dbConn = require("../config/db.config");

var razor = function(razor) {
  this.url = razor.url;
  this.entities = [];
  this.sentences = [];
};

razor.razeUrl = function(url, result) {

    var headers = new Headers();
    headers.append('x-textrazor-key', '2eb844810272c03a3315f39d645601d637c57543380d0b5dd98bd23e');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
     

    fetch('https://api.textrazor.com/?extractors=entities,sentences&url=' + url, {method: "POST", headers: headers}).then(function(response) {

        response.append("Access-Control-Allow-Origin", "*");
        result(null, response);

    });

};

module.exports = razor;
