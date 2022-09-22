const btn = document.querySelector('button')

function alert(){
    console.log('I have been alerted')

}

function getData(){
    const choice = document.querySelector('input').value
fetch(`https://api.nasa.gov/planetary/apod?api_key=6AmnYeQNT8zlVUoHaFa9zpAtJ10B6vJYHPis6vvO&date=${choice}`)
.then(res => res.json())
.then(data => {
    console.log(data);
    document.querySelector('img').src = data.hdurl
    document.querySelector('h3').innerText = data.explanation
   
  
})
.catch(err => {
    console.log('error');
})
}

addEventListener('click', getData)
