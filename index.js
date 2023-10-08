const express = require("express");
const redis = require("ioredis");

const app = express();
const client = redis.createClient({
    host: "redis",
    port: 6379,
});

client.on("ready", () => {
    console.log("connected to redis");
});

client.on("error", (err) => {
    console.log(`couldn't connect redis ${err}`);
});

client.set("visits", 0);

app.get("/", (req, res) => {
    client.get("visits", (err, visits) => {
        const newVisits = parseInt(visits) + 1;
        console.log(`number of visits : ${newVisits} `);
        res.send(`Number of Visits : ${newVisits}`);
        client.set("visits", newVisits);
    });
});

app.listen("8082", () => {
    console.log("Listening on port 8082");
});
