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

  it('player X takes a go', function(){
    game.takeGo(9)
    game.takeGo(1)
    expect(game.board).toEqual(['X', '', '', '', '', '', '', '', 'O'])
    expect(game.turn).toEqual('O')
  })

  it('guards against two attempts on the same cell', function(){
    game.takeGo(3)
    game.takeGo(3)
    expect(game.board).toEqual(['', '', 'O', '', '', '', '', '', ''])
  })

  it('O wins the game with top row', function(){
    game.board = ['O', '', 'O', '', '', '', '', '', '']
    game.takeGo(2);
    expect(game.winner).toEqual('O')
  })

  it('O wins the game with middle row', function(){
    game.board = ['', '', '', 'O', 'O', '', '', '', '']
    game.takeGo(6);
    expect(game.winner).toEqual('O')
  })

  it('O wins the game with bottom row', function(){
    game.board = ['', '', '', '', '', '', '', 'O', 'O']
    game.takeGo(7);
    expect(game.winner).toEqual('O')
  })
})
