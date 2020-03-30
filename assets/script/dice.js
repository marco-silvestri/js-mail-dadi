/*

TODO Perform 2 rolls, the first for the user and the second for the AI, the highest number wins.

*/

var buttonUser = document.getElementById('rollingUser');
var buttonAi = document.getElementById('rollingAi');
var diceArray = [];
var rollUser;
var rollAi;
console.log('JS is up and running');

for (var i = 0; diceArray.length <= 5; i++) {
  diceArray[i] = i+1 ;
}

buttonUser.addEventListener('click',
  function(){
    var min = 0;
    var max = diceArray.length - 1;
    rollUser = diceArray[Math.floor(Math.random() * (max - min + 1)) + min];
    rollAi = diceArray[Math.floor(Math.random() * (max - min + 1)) + min];

    if (rollUser > rollAi) {
      console.log('User won');
    }
    else if (rollUser < rollAi){
      console.log('AI won');
    }
    else {
      console.log('Issa tie!');
    }
  }
);
