function Game(){
  this.board = ['', '', '', '', '', '', '', '', ''];
  this.turn = 'O'
  this.winner = ''
}

Game.prototype.takeGo = function (cell) {
  if (this.board[cell - 1] === '' && !this.winner) {
    this.board[cell - 1] = this.turn
    this.winner = CheckWinner(this.board, this.turn)
    this.turn == 'O' ? this.turn = 'X' : this.turn = 'O'
  }
};
