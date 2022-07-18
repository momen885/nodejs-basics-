const eventEmitter = require("events");

const customEmitter = new eventEmitter();

customEmitter.on("response", (id, name) => {
  console.log(`data recieved for user: ${name} with id: ${id}`);
});

customEmitter.emit("response", 34, "momen");
