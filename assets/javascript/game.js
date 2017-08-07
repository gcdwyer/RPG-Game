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
          attack: 6,
          countattack: 8,
      }, 

      brian = {
          name: "Brian",
          hp: 95,
          attack: 7,
          countattack: 9,
      }, 

      champ = {
          name: "Champ",
          hp: 125,
          attack: 8,
          countattack: 6,
      }, 

      brick = {
          name: "Brick",
          hp: 115,
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
	                console.log("defender: " + defender);
	                enemyChosen = true;
	                fight();
	            }

	        }));

			if ($("#brianF").on("click", function () {

	            if (heroChosen == true && enemyChosen == false) {
	            	console.log("You chose Brian");
	                $("#brianF").appendTo("#defenderArea");
	                defender = brian;
	                console.log("defender: " + defender);
	                enemyChosen = true;
	                fight();
	            }
	            
	        }));	

			if ($("#champK").on("click", function () {

	            if (heroChosen == true && enemyChosen == false) {
	            	console.log("You chose Champ");
	                $("#champK").appendTo("#defenderArea");
	                defender = champ;
	                console.log("defender: " + defender);
	                enemyChosen = true;
	                fight();
	            }
	            
	        }));	

			if ($("#brickT").on("click", function () {

	            if (heroChosen == true && enemyChosen == false) {
	            	console.log("You chose Brick");
	                $("#brickT").appendTo("#defenderArea");
	                defender = brick;
	                console.log("defender: " + defender);
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

		console.log("heros new HP: " + hero.hp);
		console.log("heros base attack: " + hero.attack);

		defender.hp -= hero.attack

		console.log("enemys new HP: " + defender.hp);

		hero.attack = hero.attack + hero.attack

		console.log("heroes new attack: " + hero.attack);

		$("#ronHP").html("HP: " + ron.hp);
		$("#brianHP").html("HP: " + brian.hp);
		$("#champHP").html("HP: " + champ.hp);
		$("#brickHP").html("HP: " + brick.hp);

		checkStatus();

		});

	};


// FUNCTION CHECK STATUS =====================================================================

	function checkStatus() {

		if (defender.hp <= 0) {

			if(ron.hp <= 0 ) {
				console.log("RON DIED");
				$("#ronB").attr("class", "dead");
				$("#yourCharacter p").last().remove();
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, select another player</p>");
			}

			if(brian.hp <= 0 ) {
				console.log("BRIAN DIED");
				$("#brianF").attr("class", "dead");
				$("#yourCharacter p").last().remove();
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, select another player</p>");
			}

			if(champ.hp <= 0 ) {
				console.log("RON DIED");
				$("#champK").attr("class", "dead");
				$("#yourCharacter p").last().remove();
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, select another player</p>");
			}

			if(brick.hp <= 0 ) {
				console.log("RON DIED");
				$("#brickT").attr("class", "dead");
				$("#yourCharacter p").last().remove();
				$("#yourCharacter").append("<p>" + defender.name + " was defeated, select another player</p>");
			}

		selectNewDefender();
			
		}
	};


// FUNCTION SELECT NEW DEFENDER ==============================================================

	function selectNewDefender() {

		
	};


// RUNS GAME =================================================================================

	pickHero();


});






// AP =+ AP after each attack

// enemy only uses CAP and value never changes

// 




// choose image and make hero

// move other images below

// user selects enemy

// move enemy to defender area

// click attack button

// hero attacks enemy and HP is updated under player

// enemy attacks user and HP is updated under player

// when user or enemy HP is 0, remove enemy from defender area

// user selects a new opponet

// user wins by defeating all 3 enemys







// FUNCTIONS ON-CLICK ==================================================

// click images and try to get userNumbers to add up to computerNumber 
	// $("#button1").on("click", function() {

	// 	score += crystal1;
	// 	$("#userNumber").html("User: " + score);
	// 	console.log("crystal 1: " + crystal1);
	// 	console.log("my score: " + score);

	// 	if (score === computerPick) {
	// 		winner();
	// 	} else if (score > computerPick) {
	// 		loser();
	// 	}
	// });