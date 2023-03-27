const searchBtn = document.querySelector('#searchBtn');
const inputBx = document.querySelector('.inputBx');
const input = document.querySelector('input');

searchBtn.addEventListener('click', ()=>{
    inputBx.classList.toggle('active');
    input.classList.toggle('active');
})