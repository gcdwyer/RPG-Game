// VARIABLES ============================================================

$(document).ready(function() {

	// var suites = ["hearts", "diamonds", "spades", "clubs"];
	// var names = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "jack", "queen", "king"];
	var hit = 0;
	var stay = 0;
	var startingBet = 100;
	$("#deal").hide();
	$(".money").html("<h1>$" + startingBet + "</h1>");
	$("#currentBet").html("<h1>Current Bet: $0</h1>");

	// BETS ==============================================================

	function makeBets () {

		console.log("made it to bets");
		$("#status").html("<h1>Place Your Bets</h1>");
		$("#hit").hide();
		$("#stay").hide();

		$(".dollars").on("click", function() {

			betMade = parseInt($(this).val());
			console.log(betMade);
			moneyRemaining = startingBet - betMade;
			console.log("money remaining: " + moneyRemaining);
			$(".money").html("<h1>$" + moneyRemaining + "</h1>");
			$("#currentBet").html("<h1>Current Bet: $" + betMade +"</h1>");

		})

		


		



	};


	function dealCards() {

		// DEALER ========================================================
		compRandom = Math.floor(Math.random() * 13) +1;
		compRandom2 = Math.floor(Math.random() * 13) +1;
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
		playerRandom = Math.floor(Math.random() * 13) +1;
		playerRandom2 = Math.floor(Math.random() * 13) +1;
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
		$("#c2").html(compRandom2);

		if (stay === 0 && compTotal < 17) {
			console.log("11111111111111111111");
			compRandom3 = Math.floor(Math.random() * 13) +1;
			if (compRandom3 > 10) {
				compRandom3 = 10;
			}
			console.log("compRandom3: " + compRandom3);
			compTotal = compTotal + compRandom3;
			console.log("compTotal: " + compTotal);
			$("#c3").addClass("card");
			$("#c3").html(compRandom3);
			stay++;
		}

		console.log("stay: " + stay);
		if (stay === 1 && compTotal < 17) {
			console.log("22222222222222222222222");
			compRandom4 = Math.floor(Math.random() * 13) +1;
			if (compRandom4 > 10) {
				compRandom4 = 10;
			}
			console.log("compRandom4: " + compRandom4);
			compTotal = compTotal + compRandom4;
			console.log("compTotal: " + compTotal);
			$("#c4").addClass("card");
			$("#c4").html(compRandom4);
			stay++;
		}

		console.log("stay: " + stay);
		if (stay === 2 && compTotal < 17) {
			console.log("3333333333333333333333333");
			compRandom5 = Math.floor(Math.random() * 13) +1;
			if (compRandom5 > 10) {
				compRandom5 = 10;
			}
			console.log("compRandom4: " + compRandom4);
			compTotal = compTotal + compRandom5;
			console.log("compTotal: " + compTotal);
			$("#c5").addClass("card");
			$("#c5").html(compRandom5);
			stay++;
		}

		$("#dealer").html("<h3>Dealer: " + compTotal + "</h3>");
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
			$("#p3").addClass("card");
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
			$("#p4").addClass("card");
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
			$("#p5").addClass("card");
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
			$("#p6").addClass("card");
			$("#player").html("<h3>Player: " + playerTotal + "</h3>");
			if(playerTotal > 21) {
				checkStatus();
			}
		}
	});


	// LOGIC ============================================================

	function checkStatus() {

		$("#statusText").show();

		console.log("================ Check Status ===================");
		if (compTotal > 21) {
			console.log("Computer Busts");
			$("#statusText").html("<h1>You Win!</h1>");
			$("#deal").show();
		} 
		else if (playerTotal > 21) {
			console.log("Player Busts");
			$("#statusText").html("<h1>You Lose!</h1>");
			$("#deal").show();
		}
		else if (playerTotal === compTotal) {
			console.log("Tie");
			$("#statusText").html("<h1>Tie</h1>");
			$("#deal").show();
		}
		else if (playerTotal > compTotal) {
			console.log("Player Wins");
			$("#statusText").html("<h1>You Win!</h1>");
			$("#deal").show();
		}
		else if (playerTotal < compTotal) {
			console.log ("Dealer Wins");
			$("#statusText").html("<h1>You Lose!</h1>");
			$("#deal").show();
		}
	}

	// RESET ===========================================================
	$("#deal").on("click", function() {
		console.log("Reset Clicked");
		$("#statusText").hide();
		stay = 0;
		hit = 0;
		$("#p3").html("");
		$("#p4").html("");
		$("#p5").html("");
		$("#p6").html("");
		$("#c3").html("");
		$("#c4").html("");
		$("#c5").html("");
		$("#c6").html("");
		$("#p3").removeClass();
		$("#p4").removeClass();
		$("#p5").removeClass();
		$("#p6").removeClass();
		$("#c3").removeClass();
		$("#c4").removeClass();
		$("#c5").removeClass();
		$("#c6").removeClass();
		$("#deal").hide();
		dealCards();
	});

// STARTS GAME =========================================================
makeBets();	

});