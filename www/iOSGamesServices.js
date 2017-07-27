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
    'showPlayer': 'getPlayerImage'
};

actions.forEach(function (method, action) {
    if (method) {
        gameServices.prototype[action] = function (data, success, failure) {
            var defaultSuccessCallback = function () {
                console.log(GAME_SERVICE + '.' + action + ': executed successfully');
            };

            var defaultFailureCallback = function () {
                console.warn(GAME_SERVICE + '.' + action + ': failed on execution');
            };

            if (typeof data === 'function') {
                // Assume providing successCallback as 1st arg and possibly failureCallback as 2nd arg
                failure = success || defaultFailureCallback;
                success = data;
                data = [];
            }
            else {
                data = [data] || [];
                success = success || defaultSuccessCallback;
                failure = failure || defaultFailureCallback;
            }

            exec(success, failure, GAME_SERVICE, method, data);
        }
    }
});

module.exports = new gameServices();
