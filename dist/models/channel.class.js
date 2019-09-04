"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Channel = void 0;

var _slack = require("../config/slack");

var _slack2 = _interopRequireDefault(require("slack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Channel =
/*#__PURE__*/
function () {
  function Channel() {
    _classCallCheck(this, Channel);

    this.slack = new _slack2["default"]({
      token: _slack.SLACK_TOKEN
    });
  }
  /**
   * 
   * @param {*} channel_name 
   */


  _createClass(Channel, [{
    key: "createChannel",
    value: function () {
      var _createChannel = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(channel_name) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.slack.channels.create({
                  channel_name: channel_name
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createChannel(_x) {
        return _createChannel.apply(this, arguments);
      }

      return createChannel;
    }()
    /**
     * 
     * @returns Promise<any>
     */

  }, {
    key: "getAllChannelList",
    value: function () {
      var _getAllChannelList = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.slack.channels.listChannel();

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAllChannelList() {
        return _getAllChannelList.apply(this, arguments);
      }

      return getAllChannelList;
    }()
    /**
     * 
     * @param {*} channel_name 
     * @returns Promise<any>
     */

  }, {
    key: "leaveChannel",
    value: function () {
      var _leaveChannel = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(channel_name) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.slack.channels.leave({
                  channel_name: channel_name
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function leaveChannel(_x2) {
        return _leaveChannel.apply(this, arguments);
      }

      return leaveChannel;
    }()
    /**
     * @returns Promise<any>
     */

  }, {
    key: "joinChannel",
    value: function () {
      var _joinChannel = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.slack.channels.join({
                  channel_name: channel_name
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function joinChannel() {
        return _joinChannel.apply(this, arguments);
      }

      return joinChannel;
    }()
  }]);

  return Channel;
}();

exports.Channel = Channel;