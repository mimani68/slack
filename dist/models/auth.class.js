"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthUserAuthModel = void 0;

var _auth = require("../db/auth.db");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthUserAuthModel =
/*#__PURE__*/
function () {
  function AuthUserAuthModel(team_id, token) {
    _classCallCheck(this, AuthUserAuthModel);

    this.team_id = team_id;
    this.token = token;
  }

  _createClass(AuthUserAuthModel, [{
    key: "getAllUserAuth",
    value: function getAllUserAuth() {
      return _auth.authTable;
    }
  }, {
    key: "getUserAuthWithId",
    value: function getUserAuthWithId(id) {
      var UserAuths = this.getAllUserAuth();

      for (var index = 0; index < UserAuths.length; index++) {
        if (UserAuths[index]['id'] === id) {
          return UserAuths[index];
        }
      }
    }
  }, {
    key: "createUserAuth",
    value: function createUserAuth() {
      _auth.authTable.push({
        team_id: team_id,
        token: token
      });
    }
  }, {
    key: "deleteUserAuth",
    value: function deleteUserAuth() {
      return null;
    }
  }, {
    key: "updateUserAuth",
    value: function updateUserAuth() {
      return null;
    }
  }]);

  return AuthUserAuthModel;
}();

exports.AuthUserAuthModel = AuthUserAuthModel;