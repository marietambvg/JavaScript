/// <reference path="class.js" />
/// <reference path="http-request.js" />
/// <reference path="jquery-2.0.2.intellisense.js" />
/// <reference path="jquery-2.0.2.js" />
/// <reference path="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha1.js"/>

var persisters = (function () {

    var nickname = localStorage.getItem("nickname");
    var sessionKey = localStorage.getItem("sessionKey");

    function saveUserData(userData) {
        localStorage.setItem("sessionKey", userData.sessionKey);
        localStorage.setItem("nickname", userData.nickname);
        nickname = userData.nickname;
        sessionKey = userData.sessionKey;
    }

    function clearUserData() {
        localStorage.removeItem("nickname");
        localStorage.removeItem("sessionKey");
        nickname = "";
        sessionKey = "";
    }

    var MainPersister = Class.create({
        init: function (rootUrl) {
            this.rootUrl = rootUrl;
            this.user = new UserPersister(this.rootUrl);
            //this.messages = new MessagesPersiser(this.rootUrl);
            //this.guess = new GuessPersister(this.rootUrl);
            this.game = new GamePersister(this.rootUrl);
        },

        isUserLoggedIn: function () {
            var isLoggedIn = (nickname !== null && sessionKey !== null);
            return isLoggedIn;
        },
        nickname: function () {
            return nickname;
        }


    });

    var UserPersister = Class.create({
        init: function (rootUrl) {
            this.rootUrl = rootUrl + "/user";
        },

        login: function (user, success, error) {
            var url = this.rootUrl + "/login";
            var userData = {
                username: user.username,
                authCode: CryptoJS.SHA1(user.username + user.password).toString()
            }

            httpRequester.postJSON(url, userData, function (data) {
                saveUserData(data);
                success(data)
            }, error);
        },

        register: function (user, success, error) {
            var url = this.rootUrl + "/register";
            var userData = {
                username: user.username,
                nickname: user.nickname,
                authCode: CryptoJS.SHA1(user.username + user.password).toString()
            }

            httpRequester.postJSON(url, userData,
                function (data) {
                    saveUserData(data);
                    success(data)
                }, error);

        },

        logout: function (success, error) {
            var url = this.rootUrl + "/logout/" + sessionKey;
            //localhost/user/logout/sessionKey;
            httpRequester.getJSON(url, function (data) {
                clearUserData();
                success(data);
            }, error)
        },

        scores: function (sessionKey) {
            var url = this.rootUrl + "/scores";
        }

    });

    var GamePersister = Class.create({
        init: function (rootUrl) {
            this.rootUrl = rootUrl + "/game";
        },
        create: function (game, success, error) {
            var gameData = {
                title: game.title,
                number: game.number
            }
            if (game.password) {
                gameData.password = CryptoJS.SHA1(game.password).toString()
            }

            var url = this.rootUrl + "/create/" + sessionKey;
            httpRequester.postJSON(url, gameData, success, error);
        },
        join: function (game, success, error) {
            var url = this.rootUrl + "/join/" + sessionKey;
            var gameData = {
                gameId: game.gameId,
                number: game.number
            }
            if (game.password) {
                gameData.password = CryptoJS.SHA1(game.password).toString()
            }
            httpRequester.postJSON(url, gameData, success, error);
        },
        start: function () {

        },
        open: function (success, error) {
            var url = this.rootUrl + "/open/" + sessionKey;
            httpRequester.getJSON(url, function (data) {
                success(data);
            },
                function (err) {
                    // make something with error
                });
        },
        myActive: function (success, error) {
            var url = this.rootUrl + "/my-active/" + sessionKey;
            httpRequester.getJSON(url, function (data) {
                success(data);
            }, function (err) { });

        },
        state: function () {

        }
    });

    var MessagesPersister = Class.create({
        init: function () {
        },
        unread: function () {

        },
        all: function () {

        }
    });

    var GuessPersister = Class.create({
        init: function () {
        },
        make: function () {
        }
    });

    return {
        get: function (url) {
            return new MainPersister(url)
        }
    }

}());

//var bcPersister = persisters.get("http://localhost:40643/api/");
//var user =
//{
//    "username": "ShounT",
//    "nickname": "insanity",
//    "password": "insane"
//}

//bcPersister.user.register(user,
//    function (data) {
//        alert(JSON.stringify(data));

//    }, function (err) {
//        alert(JSON.stringify(err))
//    });

