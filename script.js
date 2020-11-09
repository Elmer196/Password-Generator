// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {

  var pwLength = parseInt(prompt("From 8 to 128 characters, how long would you like your password to be?"));
  var lowerCase = prompt("Would you like to use lower case characters? Type Y for yes/Press cancel for no.");
  var upperCase = prompt("Would you like to use upper case characters? Type Y for yes/Press cancel for no.");
  var numberCase = prompt("Would you like to use numerical characters? Type Y for yes/Press cancel for no.");
  var specialCase = prompt("Would you like to use special characters such as *&^? Type Y for yes/Press cancel for no.");


  function generatePassword(){

    if (Number.isInteger(pwLength) != true || pwLength < 8 || pwLength > 128){
      
      alert("Must be a number between 8 and 128. Click Generate Password again.");

    }
   
    else if(pwLength && lowerCase && upperCase && numberCase && specialCase){
      var pw = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && lowerCase && upperCase && numberCase){
      var pw = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && lowerCase && upperCase && specialCase){
      var pw = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && lowerCase && numberCase && specialCase){
      var pw = '';
      var characters = 'abcdefghijklmnopqrstuvwxyz0123456789!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && upperCase && numberCase && specialCase){
      var pw = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && lowerCase && upperCase){
      var pw = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && numberCase && specialCase){
      var pw = '';
      var characters = '0123456789!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && lowerCase && specialCase){
      var pw = '';
      var characters = 'abcdefghijklmnopqrstuvwxyz!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && upperCase && numberCase){
      var pw = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && lowerCase && numberCase){
      var pw = '';
      var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && upperCase && specialCase){
      var pw = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && lowerCase){
      var pw = '';
      var characters = 'abcdefghijklmnopqrstuvwxyz';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && upperCase){
      var pw = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && numberCase){
      var pw = '';
      var characters = '0123456789';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else if(pwLength && specialCase){
      var pw = '';
      var characters = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
      var charaLength = characters.length;
      for ( var i = 0; i < pwLength; i++ ) {
          pw += characters.charAt(Math.floor(Math.random() * charaLength));
      }
      return pw;
    }

    else{
      alert("You have not met password criteria. Please click Generate Password button again.");
    }


  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
