const inputText = document.querySelector('input');
const containerTitle = document.getElementById('title');
const containerYear = document.getElementById('year');
const containerRuntime = document.getElementById('runtime');
const containerImage = document.getElementById('img');

inputText.addEventListener('keypress', (event) => {
  let key = event.which || event.keyCode;
  if (key === 13) { //codigo 13 es enter
    let movie = inputText.value;
    inputText.value = '';
    //console.log(movie);

    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=713fe342`)
    .then(response => response.json())//si la respuesta es correcta va a dar la informacion como una promesa
    .then(data => {
      //console.log(data);
      renderInfo(data);
    })
  }
})

const renderInfo = (data) => {
  containerTitle.innerHTML = data.Title;
  containerYear.innerHTML = data.Year;
  containerRuntime.innerHTML = data.Runtime;
  containerImage.innerHTML = `<img src="${data.Poster}">`;
}