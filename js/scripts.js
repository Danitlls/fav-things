// DECLARE VARIABLES AND TARGETTING THE ELEMENTS IN THE DOCUMENT

  var userInput = document.getElementById("things");
  var formOne = document.getElementById("myForm");

  var fill = [];

  function fillArray() {
      console.log("do something with", userInput.value);
      // var a = document.getElementsByClassName('print')
      fill.push(userInput.value);
      console.log(fill);
  }

  function clearForm(){
    document.getElementById("myForm").reset();
  }

//FUNCTION TO TARGET THE SUBMIT BUTTON, PREVENT DEFAULT AND EXECUTE ANOTHER FUNCTION ("fillArray")

formOne.addEventListener("submit", function(evt) {
    evt.preventDefault();
    fillArray();
//IT TARGET THE P ELEMENT IN THE DOCUMENT AND ASIGN IT THE VAR NAME 'PRINT':
    var print = document.getElementById('print')
// IT ADD TEXT TO THE P ELEMENT, IT RETURNS THE ELEMENTS IN THE ARRAY FILL[] JOIN BY ', '
    print.innerText = fill.join(', ')
    clearForm();
});
