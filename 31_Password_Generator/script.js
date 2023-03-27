const result = document.querySelector('.input');
const clipboard = document.querySelector('.btn');
const length = document.querySelector('#length');
const upper = document.querySelector('#uppercase');
const lower = document.querySelector('#lowercase');
const number = document.querySelector('#number');
const symbol = document.querySelector('#symbol');
const generate = document.querySelector('.btn1');

const rndmFun = {
    upper: rndmUpper,
    lower: rndmLower,
    number: rndmNum,
    symbol: rndmSymbol
};

clipboard.addEventListener('click', () => {
    const password = result.innerText;

    if(!password){
        return
    }

    navigator.clipboard.writeText(password);
    alert('Password copied');
});

generate.addEventListener('click', () => {
    
    const len = length.value;
    const hasUpper = upper.checked;
    const hasLower = lower.checked;
    const hasNum = number.checked;
    const hasSymbol = symbol.checked;

    if(len === 0){
        return '';
    }

    result.innerText = generatePassword(hasUpper, hasLower, hasNum, hasSymbol, len);

    function generatePassword(upper, lower, number, symbol, length){
        let generatedPassword = '';

        let typeCount = upper + lower + number + symbol;
        let typeArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

        for(let i = 0; i < length; i += typeCount){
            typeArr.forEach(type => {
                let val = Object.keys(type);
                generatedPassword += rndmFun[val]();
            })
        };

        let finalPassword = generatedPassword.slice(0, length);
        return finalPassword;
    }
})

function rndmUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function rndmLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function rndmNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function rndmSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}