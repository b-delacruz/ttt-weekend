/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[2,4,6],[0,4,8]]

/*---------------------------- Variables (state) ----------------------------*/

let board
let turn 
let winner 

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector('#message')

/*----------------------------- Event Listeners -----------------------------*/
const gameBoard = document.querySelector('#game-board').addEventListener('click', handleClick)

const resetBtnEl = document.querySelector('.reset').addEventListener('click', init)
/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  board = [null,null,null,null,null,null,null,null,null]
  turn = 1
  winner = null
  render()
}

function render() {
  board.forEach(function(element, index) {
    if (element === 1){
      squareEls[index].textContent = 'X'
    } else if (element === -1){
      squareEls[index].textContent = 'O'
    } else if (element === null){
      squareEls[index].textContent = ''
    }
  })

  if (winner === null){
    return (turn === 1 ? messageEl.textContent = "Player X's turn!": messageEl.textContent = "Player O's turn!")
  } else if (winner === 'T') {
    messageEl.textContent = 'Its a Tie! So Close'
  } else {
    return (winner === -1 ? messageEl.textContent = "Congrats Player X, You are the Winner!": messageEl.textContent = "Congrats Player O, You are the Winner!")
  }
} 
  
function handleClick(evt){
  console.log(evt.target)

  const sqIdx = (evt.target.id.slice(2))
    if (board[sqIdx] !== null || winner !== null){
      return
    } else {
      board[sqIdx] = turn
      turn *= -1
      getWinner()
      render()
    }
}

function getWinner() {
  winningCombos.forEach(function(combo){
    if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]=== 3 || Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]=== -3))){
      winner = turn 
    } else if (!board.includes(null)) {
      winner = "T"
    } else {
      return null
    }
  })
}
