// Global variables
var gridXFields = 10;
var gridYFields = 10;
var numberOfObstacles = 10;
var maximumMoveFields = 3;
var apple;
var sword;
var katana;
var axe;
var spear;
var player1;
var fight = false;
var player2;
var activePlayer = "player1";
var notActivePlayer = "player2";
var playerCell;
var playerX;
var playerY;
var clickedCell;
var clickedX;
var clickedY;
var checkedCell;
var nextCell;
var startScreenWrapper = $("#start-screen-wrapper");
var startButton = $("#start-button");

var gameWrapper = $("#game-wrapper");

//Get the modal
var gameRulesSection = $("#game-rules");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//Get the button that opens the modal
var rulesButton = $("#rules-button");

var player1Name = $("#player-1-data-div .player-name");
var player1Picture = $("#player-1-data-div .player-picture");
var player1HealthValue = $("#player-1-data-div .player-health-value");
var player1WeaponPicture = $("#player-1-data-div .player-weapon-picture");
var player1WeaponName = $("#player-1-data-div .player-weapon-name");
var player1WeaponDamageValue = $(
  "#player-1-data-div .player-weapon-damage-value"
);
var player1TurnMessage = $("#player-1-data-div .turn-message");
var player1FightMessage = $("#player-1-data-div .fight-message");
var player1FightButtons = $("#player-1-data-div .buttons");
var player1AttackButton = $("#player-1-data-div .button-attack");
var player1DefendButton = $("#player-1-data-div .button-defend");

var player2Name = $("#player-2-data-div .player-name");
var player2Picture = $("#player-2-data-div .player-picture");
var player2HealthValue = $("#player-2-data-div .player-health-value");
var player2WeaponPicture = $("#player-2-data-div .player-weapon-picture");
var player2WeaponName = $("#player-2-data-div .player-weapon-name");
var player2WeaponDamageValue = $(
  "#player-2-data-div .player-weapon-damage-value"
);
var player2TurnMessage = $("#player-2-data-div .turn-message");
var player2FightMessage = $("#player-2-data-div .fight-message");
var player2FightButtons = $("#player-2-data-div .buttons");
var player2AttackButton = $("#player-2-data-div .button-attack");
var player2DefendButton = $("#player-2-data-div .button-defend");

var battleMessageWrapper = $("#start-battle-message-wrapper");
var gameOverWrapper = $("#game-over-wrapper");
var winnerNumber = $("#game-over .player-number");
var winnerName = $("#game-over .player-name");
var winnerPicture = $("#game-over .player-picture");
var playAgainButton = $("#play-again-button");
