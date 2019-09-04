import { SLACK_TOKEN } from "../config/slack";
import Slack from "slack";

export class Channel {

    constructor() {
        this.slack = new Slack({
            token: SLACK_TOKEN
        })
    }

    /**
     * 
     * @param {*} channel_name 
     */
    async createChannel(channel_name) {
        return await this.slack.channels.create({
            channel_name
        });
    }

    /**
     * 
     * @returns Promise<any>
     */
    async getAllChannelList() {
        return await this.slack.channels.listChannel();
    }

    /**
     * 
     * @param {*} channel_name 
     * @returns Promise<any>
     */
    async leaveChannel(channel_name) {
        return await this.slack.channels.leave({
            channel_name
        });
    }

    /**
     * @returns Promise<any>
     */
    async joinChannel() {
        return await this.slack.channels.join({
            channel_name
        });
    }

}