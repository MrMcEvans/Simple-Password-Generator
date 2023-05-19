var generateBtn = document.querySelector('#generate');

var charLower = ['a', 'b', 'd', 'c' ,'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var spec = ['!', '@', '#', '%', '^', '&', '*'];
var charUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


function createPasswordOptions(){
    var passwordLength = prompt(
        'How long would you like your password to be? (Required to be between 10 - 128 characters');


        if  (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 128) {

            alert('please try again, password length must be 10 - 128 characters in length.'
            );
            writePassword()
            return 
        }
    
    var includeSpeci = confirm('Include Special Characters?');

    var includeCharUp = confirm('Include Uppercase Letters?')

    var includeCharLc = confirm('Include Lowercase Letters?');

    var includeNum = confirm('Include Numbers?');

    var userOptions = {
        length: passwordLength,
        hasUpper: includeCharUp,
        hasLower: includeCharLc,
        hasNum: includeNum,
        hasSpecial: includeSpeci
    }

       

     return userOptions   


    }
function generatePassword(){
    var options = createPasswordOptions();
    
    var selectedCharacters = []
    var genPassword = "";
    var temp;
    if (options.hasLower) {
        selectedCharacters = selectedCharacters.concat(charLower)
    }
    if (options.hasUpper) {
        selectedCharacters = selectedCharacters.concat(charUpper)
    }
    if (options.hasSpecial) {
        selectedCharacters = selectedCharacters.concat(spec)
    }
    if (options.hasNum) {
        selectedCharacters = selectedCharacters.concat(num)
    }
    console.log(selectedCharacters)
    console.log(options.length)
    for (index = 0; index < options.length; index++) {
        temp = Math.floor(Math.random() * selectedCharacters.length);
        genPassword = genPassword + selectedCharacters[temp];
    }
    
    return genPassword
    
}


function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
    
}
    

 







generateBtn.addEventListener('click', writePassword)
