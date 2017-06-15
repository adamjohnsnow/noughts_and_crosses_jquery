describe('jQuery feature testing', function(){
  var fixture;

  beforeEach(function () {
    loadFixtures('noughtsAndCrosses.html');
  });

  afterEach(function () {
    $('#takeGo').remove();
  });

  describe('pressing the buttons', function(){

    it('has game board button form', function(){
      expect($('#takeGo')).toBeInDOM();
    })

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
  })
})
