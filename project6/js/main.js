// All game is in big Game object in game.js file.
// I am using Game object methods to manage whole game.

// When DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
	
	Game.showStartScreen();
	Game.init();
	
});
