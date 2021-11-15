"use strict";
import dbConn from '../config/db.config.js';
import module from 'module';
import fetch from 'node-fetch'
import { Headers } from 'node-fetch'

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
  urlencoded.append("url", "http://" + url);


  var requestOptions = {
    method: 'POST',
    headers: headers,
    body: urlencoded,
    redirect: 'follow'
  };


  fetch("http://api.textrazor.com?extractors=entities&url=http://" + url, requestOptions).then(response => function(response) {
    
    headers.append('Access-Control-Allow-Origin', '*');
    var respuesta = new Response(response, {headers: headers});
    return respuesta;
    
  })
  .then(response => result(null, response));

};

module.exports = razor;
export default razor;
