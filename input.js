const {connect} = require("./client");

let connection  // = conn // setting a variable of connection now connection holds multiple things // global variable that can be used anywhere

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  };
  if (key === 'w') {
    connection.write("Move: up")  // after, connection has been established, it can be used as an input. from setupInput
  };
  if (key === 'a') {
    connection.write("Move: left")
  };
  if (key === 's') {
    connection.write("Move: down")
  };
  if (key === 'd') {
    connection.write("Move: right")
  }; // connection now holds two variables
  if (key === 'p') {
    connection.write("Say: FOR MORDOR")
  };
  if (key === 'o') {
    connection.write("Say: ONI--CHAN!")
  };
  if (key === 'i') {
    connection.write("Say: HNNNNG~")
  };
};// connection refers to two things net.createCOnnection + setupInput 
const setupInput = function (conn) { // referencing to the ACTUAL arguement on play.js
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = {
  setupInput
};