/*

TODO Allow the user to perform a search on a local array. Opt: Allow the user to insert other values in the array.

*/

// Declare array

var userCollection = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];


// References
var buttonSearch = document.getElementById('buttonSearch');
var buttonAdd = document.getElementById('buttonAdd');
var resultArea = document.getElementById('result');
var userScope;
var userFound = false;

//var searchInput = prompt('Search for an existing e-mail address').toLowerCase();

buttonSearch.addEventListener('click',
  function() {
    var searchInput = document.getElementById('emailSearch').value;
    if (searchInput != '') {
      for (var i = 0; i < userCollection.length && userFound == false; i++){
        userScope = userCollection[i];
        if (userScope == searchInput) {
          userFound = true;
        }
      }

      if (userFound == true) {
        resultArea.innerHTML = 'The user ' + searchInput + ' exists, also in a four-dimensional way.';
      }
      else {
        resultArea.innerHTML = 'The user ' + searchInput + ' does not exist.';
      }
    }
    else {
      resultArea.innerHTML = 'Please insert a valid value.';
    }
  }
);

buttonAdd.addEventListener('click',
  function() {
    var addInput = document.getElementById('emailAdd').value;
    if (addInput != '') {
      userCollection.push(addInput);
      resultArea.innerHTML = 'The user ' + addInput + ' has been added, also in the fourth dimension.';
    }
    else {
      resultArea.innerHTML = 'Please insert a valid value.';
    }
  }
);
