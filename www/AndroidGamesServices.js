var exec = require("cordova/exec");
var GAME_SERVICE = "GooglePlayGame";

var gameServices = function () {
    this.name = GAME_SERVICE;
};

var actions = ['auth', 'signOut', 'isSignedIn', 'submitScore', 'showAllLeaderboards', 'showLeaderboard', 'unlockAchievement', 'incrementAchievement', 'showAchievements', 'showPlayer'];

actions.forEach(function (action) {
    gameServices.prototype[action] = function (success, failure, data) {
        var defaultSuccessCallback = function () {
            console.log(GAME_SERVICE + '.' + action + ': executed successfully');
        };

        var defaultFailureCallback = function () {
            console.warn(GAME_SERVICE + '.' + action + ': failed on execution');
        };

        success = success || defaultSuccessCallback;
        failure = failure || defaultFailureCallback;
        data = data || {};

        exec(success, failure, GAME_SERVICE, action, [data]);
    }
});

module.exports = new gameServices();
