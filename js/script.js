// function validate(userInput) {
//    var zipError = document.getElementById("zipError")
// 	if(!userInput) {
// 		// window.alert("Please fill in field");
// 		console.log("false");
// 		return false;
// 	} else if (userInput.length >= 5) {
// 		// window.alert("Must be less than 20 characters, please try again");
// 		// console.log("false");
//     zipError.innerHTML = "<span style='color: red;'>"+
//                         "Please enter a valid ZIP Code</span>"
// 		// return false;
//
// 	} else {
// 		console.log(userInput);
// 		window.alert("Your answer has been submitted");
//     error.innerHTML = ""
// 		return true;
// 	}
// }
//
// // -------------------------------------------------------------------------------
// // DON'T CHANGE ANYTHING BELOW THIS LINE!
// // -------------------------------------------------------------------------------
//
//
//
// function submitFunction() {
//   validate(document.getElementById("zipInput").value);
// }
//
// document.getElementById("submit-btn").addEventListener("click", function(event){
//   event.preventDefault()
// });



// function errorMessage() {
//
//         if (isNaN(document.getElementById("zipInput").value))
//         {
//
//             // Changing HTML to draw attention
//             error.innerHTML = "<span style='color: red;'>"+
//                         "Please enter a valid number</span>"
//                         return false;
//         } else {
//             error.innerHTML = ""
//             return true;
//         }
//     }

function validateForm() {
  var zipError = document.getElementById("zipError")
  var fnameError = document.getElementById("fnameError")
  var successMessage = document.getElementById("success")
  // var numbers = [0 - 9] * ;
  var numbers = /^[0-9]+$/;
  let x = document.forms["myForm"]["fnameInput"].value;
  let y = document.forms["myForm"]["zipInput"].value;

  if (x == "") {
    // window.alert("Name must be filled out");
    fnameError.innerHTML = "<span style='color: red;''>" +
      "Error: Invalid first name format.</span>"
    // return false;
  }
  if (y == "") {
    // window.alert("Zip must be filled out");
    zipError.innerHTML = "<span style='color: red;'>" +
      "Error: Invalid ZIP code format.</span>"
    return false;
  } else if (isNaN(y)) {
    zipError.innerHTML = "<span style='color: red;'>" +
      "Error: Invalid ZIP code format.</span>"
    return false;
  }else {
    zipError.innerHTML = ""
    fnameError.innerHTML = ""
    successMessage.innerHTML = "<span style='color: green;'>" +
      "Thank you!</span>"
    return false;
  }
}
