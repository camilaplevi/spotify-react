const searchInput = document.getElementById('search_input');
const resultArtists = document.getElementById('result_artist');
const resultPlaylist = document.getElementById('result_playlist');

function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist_name');
    const artistImage = document.getElementById('artist_img');
    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    resultArtists.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtists.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})