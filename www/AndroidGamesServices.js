/* Copyright (c) 2014 Intel Corporation. All rights reserved.
* Use of this source code is governed by a MIT-style license that can be
* found in the LICENSE file.
*
*/

var exec = require("cordova/exec");

var GamesServices = {
    authenticate: function(sucessCallback, errorCallback) {
        // Connect before authenticate
        cordova.exec(function(sucessCallback) {
            cordova.exec(sucessCallback, errorCallback, "GamesServices", "authenticate", []);
        }, errorCallback, "GamesServices", "connect", []);
    },
    showAchievements: function(sucessCallback, errorCallback) {
        cordova.exec(sucessCallback, errorCallback, "GamesServices", "achievements", []);
    },
    addAchievement: function(achievement_id, sucessCallback, errorCallback) {
        cordova.exec(sucessCallback, errorCallback, "GamesServices", "addAchievement", [achievement_id]);
    },
    showLeaderboard: function(leaderboard_id, sucessCallback, errorCallback) {
        cordova.exec(sucessCallback, errorCallback, "GamesServices", "showLeaderboard", [leaderboard_id]);
    },
    updateLeaderboardScore: function(leaderboard_id, score, sucessCallback, errorCallback) {
        cordova.exec(sucessCallback, errorCallback, "GamesServices", "updateLeaderboardScore", [leaderboard_id, score]);
    }
}

module.exports = GamesServices;
