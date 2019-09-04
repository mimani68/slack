"use strict";

var _spdy = require("spdy");

var _fs = require("fs");

var _app = require("./config/app");

var _app2 = require("./dist/app");

var options = {
  key: (0, _fs.readFileSync)(__dirname + '/config/rsa.key'),
  cert: (0, _fs.readFileSync)(__dirname + '/config/rsa.crt'),
  spdy: {
    protocols: ['h2', 'spdy/3.1', 'http/1.1'],
    plain: false,
    'x-forwarded-for': true,
    connection: {
      windowSize: 1024 * 1024,
      autoSpdy31: false
    }
  }
};
(0, _spdy.createServer)(options, _app2.slack_app).listen(_app.PORT);