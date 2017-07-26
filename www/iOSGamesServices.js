/* Copyright (c) 2014 Intel Corporation. All rights reserved.
* Use of this source code is governed by a MIT-style license that can be
* found in the LICENSE file.
* This makes calls to the https://github.com/Wizcorp/phonegap-plugin-gameCenter plugin
*/

var exec = require("cordova/exec");

var GamesServices = {
    authenticate: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "GameCenterPlugin", "authenticateLocalPlayer", []);
    },
    showAchievements: function() {
        cordova.exec(null, null, "GameCenterPlugin", "showAchievements", []);
    },
    addAchievement: function(category, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "GameCenterPlugin", "reportAchievementIdentifier", [category, 100]);
    },
    showLeaderboard: function(category) {
        cordova.exec(null, null, "GameCenterPlugin", "showLeaderboard", [category]);
    },
    updateLeaderboardScore: function(category, score, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "GameCenterPlugin", "reportScore", [category, score]);
    },
}
module.exports = GamesServices;
