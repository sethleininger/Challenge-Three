// Assignment code here

function generatePassword() {

    //1. prompt user for password criteria
    //  a. password length 8-128
    var passwordLength = parseInt(window.prompt("Enter the length of the password (minimum 8 characters, maximum 128 characters):"));
    if (passwordLength < 8 || passwordLength > 128) {
      return "Password length must be between 8 and 128 characters.";
    }
    //  b. lowercase, uppercase, number, special chars variables
    var includeLowercase = window.confirm("Include lowercase characters in password?");
    var includeUppercase = window.confirm("Include uppercase characters in password?");
    var includeNumeric = window.confirm("Include numbered characters in password?");
    var includeSpecial = window.confirm("Include special characters in password?");
    
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      return "You need to pick at least one character type for password.";
    }
    
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*(),.<>/?;:'";
    
    var passwordChars = "";
    if (includeLowercase) passwordChars += lowercaseChars;
    if (includeUppercase) passwordChars += uppercaseChars;
    if (includeNumeric) passwordChars += numericChars;
    if (includeSpecial) passwordChars += specialChars;
    
    //3. generate the password based on criteria
    var randomPassword = "";
    for (var i= 0; i < passwordLength; i++) {
      randomPassword += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length)); 
    }
     
    //4. display the password to page
      return randomPassword;
    
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