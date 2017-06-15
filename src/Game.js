function Game(){
  this.board = ['', '', '', '', '', '', '', '', ''];
  this.turn = 'O'
}

Game.prototype.takeGo = function (cell) {
  this.board[cell - 1] = this.turn
  if (this.turn == 'O') { this.turn = 'X' }
};
