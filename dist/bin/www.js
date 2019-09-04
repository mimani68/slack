"use strict";

var _http = require("http");

var _app = require("../app");

var _app2 = require("../config/app");

(0, _http.createServer)(_app.slack_app).listen(_app2.PORT, runningConsole);

function runningConsole() {
  console.log("server listening on port ".concat(_app2.PORT));
}