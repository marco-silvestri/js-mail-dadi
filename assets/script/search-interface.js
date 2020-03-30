/*

TODO Allow the user to perform a search on a local array. Opt: Allow the user to insert other values in the array.

*/

// Declare array

var userCollection = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];


// References

var userScope;
var userFound = false;

var searchInput = prompt('Search for an existing e-mail address').toLowerCase();

  for (var i = 0; i < userCollection.length && userFound == false; i++){
    userScope = userCollection[i];
    if (userScope == searchInput) {
      userFound = true;
    }
  }

  if (userFound == true) {
    console.log('The user ' + searchInput + ' exists, also in a four-dimensional way.');
  }
  else {
    console.log('The user ' + searchInput + ' does not exist.');
  }
