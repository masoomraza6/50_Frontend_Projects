const cardBox = document.querySelectorAll('.cardBox');

cardBox.forEach(panel=>{
    panel.addEventListener('click', ()=>{
        removeActiveClass();
        panel.classList.add('active');
    })
})
function removeActiveClass(){
    cardBox.forEach(panel => {
        panel.classList.remove('active');
    })
}