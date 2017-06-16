describe('CheckWinner', function(){
  var checker;

  it('doesn\'t declare winner', function(){
    checker = CheckWinner(['', 'O', 'O', '', '', '', 'X', '', ''], 'O');
    expect(checker).not.toEqual('O');
  })

  it('declares winner for O on top row', function(){
    checker = CheckWinner(['O', 'O', 'O', '', '', '', 'X', '', ''], 'O');
    expect(checker).toEqual('O');
  })

  it('declares winner for O on right column', function(){
    checker = CheckWinner(['', 'O', 'O', '', '', 'O', 'X', '', 'O'], 'O');
    expect(checker).toEqual('O');
  })

  it('declares winner for X on downleft diagonal', function(){
    checker = CheckWinner(['', 'O', 'X', '', 'X', '', 'X', '', ''], 'X');
    expect(checker).toEqual('X');
  })
})
