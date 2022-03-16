const net = require("net");

const connect = function () {
  
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: DAD");
  });


  // setTimeout(() => conn.on('connect', () => {
  //   conn.write("Move: up")
  // }), 50);
  

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', () => {
    console.log('you ded cuz you idled');
  });


  return conn;
};
console.log("Connecting ...");

module.exports = {
  connect
}