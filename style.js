// Assignment code here

var length = window.prompt("How many characters? Enter from 8-128");

var character = window.prompt("Add character type: uppercase,lowercase,numeric,special.");


function generatePassword(){
    var char = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numberic: '12345677890',
        special: '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'
    
    };
  
}















// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);