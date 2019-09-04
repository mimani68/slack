import { config } from "dotenv";
config();

export const SLACK_TOKEN = process.env.SLACK_TOKEN;
export const SLACK_CLIENT_ID = process.env.SLACK_CLIENT_ID;
export const SLACK_CLIENT_SECRET = process.env.SLACK_CLIENT_SECRET;
export const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;
