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
  // a) Create a function called `getWinner`

  /* 
   * There are two methods you can use to find out if there is a winner.
   *
   * Step b1 below is a more elegant method that takes advantage of the
   * `winningCombos` array you wrote above in step 5. 
   *
   * Step b2 might be a little simpler to comprehend, but you'll need to write  
   * more code. Step b2 also won't take advantage of the `winningCombos`
   * array, but using it as a reference will help you build a solution.
   * ***Ensure you choose only one path.***
   */

  // b1) Loop through each of the winning combination arrays defined in the 
  //     `winningCombos` array. Total up the three board positions using the 
  //     three indexes in the current combo. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at
  //     the index specified by the first index of that winning combination's
  //     array by returning that value.

  // b2) For each one of the winning combinations you wrote in step 5, find the
  //     total of each winning combination. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at 
  //     the index specified by the first index of that winning combination's 
  //     array by returning that value.

  // c) If there is no winner, check to see if there is a tie. Set the `winner` 
  //    variable to `'T'` if there are no more nulls in the board array by 
  //    returning the string `'T'`.

  // d) If there is no winner and there isn’t a tie, return `null`.

// Step 8 - Create Reset functionality

  // a) Add a reset button to the HTML document.

  // b) Store the new reset button element in a constant named `resetBtnEl`.

  // c) Attach an event listener to the `resetBtnEl`. On the `'click'` event it 
  //    should call the `init` function you created in 3.