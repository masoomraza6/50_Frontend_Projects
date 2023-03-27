const apiUrl = 'https://api.github.com/users/';
const input = document.querySelector('input');
const infoContianer = document.querySelector('.info-contianer');

async function getData(username){
   try {
    const {data} = await axios(apiUrl + username);
    createData(data);
   } catch (error) {
    console.log(error);
   }
}

input.addEventListener('keyup', (e) => {
    if(e.key == 'Enter'){

        getData(input.value);

        input.value = '';
    }
});

function createData(data){
    const {avatar_url, name, bio, followers, following, public_repos} = data;

    console.log(data);

    infoContianer.classList.add('active');
        infoContianer.innerHTML = `
        <div class="profile-img">
        <img src="${avatar_url}" alt="">
        </div>
        <div class="info-bx">
        <h2 class="name">${name}</h2>
        <p class="des">${bio}</p>
        <div class="followDetails">
        <p class="followers">${followers} Followers</p>
        <p class="followers">${following} Following</p>
        <p class="followers">${public_repos} Repos</p>
        </div>
        <div class="tags"></div>
        </div>
        `
}
