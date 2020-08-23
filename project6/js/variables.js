// Global variables
var gridXFields = 10;
var gridYFields = 10;
var numberOfObstacles = 10;
var maximumMoveFields = 3;
var knife;
var sword;
var katana;
var axe;
var spear;
var player1;
var player2;

var startScreenWrapperElem = $("#start-screen-wrapper");
var startButtonElem = $("#start-button");
var rulesButton = $("#rules-button");
var gameRulesSection = $("#game-rules");
var gameWrapperElem = $("#game-wrapper");
var battleMessageWrapperElem = $("#start-battle-message-wrapper");
var gameOverWrapperElem = $("#game-over-wrapper");
var winnerNumberElem = $("#game-over .player-number");
var winnerNameElem = $("#game-over .player-name");
var winnerPictureElem = $("#game-over .player-picture");
var playAgainButtonElem = $("#play-again-button");
var player1NameElem = $("#player-1-data-div .player-name");
var player1PictureElem = $("#player-1-data-div .player-picture");
var player1HealthValueElem = $("#player-1-data-div .player-health-value");
var player1WeaponPictureElem = $("#player-1-data-div .player-weapon-picture");
var player1WeaponNameElem = $("#player-1-data-div .player-weapon-name");
var player1WeaponDamageValueElem = $(
  "#player-1-data-div .player-weapon-damage-value"
);
var player1TurnMessageElem = $("#player-1-data-div .turn-message");
var player1FightMessageElem = $("#player-1-data-div .fight-message");
var player1FightButtonsElem = $("#player-1-data-div .buttons");
var player1DefendButtonElem = $("#player-1-data-div .button-defend");
var player2NameElem = $("#player-2-data-div .player-name");
var player2PictureElem = $("#player-2-data-div .player-picture");
var player2HealthValueElem = $("#player-2-data-div .player-health-value");
var player2WeaponPictureElem = $("#player-2-data-div .player-weapon-picture");
var player2WeaponNameElem = $("#player-2-data-div .player-weapon-name");
var player2WeaponDamageValueElem = $(
  "#player-2-data-div .player-weapon-damage-value"
);
var player2TurnMessageElem = $("#player-2-data-div .turn-message");
var player2FightMessageElem = $("#player-2-data-div .fight-message");
var player2FightButtonsElem = $("#player-2-data-div .buttons");
var player2DefendButtonElem = $("#player-2-data-div .button-defend");
