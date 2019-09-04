"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SLACK_SIGNING_SECRET = exports.SLACK_CLIENT_SECRET = exports.SLACK_CLIENT_ID = exports.SLACK_BOT_TOKEN = exports.SLACK_TOKEN = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var SLACK_TOKEN = process.env.SLACK_TOKEN;
exports.SLACK_TOKEN = SLACK_TOKEN;
var SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
exports.SLACK_BOT_TOKEN = SLACK_BOT_TOKEN;
var SLACK_CLIENT_ID = process.env.SLACK_CLIENT_ID;
exports.SLACK_CLIENT_ID = SLACK_CLIENT_ID;
var SLACK_CLIENT_SECRET = process.env.SLACK_CLIENT_SECRET;
exports.SLACK_CLIENT_SECRET = SLACK_CLIENT_SECRET;
var SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;
exports.SLACK_SIGNING_SECRET = SLACK_SIGNING_SECRET;