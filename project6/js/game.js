// Game object

var Game = {
  gridAvailableFields: [],

  playerMovementFields: [],

  // Init game
  init: function () {
    Game.createGridTable();
  },

  // Showing start screen
  showStartScreen: function () {
    startScreenWrapperElem.show();
    gameWrapperElem.hide();
    battleMessageWrapperElem.hide();
    gameOverWrapperElem.hide();
    gameRulesSection.hide();
    startButtonElem.on("click", function () {
      startScreenWrapperElem.hide();
      gameWrapperElem.show();
      gameRulesSection.hide();
    });
    rulesButton.on("click", function () {
      startScreenWrapperElem.hide();
      gameWrapperElem.hide();
      gameRulesSection.show();
    });
  },

  // Getting random number from zero to maximum parameter
  getRandomNumber: function (maximum) {
    var randomNumber = Math.floor(Math.random() * maximum);
    return randomNumber;
  },

  // Creating game board table grid
  createGridTable: function () {
    var table = document.createElement("table");
    for (var j = 1; j <= gridYFields; j++) {
      var tr = document.createElement("tr");
      for (var i = 1; i <= gridXFields; i++) {
        var td = document.createElement("td");
        td.setAttribute("x", Number(i));
        td.setAttribute("y", Number(j));
        var cellXY = [i, j];
        Game.gridAvailableFields.push(cellXY);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    var boardWrapperElem = document.getElementById("board-wrapper");
    boardWrapperElem.appendChild(table);
  },
};
