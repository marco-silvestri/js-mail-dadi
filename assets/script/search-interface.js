/*

TODO Allow the user to perform a search on a local array. Opt: Allow the user to insert other values in the array.

*/

// Declare array

var userCollection = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];


// References
var buttonSearch = document.getElementById('buttonSearch');
var resultArea = document.getElementById('result');
var userScope;
var userFound = false;

//var searchInput = prompt('Search for an existing e-mail address').toLowerCase();

buttonSearch.addEventListener('click',
  function functionName() {
    var searchInput = document.getElementById('emailSearch').value;
    for (var i = 0; i < userCollection.length && userFound == false; i++){
      userScope = userCollection[i];
      if (userScope == searchInput.value) {
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
);
