// VARIABLES ============================================================

$(document).ready(function() {

// characters have 3 attributes:
// HP
// AP
// CAP

	var allCharacters = [
		ron = {
			name: "Ron",
			hp: 110,
			baseattack: 6,
			attack: 6,
			countattack: 8,
		}, 

		brian = {
			name: "Brian",
			hp: 95,
			baseattack: 7,
			attack: 7,
			countattack: 9,
		}, 

		champ = {
			name: "Champ",
			hp: 125,
			baseattack: 8,
			attack: 8,
			countattack: 6,
		}, 

		brick = {
			name: "Brick",
			hp: 115,
			baseattack: 4,
			attack: 4,
			countattack: 11,
		}
	];

  	$("#ronHP").html("HP: " + ron.hp);
    $("#brianHP").html("HP: " + brian.hp);
    $("#champHP").html("HP: " + champ.hp);
    $("#brickHP").html("HP: " + brick.hp);


    var hero = {};
    var enemy;
    var counter = 0;
    var heroChosen = false;
    var enemyChosen = false;
    var defender = [];
    var victories = 0;
    var ronAlive = true;
    var brianAlive = true;
    var champAlive = true;
    var brickAlive = true;



// FUNCTION PICK HERO ===============================================================
	
	function pickHero() {
		$(".characters").on("click", function () {

			if (heroChosen == false && counter === 0) {

				heroChosen = true;

				counter++;

				var heroPicked = $(this).attr("id");

				if (heroPicked === "ronB") {
					console.log ("You picked:" + heroPicked);

					hero = ron;
					// console.log("var hero: " + hero);

					// redraw hero to yourCharacter div
					$("#ronB").appendTo("#yourCharacter").attr("class", "imgBodyGood");
					// redraw enemies to enemyCharacter div
					$("#brianF, #champK, #brickT").appendTo("#enemyCharacter").attr("class", "imgBodyBad");

					pickEnemy();


				} else if (heroPicked === "brianF") {
					console.log ("You picked:" + heroPicked);

					hero = brian;
					// console.log("var hero: " + hero);

					// redraw hero to yourCharacter div
					$("#brianF").appendTo("#yourCharacter").attr("class", "imgBodyGood");
					// redraw enemies to enemyCharacter div
					$("#ronB, #champK, #brickT").appendTo("#enemyCharacter").attr("class", "imgBodyBad");

					pickEnemy();


				} else if (heroPicked === "champK") {
					console.log ("You picked:" + heroPicked);

					hero = champ;
					// console.log("var hero: " + hero);

					// redraw hero to yourCharacter div
					$("#champK").appendTo("#yourCharacter").attr("class", "imgBodyGood");
					// redraw enemies to enemyCharacter div
					$("#ronB, #brianF, #brickT").appendTo("#enemyCharacter").attr("class", "imgBodyBad");

					pickEnemy();


				} else if (heroPicked === "brickT") {
					console.log ("You picked:" + heroPicked);

					hero = brick;
					// console.log("var hero: " + hero);

					// redraw hero to yourCharacter div
					$("#brickT").appendTo("#yourCharacter").attr("class", "imgBodyGood");
					// redraw enemies to enemyCharacter div
					$("#ronB, #brianF, #champK").appendTo("#enemyCharacter").attr("class", "imgBodyBad");

					pickEnemy();
				}

					console.log("hero chosen? " + heroChosen);

					console.log("counter: " + counter);

					console.log("time to pick an enemy");
			}
		});
	};
		

// FUNCTION PICK ENEMY ================================================================================	

	function pickEnemy() {

			if ($("#ronB").on("click", function () {

	            if (heroChosen == true && enemyChosen == false) {
	            	console.log("You chose Ron");
	                $("#ronB").appendTo("#defenderArea");
	                defender = ron;
	                // console.log("defender: " + defender);
	                enemyChosen = true;
	                fight();
	            }

	        }));

			if ($("#brianF").on("click", function () {

	            if (heroChosen == true && enemyChosen == false) {
	            	console.log("You chose Brian");
	                $("#brianF").appendTo("#defenderArea");
	                defender = brian;
	                // console.log("defender: " + defender);
	                enemyChosen = true;
	                fight();
	            }
	            
	        }));	

			if ($("#champK").on("click", function () {

	            if (heroChosen == true && enemyChosen == false) {
	            	console.log("You chose Champ");
	                $("#champK").appendTo("#defenderArea");
	                defender = champ;
	                // console.log("defender: " + defender);
	                enemyChosen = true;
	                fight();
	            }
	            
	        }));	

			if ($("#brickT").on("click", function () {

	            if (heroChosen == true && enemyChosen == false) {
	            	console.log("You chose Brick");
	                $("#brickT").appendTo("#defenderArea");
	                defender = brick;
	                // console.log("defender: " + defender);
	                enemyChosen = true;
	                fight();
	            }
	            
	        }));	

		

    };


// FUNCTION FIGHT ==========================================================================

	function fight() {

		console.log("Start Fight");
		console.log("Hero HP: " + hero.hp);
		console.log("Defender HP: " + defender.hp);

		$("#attackButton").on("click", function () {

		$("#yourCharacter p").last().remove();
		$("#yourCharacter").append("<p>" + hero.name + " attacks " + defender.name + " for " + hero.attack + " damage, but receives " + defender.countattack + " damage!</p>");

		hero.hp -= defender.countattack

		// console.log("heros new HP: " + hero.hp);

		defender.hp -= hero.attack

		// console.log("enemys new HP: " + defender.hp);

		hero.attack = hero.attack + hero.baseattack

		// console.log("heroes new attack: " + hero.attack);

		$("#ronHP").html("HP: " + ron.hp);
		$("#brianHP").html("HP: " + brian.hp);
		$("#champHP").html("HP: " + champ.hp);
		$("#brickHP").html("HP: " + brick.hp);

		checkStatus();

		});

	};


// FUNCTION CHECK STATUS =====================================================================

	function checkStatus() {

		if (defender.hp <= 0 && victories < 3) {

			if (ron.hp <= 0 && ronAlive == true) {
				console.log("RON DIED");
				$("#ronB").attr("class", "dead");
				$("#yourCharacter p").last().remove();
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, select another player</p>");
				enemyChosen = false;
				victories++;
				ronAlive = false;
			}

			if (brian.hp <= 0 && brianAlive == true) {
				console.log("BRIAN DIED");
				$("#brianF").attr("class", "dead");
				$("#yourCharacter p").last().remove();
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, select another player</p>");
				enemyChosen = false;
				victories++;
				brianAlive = false;
			}

			if (champ.hp <= 0 && champAlive == true) {
				console.log("CHAMP DIED");
				$("#champK").attr("class", "dead");
				$("#yourCharacter p").last().remove();
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, select another player</p>");
				enemyChosen = false;
				victories++;
				champAlive = false;
			}

			if (brick.hp <= 0 && brickAlive == true) {
				console.log("BRICK DIED");
				$("#brickT").attr("class", "dead");
				$("#yourCharacter p").last().remove();
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, select another player</p>");
				enemyChosen = false;
				victories++;
				brickAlive = false;
			}


		console.log("Victories: " + victories);	
		

		// needs to be true to run pick enemy again	
		// console.log("hero chosen? " + heroChosen);
		// needs to be false to run pick enemy again
		// console.log("enemy chosen? " + enemyChosen);

		pickEnemy();
			
		} else if (hero.hp <= 0) {

			if (ron.hp <= 0) {
				console.log("Hero has been defeated");
				$("#ronB").attr("class", "dead");
				$("#yourCharacter p").last().remove();
				$("#yourCharacter").append("<p>" + hero.name + " was defeated, game over!</p>");
			}

			if (brian.hp <= 0) {
				console.log("Hero has been defeated");
				$("#brianF").attr("class", "dead");
				$("#yourCharacter p").last().remove();
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, game over!</p>");
			}

			if (champ.hp <= 0) {
				console.log("Hero has been defeated");
				$("#champK").attr("class", "dead");
				$("#yourCharacter p").last().remove();
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, game over!</p>");
			}

			if (brick.hp <= 0) {
				console.log("Hero has been defeated");
				$("#brickT").attr("class", "dead");
				$("#yourCharacter p").last().remove();
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, game over!</p>");
			}

		} else if (victories === 3) {

			console.log("YOU WIN");
			$("#yourCharacter p").last().remove();
			$("#yourCharacter").append("<p><strong>" + hero.name + " is victorious!</strong></p>");

		}



		
	};

//FUNCTION RESET ======================================================================================

function reset() {



	};



// RUNS GAME =================================================================================

	pickHero();


});

