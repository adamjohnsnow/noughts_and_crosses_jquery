describe('game', function(){
  var game;

  beforeEach(function(done){
    game = new Game();
    done();
  })

  it('has a game board array', function(){
    expect(game.board).toEqual(['', '', '', '', '', '', '', '', ''])
  })
})
