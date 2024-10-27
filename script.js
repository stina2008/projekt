document.getElementById('addmoviebutton').addEventListener('click', function() {
    const movieinput = document.getElementById('movieinput');
    const movietitle = movieinput.value.trim();

    if (movietitle) {
        const movielist = document.getElementById('movielist');
        const listitem = document.createElement('li');
        listitem.textContent = movietitle;
        movielist.appendChild(listitem);

        //clear the input field
        movieinput.value = '';
    } else {
        alert('Please enter a movie title.');
    }
}); 