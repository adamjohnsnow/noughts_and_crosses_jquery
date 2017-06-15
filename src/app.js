var game = new Game();

$(function () {

  $('#takeGo').click(function(number) {
    console.log('worked')
    game.takeGo(Number(number.target.id));
  })
})
