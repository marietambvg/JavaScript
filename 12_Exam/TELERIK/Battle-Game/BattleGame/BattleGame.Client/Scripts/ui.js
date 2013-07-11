var ui = (function () {

	function buildLoginForm() {
		var html =
            '<div id="login-form-holder">' +
				'<form>' +
					'<div id="login-form">' +
						'<label for="tb-login-username">Username: </label>' +
						'<input type="text" id="tb-login-username"><br />' +
						'<label for="tb-login-password">Password: </label>' +
						'<input type="password" id="tb-login-password"><br />' +
						'<button id="btn-login" class="button">Login</button>' +
					'</div>' +
					'<div id="register-form" style="display: none">' +
						'<label for="tb-register-username">Username: </label>' +
						'<input type="text" id="tb-register-username"><br />' +
						'<label for="tb-register-nickname">Nickname: </label>' +
						'<input type="text" id="tb-register-nickname"><br />' +
						'<label for="tb-register-password">Password: </label>' +
						'<input type="password" id="tb-register-password"><br />' +
						'<button id="btn-register" class="button">Register</button>' +
					'</div>' +
					'<a href="#" id="btn-show-login" class="button selected">Login</a>' +
					'<a href="#" id="btn-show-register" class="button">Register</a>' +
				'</form>' +
            '</div>';
		return html;
	}

	function buildJoinGameForm() {
	    var html = '<div id="game-join-inputs">' +
						'Password: <input type="password" id="tb-game-pass"/>' +
						'<button id="btn-join-game">Join Game</button>' +
					'</div>';
	    return html;

	}
	function buildGameUI(nickname) {
		var html = '<span id="user-nickname">' +
				nickname +
		'</span>' +
		'<button id="btn-logout">Logout</button><br/>' +
		'<div id="create-game-holder">' +
			'Title: <input type="text" id="tb-create-title" />' +
			'Password: <input type="password" id="tb-create-pass" />' +
			'<button id="btn-create-game">Create</button>' +
		'</div>' +
		'<div id="open-games-container">' +
			'<h2>Open</h2>' +
			'<div id="open-games"></div>' +
		'</div>' +
		'<div id="active-games-container">' +
			'<h2>Active</h2>' +
			'<div id="active-games"></div>' +
		'</div>' +
		'<div id="game-holder">' +
		'</div>';
		return html;
	}

	function buildOpenGamesList(games) {
		var list = '<ul class="game-list open-games">';
		for (var i = 0; i < games.length; i++) {
			var game = games[i];
			list +=
				'<li data-game-id="' + game.id + '">' +
					'<a href="#" >' +
						$("<div />").html(game.title).text() +
					'</a>' +
					'<span> by ' +
						game.creator +
					'</span>' +
				'</li>';
		}
		list += "</ul>";
		return list;
	}

	function buildActiveGamesList(games) {
		var gamesList = Array.prototype.slice.call(games, 0);
		gamesList.sort(function (g1, g2) {
			if (g1.status == g2.status) {
				return g1.title > g2.title;
			}
			else
			{
				if (g1.status == "in-progress") {
					return -1;
				}
			}
			return 1;
		});

		var list = '<ul class="game-list active-games">';
		for (var i = 0; i < gamesList.length; i++) {
			var game = gamesList[i];
			list +=
				'<li data-game-id="' + game.id + '">' +
					'<a href="#" class="' + game.status + '">' +
						$("<div />").html(game.title).text() +
					'</a>' +
					'<span> by ' +
						game.creator +
					'</span>' +
				'</li>';
		}
		list += "</ul>";
		return list;
	}

	function buildGuessTable(guesses) {
		var tableHtml =
			'<table border="1" cellspacing="0" cellpadding="5">' +
				'<tr>' +
					'<th>Number</th>' +
					'<th>Cows</th>' +
					'<th>Bulls</th>' +
				'</tr>';
		for (var i = 0; i < guesses.length; i++) {
			var guess = guesses[i];
			tableHtml +=
				'<tr>' +
					'<td>' +
						guess.number +
					'</td>' +
					'<td>' +
						guess.cows+
					'</td>' +
					'<td>' +
						guess.bulls+
					'</td>' +
				'</tr>';
		}
		tableHtml += '</table>';
		return tableHtml;
	}

	function buildGameState(game) {
	    var redUser = game.red;
	    var blueUser = game.blue;
	    var html =
			'<h3> Game:' +game.title+'</h3>'+
    '<h3> Game inturn: '+game.inTurn+'</h3>'+

    '<div id="red-player-table">'+
    
		"<table> <thead><tr><th colspan='9'>"+game.red.nickname+"'s player results</th></tr></thead>"+
        
        "<tr> <td> Id</td> <td> Type </td> <td>Attack </td> <td>Armor </td> <td>Hit points </td><td>  Owner</td> <td>  Mode   </td> "+
		"<td> Position x</td><td> Position y  </td>  </tr>";
	    for (var i = 0; i < redUser.units.length; i++) {
	        var unit = redUser.units[i];
	        html += "<tr> <td>" + unit.id + "</td> <td>" + unit.type + "</td> <td>" + unit.attack + "</td> <td>" +
                unit.armor + "</td><td> " + unit.hitPoints + "</td> <td> " + unit.owner + "</td> <td>" + unit.mode + "</td> " +
		"<td> " + unit.position.x + " </td><td> " + unit.position.y + " </td>  </tr>"

	    }
        
	    html += "</table></div>";

	    html+='<div id="blue-player-table">' +

		"<table> <thead><tr><th colspan='9'>" + game.blue.nickname + "'s player results</th></tr></thead>" +

        "<tr> <td> Id</td> <td> Type </td> <td>Attack </td> <td>Armor </td> <td>Hit points </td><td>  Owner</td> <td>  Mode   </td> " +
		"<td> Position x</td><td> Position y  </td>  </tr>";
	    for (var i = 0; i < blueUser.units.length; i++) {
	        unit = blueUser.units[i];
	        html += "<tr> <td>" + unit.id + "</td> <td>" + unit.type + "</td> <td>" + unit.attack + "</td> <td>" +
                unit.armor + "</td><td> " + unit.hitPoints + "</td> <td> " + unit.owner + "</td> <td>" + unit.mode + "</td> " +
		"<td> " + unit.position.x + " </td><td> " + unit.position.y + " </td>  </tr>"

	    }

	    html += "</table></div>";
		return html;
	}

	return {
		gameUI: buildGameUI,
		openGamesList: buildOpenGamesList,
		loginForm: buildLoginForm,
		activeGamesList: buildActiveGamesList,
		gameState: buildGameState,
        joinGame:buildJoinGameForm
	}

}());