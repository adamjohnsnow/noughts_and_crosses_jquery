function Game(){
  this.board = ['', '', '', '', '', '', '', '', ''];
  this.turn = 'O'
}

Game.prototype.takeGo = function (cell) {
  if (this.board[cell - 1] === '') { this.board[cell - 1] = this.turn }
  this.checkForWin()
  this.turn == 'O' ? this.turn = 'X' : this.turn = 'O'
};

Game.prototype.checkForWin = function() {
  if (
    this.checkTopRowForWin() ||
    this.checkMidRowForWin() ||
    this.checkBottomRowForWin()
  ) {
    this.winner = this.turn
  }
}

Game.prototype.checkTopRowForWin = function() {
  if (
    this.board[0] === this.turn &&
    this.board[1] === this.turn &&
    this.board[2] === this.turn
  ) {
    return true;
  }
}

Game.prototype.checkMidRowForWin = function() {
  if (
    this.board[3] === this.turn &&
    this.board[4] === this.turn &&
    this.board[5] === this.turn
  ) {
    return true;
  }
}

Game.prototype.checkBottomRowForWin = function() {
  if (
    this.board[6] === this.turn &&
    this.board[7] === this.turn &&
    this.board[8] === this.turn
  ) {
    return true;
  }
}
