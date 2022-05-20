// take user input to decide factors regular expression
let generatePasswordCharacterBank = () => {

  // Create variables to store user input on password factors
  let lowercaseBool = confirm("LOWERCASE");
  let uppercaseBool = confirm("UPPERCASE");
  let numbersBool = confirm("NUMBERS");
  let specialBool = confirm("SPECIAL");


  // store variables in array
  let factorsArray = [lowercaseBool, uppercaseBool, numbersBool, specialBool];


  // store all possible values for passwords in variables
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let special = [ " " , "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "^", "_", "`", "{", "}", "|", "~"].join("");



  // push to empty array all possible values for password user had accepted
  let characterArray = [];

  if(!factorsArray[0] && !factorsArray[1] && !factorsArray[2] && !factorsArray[3]){
    alert("ENSURE YOU CHOOSE ATLEAST ONE OPTION FOR PASSWORD CHARACTERS");
    return generatePasswordCharacterBank();
  }
  // use these to set ranges for ascii codes
  if(factorsArray[0]){
    characterArray.push(lowercase);
  }
  if(factorsArray[1]){
    characterArray.push(uppercase);
  }
  if(factorsArray[2]){
    characterArray.push(numbers);
  }
  if(factorsArray[3]){
    characterArray.push(special);
  }

  return characterArray.join("");
}




// take user input for password length and return the value

let passLengthGenerator = () => {
  let passLength = prompt("NUMBER OF CHARACTERS (8 - 128)");
  
  if(passLength < 8 || passLength > 128){
    if(confirm("YOU HAVE ENTERED THE WRONG VALUE, WOULD YOU LIKE TO TRY AGAIN?")){
      return passLengthGenerator();
    }
    else {
      console.log(passLength + " HERE");
      window.close();
    }
  }
  else {
    return passLength;
  }


}


// generate password of user input length
let generatePassword = () => {
  let characterBank = generatePasswordCharacterBank();
  let passLength = passLengthGenerator();
  let password = "";

  for(let i = 0; i < passLength; i++){
    password = password + characterBank[Math.floor(Math.random() * characterBank.length)];
  }
  return password;
  
}




// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
