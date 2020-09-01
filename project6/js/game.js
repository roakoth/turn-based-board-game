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
    Game.hideFightButtons();
    Game.startGame();
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
    //Game.gridAvailableFields.splice(index, 1);
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

  // Hiding fight (attack and defense) buttons
  hideFightButtons: function () {
    player1FightButtons.hide();
    player2FightButtons.hide();
  },

  // Displaying players turn message
  displayPlayerTurnMessage: function () {
    if (activePlayer === "player1") {
      player1TurnMessage.html("Player 1<br/>is your turn");
      player2TurnMessage.text("");
    } else {
      player1TurnMessage.text("");
      player2TurnMessage.html("Player 2<br/>is your turn");
    }
  },

  // Creating available movement fields array for active player
  createMovementFields: function () {
    playerCell = document.querySelector("td[class*=" + activePlayer + "]");
    playerX = Number(playerCell.getAttribute("x"));
    playerY = Number(playerCell.getAttribute("y"));
    var i;
    Game.playerMovementFields = [];
    // Available movement fields on x right direction
    i = playerX + 1;
    var repeat = true;
    while (repeat) {
      if (i <= gridXFields && i <= playerX + maximumMoveFields) {
        checkedCell = document.querySelector(
          "td[x='" + i + "'][y='" + playerY + "']"
        );
        if (
          checkedCell.classList.contains("obstacle") ||
          checkedCell.classList.contains(notActivePlayer)
        ) {
          repeat = false;
        } else {
          var cellXY = [i, playerY];
          Game.playerMovementFields.push(cellXY);
          i += 1;
        }
      } else {
        repeat = false;
      }
    }
    // Available movement fields on x left direction
    i = playerX - 1;
    var repeat = true;
    while (repeat) {
      if (i >= 1 && i >= playerX - maximumMoveFields) {
        checkedCell = document.querySelector(
          "td[x='" + i + "'][y='" + playerY + "']"
        );
        if (
          checkedCell.classList.contains("obstacle") ||
          checkedCell.classList.contains(notActivePlayer)
        ) {
          repeat = false;
        } else {
          var cellXY = [i, playerY];
          Game.playerMovementFields.push(cellXY);
          i -= 1;
        }
      } else {
        repeat = false;
      }
    }
    // Available movement fields on y down direction
    i = playerY + 1;
    var repeat = true;
    while (repeat) {
      if (i <= gridYFields && i <= playerY + maximumMoveFields) {
        checkedCell = document.querySelector(
          "td[x='" + playerX + "'][y='" + i + "']"
        );
        if (
          checkedCell.classList.contains("obstacle") ||
          checkedCell.classList.contains(notActivePlayer)
        ) {
          repeat = false;
        } else {
          var cellXY = [playerX, i];
          Game.playerMovementFields.push(cellXY);
          i += 1;
        }
      } else {
        repeat = false;
      }
    }
    // Available movement fields on y up direction
    i = playerY - 1;
    var repeat = true;
    while (repeat) {
      if (i >= 1 && i >= playerY - maximumMoveFields) {
        checkedCell = document.querySelector(
          "td[x='" + playerX + "'][y='" + i + "']"
        );
        if (
          checkedCell.classList.contains("obstacle") ||
          checkedCell.classList.contains(notActivePlayer)
        ) {
          repeat = false;
        } else {
          var cellXY = [playerX, i];
          Game.playerMovementFields.push(cellXY);
          i -= 1;
        }
      } else {
        repeat = false;
      }
    }
  },

  // Showing available movement fields on a game board for active player
  showMovementFields: function () {
    Game.playerMovementFields.forEach(function (item) {
      var movementCell = document.querySelector(
        "td[x='" + item[0] + "'][y='" + item[1] + "']"
      );
      movementCell.classList.add("moveFieldshighlighted");
    });
  },

  // Hiding available movement fields on a game board when player choose destination cell
  hideMovementFields: function () {
    Game.playerMovementFields.forEach(function (item) {
      var movementCell = document.querySelector(
        "td[x='" + item[0] + "'][y='" + item[1] + "']"
      );
      movementCell.classList.remove("moveFieldshighlighted");
    });
  },

  // Changing active player at the end of the turn
  changeActivePlayer: function () {
    if (activePlayer === "player1") {
      activePlayer = "player2";
      notActivePlayer = "player1";
    } else {
      activePlayer = "player1";
      notActivePlayer = "player2";
    }
  },

  // Movement of players (when player choose destination cell from cells available to move)
  movePlayers: function (event) {
    clickedCell = event.target;
    clickedX = Number(event.target.getAttribute("x"));
    clickedY = Number(event.target.getAttribute("y"));
    playerCell = document.querySelector("td[class*=" + activePlayer + "]");
    playerX = Number(playerCell.getAttribute("x"));
    playerY = Number(playerCell.getAttribute("y"));
    if (clickedCell.classList.contains("moveFieldshighlighted")) {
      Game.hideMovementFields();
      // Move player on x
      if (clickedY === playerY) {
        // Move player right
        if (clickedX > playerX) {
          while (playerX !== clickedX) {
            playerCell = document.querySelector(
              "td[class*=" + activePlayer + "]"
            );
            playerX = Number(playerCell.getAttribute("x"));
            playerCell.classList.remove(activePlayer);
            nextCell = document.querySelector(
              "td[x='" + (playerX + 1) + "'][y='" + playerY + "']"
            );
            nextCell.classList.add(activePlayer);
            playerCell = document.querySelector(
              "td[class*=" + activePlayer + "]"
            );
            playerX = Number(playerCell.getAttribute("x"));
            if (playerCell.classList.contains("weapon")) {
              Game.changeWeapon();
            }
          }
        } else {
          // Move player left
          while (playerX !== clickedX) {
            playerCell = document.querySelector(
              "td[class*=" + activePlayer + "]"
            );
            playerX = Number(playerCell.getAttribute("x"));
            playerCell.classList.remove(activePlayer);
            nextCell = document.querySelector(
              "td[x='" + (playerX - 1) + "'][y='" + playerY + "']"
            );
            nextCell.classList.add(activePlayer);
            playerCell = document.querySelector(
              "td[class*=" + activePlayer + "]"
            );
            playerX = Number(playerCell.getAttribute("x"));
            if (playerCell.classList.contains("weapon")) {
              Game.changeWeapon();
            }
          }
        }
      }

      // Move player on y
      if (clickedX === playerX) {
        // Move player down
        if (playerY < clickedY) {
          while (playerY !== clickedY) {
            playerCell = document.querySelector(
              "td[class*=" + activePlayer + "]"
            );
            playerY = Number(playerCell.getAttribute("y"));
            playerCell.classList.remove(activePlayer);
            nextCell = document.querySelector(
              "td[x='" + playerX + "'][y='" + (playerY + 1) + "']"
            );
            nextCell.classList.add(activePlayer);
            playerCell = document.querySelector(
              "td[class*=" + activePlayer + "]"
            );
            playerY = Number(playerCell.getAttribute("y"));
            if (playerCell.classList.contains("weapon")) {
              Game.changeWeapon();
            }
          }
        } else {
          // Move player up
          while (playerY !== clickedY) {
            playerCell = document.querySelector(
              "td[class*=" + activePlayer + "]"
            );
            playerY = Number(playerCell.getAttribute("y"));
            playerCell.classList.remove(activePlayer);
            nextCell = document.querySelector(
              "td[x='" + playerX + "'][y='" + (playerY - 1) + "']"
            );
            nextCell.classList.add(activePlayer);
            playerCell = document.querySelector(
              "td[class*=" + activePlayer + "]"
            );
            playerY = Number(playerCell.getAttribute("y"));
            if (playerCell.classList.contains("weapon")) {
              Game.changeWeapon();
            }
          }
        }
      }

      // If active player has not met other player
      Game.changeActivePlayer();
      Game.createMovementFields();
      Game.showMovementFields();
      Game.displayPlayerTurnMessage();
    }
  },

  // Giving player new weapon when he collects it
  changeWeapon: function () {
    playerCell = document.querySelector("td[class*=" + activePlayer + "]");
    var weaponType = playerCell.classList;
    switch (true) {
      // When he collects axe
      case weaponType.contains("axe"):
        if (activePlayer === "player1") {
          var playerActualWeapon = player1.weapon.name;
          player1.weapon = axe;
        } else {
          var playerActualWeapon = player2.weapon.name;
          player2.weapon = axe;
        }
        playerCell.classList.remove("axe");
        break;
      // When he collects apple
      case weaponType.contains("apple"):
        if (activePlayer === "player1") {
          var playerActualWeapon = player1.weapon.name;
          player1.weapon = apple;
        } else {
          var playerActualWeapon = player2.weapon.name;
          player2.weapon = apple;
        }
        playerCell.classList.remove("apple");
        break;

      // When he collects katana
      case weaponType.contains("katana"):
        if (activePlayer === "player1") {
          var playerActualWeapon = player1.weapon.name;
          player1.weapon = katana;
        } else {
          var playerActualWeapon = player2.weapon.name;
          player2.weapon = katana;
        }
        playerCell.classList.remove("katana");
        break;

      // When he collects sword
      case weaponType.contains("sword"):
        if (activePlayer === "player1") {
          var playerActualWeapon = player1.weapon.name;
          player1.weapon = sword;
        } else {
          var playerActualWeapon = player2.weapon.name;
          player2.weapon = sword;
        }
        playerCell.classList.remove("sword");
        break;
      // When he collects spear
      case weaponType.contains("spear"):
        if (activePlayer === "player1") {
          var playerActualWeapon = player1.weapon.name;
          player1.weapon = spear;
        } else {
          var playerActualWeapon = player2.weapon.name;
          player2.weapon = spear;
        }
        playerCell.classList.remove("spear");
        break;
    }
    playerCell.classList.add(playerActualWeapon);
    Game.updatePlayerWeaponData(activePlayer);
  },

  // Updating player data div when player collects new weapon
  updatePlayerWeaponData: function (activePlayer) {
    if (activePlayer === "player1") {
      player1WeaponPicture.html("<img src=" + player1.weapon.image + ">");
      player1WeaponName.text(player1.weapon.name);
      player1WeaponDamageValue.text(player1.weapon.damage);
    } else {
      player2WeaponPicture.html("<img src=" + player2.weapon.image + ">");
      player2WeaponName.text(player2.weapon.name);
      player2WeaponDamageValue.text(player2.weapon.damage);
    }
  },

  // Starting game
  startGame: function () {
    Game.displayPlayerTurnMessage();
    Game.createMovementFields();
    Game.showMovementFields();
    var table = document.querySelector("table");
    table.addEventListener("mousedown", Game.movePlayers);
  },
};
