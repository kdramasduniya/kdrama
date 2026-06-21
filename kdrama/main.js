document.addEventListener('DOMContentLoaded', function() {
    const showList = document.getElementById('show-list');
    
    function fetchShows() {
        fetch('/api/shows')
            .then(response => response.json())
            .then(data => {
                displayShows(data);
            })
            .catch(error => console.error('Error fetching shows:', error));
    }

    function displayShows(shows) {
        showList.innerHTML = '';
        shows.forEach(show => {
            const showItem = document.createElement('div');
            showItem.classList.add('show-item');
            showItem.innerHTML = `
                <h3>${show.title}</h3>
                <p>Genre: ${show.genre}</p>
                <p>Release Date: ${show.releaseDate}</p>
                <a href="/shows/${show.id}" class="btn">View Details</a>
            `;
            showList.appendChild(showItem);
        });
    }

    fetchShows();
});