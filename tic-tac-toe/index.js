//HTML ELEMENTS
let statusDiv = document.querySelector(".status")
let resetDiv = document.querySelector(".reset")
let cells = document.querySelector(".gameGrid")
let start = document.querySelector(".start")
let title = document.querySelector(".title")


//GAME VARIABLES
let winningCombos = [["cell1", "cell2", "cell3"], ["cell3", "cell2", "cell1"], ["cell1", "cell5", "cell9"], ["cell2", "cell5", "cell8"], ["cell8", "cell5", "cell2"], ["cell3", "cell6", "cell9"], ["cell9", "cell6", "cell3"], ["cell4", "cell5", "cell6"], ["cell6", "cell5", "cell4"], ["cell7", "cell8", "cell9"], ["cell9", "cell8", "cell7"], ["cell7", "cell5", "cell3"], ["cell3", "cell5", "cell7"]] //put all cell combos for win
// let winningCombos2 = []
// winningCombos.forEach((t) => {
//     winningCombos2.push((t.reverse()))
// }) //reverses the arrays of winning combos

let GamePatternX = []
let GamePatternO = []


//FUNCTIONS
// function reset()
// {
//   alert("reset!")
// }

// function handleCellClick(){
//   alert("cell")
// }
//EVENT LISTENERS

resetDiv.addEventListener("click", function()
{
  reset()
})




//CLASS FOR PLAYER TURN
//connect functions to the 3 innerhtml above
class UI{
  constructor(player){
    this.player = player
  }

  static startGame()
  {
    statusDiv.innerHTML = `playerX turn`

  }

  static switchTurnO()
  {
    statusDiv.innerHTML = `playerO turn`
  }

  static switchTurnX()
  {
    statusDiv.innerHTML = `playerX turn`
  }


}


  class TicTacToe {
    constructor() {

    }

    static pushArrayX(positionX){
      GamePatternX.push(positionX)
    }

    static pushArrayO(positionO){
      GamePatternO.push(positionO)
    }

    static winner(){
      let winnerO = winningCombos.some(innerArray => innerArray.length === GamePatternO.length && innerArray.every((element, index) => element === GamePatternO[index]))
      let winnerX = winningCombos.some(innerArray2 => innerArray2.length === GamePatternX.length && innerArray2.every((element, index) => element === GamePatternX[index]))
      if(winnerO === true)
      {
        title.innerHTML = 'O won!'
        resetDiv.innerHTML = `Restart Game`

      }

      if(winnerX === true)
      {
        title.innerHTML = 'X won!'
        resetDiv.innerHTML = `Restart Game`

      }





    }
  }


// $(".statusDiv").on("click", function())
// {
//
// }

start.addEventListener("click", function()
{
  UI.startGame()


})

cells.addEventListener("click", (e) =>{

  if(statusDiv.innerHTML === `playerX turn`)
  {
    var cellID = e.target.id //access clicked div ID
    var imgX = document.createElement('img')
    imgX.src = "x-tic.png"
    imgX.setAttribute("height", "200px");
    imgX.setAttribute("width", "200px");
    document.getElementById(cellID).appendChild(imgX)
    TicTacToe.pushArrayX(cellID)
    resetDiv.innerHTML = cellID
    UI.switchTurnO()




  }

  else if(statusDiv.innerHTML === `playerO turn`)
  {
    var cellID2 = e.target.id //access clicked div ID
    var imgO = document.createElement('img')
    imgO.src = "O-tic.png"
    imgO.setAttribute("height", "200px");
    imgO.setAttribute("width", "200px");
    document.getElementById(cellID2).appendChild(imgO)
    TicTacToe.pushArrayO(cellID2)
    resetDiv.innerHTML = cellID2
    UI.switchTurnX()

  }

  TicTacToe.winner()




})

resetDiv.addEventListener("click", () => {
  location.reload()
})
