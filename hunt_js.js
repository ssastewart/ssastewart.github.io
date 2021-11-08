var randomTreasure = Math.floor(Math.random() * 9)
var randomTroll = Math.floor(Math.random() * 9)
var counter = 5
console.log(randomTreasure, randomTroll);

  if (randomTreasure === randomTroll){
   var randomTreasure = Math.floor(Math.random() * 9)
   console.log(randomTreasure, randomTroll)
 }

const treasure = (location) => {
counter=counter-1
  if (randomTreasure === location) {

    document.getElementById (location).innerHTML="🦃"
    setTimeout(()=>{document.getElementById("gameboard").innerHTML = "You win, let's eat!!!!!"},1000);

  }
  else if (randomTroll === location) {
    document.getElementById (location).innerHTML="🍽"
    setTimeout(()=>{document.getElementById("gameboard").innerHTML = "You lose!!!!!"},1000);
  }
  else if (randomTreasure !== location && randomTroll !== location){
    document.getElementById(location).innerHTML="🥦"
    document.getElementById("counter").innerHTML=`Turns remaining: ${counter}`
  }
  if (counter === 0){
      document.getElementById("gameboard").innerHTML = "Out of time."
  }

  }
  
