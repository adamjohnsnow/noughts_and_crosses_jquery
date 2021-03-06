function establish(){
  refreshGrid();
  activateButtons();
}

function activateButtons(){
  $('.btn').click(function(number) {
    game.takeGo(Number(number.target.id));
    refreshGrid();
  })
  $('#restart').click(function(number) {
    game = new Game();
    refreshGrid();
  })
}

function refreshGrid() {
  $('#turn').html(result())
  $("#1").html(game.board[0])
  $("#2").html(game.board[1])
  $("#3").html(game.board[2])
  $("#4").html(game.board[3])
  $("#5").html(game.board[4])
  $("#6").html(game.board[5])
  $("#7").html(game.board[6])
  $("#8").html(game.board[7])
  $("#9").html(game.board[8])
}

function result() {
  if(!game.winner){
    return game.turn + '\'s turn'
  }else if (game.winner === 'Draw'){
    return 'DRAW'
  }else{
    return game.winner + ' WINS'
  }
}
