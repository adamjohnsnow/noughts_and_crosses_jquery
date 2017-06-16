describe('CheckWinner', function(){
  var checker;

  it('doesn\'t declare winner', function(){
    checker = CheckWinner(['', 'O', 'O', '', '', '', 'X', '', ''], 'O');
    expect(checker).not.toEqual(true);
  })

  it('does declare winner', function(){
    checker = CheckWinner(['O', 'O', 'O', '', '', '', 'X', '', ''], 'O');
    expect(checker).toEqual(true);
  })
})
