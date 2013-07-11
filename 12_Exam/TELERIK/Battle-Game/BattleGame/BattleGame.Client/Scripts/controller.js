﻿/// <reference path="class.js" />
/// <reference path="persister.js" />
/// <reference path="jquery-2.0.2.js" />
/// <reference path="ui.js" />

var controllers = (function () {
    var rootUrl = "http://localhost:22954/api/";
    var Controller = Class.create({
        init: function () {
            this.persister = persisters.get(rootUrl);
        },
        loadUI: function (selector) {
            if (this.persister.isUserLoggedIn()) {
                this.loadGameUI(selector);
            }
            else {
                this.loadLoginFormUI(selector);
            }
            this.attachUIEventHandlers(selector);
        },
        loadLoginFormUI: function (selector) {
            var loginFormHtml = ui.loginForm()
            $(selector).html(loginFormHtml);
        },

        loadError: function (error) {
            var error = error.responseJSON.Message;
            alert(error);
        },
        loadGameUI: function (selector) {
            var list =
				ui.gameUI(this.persister.nickname());
            $(selector).html(list);


            this.persister.game.open(function (games) {
                var list = ui.openGamesList(games);
                $(selector + " #open-games")
					.html(list);
            }, function (error) {
                this.loadError(error)
            });

            this.persister.game.myActive(function (games) {
                var list = ui.activeGamesList(games);
                $(selector + " #active-games")
					.html(list);
            }, function (error) {
                this.loadError(error)
            });
        },
        loadGame: function (selector, gameId) {
            this.persister.game.field(gameId, function (gameState) {
                var gameHtml = ui.gameState(gameState);
                $(selector + " #game-holder").html(gameHtml)
            }, function (error) {
                this.loadError(error)
            });
        },
        attachUIEventHandlers: function (selector) {
            var wrapper = $(selector);
            var self = this;

            wrapper.on("click", "#btn-show-login", function () {
                wrapper.find(".button.selected").removeClass("selected");
                $(this).addClass("selected");
                wrapper.find("#login-form").show();
                wrapper.find("#register-form").hide();
            });
            wrapper.on("click", "#btn-show-register", function () {
                wrapper.find(".button.selected").removeClass("selected");
                $(this).addClass("selected");
                wrapper.find("#register-form").show();
                wrapper.find("#login-form").hide();
            });

            wrapper.on("click", "#btn-login", function () {
                var user = {
                    username: $(selector + " #tb-login-username").val(),
                    password: $(selector + " #tb-login-password").val()
                }

                self.persister.user.login(user, function () {
                    self.loadGameUI(selector);
                }, function(error){
                    self.loadError(error);
                
                });
                return false;
            });
            wrapper.on("click", "#btn-register", function () {
                var user = {
                    username: $(selector + " #tb-register-username").val(),
                    nickname: $(selector + " #tb-register-nickname").val(),
                    password: $(selector + " #tb-register-password").val()
                }

                self.persister.user.register(user, function () {
                    self.loadGameUI(selector);
                }, function () {
                    wrapper.html("oh no..");
                });
                return false;

            });
            wrapper.on("click", "#btn-logout", function () {
                self.persister.user.logout(function () {
                    self.loadLoginFormUI(selector);
                });
            });

            wrapper.on("click", "#open-games-container a", function () {
                $("#game-join-inputs").remove();
                var html = ui.joinGame();
                $(this).after(html);
            });
            wrapper.on("click", "#btn-join-game", function () {
                var game = {
                    gameId: $(this).parents("li").first().data("game-id")
                };

                var password = $("#tb-game-pass").val();

                if (password) {
                    game.password = password;
                }
                self.persister.game.join(game);
            });
            wrapper.on("click", "#btn-create-game", function () {
                var game = {
                    title: $("#tb-create-title").val(),
                }
                var password = $("#tb-create-pass").val();
                if (password) {
                    game.password = password;
                }
                self.persister.game.create(game, function () {
                    alert("The game '"+game.title+"' is created"), function (error) {
                        this.loadError(error)
                    }
                });
            });

            wrapper.on("click", ".active-games .in-progress", function () {
                self.loadGame(selector, $(this).parent().data("game-id"));
            });

            wrapper.on("click", ".active-games .full", function () {
                var gameId = $(this).parent().data("game-id");
                console.log(gameId);
                });
           
        }
    });
    return {
        get: function () {
            return new Controller();
        }
    }
}());

$(function () {
    var controller = controllers.get();
    controller.loadUI("#content");
});