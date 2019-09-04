const SlackStrategy = require("@aoberoi/passport-slack").default.Strategy;
import {
    createEventAdapter
} from "@slack/events-api";
import {
    SLACK_CLIENT_ID,
    SLACK_CLIENT_SECRET,
    SLACK_SIGNING_SECRET
} from "../config/slack";
import {
    AuthUserModel
} from "../models/auth.class";

/**
 * 
 * Slack Event Adaptor
 * 
 */
export const slackEvents = createEventAdapter(SLACK_SIGNING_SECRET, {
    includeBody: true
});

/**
 * 
 * Slack Stategy for Passport.js
 * 
 */
export let slackPassportStrategy = new SlackStrategy({
    clientID: SLACK_CLIENT_ID,
    clientSecret: SLACK_CLIENT_SECRET,
    skipUserProfile: true,
}, (accessToken, scopes, team, extra, profiles, done) => {
    let _auth = new AuthUserModel(team.id, extra.bot.accessToken);
    this._auth.createUserAuth();
    done(null, {});
})


/**
 * Handle all Logic Related Slack
 * 
 * @param {*} slackEvents 
 */
export function slackEventLogic(req, res, slackEvents) {

    const slack = getClientByTeamId(body.team_id);
    if (!slack) {
        return console.error('No authorization found for this team. Did you install the app through the url provided by ngrok?');
    }

    slackEvents.on('message', (message, body) => {
        if (!message.subtype && message.text.indexOf('hi') >= 0) {
            SendMessage('salam', message, slack);
        }
    });

    slackEvents.on('reaction_added', (event, body) => {
        SendMessageWithEmoji(event.reaction, slack)
    });

    slackEvents.on('error', (error) => {
        console.error(`An error occurred while handling a Slack event: ${error.message}`);
    });
}
