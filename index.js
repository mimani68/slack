import { http } from "http";
import { PORT } from "./config/app";
import { slack_app } from "./src/app";

http
    .createServer(slack_app)
    .listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
    });
