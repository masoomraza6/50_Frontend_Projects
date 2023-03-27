const text = document.querySelector('#text');
const speed = document.querySelector('#speed');
const textVal = 'We Love Prgramming!';
let idx = 1;

let speedVal = 300 / speed.value;

textEffect();

function textEffect() {
    
    text.innerText = textVal.slice(0, idx);

    idx++;

    if(idx > textVal.length){
        idx = 1;
    }

    setTimeout(textEffect, speedVal);

}

speed.addEventListener('input', (e) => speedVal = 300 / e.target.value);