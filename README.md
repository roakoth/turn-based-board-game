# Turn-based-board-game
# Step 1: Generate the Map <br>
1. Start by randomly generating the game map. Each box can be either empty or unavailable <br>
2. On the map, a limited number of weapons (up to 4) will be placed randomly and can be collected by players who pass through.<br>
3. You should invent at least 4 types of weapons in the game, each with different damage inflicted. The default weapon which team players must inflict 10 points of damage.<br> 
   Each weapon has a name and associated visual.
4. The placement of the two players is also randomly on the map when the game loads. They should not touch (they can not be together).<br>

# Step 2: Movements
For each turn, a player can move from one to three boxes (horizontally or vertically) before ending their turn. They obviously can not pass through obstacles directly.
If a player passes over a box containing a weapon, they leave their current weapon on site and replace it with the new one.

# Step 3: Fight
If players cross over adjacent squares (horizontally or vertically), a battle begins.
During combat, the game works is as follows:
1. Each player attacks in turn
2. The damage depends on the player's weapon
3. The player can choose to attack or defend against the next shot
4. If the player chooses to defend themselves, they sustain 50% less damage than normal
5. As soon as the life points of a player (initially 100) falls to 0, they lose. A message appears and the game is over.<br>


