const net = require("net");

const {IP, PORT} = require('./constants');

const connect = function () { 
  
  const conn = net.createConnection({ //creating conn as a variable to = net.createConnection or connection to server
    host: IP,
    port: PORT
  });
  conn.on('connect', () => { // like saying "do this when you connect"
    console.log("Successfully connected to game server");
    conn.write("Name: LUL");
    conn.write("Say: HNNNNG")
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', () => { //when given this specific input, do this 
    console.log('you ded cuz you idled');
  });
  
  return conn; // the return value doesn't actually go anywhere or is given to anything, hence nothing happens until... read play.js
};

module.exports = {
  connect
}