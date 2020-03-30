/*

TODO Perform 2 rolls, the first for the user and the second for the AI, the highest number wins.

*/

var rollingMaster = document.getElementById('rollingMaster');
var result = document.getElementById('result');
var scoreFieldAi = document.getElementById('scoreAi');
var scoreFieldUser = document.getElementById('scoreUser');
var scoreFieldTie = document.getElementById('scoreTie');
var diceArray = [];
var rollUser;
var rollAi;
var scoreAi = 0;
var scoreUser = 0;
var scoreTie = 0;
console.log('JS is up and running');

for (var i = 0; diceArray.length <= 5; i++) {
  diceArray[i] = i+1 ;
}

rollingMaster.addEventListener('click',
  function(){
    var min = 0;
    var max = diceArray.length - 1;
    rollUser = diceArray[Math.floor(Math.random() * (max - min + 1)) + min];
    rollAi = diceArray[Math.floor(Math.random() * (max - min + 1)) + min];

    if (rollUser > rollAi) {
      result.innerHTML = 'User won';
      scoreFieldUser.innerHTML = ++ scoreUser;
    }
    else if (rollUser < rollAi){
      result.innerHTML = 'AI won';
      scoreFieldAi.innerHTML = ++ scoreAi;
    }
    else {
      result.innerHTML = 'Issa tie';
      scoreFieldTie.innerHTML = ++ scoreTie;
    }
  }
);
