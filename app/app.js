import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";

const app = express();
const bodyParser = require("body-parser");

const options = {
    key: fs.readFileSync("config/server.key"),
    cert: fs.readFileSync("config/server.crt"),
};

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", async (req, res) => {
    console.log(`/ endpoint hit with body ${JSON.stringify(req.body)} and query ${JSON.stringify(req.query)}`);
    await res.json({ message: "workin on it mate!" });
});

app.use(async (req, res) => {
    await res.sendStatus(404);
});

https
    .createServer(options, app)
    .listen(3334, async () => {
        await console.log("HTTPS listening on port 3334");
    });
