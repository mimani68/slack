import express from "express";
import passport from "passport";
import { slackEvents, slackPassportStrategy, slackEventLogic } from "./libs/slack.adaptor";
import { Channel } from "./models/channel.class";

export const app = express();

passport.use(slackPassportStrategy);
app.use(passport.initialize());

/**
 * 
 * PUBLIC API
 * 
 */
app.get(['/', '/ping' , '/healthz'], (req, res) => {
    res.status(200).json({
        title: 'slack service',
        fork_project: '@slack/events-api-example-greet-and-react',
        status: 'healthy',
        time: new Date().toISOString(),
        database: 'mock data'
    })
});

/**
 * 
 * PROTECTED API
 * 
 */
app.get('/user/auth', passport.authenticate('slack', {
    scope: ['bot']
}));
app.get('/user/auth/callback',
    passport.authenticate('slack', {
        session: false
    }),
    (req, res) => {
        res.status(200).json({
            title: 'Greet and React was successfully installed on your team'
        });
    },
    (err, req, res, next) => {
        res.status(500).json({
            title: 'server error',
            error: err
        });
    }
);

/*
 * 
 * S L A C K
 * L O G I C 
 * 
 */
app.use('/slack', slackEventLogic(req, res, slackEvents));

app
    .route('/slack/channel')
    .get('/', async (req, res, next)=>{
        let e = new Channel();
        return await e.getAllChannelList();
    })
    .post('/', async (req, res, next)=>{
        let e = new Channel();
        return await e.createChannel();
    })
    .post('/join/:channel', async (req, res, next)=>{
        let e = new Channel();
        return await e.joinChannel( req.params.channel );
    })
    .post('/leave/:channel', async (req, res, next)=>{
        let e = new Channel();
        return await e.leaveChannel( req.params.channel );
    })


// event dispatcher
app.use('/slack/events', slackEvents.expressMiddleware());
