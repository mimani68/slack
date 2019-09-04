import {
    SLACK_TOKEN
} from "../config/slack";
import Slack from "slack";

export class Message {

    constructor(channel_id) {
        this.channel_id = channel_id;
        this.slack = new Slack({
            token: SLACK_TOKEN
        })
    }

    /**
     * 
     * @param {strign} message_value 
     */
    async sendMessage(message_value) {
        let res;
        try {
            res = await this.slack.chat.postMessage({
                channel: this.channel_id,
                text: message_value
            });
        } catch (error) {
            console.log(error.data);
        }
        return res;
    }

    /**
     * 
     * @param {string} emoji 
     */
    async SendMessageWithEmoji(emoji) {
        let res;
        try {
            res = await this.slack.chat.postMessage({
                channel: this.channel_id,
                text: `:${emoji}:`
            });
        } catch (error) {
            console.log(error.data);
        }
        return res;
    }

    /**
     * 
     * @param {*} ts 
     * @param {*} message 
     */
    async updateMessage(ts, message) {
        let res;
        try {
            res = await this.slack.chat.update({
                ts,
                channel: this.channel_id,
                ...message.toJSON(),
            });
        } catch (error) {
            console.log(error.data);
        }
        return res;
    }

};