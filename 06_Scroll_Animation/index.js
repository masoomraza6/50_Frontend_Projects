const boxs = document.querySelectorAll('.box');

window.addEventListener('scroll', ()=>{

    const triggerBottom = window.innerHeight / 5 * 4;

    boxs.forEach((box, i) => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
    
})