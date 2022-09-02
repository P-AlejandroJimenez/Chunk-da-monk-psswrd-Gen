// A variable was added to account for password length.
// A series of arrays were created for generated password criteria specifications.
var passwordLength = (0);
var numbersAr = ["0", "1", "2", "3", "4", "5", "6", "7","8", "9"];
var specialCharactersAr = ["!", "@", "#", "$", "%", "<", ">", "&", "+"];
var upperCaseAr = ["A", "S", "D", "F", "G", "H", "J", "k", "L"];
var lowerCaseAr = ["q", "w", "e", "r", "t", "y", "u", "i", "o"];
var generateBtn = document.querySelector("#generate");

 
function generatePassword() {
}

// A function was added to initiate the following branch of code based on the user's input.
function criteriaPrompts() {
  userChoice = [];

  window.alert("Your password must be between 8 and 128 characters long!")
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
window.alert("At least one of the following character criteria must be selected in order to create a password.")  
var userChoice = window.confirm ("Include numbers?");
  
  if (userChoice === true) {
    window.alert("Numbers included in password!")

  } else if (userChoice === false) {
    window.alert("Numbers have been excluded from password!")
  }

  var userChoice = window.confirm ("Include special characters?");
  if (userChoice === true) {
    window.alert("Special characters included in password!")

  } else if (userChoice === false) {
    window.alert("Special characters have been excluded from password!")
  }

  var userChoice = window.confirm ("Include uppercase characters?");
  if (userChoice === true) {
    window.alert("Uppercase characters included in password!")

  } else if (userChoice === false) {
    window.alert("Uppercase characters have been excluded from password!")
  }

  var userChoice = window.confirm ("Include lowercase characters?");
  if (userChoice === true) {
    window.alert("Lowercase characters included in password!")

  } else if (userChoice === false) {
    window.alert("Lowercase characters have been excluded from password!")
    
  }
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var criteriaMet = criteriaPrompts();

  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}