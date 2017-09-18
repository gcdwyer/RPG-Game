// VARIABLES ============================================================

$(document).ready(function() {

	var suites = ["hearts", "diamonds", "spades", "clubs"];
	var names = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "jack", "queen", "king"];
	var hit = 0;

	function dealCards() {

		// DEALER ========================================================
		var compRandom = Math.floor(Math.random() * 13) +1;
		var compRandom2 = Math.floor(Math.random() * 13) +1;
		if (compRandom > 10) {
			compRandom = 10;
		}
		if (compRandom2 > 10) {
			compRandom2 = 10;
		}
		console.log(compRandom);
		console.log(compRandom2);
		compTotal = compRandom + compRandom2;
		console.log("Computer Total: " + compTotal);
		$("#dealer").html("<h3>Dealer: " + compRandom + "</h3>");
		$("#c1").html(compRandom);
		$("#c2").html("?");

		// Player ========================================================
		var playerRandom = Math.floor(Math.random() * 13) +1;
		var playerRandom2 = Math.floor(Math.random() * 13) +1;
		if (playerRandom > 10) {
			playerRandom = 10;
		}
		if (playerRandom2 > 10) {
			playerRandom2 = 10;
		}
		console.log(playerRandom);
		console.log(playerRandom2);
		playerTotal = playerRandom + playerRandom2;
		console.log("Player Total: " + playerTotal);
		$("#player").html("<h3>Player: " + playerTotal + "</h3>");
		$("#p1").html(playerRandom);
		$("#p2").html(playerRandom2);
	};

	// STAY ===========================================================
	$("#stay").on("click", function() {
		console.log("Stay Clicked");
		while (compTotal < 17) {
			var compRandom3 = Math.floor(Math.random() * 13) +1;
			if (compRandom3 > 10) {
				compRandom3 = 10;
			}
			console.log(compRandom3);
			compTotal = compTotal + compRandom3;
			console.log("new comp total: " + compTotal);
			console.log("player total: " + playerTotal);
		} 
		checkStatus();
	});


	// HIT ==============================================================
	$("#hit").on("click", function() {
		if (hit === 0) {
					console.log("Hit Clicked");
			var playerRandom3 = Math.floor(Math.random() * 13) +1;
			if (playerRandom3 > 10) {
				playerRandom3 = 10;
			}
			console.log(playerRandom3);
			playerTotal = playerTotal + playerRandom3;
			console.log("computer total: " + compTotal);
			console.log("new player total: " + playerTotal);
			hit++;
			console.log("hits: " + hit);
			$("#p3").html(playerRandom3);
			$("#player").html("<h3>Player: " + playerTotal + "</h3>");
			if(playerTotal > 21) {
				checkStatus();
			}
		}
		else if (hit === 1) {
			console.log("Hit Clicked");
			var playerRandom4 = Math.floor(Math.random() * 13) +1;
			if (playerRandom4 > 10) {
				playerRandom4 = 10;
			}
			console.log(playerRandom4);
			playerTotal = playerTotal + playerRandom4;
			console.log("computer total: " + compTotal);
			console.log("new player total: " + playerTotal);
			hit++;
			console.log("hits: " + hit);
			$("#p4").html(playerRandom4);
			$("#player").html("<h3>Player: " + playerTotal + "</h3>");
			if(playerTotal > 21) {
				checkStatus();
			}
		}
		else if (hit === 2) {
			console.log("Hit Clicked");
			var playerRandom5 = Math.floor(Math.random() * 13) +1;
			if (playerRandom5 > 10) {
				playerRandom5 = 10;
			}
			console.log(playerRandom5);
			playerTotal = playerTotal + playerRandom5;
			console.log("computer total: " + compTotal);
			console.log("new player total: " + playerTotal);
			hit++;
			console.log("hits: " + hit);
			$("#p5").html(playerRandom5);
			$("#player").html("<h3>Player: " + playerTotal + "</h3>");
			if(playerTotal > 21) {
				checkStatus();
			}
		}
		else if (hit === 3) {
			console.log("Hit Clicked");
			var playerRandom6 = Math.floor(Math.random() * 13) +1;
			if (playerRandom6 > 10) {
				playerRandom6 = 10;
			}
			console.log(playerRandom6);
			playerTotal = playerTotal + playerRandom6;
			console.log("computer total: " + compTotal);
			console.log("new player total: " + playerTotal);
			hit++;
			console.log("hits: " + hit);
			$("#p6").html(playerRandom6);
			$("#player").html("<h3>Player: " + playerTotal + "</h3>");
			if(playerTotal > 21) {
				checkStatus();
			}
		}
	});


	// LOGIC ============================================================

	function checkStatus() {

		console.log("================ Check Status ===================");
		if (compTotal > 21) {
			console.log("Computer Busts");
		} 
		else if (playerTotal > 21) {
			console.log("Player Busts");
		}
		else if (playerTotal === compTotal) {
			console.log("Tie");
		}
		else if (playerTotal > compTotal) {
			console.log("Player Wins");
		}
		else if (playerTotal < compTotal) {
			console.log ("Computer Wins");
		}
	}

	// RESET ===========================================================
	$("#reset").on("click", function() {
		console.log("Reset Clicked");
		dealCards();
	});


// STARTS GAME =========================================================
dealCards();	

});

