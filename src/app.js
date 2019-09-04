import express from "express";
import passport from "passport";
import { slackEvents, slackPassportStrategy, slackEventLogic } from "./libs/slack.adaptor";
import { Channel } from "./models/channel.class";
import { Message } from "./models/message.class";

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
app.get('/user/auth',
    passport.authenticate('slack', {
        scope: ['bot']
    })
);
app.get('/user/auth/callback',
    passport.authenticate('slack', {
        session: false
    }),
    (req, res) => {
        res.status(200).json({
            title: 'you join to this app'
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
app
    .get('/slack/channel/', async (req, res, next)=>{
        let e = new Channel();
        return await e.getAllChannelList();
    })
    .post('/slack/channel/', async (req, res, next)=>{
        let e = new Channel();
        return await e.createChannel( req.params.channel );
    })
    .post('/slack/channel/join/:channel', async (req, res, next)=>{
        let e = new Channel();
        return await e.joinChannel( req.params.channel );
    })
    .post('/slack/channel/leave/:channel', async (req, res, next)=>{
        let e = new Channel();
        return await e.leaveChannel( req.params.channel );
    });

app
    .post('/slack/message/:channel_id', async (req, res, next)=>{
        let e = new Message( req.prams.channel_id );
        return await e.sendMessage( req.body.message || `salam` );
    })
    .post('/slack/message/:channel_id/emo', async (req, res, next)=>{
        let e = new Message( req.prams.channel_id );
        return await e.SendMessageWithEmoji( req.body.message );
    })
    .put('/slack/message/:channel_id', async (req, res, next)=>{
        let e = new Message( req.prams.channel_id );
        return await e.updateMessage( req.body.message || `salam` );
    })

app.use('/slack', (req, res, next) => slackEventLogic(req, res, slackEvents));

// event dispatcher
app.use('/slack/events', slackEvents.expressMiddleware());
