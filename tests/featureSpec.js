describe('jQuery feature testing', function(){

  beforeEach(function () {
    loadFixtures('noughtsAndCrosses.html');
  });

  afterEach(function () {
    $('#takeGo').remove();
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

    it('clicks a button', function(){
      $('#1')[0].click();
      expect(window.game.board[0]).toBe('O')
    })
  })
})
