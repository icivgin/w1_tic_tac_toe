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

var turn = true;

var table = [[a, b, c],
           [d, e, f],
           [g, h, i]]

var winner = '';

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
            winner = 'X';
            return 'X';
        }
        else if ((isVal(0, i) == 'Y') && (isVal(1, i) == 'Y') && (isVal(2, i) == 'Y')) {
            winner = 'Y';
            return 'Y';
        }
    }
    return false;
}

// Checks row win
function isRow() {
    for(i = 0; i < 3; i++) {
        if ((isVal(i, 0) == 'X') && (isVal(i, 1) == 'X') && (isVal(i, 2) == 'X')) {
        	winner = 'X';
            return 'X';
        }
        else if ((isVal(i, 0) == 'Y') && (isVal(i, 1) == 'Y') && (isVal(i, 2) == 'Y')) {
        	winner = 'Y';
            return 'Y';
        }
    }
    return false;
}

// Checks diagonal win 
function isDia() {
    if ((isVal(0, 0) == 'X') && (isVal(1, 1) == 'X') && (isVal(2, 2) == 'X')) {
        winner = 'X';
        return 'X';
    }
    else if ((isVal(2, 0) == 'X') && (isVal(1, 1) == 'X') && (isVal(0, 2) == 'X')){
        winner = 'X';
        return 'X';
    }
    else if ((isVal(0, 0) == 'Y') && (isVal(1, 1) == 'Y') && (isVal(2, 2) == 'Y')) {
        winner = 'Y';
        return 'Y';
    }
    else if ((isVal(2, 0) == 'Y') && (isVal(1, 1) == 'Y') && (isVal(0, 2) == 'Y')){
        winner = 'Y';
        return 'Y';
    }
    return false;
}

// Checks if winner
function isWinner() {
    if (isRow() || isCol() || isDia()) {
        alert('The winner is ' + winner);
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

// Play the game
function toggleTurn() {
        if(turn) {
            makeX();
            turn = !turn;
        }
        else {
            makeY();
            turn = !turn;        
        }
}

var cells = document.getElementsByClassName('display-cell');

for (i=0; i<9; i++) {
    cells[i].onclick = function () {
        // Game goes here.
        if (turn) {
            makeX();
        }
        else {
            makeY();
        }
        if(isWinner()) {
            return winner;
        }
    }
}

// Reset
	reset.addEventListener('click', function () {
		for (i = 0; i < 3; i++) {
			for (j = 0; j < 3; j++) {
				table[i][j].innerText = '-';
			}
		}
	});


// function playGame() {
//     for(i = 0; i < 9; i++) {
//         if ((i % 2) === 0) {
//             alert('X turn')
//         }
//         else {
//             alert('Y turn')           
//         }
//         if(isWinner()) {
//             return winner;
//         }
//     }
// }
