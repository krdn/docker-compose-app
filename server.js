const express = require("express");
const redis = require("redis");

const app = express();

const client = redis.createClient({
    // socket: {
        host: "redis-server",
        port: 6379
    // }
});

client.set('number', 0);

app.get('/', async (req, res) => {

    client.get('number', (err, number) => {
        client.set('number', parseInt(number) + 1);
        res.send('Number of visits is ' + number);
    });

    console.log('Listening on port 8088');
})

app.listen(8088, () => {
    console.log('Listening on port 8088');
});

