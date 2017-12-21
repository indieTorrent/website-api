/**
 * Created by joshua on 5/31/16.
 */
console.log(process.env.description);
if (!process.env.description) {
    console.log("Environment not defined, assuming local.");
    process.env.description = "local";
}

var environment = require("./environment.json");
module.exports = environment[process.env.description];