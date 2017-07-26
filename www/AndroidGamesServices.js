/* Copyright (c) 2014 Intel Corporation. All rights reserved.
* Use of this source code is governed by a MIT-style license that can be
* found in the LICENSE file.
*
*/

var cordova = require('cordova');

var gamesServices = {
    authenticate: function(sucessCallback, errorCallback) {
        // Connect before authenticate
        cordova.exec(function() {
            cordova.exec(sucessCallback, errorCallback, "GooglePlayGamesPlugin", "authenticate", []);
        }, errorCallback, "GooglePlayGamesPlugin", "connect", []);
    },
    showAchievements: function(sucessCallback, errorCallback) {
        cordova.exec(sucessCallback, errorCallback, "GooglePlayGamesPlugin", "achievements", []);
    },
    addAchievement: function(achievement_id, sucessCallback, errorCallback) {
        cordova.exec(sucessCallback, errorCallback, "GooglePlayGamesPlugin", "addAchievement", [achievement_id]);
    },
    showLeaderboard: function(leaderboard_id, sucessCallback, errorCallback) {
        cordova.exec(sucessCallback, errorCallback, "GooglePlayGamesPlugin", "showLeaderboard", [leaderboard_id]);
    },
    updateLeaderboardScore: function(leaderboard_id, score, sucessCallback, errorCallback) {
        cordova.exec(sucessCallback, errorCallback, "GooglePlayGamesPlugin", "updateLeaderboardScore", [leaderboard_id, score]);
    }
}

module.exports = gamesServices;
