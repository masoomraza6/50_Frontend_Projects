const openMenu = document.querySelector('#open');
const closeMenu = document.querySelector('#close');
const container = document.querySelector('.container');

openMenu.addEventListener('click', ()=>{
    container.classList.add('show-nav');
})

closeMenu.addEventListener('click', ()=>{
    container.classList.remove('show-nav');
})

