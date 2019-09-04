"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slackEventLogic = slackEventLogic;
exports.slackPassportStrategy = exports.slackEvents = void 0;

var _eventsApi = require("@slack/events-api");

var _slack = require("../config/slack");

var _auth2 = require("../models/auth.class");

var _this = void 0;

var SlackStrategy = require("@aoberoi/passport-slack")["default"].Strategy;

/**
 * 
 * Slack Event Adaptor
 * 
 */
var slackEvents = (0, _eventsApi.createEventAdapter)(_slack.SLACK_SIGNING_SECRET, {
  includeBody: true
});
/**
 * 
 * Slack Stategy for Passport.js
 * 
 */

exports.slackEvents = slackEvents;
var slackPassportStrategy = new SlackStrategy({
  clientID: _slack.SLACK_CLIENT_ID,
  clientSecret: _slack.SLACK_CLIENT_SECRET,
  skipUserProfile: true
}, function (accessToken, scopes, team, extra, profiles, done) {
  var _auth = new _auth2.AuthUserModel(team.id, extra.bot.accessToken);

  _this._auth.createUserAuth();

  done(null, {});
});
/**
 * Handle all Logic Related Slack
 * 
 * @param {*} slackEvents 
 */

exports.slackPassportStrategy = slackPassportStrategy;

function slackEventLogic(req, res, slackEvents) {
  var slack = getClientByTeamId(body.team_id);

  if (!slack) {
    return console.error('No authorization found for this team. Did you install the app through the url provided by ngrok?');
  }

  slackEvents.on('message', function (message, body) {
    if (!message.subtype && message.text.indexOf('hi') >= 0) {
      SendMessage('salam', message, slack);
    }
  });
  slackEvents.on('reaction_added', function (event, body) {
    SendMessageWithEmoji(event.reaction, slack);
  });
  slackEvents.on('error', function (error) {
    console.error("An error occurred while handling a Slack event: ".concat(error.message));
  });
}