'use strict';
import mysql from 'mysql';
import module from 'module';
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : '54.166.223.8',
  user     : 'shunt2',
  password : 'stormsoldier!468',
  database : 'shunt'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
export default dbConn;