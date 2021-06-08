const net = require("net")
let jsonData = require('./names.json');

const server = net.createServer(function (socket) {
    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*20))];
    }
  
    console.log('entrei')

    while(true){
      sort1 = jsonData.random() + " " 
        + jsonData.random() + " " + jsonData.random() + "\n"
    
      socket.write(sort1)
    }    
})

server.on("error", (err) => {
    console.log(`Error in server:\n${err}`);
});
  
server.listen(3333, "0.0.0.0", () => {
    console.log("Nodejs server ready to respond.");
});