function CheckWinner(board, turn){
  this.wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return evaluateBoard(board, turn, this.wins);
}

function evaluateBoard(board, turn, wins){
  var winningResult = [turn, turn, turn].toString();
  for (var combination in wins) {
    if (winningResult == selectResults(board, wins[combination])){
      return true;
    }
  }
}

function selectResults(board, winsSelection){
  var boardSelection = [
    board[winsSelection[0]],
    board[winsSelection[1]],
    board[winsSelection[2]],
  ];
  return boardSelection.toString();
}
