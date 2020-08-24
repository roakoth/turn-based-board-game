# Turn-based-board-game
This is an OpenClassrooms project 6 that involves building a turn-based-board game using javascript.<br>
In this project, you will create an online game written JavaScript in which 2 players play each turn to compete. 

# Step 1: Generate the Map
1. Start by randomly generating the game map. Each box can be either: <br>
Empty <br>
Unavailable (dimmed)<br>
2. On the map, a limited number of weapons (up to 4) will be placed randomly and can be collected by players who pass through.<br>
3. You should invent at least 4 types of weapons in the game, each with different damage inflicted.<br> 
The default weapon which team players must inflict 10 points of damage. Each weapon has a name and associated visual. <br>
4. The placement of the two players is also randomly on the map when the game loads. They should not touch (they can not be together).<br>

# Step 2: Movements
1. For each turn, a player can move from one to three boxes (horizontally or vertically) before ending their turn.<br>
   They obviously can not pass through obstacles directly.<br>
2. If a player passes over a box containing a weapon, they leave their current weapon on site and replace it with the new one. <br>

# Step 3: Fight!
If players cross over adjacent squares (horizontally or vertically), a battle begins. <br>
During combat, the game works is as follows: <br>

1. Each player attacks in turn <br>

2. The damage depends on the player's weapon <br>

3. The player can choose to attack or defend against the next shot <br>

4. If the player chooses to defend themselves, they sustain 50% less damage than normal <br>

5. As soon as the life points of a player (initially 100) falls to 0, they lose. A message appears and the game is over. <br>
