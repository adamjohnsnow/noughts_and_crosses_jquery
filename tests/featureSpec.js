describe('feature testing', function(){
  var fixture;

  beforeEach(function () {
    loadFixtures('fixture.html');
    fixture = $('#takeGo');
  });

  afterEach(function () {
    $('#takeGo').remove();
  });

  describe('pressing the buttons', function(){

    it('to be defined', function() {
     expect( fixture ).toBeDefined();
    });

    it('has button', function(){
      expect($('#1')).toBeVisible();
    })

  })
})
