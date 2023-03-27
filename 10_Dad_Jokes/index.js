const joke = document.querySelector('#joke');
const btn = document.querySelector('.btn');

btn.addEventListener('click', generateJoke)

    async function generateJoke(){
        try {
            const config = {
                headers: {
                    Accept: 'application/json',
                },
            }
            const res = await fetch('https://icanhazdadjoke.com', config);
            const data = await res.json();
            joke.innerHTML = data.joke;
        } catch (error) {
            console.log(error);
        }
    }


    // if (joke.innerHTML == jokesContainer[rndm]) {
    //     rndm = Math.floor(Math.random() * jokesContainer.length);

    //     joke.innerHTML = jokesContainer[rndm];
    // }
