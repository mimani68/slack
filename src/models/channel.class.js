import { SLACK_TOKEN } from "../../config/slack";
import Slack from "slack";

export class Channel {

    constructor() {
        this.token = SLACK_TOKEN;
        this.slack = new Slack({useElectronNet:true})
    }

    async createChannel(channel_name) {
        const token = this.token;
        return await this.slack.channels.create({
            token,
            channel_name
        });
    }

    async getAllChannelList() {
        const token = this.token;
        return await this.slack.channels.listChannel({
            token
        });
    }

    async leaveChannel(channel_name) {
        const token = this.token;
        return await this.slack.channels.leave({
            token,
            channel_name
        });
    }

    async joinChannel() {
        const token = this.token;
        return await this.slack.channels.join({
            token,
            channel_name
        });
    }

}