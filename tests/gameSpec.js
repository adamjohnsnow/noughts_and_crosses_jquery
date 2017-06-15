describe('Game', function(){
  var game;

  beforeEach(function(done){
    game = new Game();
    done();
  })

  describe('starting a game', function(){

    it('has a game board array', function(){
      expect(game.board).toEqual(['', '', '', '', '', '', '', '', ''])
    })

    it('starts with player O', function(){
      expect(game.turn).toEqual('O')
    })
  })

  describe('taking turns', function(){

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
  })

  describe('winning scenarios', function(){

    describe('rows', function(){

      it('O wins on top row', function(){
        game.board = ['O', '', 'O', '', '', '', '', '', '']
        game.takeGo(2);
        expect(game.winner).toEqual('O')
      })

      it('O wins on middle row', function(){
        game.board = ['', '', '', 'O', 'O', '', '', '', '']
        game.takeGo(6);
        expect(game.winner).toEqual('O')
      })

      it('O wins on bottom row', function(){
        game.board = ['', '', '', '', '', '', '', 'O', 'O']
        game.takeGo(7);
        expect(game.winner).toEqual('O')
      })
    })

    describe('columns', function(){

      it('X wins on left column', function(){
        game.board = ['X', '', '', 'X', '', '', '', '', 'O']
        game.takeGo(8)
        game.takeGo(7)
        expect(game.winner).toEqual('X')
      })

      it('X wins on middle column', function(){
        game.board = ['', 'X', '', '', 'X', '', '', '', 'O']
        game.takeGo(7)
        game.takeGo(8)
        expect(game.winner).toEqual('X')
      })

      it('X wins on right column', function(){
        game.board = ['', '', '', '', '', 'X', '', '', 'X']
        game.takeGo(1)
        game.takeGo(3)
        expect(game.winner).toEqual('X')
      })
    })

    describe('diagonals', function(){

      it('O wins on downright diagonal', function(){
        game.board = ['O', '', '', '', '', '', '', '', 'O']
        game.takeGo(5)
        expect(game.winner).toEqual('O')
      })

      it('X wins on downleft diagonal', function(){
        game.board = ['O', '', 'X', '', 'X', '', '', '', 'O']
        game.takeGo(2)
        game.takeGo(7)
        expect(game.winner).toEqual('X')
      })
    })
  })
})
