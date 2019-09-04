import { createServer } from 'spdy';
import { readFileSync } from 'fs';
import { PORT } from "./config/app";
import { slack_app } from "./dist/app";

const options = {
  key: readFileSync(__dirname + '/config/rsa.key'),
  cert: readFileSync(__dirname + '/config/rsa.crt'),
  spdy: {
    protocols: [ 'h2', 'spdy/3.1', 'http/1.1' ],
    plain: false,
    'x-forwarded-for': true,
    connection: {
      windowSize: 1024 * 1024,
      autoSpdy31: false
    }
  }
};
 
createServer(options, slack_app).listen(PORT);