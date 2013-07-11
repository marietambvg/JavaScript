/// <reference path="ui.js" />
/// <reference path="class.js" />
/// <reference path="persisters.js" />
/// <reference path="jquery-2.0.2.js" />
/// <reference path="jquery-2.0.2.intellisense.js" />
/// <reference path="http-request.js" />

var contollers = (function () {

    var rootUrl = "http://localhost:40643/api";

    var Controller = Class.create({
        init: function () {
            this.persister = persisters.get(rootUrl);
        },
        loadUI: function (selector) {
            if (this.persister.isUserLoggedIn()) {
                this.loadGameUI(selector);
            }
            else {
                this.loadLoginFormUI(selector)
            }
            this.attachUIEventHandlers(selector);
        },

        loadLoginFormUI: function (selector) {

            var loginForm = ui.loginForm();
            $(selector).html(loginForm);
        },

        loadGameUI: function (selector) {
            var innerHtml = ui.createGameBox(this.persister.nickname());
            $(selector).html(innerHtml);

            this.persister.game.open(function (games) {
                var list = ui.listGames(games);
                $(selector + " #open-games-container").html(list);

            });

            this.persister.game.myActive(function (games) {
                var list = ui.listGames(games);
                $(selector + " #active-games-container").html(list);

            });
        },

        attachUIEventHandlers: function (selector) {
            var wrapper = $(selector);
            var self = this;
            wrapper.on("click", "#btn-login", function () {
                var user = {
                    username: $(selector + " #tb-login-username").val(),
                    password: $(selector + " #tb-login-password").val()
                }
                self.persister.user.login(user, function () {
                    self.loadGameUI(selector);

                }, function () {
                    wrapper.html("Login failed!");
                });
                return false;
            });
            wrapper.on("click", "#btn-register", function () {
                alert("register");
            });
            wrapper.on("click", "#btn-logout", function () {
                self.persister.user.logout(function () {
                    self.loadLoginFormUI(selector);
                });

            });
            wrapper.on("click", "#open-games-container a", function () {
                $("#game-join-input").remove();
                var html = ui.gameJoin;

                $(this).after(html);

            });
            wrapper.on("click", "#btn-game-join", function () {
                var game = {
                    number: $("#tb-game-number").val(),
                    gameId: $(this).parents("li").first().data("game-id")
                }
                var password = $("tb-game-pass").val();
                if (password) {
                    game.password = password;
                }
                self.persister.game.join(game);
            });
            wrapper.on("click", "#btn-create-game", function () {
                var game = {
                    number: $("#tb-create-number").val(),
                    title: $("#tb-create-title").val()
                }
                var password = $("#tb-create-pass").val();
                if (password) {
                    game.password = password;
                }
                self.persister.game.create(game);

            });
        }
    });

    return {
        get: function () {
            return new Controller();
        }
    }
}())
$(function () {
    var controller = contollers.get();
    controller.loadUI("#wrapper");
});
