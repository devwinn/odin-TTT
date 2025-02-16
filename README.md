# odin-TTT
The Odin Project <br>
Tic-Tac-Toe project<br><br>
Requirements:<br>
You’re going to store the gameboard as an array inside of a Gameboard object, 
so start there! Your players are also going to be stored in objects, 
and you’re probably going to want an object to control the flow of the game itself.<br>
1. Your main goal here is to have as little global code as possible. 
Try tucking as much as you can inside factories. 
If you only need a single instance of something (e.g. the gameboard, the displayController etc.) 
then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.
2. Once you have a working console game, create an object that will handle the display/DOM logic. 
Write a function that will render the contents of the gameboard array to the webpage 
(for now, you can always just fill the gameboard array with "X"s and "O"s just to see what’s going on).
3. Write the functions that allow players to add marks to a specific spot on the board by interacting with the appropriate DOM elements 
(e.g. letting players click on a board square to place their marker). 
Don’t forget the logic that keeps players from playing in spots that are already taken!
4. Clean up the interface to allow players to put in their names, 
include a button to start/restart the game and add a display element that shows the results upon game end!