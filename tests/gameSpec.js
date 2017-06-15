describe('Game', function(){
  var game;

  beforeEach(function(done){
    game = new Game();
    done();
  })

  it('has a game board array', function(){
    expect(game.board).toEqual(['', '', '', '', '', '', '', '', ''])
  })

  it('starts with player O', function(){
    expect(game.turn).toEqual('O')
  })

  it('can take a go and switch player', function(done){
    game.takeGo(5)
    expect(game.board).toEqual(['', '', '', '', 'O', '', '', '', ''])
    expect(game.turn).toEqual('X')
    done();
  })

})
