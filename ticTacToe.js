// initiate variables
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
var e = document.getElementById('e');
var f = document.getElementById('f');
var g = document.getElementById('g');
var h = document.getElementById('h');
var i = document.getElementById('i');
var reset = document.getElementById('reset');
var play = document.getElementById('play');
var cells = document.getElementsByClassName('display-cell');
var turn = true;
var alreadyWon = false;
var winner = '';
var table = [[a, b, c],
           [d, e, f],
           [g, h, i]]


//Checks Box
function isVal(x, y) {
    if (table[x][y].innerText == 'X') {
        return 'X';
    }
    else if (table[x][y].innerText == 'Y') {
        return 'Y';
    }
    else {
        return false;
    }
}

// Checks col win
function isCol() {
    for(i = 0; i < 3; i++) {
        if ((isVal(0, i) == 'X') && (isVal(1, i) == 'X') && (isVal(2, i) == 'X')) {
            winner = 'X won!';
            return 'X';
        }
        else if ((isVal(0, i) == 'Y') && (isVal(1, i) == 'Y') && (isVal(2, i) == 'Y')) {
            winner = 'Y won!';
            return 'Y';
        }
    }
    return false;
}

// Checks tie win
function isTie () {
    if(table[0][0].innerText != '-' && table[0][1].innerText != '-' && table[0][2].innerText != '-' && table[1][0].innerText != '-' && table[1][1].innerText != '-' && table[1][2].innerText != '-' && table[2][0].innerText != '-' && table[2][1].innerText != '-' && table[2][2].innerText != '-' && !winner) {
        winner = 'It was a tie! Reset and play again.';
        return 'Tie';
    }
}

// Checks row win
function isRow() {
    for(i = 0; i < 3; i++) {
        if ((isVal(i, 0) == 'X') && (isVal(i, 1) == 'X') && (isVal(i, 2) == 'X')) {
        	winner = 'X won!';
            return 'X';
        }
        else if ((isVal(i, 0) == 'Y') && (isVal(i, 1) == 'Y') && (isVal(i, 2) == 'Y')) {
        	winner = 'Y won!';
            return 'Y';
        }
    }
    return false;
}

// Checks diagonal win 
function isDia() {
    if ((isVal(0, 0) == 'X') && (isVal(1, 1) == 'X') && (isVal(2, 2) == 'X')) {
        winner = 'X won!';
        return 'X';
    }
    else if ((isVal(2, 0) == 'X') && (isVal(1, 1) == 'X') && (isVal(0, 2) == 'X')){
        winner = 'X won!';
        return 'X';
    }
    else if ((isVal(0, 0) == 'Y') && (isVal(1, 1) == 'Y') && (isVal(2, 2) == 'Y')) {
        winner = 'Y won!';
        return 'Y';
    }
    else if ((isVal(2, 0) == 'Y') && (isVal(1, 1) == 'Y') && (isVal(0, 2) == 'Y')){
        winner = 'Y won!';
        return 'Y';
    }
    return false;
}

// Checks if winner
function isWinner() {
    if (isRow() || isCol() || isDia() || isTie()) {
        alreadyWon = true;
        alert(winner);
        return winner;
    }
    else {
        return false;
    }
}

// Make X
function makeX () {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            table[i][j].onclick = function () {
                this.innerText = 'X';  
                turn = false;                 
            }
        }
    }
}

// Make Y
function makeY () {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            table[i][j].onclick = function () {
                this.innerText = 'Y';         
                turn = true;          
            }
        }
    }
}

//Plays the game
makeX();
alert('X plays first.')
for (i=0; i<9; i++) {
    cells[i].onclick = function () {
        // Game goes here.
        if(!alreadyWon) {
            if (!isWinner()) {
                if (turn) {
                    makeX();
                }
                else {
                    makeY();
                }
            }
            else {
                alreadyWon = true;
                disable();
                return winner;
            }
        }
        else {
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 3; j++) {
                    table[i][j].onclick = null;        
                }
            }
            alert('Game has already been played. ' + winner);
        }
    }
}

// Reset button
reset.addEventListener('click', function () {
	for (i = 0; i < 3; i++) {
		for (j = 0; j < 3; j++) {
			table[i][j].innerText = '-';
		}
	}
    alreadyWon = false;
});

//Disable moves after win
function disable() {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            table[i][j].onclick = null;
        }
    }
}

// Toggle turn
// function toggleTurn() {
//         if(turn) {
//             makeX();
//             turn = !turn;
//         }
//         else {
//             makeY();
//             turn = !turn;        
//         }
// }