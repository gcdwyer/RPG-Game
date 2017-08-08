// VARIABLES ============================================================

$(document).ready(function() {

	// creates an array for all characters that contains properties for each
	var allCharacters = [
		ron = {
			name: "Ron",
			hp: 160,
			baseattack: 6,
			attack: 6,
			countattack: 8,
		}, 

		brian = {
			name: "Brian",
			hp: 145,
			baseattack: 7,
			attack: 7,
			countattack: 9,
		}, 

		champ = {
			name: "Champ",
			hp: 150,
			baseattack: 8,
			attack: 8,
			countattack: 6,
		}, 

		brick = {
			name: "Brick",
			hp: 170,
			baseattack: 4,
			attack: 4,
			countattack: 11,
		}
	];

	// displays the HP below the characters
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
	
	// function used to pick the hero
	function pickHero() {

		$(".characters").on("click", function () {
			// determines if hero has been chosen has been picked yet
			if (heroChosen == false && counter === 0) {
				// sets hero is chosen
				heroChosen = true;
				// some logic to make sure hero cannot be picked again
				counter++;
				// variable gets assigned the id of character clicked
				var heroPicked = $(this).attr("id");
				// if user selects Ron
				if (heroPicked === "ronB") {
					console.log ("You picked:" + heroPicked);
					// sets hero to ron
					hero = ron;
					// redraw hero to yourCharacter div in html
					$("#ronB").appendTo("#yourCharacter").attr("class", "imgBodyGood");
					// redraw enemies to enemyCharacter div in html
					$("#brianF, #champK, #brickT").appendTo("#enemyCharacter").attr("class", "imgBodyBad");
					// runs next function
					pickEnemy();

				// if user selects Brian
				} else if (heroPicked === "brianF") {
					console.log ("You picked:" + heroPicked);
					// sets hero to brian
					hero = brian;
					// redraw hero to yourCharacter div in html
					$("#brianF").appendTo("#yourCharacter").attr("class", "imgBodyGood");
					// redraw enemies to enemyCharacter div in html
					$("#ronB, #champK, #brickT").appendTo("#enemyCharacter").attr("class", "imgBodyBad");
					// runs next function
					pickEnemy();

				// if user selects Champ
				} else if (heroPicked === "champK") {
					console.log ("You picked:" + heroPicked);
					// sets hero to champ
					hero = champ;
					// redraw hero to yourCharacter div in html
					$("#champK").appendTo("#yourCharacter").attr("class", "imgBodyGood");
					// redraw enemies to enemyCharacter div in html
					$("#ronB, #brianF, #brickT").appendTo("#enemyCharacter").attr("class", "imgBodyBad");
					// runs next function
					pickEnemy();

				// if user selects Brick
				} else if (heroPicked === "brickT") {
					console.log ("You picked:" + heroPicked);
					//sets hero to brick
					hero = brick;
					// redraw hero to yourCharacter div in html
					$("#brickT").appendTo("#yourCharacter").attr("class", "imgBodyGood");
					// redraw enemies to enemyCharacter div in html
					$("#ronB, #brianF, #champK").appendTo("#enemyCharacter").attr("class", "imgBodyBad");
					// runs next function
					pickEnemy();
				}
					console.log("hero chosen? " + heroChosen);
					console.log("counter: " + counter);
					console.log("time to pick an enemy");
			}
		});
	};
		

// FUNCTION PICK ENEMY ================================================================================	

	// function used to select oponents
	function pickEnemy() {

		// if ron is clicked:
		if ($("#ronB").on("click", function () {
			// if hero is already chosen but enemy has not
            if (heroChosen == true && enemyChosen == false) {
            	console.log("You chose Ron");
            	//redraw enemy to defender area
                $("#ronB").appendTo("#defenderArea");
                // sets defender to ron
                defender = ron;
                // enemy has been chosen
                enemyChosen = true;
                // runs next function
                fight();
            }
        }));

		// if brian is clicked:
		if ($("#brianF").on("click", function () {
			// if hero is already chosen but enemy has not	
            if (heroChosen == true && enemyChosen == false) {
            	console.log("You chose Brian");
            	//redraw enemy to defender area
                $("#brianF").appendTo("#defenderArea");
                // sets defender to brian
                defender = brian;
                // enemy has been chosen
                enemyChosen = true;
                // runs next function
                fight();
            }
        }));	

		// if champ is clicked:
		if ($("#champK").on("click", function () {
			// if hero is already chosen but enemy has not
            if (heroChosen == true && enemyChosen == false) {
            	console.log("You chose Champ");
            	//redraw enemy to defender area
                $("#champK").appendTo("#defenderArea");
                // sets defender to champ
                defender = champ;
                // enemy has been chosen
                enemyChosen = true;
                // runs next function
                fight();
            }
        }));	

		// if brick is clicked:
		if ($("#brickT").on("click", function () {
			// if hero is already chosen but enemy has not
            if (heroChosen == true && enemyChosen == false) {
            	console.log("You chose Brick");
            	//redraw enemy to defender area
                $("#brickT").appendTo("#defenderArea");
                // sets defender to brick
                defender = brick;
                // enemy has been chosen
                enemyChosen = true;
                // runs next function
                fight();
            }
        }));	
    };


// FUNCTION FIGHT ==========================================================================

	// function used to fight
	function fight() {

		console.log("Start Fight");
		console.log("Hero HP: " + hero.hp);
		console.log("Defender HP: " + defender.hp);
		// clicking the Attack button will do the following:
		$("#attackButton").on("click", function () {
		console.log("=========Attack==========");
		// removes the previous text displayed on the screen so we dont keep appending to it
		$("#yourCharacter p").last().remove();
		// displays damaged given to and recieved by the hero
		$("#yourCharacter").append("<p>" + hero.name + " attacks " + defender.name + " for " + hero.attack + " damage, but receives " + defender.countattack + " damage!</p>");
		// heros HP minus the counterattack
		hero.hp -= defender.countattack
		console.log("heros new HP: " + hero.hp);
		// defenders HP minus the attack
		defender.hp -= hero.attack
		console.log("enemys new HP: " + defender.hp);
		// heroes attack increases by base attack after each attack
		hero.attack = hero.attack + hero.baseattack
		console.log("heroes new attack will be: " + hero.attack);
		// redraws the characters HP after each attack
		$("#ronHP").html("HP: " + ron.hp);
		$("#brianHP").html("HP: " + brian.hp);
		$("#champHP").html("HP: " + champ.hp);
		$("#brickHP").html("HP: " + brick.hp);
		// run next function
		checkStatus();
		});
	};


// FUNCTION CHECK STATUS =====================================================================

	// after each attack, check to see if anyone died
	function checkStatus() {
		// if defender died but victories is still under 3
		if (defender.hp <= 0 && victories < 3) {
			// if defender died was ron
			if (ron.hp <= 0 && ronAlive == true) {
				console.log("RON DIED");
				// changes id to dead and will remove character from screen
				$("#ronB").attr("class", "dead");
				// removes the previous text displayed on the screen so we dont keep appending to it
				$("#yourCharacter p").last().remove();
				// displays that the defender was defeated
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, select another player</p>");
				// enemy is no longer chosen
				enemyChosen = false;
				victories++;
				ronAlive = false;
			}

			// if defende died was brian
			if (brian.hp <= 0 && brianAlive == true) {
				console.log("BRIAN DIED");
				// changes id to dead and will remove character from screen
				$("#brianF").attr("class", "dead");
				// removes the previous text displayed on the screen so we dont keep appending to it
				$("#yourCharacter p").last().remove();
				// displays that the defender was defeated
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, select another player</p>");
				// enemy is no longer chosen
				enemyChosen = false;
				victories++;
				brianAlive = false;
			}

			// if defende died was champ
			if (champ.hp <= 0 && champAlive == true) {
				console.log("CHAMP DIED");
				// changes id to dead and will remove character from screen
				$("#champK").attr("class", "dead");
				// removes the previous text displayed on the screen so we dont keep appending to it
				$("#yourCharacter p").last().remove();
				// displays that the defender was defeated
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, select another player</p>");
				// enemy is no longer chosen
				enemyChosen = false;
				victories++;
				champAlive = false;
			}

			// if defende died was brick
			if (brick.hp <= 0 && brickAlive == true) {
				console.log("BRICK DIED");
				// changes id to dead and will remove character from screen
				$("#brickT").attr("class", "dead");
				// removes the previous text displayed on the screen so we dont keep appending to it
				$("#yourCharacter p").last().remove();
				// displays that the defender was defeated
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, select another player</p>");
				// enemy is no longer chosen
				enemyChosen = false;
				victories++;
				brickAlive = false;
			}

		console.log("Victories: " + victories);	
		
		// needs to be true to run pick enemy again	
		// console.log("hero chosen? " + heroChosen);
		// needs to be false to run pick enemy again
		// console.log("enemy chosen? " + enemyChosen);

		// runs next function
		pickEnemy();

		// if defender didnt die, did hero?		
		} else if (hero.hp <= 0) {

			if (ron.hp <= 0) {
				console.log("Hero has been defeated");
				// changes id to dead and will remove hero from screen
				$("#ronB").attr("class", "dead");
				// removes the previous text displayed on the screen so we dont keep appending to it
				$("#yourCharacter p").last().remove();
				// displays that the hero was defeated
				$("#yourCharacter").append("<p>" + hero.name + " was defeated, game over!</p>");
			}

			if (brian.hp <= 0) {
				console.log("Hero has been defeated");
				// changes id to dead and will remove hero from screen
				$("#brianF").attr("class", "dead");
				// removes the previous text displayed on the screen so we dont keep appending to it
				$("#yourCharacter p").last().remove();
				// displays that the hero was defeated
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, game over!</p>");
			}

			if (champ.hp <= 0) {
				console.log("Hero has been defeated");
				// changes id to dead and will remove hero from screen
				$("#champK").attr("class", "dead");
				// removes the previous text displayed on the screen so we dont keep appending to it
				$("#yourCharacter p").last().remove();
				// displays that the hero was defeated
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, game over!</p>");
			}

			if (brick.hp <= 0) {
				console.log("Hero has been defeated");
				// changes id to dead and will remove hero from screen
				$("#brickT").attr("class", "dead");
				// removes the previous text displayed on the screen so we dont keep appending to it
				$("#yourCharacter p").last().remove();
				// displays that the hero was defeated
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, game over!</p>");
			}

		// if victories reaches 3
		} else if (victories === 3) {

			console.log("YOU WIN");
			// removes the previous text displayed on the screen so we dont keep appending to 
			$("#yourCharacter p").last().remove();
			// display the hero was winner
			$("#yourCharacter").append("<p><strong>" + hero.name + " is victorious!</strong></p>");
			// remove enemy from screen
			$("#enemyCharacter").attr("class", "dead");
			// removes clutter from screen when game is over
			$("#attackArea").attr("class", "dead");
			$("#defenderArea").attr("class", "dead");
			// asks the user to press spacebar to play again
			$("#yourCharacter").append("<h1>Press spacebar to play again!</h1>");
			// runs next fucntion
			reset();
		}
	};

//FUNCTION RESET ======================================================================================

	// reset still needs work
	function reset () {

		// when key is pressed
        $(window).keyup(function(event) {
        	// if spcebar is pressed
            if (event.keyCode === 32) {
            	console.log("========RESET========");
            	// sets enemy characters to be displayed again
            	$("#enemyCharacter").attr("class", "alive");
            	// displays previouly hidden sections again
				$("#attackArea").attr("class", "alive");
				$("#defenderArea").attr("class", "alive");
				// removes old text from screen
				$("#yourCharacter p").last().remove();
				// removes old text from screen
				$("#yourCharacter h1").last().remove();
				// places all characters back to the top of the screen
                $("#ronB, #brianF, #champK, #brickT").appendTo("#characters").attr("class", "panel panel-default characters");
                // resets variables
                victories = 0;
                console.log("victories: " + victories);
                defender = [];
                console.log("defender: " + defender);
                heroChosen = [];
                console.log("hero chosen: " + heroChosen);
                heroChosen = false;
                enemyChosen = false;
                counter = 0;
                allCharacters = [];
                console.log(allCharacters);
                // function that restarts the game
                pickHero();
            }
        })
    };


// RUNS GAME =================================================================================

	pickHero();

});

