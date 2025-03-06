console.clear();

const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", data => {
    console.log(`Order received!, ${data.size} pizza with ${data.topping} is being prepared`);
});

emitter.on("order-pizza", data => {
    if (data.size === "large") {
        console.log("Serving complimentary drink");
    }
});

console.log("Do work before event occurs in the system");

emitter.emit("order-pizza", {
    size: "large",
    topping: "mushrooms"
});