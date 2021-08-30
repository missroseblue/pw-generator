let generateBtn = document.querySelector("#generate");

let number = window.confirm("do you want the password to include NUMBERS?")
let upper = window.confirm("do you want the password to include UPPERS?")
let lower = window.confirm("do you want the password to include LOWERS?")
let special = window.confirm("do you want the password to include SPECIALS?")
let lengthOfPassword = parseInt(window.prompt("HOW LONG do you want the password to be?"))

while (lengthOfPassword < 8 || lengthOfPassword > 128)  {
    lengthOfPassword = parseInt(window.prompt("the password must be inbetwwen 8 and 128"))
}

let library = ''
let numbers = '1234567890'
let lowers = 'abcdefghijklmnopqrstuvwxyz'
let uppers = 'ABCDEFGHIJKLMNPOQRSTUVWXYZ'
let specials = '~#$%^&*@><+='

if (number) library = library + numbers
if (upper) library = library + uppers
if (lower) library = library + lowers
if (special) library = library + specials

library = library.split('')

function randomNumberGenerator(maxNum) {
    let randomNum = Math.floor(Math.random()*maxNum);
    return randomNum;
};

let password = '';

for (let i=0; i<lengthOfPassword; i++) {
    password = password + library[randomNumberGenerator(library.length)];
}

function passwordWriter() {
    let passwordText = document.querySelector("#password");
    passwordText.value = password; 
}

generateBtn.addEventListener("click", passwordWriter);