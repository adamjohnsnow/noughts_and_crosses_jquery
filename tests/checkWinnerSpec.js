describe('CheckWinner', function(){
  var checker;

  it('selects the right elements from board - row', function(){
    var board = ['O', 'X', 'O', '', '', '', 'X', '', '']
    expect(selectResults(board, [0, 1, 2])).toEqual('O,X,O')
  })

  it('selects the right elements from board - column', function(){
    var board = ['O', 'X', 'O', '', 'O', '', 'X', 'X', '']
    expect(selectResults(board, [1, 4, 7])).toEqual('X,O,X')
  })

  it('selects the right elements from board - diagonal', function(){
    var board = ['O', 'X', 'O', '', 'O', '', 'X', 'X', '']
    expect(selectResults(board, [2, 4, 6])).toEqual('O,O,X')
  })

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

  it('declares a draw', function(){
    checker = CheckWinner(['O', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O'], 'O');
    expect(checker).toEqual('Draw');
  })
})
