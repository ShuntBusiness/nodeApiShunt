"use strict";
import dbConn from '../config/db.config.js';
import module from 'module';
import fetch from 'node-fetch'
import { Headers, Response } from 'node-fetch'

var headers = new Headers();
headers.append('X-Textrazor-Key', '2eb844810272c03a3315f39d645601d637c57543380d0b5dd98bd23e');
headers.append('Content-Type', 'application/x-www-form-urlencoded');

var razor = function (razor) {
  this.url = razor.url;
  this.entities = [];
  this.sentences = [];
};

razor.razeUrl = function (url, result) {

  console.log(headers);
  var urlencoded = new URLSearchParams();
  urlencoded.append("extractors", "entities");
  urlencoded.append("entities.filterFreebaseTypes", ["/film", "/cvg/computer_videogame", "/cvg/game_character", "/cvg/game_series", "/games/game", "/games/game_expansion", "/fictional"]);
  urlencoded.append("entities.allowOverlap", false);
  urlencoded.append("cleanup.mode", "cleanupHTML");
  urlencoded.append("url", "https://" + url);
  console.log(urlencoded)

  var requestOptions = {
    method: 'POST',
    headers: headers,
    body: urlencoded,
    redirect: 'follow'
  };


  fetch("https://api.textrazor.com", requestOptions).then(response => response.json()).then(response => {
    console.log("respuesta:", JSON.stringify(response))
    return JSON.stringify(response);

  })
    .then(response => result(null, response));

};

module.exports = razor;
export default razor;
