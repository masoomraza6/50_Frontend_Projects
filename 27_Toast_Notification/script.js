const btn = document.querySelector('.btn');
const notification = document.querySelector('.notification');

let current = 0
const msgArry = ['Message One', 'Message Two', 'Message Three', 'Message Four'];
const types = ['info', 'success', 'error'];

btn.addEventListener('click', () => {

    
    if(current > msgArry.length - 1){
        current = 0;
    }
    const notif = document.createElement('p');
    notif.classList.add(`btn`);
    notif.classList.add(rndomClass());
    notif.innerText += msgArry[current];
    notification.append(notif);

    current++;

    setTimeout(() => {
        notif.remove();
    }, 3000);

    function rndomClass(){
        return types[Math.floor(Math.random() * types.length)];
    }
});