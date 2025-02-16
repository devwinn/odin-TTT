
function createBoard() {
    return [["","",""], ["","X",""], ["","",""]];
}

function createUser(id, selection) {
    const marker = selection;
    const user = `P${id}`;

    console.log({user, marker})

    return {user, marker};
}

function game() {

    let gameBoard = createBoard();

    // test for game board retrieval . enter 1 and 1 for prompts
    let userx = prompt('xaxis');
    let usery = prompt('yaxis');
    console.log(move.position(parseInt(userx), parseInt(usery)));

}

// for working console game will need the following functions
// pvp or computer? create user with marker as parameter
// choose marker