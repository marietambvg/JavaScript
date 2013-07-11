var ui = (function () {

    function buildGameJoinInput () {
        var html = '<div id="game-join-input">' +
                    'Number:<input type="text" id="tb-game-number"/>' +
                    'Password:<input type="text" id="tb-game-pass"/>' +
                    '<button id="btn-game-join">Join</button>' +
                    '</div>';
        return html;
    }
    function buildLoginForm() {
        var loginForm = '<form>' +
                '<lable for="tb-login-username">Username: </lable>' +
                '<input id="tb-login-username" type="text">' +
                '<lable for="tb-login-password">Password: </lable>' +
                '<input id="tb-login-password" type="text">' +
                '<button id="btn-login">Login</button>' +
           '</form>';
        return loginForm;

    }

    function buildCreateGameBox(nickname) {
        var createGameForm = '<span id="user-nickname">' + nickname + '</span>' +
               '<button id="btn-logout">Logout</button></br>' +
               'Title: <input type="text" id="tb-create-title"/>' +
               'Password: <input type="text" id="tb-create-pass"/>' +
               'Number: <input type="text" id="tb-create-number"/>' +
               '<button id="btn-create-game">Create</button>' +
               '<h2>Open games</h2>' +
               '<div id="open-games-container"></div>' +
               '<h2>Active games</h2>' +
               '<div id="active-games-container"></div>';
        return createGameForm;

    }
   function buildListGames (games) {

        var list = "<ul>";
        for (var i = 0; i < games.length; i++) {
            var game = games[i];
            list +=
                "<li data-game-id='" + game.id + "'>" +
                    "<a href='#'>" +
                        game.title +
                     "</a>" +
                            "<span> Created by: " + game.creatorNickname + "</span>" +
                "</li>";
        }
        list += "</ul>";

        return list;
    }

    return {
        gameJoin: buildGameJoinInput,
        listGames: buildListGames,
        loginForm: buildLoginForm,
        createGameBox:buildCreateGameBox
       
    }
}());