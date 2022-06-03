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
  console.log('Sanity Check')
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
    messageEl.textContent = 'Whose Turn Is It.'
  } else if (winner === 'T') {
    messageEl.textContent = 'Its a Tie'
  } else {
    messageEl.textContent = 'Congrats Winner!'
  }

  console.log(element)
  console.log(squareEls[index])
  } 

  console.log(squareEls)



function handleClick(evt){
  console.log(evt.target)
  const sqIdx = parseInt(evt.target.id.slice(2))
    if (board[sqIdx] !== null || winner !== null){
      console.log(sqIdx)
      console.log(winner)
      return
    } else {
      board[sqIdx] = turn
      console.log(board)
      turn *= -1
      getWinner()
      render()
    }
}


// Step 7 - Build the `getWinner` function
function getWinner() {
  winningCombos.forEach(function(combo){
    if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]=== -3 || Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]=== 3))){
      winner = turn 
    } else if (!board.includes(null)) {
      winner = "T"
    } else {
      return null
    }
  })
}

// Step 8 - Create Reset functionality

  // a) Add a reset button to the HTML document.

  // b) Store the new reset button element in a constant named `resetBtnEl`.

  // c) Attach an event listener to the `resetBtnEl`. On the `'click'` event it 
  //    should call the `init` function you created in 3.