
const statusDisplay = document.querySelector('.game-startus');

let gameActive = true;

let currentPlayer = 'X';

// let gameState = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

let gameState = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""]
]
const winningMessage = () => `Player ${currentPlayer} win!`;
const drawMessage = () => `Game draw`;
const currentPlayerTurn = () => `Not turn for ${currentPlayer}`;

statusDisplay.innerHTML = currentPlayerTurn();
/*
const winningConditions = [
    [0, 1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [11, 12, 13, 14, 15],
    [12, 13, 14, 15, 16],
    [13, 14, 15, 16, 17],
    [14, 15, 16, 17, 18],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [21, 22, 23, 24, 25],
    [22, 23, 24, 25, 26],
    [23, 24, 25, 26, 27],
    [24, 25, 26, 27, 28],
    [25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34],
    [31, 32, 33, 34, 35],
    [32, 33, 34, 35, 36],
    [33, 34, 35, 36, 37],
    [34, 35, 36, 37, 38],
    [35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44],
    [41, 42, 43, 44, 45],
    [42, 43, 44, 45, 46],
    [43, 44, 45, 46, 47],
    [44, 45, 46, 47, 48],
    [45, 46, 47, 48, 49],
    [50, 51, 52, 53, 54],
    [51, 52, 53, 54, 55],
    [52, 53, 54, 55, 56],
    [53, 54, 55, 56, 57],
    [54, 55, 56, 57, 58],
    [55, 56, 57, 58, 59],
    [60, 61, 62, 63, 64],
    [61, 62, 63, 64, 65],
    [62, 63, 64, 65, 66],
    [63, 64, 65, 66, 67],
    [64, 65, 66, 67, 68],
    [65, 66, 67, 68, 69],
    [70, 71, 72, 73, 74],
    [71, 72, 73, 74, 75],
    [72, 73, 74, 75, 76],
    [73, 74, 75, 76, 77],
    [74, 75, 76, 77, 78],
    [75, 76, 77, 78, 79],
    [80, 81, 82, 83, 84],
    [81, 82, 83, 84, 85],
    [82, 83, 84, 85, 86],
    [83, 84, 85, 86, 87],
    [84, 85, 86, 87, 88],
    [85, 86, 87, 88, 89],
    [90, 91, 92, 93, 94],
    [91, 92, 93, 94, 95],
    [92, 93, 94, 95, 96],
    [93, 94, 95, 96, 97],
    [94, 95, 96, 97, 98],
    [95, 96, 97, 98, 99],
    [1, 11, 21, 31, 41],
    [11, 21, 31, 41, 51],
    [21, 31, 41, 51, 61],
    [31, 41, 51, 61, 71],
    [41, 51, 61, 71, 81],
    [51, 61, 71, 81, 91],
    [2, 12, 22, 32, 42],
    [12, 22, 32, 42, 52],
    [22, 32, 42, 52, 62],
    [32, 42, 52, 62, 72],
    [42, 52, 62, 72, 82],
    [52, 62, 72, 82, 92],
    [3, 13, 23, 33, 43],
    [13, 23, 33, 43, 53],
    [23, 33, 43, 53, 63],
    [33, 43, 53, 63, 73],
    [43, 53, 63, 73, 83],
    [53, 63, 73, 83, 93],
    [4, 14, 24, 34, 44],
    [14, 24, 34, 44, 54],
    [24, 34, 44, 54, 64],
    [34, 44, 54, 64, 74],
    [44, 54, 64, 74, 84],
    [54, 64, 74, 84, 94],
    [5, 15, 25, 35, 45],
    [15, 25, 35, 45, 55],
    [25, 35, 45, 55, 65],
    [35, 45, 55, 65, 75],
    [45, 55, 65, 75, 85],
    [55, 65, 75, 85, 95],
    [6, 16, 26, 36, 46],
    [16, 26, 36, 46, 56],
    [26, 36, 46, 56, 66],
    [36, 46, 56, 66, 76],
    [46, 56, 66, 76, 86],
    [56, 66, 76, 86, 96],
    [7, 17, 27, 37, 47],
    [17, 27, 37, 47, 57],
    [27, 37, 47, 57, 67],
    [37, 47, 57, 67, 77],
    [47, 57, 67, 77, 87],
    [57, 67, 77, 87, 97],
    [8, 18, 28, 38, 48],
    [18, 28, 38, 48, 58],
    [28, 38, 48, 58, 68],
    [38, 48, 58, 68, 78],
    [48, 58, 68, 78, 88],
    [58, 68, 78, 88, 98],
    [9, 19, 29, 39, 49],
    [19, 29, 39, 49, 59],
    [29, 39, 49, 59, 69],
    [39, 49, 59, 69, 79],
    [49, 59, 69, 79, 89],
    [59, 69, 79, 89, 99],
    [6, 17, 28, 39],
    [5, 16, 27, 38, 49],
    [4, 15, 26, 37, 48],
    [15, 26, 37, 48, 59],
    [3, 14, 25, 36, 47],
    [14, 25, 36, 47, 58],
    [25, 36, 47, 57, 69],
    [2, 13, 24, 35, 46],
    [13, 24, 35, 46, 57],
    [24, 35, 46, 57, 68],
    [35, 46, 57, 68, 79],
    [1, 12, 23, 34, 45],
    [12, 23, 34, 45, 56],
    [23, 34, 45, 56, 67],
    [34, 45, 56, 67, 78],
    [45, 56, 67, 78, 89],
    [0, 11, 22, 33, 44],
    [11, 22, 33, 44, 55],
    [22, 33, 44, 55, 66],
    [33, 44, 55, 66, 77],
    [44, 55, 66, 77, 88],
    [55, 66, 77, 88, 99],
    [10, 21, 32, 43, 54],
    [21, 32, 43, 54, 65],
    [32, 43, 54, 65, 76],
    [43, 54, 65, 76, 87],
    [54, 65, 76, 87, 98],
    [20, 31, 42, 53, 65],
    [31, 42, 53, 65, 76],
    [42, 53, 65, 76, 87],
    [30, 41, 52, 63, 74],
    [41, 52, 63, 74, 85],
    [52, 63, 74, 85, 96],
    [40, 51, 62, 73, 84],
    [51, 62, 73, 84, 95],
    [50, 61, 72, 83, 94],
    [60, 71, 82, 93],
    [3, 12, 21, 30],
    [4.13, 22, 31, 40],
    [5, 14, 23, 32, 41],
    [14, 23, 32, 41, 50],
    [6, 15, 24, 33, 42],
    [15, 24, 33, 42, 51],
    [24, 33, 42, 51, 60],
    [7, 16, 25, 34, 43],
    [16, 25, 34, 43, 52],
    [25, 34, 43, 52, 61],
    [34, 43, 52, 61, 70],
    [8, 17, 26, 35, 44],
    [17, 26, 35, 44, 53],
    [26, 35, 44, 53, 62],
    [35, 44, 53, 62, 71],
    [44, 53, 62, 71, 80],
    [9, 18, 27, 36, 45],
    [18, 27, 36, 45, 54],
    [27, 36, 45, 54, 63],
    [36, 45, 54, 63, 72],
    [45, 54, 63, 72, 81],
    [54, 63, 72, 81, 90],
    [19, 28.37, 46, 55],
    [28.37, 46, 55, 64],
    [37, 46, 55, 64, 73],
    [46, 55, 64, 73, 82],
    [55, 64, 73, 82, 91],
    [29, 38, 47, 56, 65],
    [38, 47, 56, 65, 74],
    [47, 56, 65, 74, 83],
    [56, 65, 74, 83, 92],
    [39, 48, 57, 66, 75],
    [48, 57, 66, 75, 84],
    [57, 66, 75, 84, 93],
    [49, 58, 67, 76, 85],
    [58, 67, 76, 85, 94],
    [59, 68, 77, 86, 95],
    [69, 78, 87, 96]
];
*/
function handleCellPlayed(clickedCell, clickedCellIndex) {
    // gameState[clickedCellIndex] = currentPlayer;
    // clickedCell.innerHTML = currentPlayer;
    // console.log("data: ", clickedCell, clickedCellIndex)
    let rowIndex = clickedCellIndex % 10
    let colIndex = Math.floor(clickedCellIndex / 10)
    gameState[colIndex][rowIndex] = currentPlayer
    clickedCell.innerHTML = currentPlayer;
}
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    // let roundWon = false;
    // for (let i = 0; i <= 188; i++) {
    //     const winCondition = winningConditions[i];
    //     let a = gameState[winCondition[0]];
    //     let b = gameState[winCondition[1]];
    //     let c = gameState[winCondition[2]];
    //     let d = gameState[winCondition[3]];
    //     let e = gameState[winCondition[4]];
    //     if (a === '' || b === '' || c === '' || d === '' || e === '') {
    //         continue;
    //     }
    //     if (a === b && b === c && c === d && d === e) {
    //         roundWon = true;
    //         break
    //     }
    // }
    // if (roundWon) {
    //     statusDisplay.innerHTML = winningMessage();
    //     gameActive = false;
    //     return;
    // }

    // let roundDraw = !gameState.includes("");
    // if (roundDraw) {
    //     statusDisplay.innerHTML = drawMessage();
    //     gameActive = false;
    //     return;

    // }

    checkWin()
    handlePlayerChange();
}

function checkWin() {
    for (let i = 0; i < gameState.length; i++) {
        for (let j = 0; j < gameState[i].length; j++) {
            let currentValue = gameState[i][j]
           
            if (currentValue == "X" || currentValue == "O") {
                // hang doc
                let win = true;
                for (let k = 1; k < 5; k++) {
                    if (gameState[i + k][j] !== currentValue) {
                        win = false;
                        break;
                    }
                }
                if (win) {
                    console.log("Win")
                    gameActive = false
                    return
                }

                // hang ngang
                win = true;
                for(let k = 1; k < 5; k++) {
                    if (gameState[i][j+k] !== currentValue) {
                        win = false;
                        break;
                    }
                }
                if (win) {
                    gameActive = false
                    return
                }

                // cheo xuong
                win = true;
                for(let k = 1; k < 5; k++) {
                    if (gameState[i+k][j+k] !== currentValue) {
                        win = false;
                        break;
                    }
                }
                if (win) {
                    gameActive = false
                    return
                }

                // cheo nguoc
                win = true;
                for(let k = 1; k < 5; k++) {
                    if (gameState[i+k][j-k] !== currentValue) {
                        win = false;
                        break;
                    }
                }
                if (win) {
                    gameActive = false
                    return
                }
            }
        }
    }
}

function handleCellClick(clickedCellEvent) {

    const clickedCell = clickedCellEvent.target;

    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    let rowIndex = clickedCellIndex % 10
    let colIndex = Math.floor(clickedCellIndex / 10)

    console.log(colIndex, rowIndex, gameState[colIndex][rowIndex])
    if (gameState[colIndex][rowIndex] !== "" || !gameActive) {
        return;
    }
    console.log("go")
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];;
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.restart-game').addEventListener('click', handleRestartGame);
