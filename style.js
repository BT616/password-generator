// Assignment code here


var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var special = "!@#$%^&*()_+"

var passwordlength ="";
var lowercaseSelect;
var uppercaseSelect;
var numericSelect;
var specialSelect;

var password="";
var passwordChar ="";

function generatePassword(){

var passwordLength = window.prompt("How many characters? Enter from 8-128");
passwordLength = parseInt(passwordLength);




var lowercaseSelect = confirm("do you want lowercase?");

if (lowercaseSelect){
    passwordChar += lowercase;
}
var uppercaseSelect = confirm("do you want uppercase?");

if (uppercaseSelect){
    passwordChar += uppercase;
}
var numericSelect = confirm("do you want numbers?");

if (numericSelect){
    passwordChar += numeric;
}
var specialSelect = confirm("do you want symbols?");

if (specialSelect){
    passwordChar += special;
}
console.log(passwordChar)


for (var i = 0; i < passwordLength; i++) {
password= password + passwordChar[Math.floor(Math.random() * passwordChar.length)]
console.log(password)
}
return password;
  
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
var password = generatePassword();
var passwordText = document.querySelector("#password");


passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);