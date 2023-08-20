const events = require('events');
const eventsEmitter = new events.EventEmitter();
eventsEmitter.on("event1", event1Hadler);
function event1Hadler(){
  console.log("event1");
}
eventsEmitter.emit("event1");