// Assignment Code
// A variable was added to account for password length.
var passwordLength = (18);
var generateBtn = document.querySelector("#generate");

// A function was added to initiate the following branch of code based on the user's input.
var generatePassword = function() {
  var userChoice = window.prompt ("Select Password Length:");
// Localized variables were added within the function to specify the type of characters used in the password generated.
  if (userChoice < 8) {
    window.alert("Your password is too short!")
    return;

  } else if (userChoice > 128) {
    window.alert("Your password is too Long!")
    return;
  }
// If and else if statements were added with corresponding window.alerts in order to confirm user choices. 
  var userChoice = window.confirm ("Include numbers?");
  
  if (userChoice === true) {
    window.alert("Numbers included in password!")

  } else if (userChoice === False) {
    window.alert("Numbers have been excluded from password!")
  }

  var userChoice = window.confirm ("Include special characters?");
  var userChoice = window.confirm ("Include uppercase characters?");
  var userChoice = window.confirm ("Include lowercase characters?");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
