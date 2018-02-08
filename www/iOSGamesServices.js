var exec = require("cordova/exec");
var GAME_SERVICE = "GameCenter";

var gameServices = function () {
    this.name = GAME_SERVICE;
};

// Existing iOS methods
// auth
// getPlayerImage
// submitScore
// showLeaderboard
// reportAchievement
// resetAchievements
// getAchievements

// Interface iOS methods with android methods
var actions = {
    'auth': 'auth',
    'signOut': '',
    'isSignedIn': '',
    'submitScore': 'submitScore',
    'showAllLeaderboards': 'reportAchievement',
    'showLeaderboard': 'showLeaderboard',
    'unlockAchievement': '',
    'incrementAchievement': '',
    'showAchievements': 'getAchievements',
    'showPlayer': 'auth'
};

Object.keys(actions).forEach(function (action) {
    if (actions.hasOwnProperty(action)) {
        var method = actions[action];

        if (method) {
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

                exec(success, failure, GAME_SERVICE, method, [data]);
            }
        }
    }
});

module.exports = new gameServices();
