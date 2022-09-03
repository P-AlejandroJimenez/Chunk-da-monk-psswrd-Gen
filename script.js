// A variable was added to account for password length.
// A series of arrays were created for generated password criteria specifications.
var passwordLength = 15;
var numbersAr = ["0", "1", "2", "3", "4", "5", "6", "7","8", "9"];
var specialCharactersAr = ["!", "@", "#", "$", "%", "<", ">", "&", "+"];
var upperCaseAr = ["A", "S", "D", "F", "G", "H", "J", "k", "L"];
var lowerCaseAr = ["q", "w", "e", "r", "t", "y", "u", "i", "o"];
var userChoice = [];
var trueCount = 0;


var generateBtn = document.querySelector("#generate");

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
// The function writePassword was defined using a called function and a conditional statment.
function writePassword() {
  var criteriaMet = criteriaPrompts ();
if (criteriaMet) {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");
 
    passwordText.value = newPassword;
    }
}
// A for loop using mathamatical operations was used to help randomly generate a password.
function generatePassword() {
    var password = "";
    for(var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * userChoice.length);
      password = password + userChoice[randomIndex];
    }
    return password;
}

// A function was added to initiate the following branch of code in order to gather the users criteria input.
// The name of the function was changed to not conflitct with functions above. 
// The function was condensed and simplified to contain only if statements as the conditoinals.
function criteriaPrompts() {
  window.alert("Your password must be between 8 and 128 characters long!")
  passwordLength = window.prompt ("Select Password Length:");
    if (
      (passwordLength < 8) ||
      (passwordLength > 128)) {
      window.alert("The password must meet the given criteria!");
      return false;
    } 
    // Syntax research was done to reform the confirm and if statements. Syntax research was also used to properly link the user choice to the generated password.
        window.alert("At least one criteria must be selected in order to generate a secure password.")
    if (confirm ("Include numbers?")); {
        window.alert("Numbers included in password!");
        userChoice = userChoice.concat(numbersAr);
    }
    if (confirm ("Include special characters?")) {
        window.alert("Special characters included in password!");
        userChoice = userChoice.concat(specialCharactersAr);
    }
    if (confirm ("Iclude uppercase letters?")) {
      window.alert("Uppercase letters included in password!");
      userChoice = userChoice.concat(upperCaseAr);

    }
    if (confirm ("Include lowercase letters?")) {
      window.alert("Lowercase letters included in password!");
      userChoice = userChoice.concat(lowerCaseAr);
    }
    return true;
} 