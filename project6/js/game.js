// Game object

var Game = {
  gridAvailableFields: [],

  playerMovementFields: [],

  // Init game
  init: function () {
    Game.createGridTable();
    Game.createObstacles();
    Game.createWeapons();
    Game.createPlayers();
    Game.setPlayersData();
  },

  // Showing start screen
  showStartScreen: function () {
    startScreenWrapper.show();
    gameWrapper.hide();
    gameRulesSection.hide();
    startButton.on("click", function () {
      startScreenWrapper.hide();
      gameWrapper.show();
      gameRulesSection.hide();
    });
    rulesButton.on("click", function () {
      startScreenWrapper.hide();
      gameWrapper.hide();
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
    var boardWrapper = document.getElementById("board-wrapper");
    boardWrapper.appendChild(table);
  },

  // Creating obstacle object and placing obstacles on a game board
  createObstacles: function () {
    var pyramid = new Obstacle("pyramid", "obstacle");
    for (var i = 1; i <= numberOfObstacles; i++) {
      Game.placeItem(pyramid);
    }
  },

  // Creating weapons objects and placing weapons on a game board
  createWeapons: function () {
    apple = new Weapon("apple", "weapon", 10, "img/weapons/apple.gif");
    sword = new Weapon("sword", "weapon", 20, "img/weapons/sword.gif");
    katana = new Weapon("katana", "weapon", 30, "img/weapons/katana.gif");
    axe = new Weapon("axe", "weapon", 40, "img/weapons/axe.gif");
    spear = new Weapon("spear", "weapon", 50, "img/weapons/spear.gif");
    Game.placeItem(sword);
    Game.placeItem(katana);
    Game.placeItem(axe);
    Game.placeItem(spear);
  },

  // Creating player objects and placing players on a game board
  createPlayers: function () {
    player1 = new Player("Aladdin", "player", 1, 100, apple);
    player2 = new Player("Jafar", "player", 2, 100, apple);
    Game.placeItem(player1);
    Game.placeItem(player2);
  },

  // Placing item pictures on a game board (by giving grid table cells appropriate css classes)
  placeItem: function (item) {
    var repeat = true;
    while (repeat) {
      var index = Game.getRandomNumber(Game.gridAvailableFields.length);
      switch (item.type) {
        case "obstacle":
          var condition =
            Game.gridAvailableFields[index][0] !== 1 &&
            Game.gridAvailableFields[index][0] !== gridXFields;
          var cssClassName = item.type;
          break;
        case "weapon":
          var condition =
            Game.gridAvailableFields[index][0] !== 1 &&
            Game.gridAvailableFields[index][0] !== gridXFields;
          var cssClassName = item.type;
          var cssClassName2 = item.name;
          break;
        case "player":
          if (item.playerNumber === 1) {
            var condition = Game.gridAvailableFields[index][0] === 1;
          } else {
            var condition = Game.gridAvailableFields[index][0] === gridXFields;
          }
          var cssClassName = item.type + item.playerNumber;
          break;
      }
      if (condition) {
        repeat = false;
      }
    }
    var x = Game.gridAvailableFields[index][0];
    var y = Game.gridAvailableFields[index][1];
    var tdElement = document.querySelector("td[x='" + x + "'][y='" + y + "']");
    if (item.type === "weapon") {
      tdElement.classList.add(cssClassName);
      tdElement.classList.add(cssClassName2);
    } else {
      tdElement.classList.add(cssClassName);
    }
    Game.gridAvailableFields.splice(index, 1);
  },

  // Setting players data into players info data divs
  setPlayersData: function () {
    // Player 1 Data
    player1Name.text(player1.name);
    player1Picture.html('<img src="img/players/aladdin-fight.gif">');
    player1HealthValue.text(player1.health);
    player1WeaponPicture.html("<img src=" + player1.weapon.image + ">");
    player1WeaponName.text(player1.weapon.name);
    player1WeaponDamageValue.text(player1.weapon.damage);
    // Player 2 Data
    player2Name.text(player2.name);
    player2Picture.html('<img src="img/players/jafar-move.gif">');
    player2HealthValue.text(player2.health);
    player2WeaponPicture.html("<img src=" + player2.weapon.image + ">");
    player2WeaponName.text(player2.weapon.name);
    player2WeaponDamageValue.text(player1.weapon.damage);
  },
};
