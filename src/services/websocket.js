const socket1 = new WebSocket('wss://ws.blockchain.info/inv');
socket1.onopen = function(){
  socket1.send(JSON.stringify({"op":"unconfirmed_sub"}))
}
socket1.onmessage = function(msg){
  //console.log(1111, JSON.parse(msg.data));
}
const socket = new WebSocket('wss://ws.blockchain.info/inv');
socket.onopen = function(){
  socket.send(JSON.stringify({"op":"unconfirmed_sub"}))
}
socket.onmessage = function(msg){
  console.log(2222, JSON.parse(msg.data));
}
