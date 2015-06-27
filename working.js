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
    if (table[x][y].innerText == 'Y') {
        return 'Y';
    }
    else {
        return false;
    }
}

// Checks col win
function isCol() {
    for(i = 0; i < 3; i++) {
        if (isVal(0, i) && isVal(1, i) && isVal(2, i)) {
            winner = isVal(0, i);
            return true;
        }
    }
    return false;
}

// Checks row win
function isRow() {
    for(i = 0; i < 3; i++) {
        if (isVal(i, 0) && isVal(i, 1) && isVal(i, 2)) {
            winner = isVal(i, 0);
            return true;
        }
    }
    return false;
}

// Checks diagonal win 
function isDia() {
    if (isVal(0, 0) && isVal(1, 1) && isVal(2, 2)) {
        winner = isVal(0, 0);
        return true;
    }
    else if (isVal(2, 0) && isVal(1, 1) && isVal(0, 2)){
        winner = isVal(2, 0);
        return true;
    }
    return false;
}

// Checks if winner
function isWinner() {
    if (isRow() || isCol() || isDia()) {
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
            break;
        }
    }
}


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
