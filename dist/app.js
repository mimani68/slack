"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _slack = require("./libs/slack.adaptor");

var _channel = require("./models/channel.class");

var _message = require("./models/message.class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express["default"])();
exports.app = app;

_passport["default"].use(_slack.slackPassportStrategy);

app.use(_passport["default"].initialize());
/**
 * 
 * PUBLIC API
 * 
 */

app.get(['/', '/ping', '/healthz'], function (req, res) {
  res.status(200).json({
    title: 'slack service',
    status: 'healthy',
    time: new Date().toISOString(),
    database: 'mock data'
  });
});
/**
 * 
 * PROTECTED API
 * 
 */

app.get('/user/auth', _passport["default"].authenticate('slack', {
  scope: ['bot']
}));
app.get('/user/auth/callback', _passport["default"].authenticate('slack', {
  session: false
}), function (req, res) {
  res.status(200).json({
    title: 'you join to this app'
  });
}, function (err, req, res, next) {
  res.status(500).json({
    title: 'server error',
    error: err
  });
});
/*
 * 
 * S L A C K
 * L O G I C 
 * 
 */

app.get('/slack/channel/',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var e;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e = new _channel.Channel();
            _context.next = 3;
            return e.getAllChannelList();

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()).post('/slack/channel/',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var e;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e = new _channel.Channel();
            _context2.next = 3;
            return e.createChannel(req.params.channel);

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}()).post('/slack/channel/join/:channel',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    var e;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            e = new _channel.Channel();
            _context3.next = 3;
            return e.joinChannel(req.params.channel);

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}()).post('/slack/channel/leave/:channel',
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res, next) {
    var e;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            e = new _channel.Channel();
            _context4.next = 3;
            return e.leaveChannel(req.params.channel);

          case 3:
            return _context4.abrupt("return", _context4.sent);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}());
app.post('/slack/message/:channel_id',
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res, next) {
    var e;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            e = new _message.Message(req.prams.channel_id);
            _context5.next = 3;
            return e.sendMessage(req.body.message || "salam");

          case 3:
            return _context5.abrupt("return", _context5.sent);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}()).post('/slack/message/:channel_id/emo',
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res, next) {
    var e;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            e = new _message.Message(req.prams.channel_id);
            _context6.next = 3;
            return e.SendMessageWithEmoji(req.body.message);

          case 3:
            return _context6.abrupt("return", _context6.sent);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}()).put('/slack/message/:channel_id',
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res, next) {
    var e;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            e = new _message.Message(req.prams.channel_id);
            _context7.next = 3;
            return e.updateMessage(req.body.message || "salam");

          case 3:
            return _context7.abrupt("return", _context7.sent);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}());
app.use('/slack', function (req, res, next) {
  return (0, _slack.slackEventLogic)(req, res, _slack.slackEvents);
}); // event dispatcher

app.use('/slack/events', _slack.slackEvents.expressMiddleware());