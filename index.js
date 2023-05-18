var generateB = document.querySelector('#generate');
var numArray = [1, 2 ,3 ,4 ,5 ,6 , 7, 8, 9, 0];
var lowLetterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ]


function writePassword(){
    var passsword = generatePassword();
    var passwordText = document.querySelector('#passsword');

    passwordText.value = 'password';
}

function generatePassword(){
    var password = [];
    var passwordText = document.querySelector('#password');
    var passwordOptions = createPasswordOptions();
}
function createPasswordOptions(){
    var passwordLength = createPasswordLength();

    var specialCharacters = confirm('Click OK to confirm including special characters.');
}

function createPasswordLength(){
    var passwordLength = prompt(
    'how long would you like your password to be? (Required to be between 10 - 128 characters');

    createPasswordLength();

    if  (passwordLength < 10 || passwordLength > 128) {
        alert(
            'please try again, password length must be 10 - 128 characters in length.'
        );
        createPasswordLength();
    }

return passwordLength;
}

var generateBtn = document.querySelector('#generate');

generateBtn.addEventListener('click', writePassword);