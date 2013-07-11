/// <reference path="http-requester.js" />
/// <reference path="class.js" />
/// <reference path="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha1.js" />
var persisters = (function () {
	var nickname = localStorage.getItem("nickname");
	var sessionKey = localStorage.getItem("sessionKey");
	function saveUserData(userData) {
		localStorage.setItem("nickname", userData.nickname);
		localStorage.setItem("sessionKey", userData.sessionKey);
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
			this.game = new GamePersister(this.rootUrl);
			this.battle = new BattlePersister(this.rootUrl);
		},
		isUserLoggedIn: function () {
			var isLoggedIn = nickname != null && sessionKey != null;
			return isLoggedIn;
		},
		nickname: function () {
			return nickname;
		}
	});
	var UserPersister = Class.create({
		init: function (rootUrl) {
			//...api/user/
			this.rootUrl = rootUrl + "user/";
		},
		login: function (user, success, error) {
			var url = this.rootUrl + "login";
			var userData = {
				username: user.username,
				authCode: CryptoJS.SHA1(user.username + user.password).toString()
			};

			httpRequester.postJSON(url, userData,
				function (data) {
					saveUserData(data);
					success(data);
				}, error);
		},
		register: function (user, success, error) {
			var url = this.rootUrl + "register";
			var userData = {
				username: user.username,
				nickname: user.nickname,
				authCode: CryptoJS.SHA1(user.username + user.password).toString()
			};
			httpRequester.postJSON(url, userData,
				function (data) {
					saveUserData(data);
					success(data);
				}, error);
		},
		logout: function (success, error) {
			var url = this.rootUrl + "logout/" + sessionKey;
			httpRequester.getJSON(url, function (data) {
				clearUserData();
				success(data);
			}, error)
		},
		scores: function (success, error) {
		    var url = this.rootUrl + "scores/" + sessionKey;
		    httpRequester.getJSON(url,function(data){
		        success(data);
		    },error)
		}
	});
	var GamePersister = Class.create({
		init: function (rootUrl) {
			this.rootUrl = rootUrl + "game/";
		},
		create: function (game, success, error) {
			var gameData = {
				title: game.title
			};
			if (game.password) {
				gameData.password = CryptoJS.SHA1(game.password).toString();
			}
			var url = this.rootUrl + "create/" + sessionKey;
			httpRequester.postJSON(url, gameData, success, error);
		},
		join: function (game, success, error) {
			var gameData = {
				id: game.gameId,
			};
			if (game.password) {
				gameData.password = CryptoJS.SHA1(game.password).toString();
			}
			var url = this.rootUrl + "join/" + sessionKey;
			httpRequester.postJSON(url, gameData, success, error);
		},
		start: function (gameId, success, error) {
		    var gameId = gameId;
		    //if (game.password) {
		    //    gameData.password = CryptoJS.SHA1(game.password).toString();
		    //}
		    var url = this.rootUrl + "/"+gameId+"/start/" + sessionKey;
		    httpRequester.getJSON(url, function (data) {
		        success(data);
		    }, error);

		},
		myActive: function (success, error) {
			var url = this.rootUrl + "my-active/" + sessionKey;
			httpRequester.getJSON(url, function (data) {
			    success(data);
			}, error);
		},
		open: function (success, error) {
			var url = this.rootUrl + "open/" + sessionKey;
			httpRequester.getJSON(url, function (data) {
			    success(data);
			}, error);
		},
		field: function (gameId, success, error) {
			var url = this.rootUrl + gameId + "/field/" + sessionKey;
			httpRequester.getJSON(url, function (data) {
			success(data)}, error);
		}
	});
	var BattlePersister = Class.create({
	    init: function (rootUrl) {
            this.rootUrl=rootUrl+"battle/"

		},
	    move: function (unitMoveData) {
	     var moveData=   
	        {
	            "unitId": unitMoveData.unitId,
                "position": unitMoveData.position
	        }
	     var url = this.rootUrl + "move/" + sessionKey;
	     httpRequester.postJSON(url, moveData,
             function (data) {
                 success(data);
             }, error);
	    },

	    attack: function (unitAttackData) {
	        var attackData=   
	        {
	            "unitId": unitAttackData.unitId,
	            "position": unitAttackData.position
	        }
	        var url = this.rootUrl + "attack/" + sessionKey;
	        httpRequester.postJSON(url, attackData,
                function (data) {
                    success(data);
                }, error);
	    },

	    defend: function (unit) {
	        var url = this.rootUrl + "deffend/" + sessionKey;
	        httpRequester.postJSON(url, unit.unitId,
                function (data) {
                    success(data);
                }, error);
	    }
	});
	var MessagesPersister = Class.create({
		init: function (rootUrl) {
		    this.rootUrl = rootUrl + "messages/";
		},
		
		unread: function (success, error) {
		    var url = this.rootUrl + "unread/" + sessionKey;
		        httpRequester.getJSON(url, function (data) {
		            success(data);
		        }, error);

		},
		all: function (success, error) {
		    var url = this.rootUrl + "all/" + sessionKey;
		    httpRequester.getJSON(url, function (data) {
		        success(data);
		    }, error);
		}
	});
	return {
		get: function (url) {
			return new MainPersister(url);
		}
	};
}());