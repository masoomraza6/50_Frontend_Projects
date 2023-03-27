const textarea = document.querySelector('#textarea');
const tagsBox = document.querySelector('#tags');

textarea.addEventListener('keyup', (e)=>{
    createTag(e.target.value);

    if(e.key == 'Enter'){
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        randomTag();
    }
});

function createTag(input){
    const tags = input.split(',').filter(tag=>tag.trim() !== '').map(tag=>tag.trim());

    tagsBox.innerHTML = '';

    tags.forEach(tag => {
        const tagElem = document.createElement('span');
        tagElem.classList.add('tag');
        tagElem.innerText = tag;
        tagsBox.appendChild(tagElem);        
    });
};

function randomTag(){
    const times = 30;

    const interval = setInterval(()=>{
        
        const randomVal = picRandomTag();
    
        if(picRandomTag() != undefined){
            higlightTag(randomVal);
        }

        setTimeout(() => {
            unHighlightTag(randomVal);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomVal = picRandomTag();
            higlightTag(randomVal);
        }, 100);

    }, times * 100);
    
};

function picRandomTag(){
    const tag = document.querySelectorAll('.tag');
    return tag[Math.floor(Math.random() * tag.length)];
}

function higlightTag(input){
    input.classList.add('highlight');
}
function unHighlightTag(input){
    input.classList.remove('highlight');
}