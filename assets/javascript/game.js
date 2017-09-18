// VARIABLES ============================================================

$(document).ready(function() {

	var suites = ["hearts", "diamonds", "spades", "clubs"];
	var names = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "jack", "queen", "king"];

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

	$("#test2").html("Dealers Score: " + compTotal);

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
	$("#test5").html("Player Score: " + playerTotal);

	// STAY ===========================================================
	$("#stay").on("click", function() {
		console.log("Stay Clicked");
		while (compTotal < 17) {
			var compRandom3 = Math.floor(Math.random() * 13) +1;
			console.log(compRandom3);
			compTotal = compTotal + compRandom3;
			console.log("new comp total: " + compTotal);
			console.log("player total: " + playerTotal);
		} 
		checkStatus();
	});


	// HIT ==============================================================
	$("#hit").on("click", function() {
		console.log("Hit Clicked");
		var playerRandom3 = Math.floor(Math.random() * 13) +1;
		console.log(playerRandom3);
		playerTotal = playerTotal + playerRandom3;
		console.log("computer total: " + compTotal);
		console.log("new player total: " + playerTotal);
		if(playerTotal > 21) {
			checkStatus();
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


	$("#reset").on("click", function() {

		console.log("Reset Clicked");

	});


});

