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
    } else if (element === 'T'){
      squareEls[index].textContent = 'T'
    }
  })

  if (winner === null){
    return (turn === 1 ? messageEl.textContent = "Player X's turn!": messageEl.textContent = "Player O's turn!")
  } else if (winner === 'T') {
    messageEl.textContent = 'Its a Tie! So Close'
  } else {
    return (winner === 1 ? messageEl.textContent = "Congrats Player X, You are the Winner!": messageEl.textContent = "Congrats Player O, You are the Winner!")
  }
} 
  
function handleClick(evt) {
  const sqIdx = evt.target.id.substring(2)
    if (board[sqIdx] !== null || winner !== null){
      return 
    }
      board[sqIdx] = turn
      turn *= -1
      winner = getWinner()
      render()
}

function getWinner() {
    
  for (let i=0; i < winningCombos.length; i++) {
      if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === 3) {
          return 1
      } else  if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === -3) {
          return -1
      } else if (!board.includes(null)) {
          return "T" 
      } else {
        return null
      } 
    }
  }
