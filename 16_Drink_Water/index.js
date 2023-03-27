const smallCup = document.querySelectorAll('.cup-small');
const liters = document.querySelector('#liters');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');

smallCup.forEach((cup, idx)=>{
    cup.addEventListener('click', ()=> highlightCups(idx));
});

function highlightCups(idx){
    if(idx === 7 && smallCup[idx].classList.contains('full')) idx--;
    else if(smallCup[idx].classList.contains('full' && !smallCup[idx].nextElementSibling.classList.contains('full'))){
        idx--;
    }

    smallCup.forEach((cup, idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full');
        }else{
            cup.classList.remove('full');
        }
    })

    updateBigCup();
};
function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCup.length;

    if(fullCups === 0){
        percentage.style.visibility = 'hidden';
    }else{
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else{
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }
}