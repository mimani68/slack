import { createServer } from "http";
import { slack_app } from "../app";
import { PORT } from "../config/app";

createServer(slack_app).listen(PORT, runningConsole);

function runningConsole() {
    console.log(`server listening on port ${PORT}`);
}