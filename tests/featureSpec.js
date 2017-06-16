describe('jQuery feature testing', function(){

  beforeEach(function () {
    loadFixtures('noughtsAndCrosses.html');
  });

  describe('pressing the buttons', function(){

    it('has game board in DOM', function(){
      expect(window.game.board).toEqual(['', '', '', '', '', '', '', '', '']);
    })

    it('has all buttons', function(){
      expect($('#1')).toBeInDOM();
      expect($('#2')).toBeInDOM();
      expect($('#3')).toBeInDOM();
      expect($('#4')).toBeInDOM();
      expect($('#5')).toBeInDOM();
      expect($('#6')).toBeInDOM();
      expect($('#7')).toBeInDOM();
      expect($('#8')).toBeInDOM();
      expect($('#10')).not.toBeInDOM();
    })

    it('tells you who\'s turn it is', function(){
      expect($('#turn')).toContainText('O\'s turn');
    })
    
    it('clicks a button, next turn', function(){
      $('#1').click();
      expect(window.game.turn).toBe('X')
    })

    it('clicks a button, turn recorded in board', function(){
      $('#3').click();
      expect(window.game.board[2]).toBe('O')
    })
  })
})
