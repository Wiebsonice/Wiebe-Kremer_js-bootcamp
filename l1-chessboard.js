const squares = 8;
let chessBoard = "";

let white;
let black;

for (let line = 0; line < squares; line++) {
    for (let singleSquare = 0; singleSquare < squares; singleSquare++) {
        if (line % 2 == 0) {
            black = "#";
            white = " ";
        } else {
            black = " ";
            white = "#";
        }
        if (singleSquare % 2 == 0) {
            chessBoard += white;
        } else {
            chessBoard += black;
        }
    }
    chessBoard += "\n";
}

console.log(chessBoard);
