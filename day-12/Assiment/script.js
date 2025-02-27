document.addEventListener("DOMContentLoaded", function () {
    const movieForm = document.getElementById("movieForm");
    if (movieForm) {
        movieForm.addEventListener("submit", function (e) {
            e.preventDefault();
            addMovie();
        });
    }

    const viewMovies = document.getElementById("viewMovies");
    if (viewMovies) {
        viewMovies.addEventListener("click", function () {
            window.location.href = "movie.html";
        });
    }

    const backHome = document.getElementById("backHome");
    if (backHome) {
        backHome.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }

    if (document.getElementById("movieList")) {
        displayMovies();
    }
});

function addMovie() {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    let movie = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        year: document.getElementById("year").value,
        rating: document.getElementById("rating").value,
        genre: document.getElementById("genre").value,
        poster: document.getElementById("poster").value
    };
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
    alert("Movie added successfully!");
    document.getElementById("movieForm").reset();
}

function displayMovies() {
    let movieList = document.getElementById("movieList");
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    if (movies.length === 0) {
        movieList.innerHTML = "<tr><td colspan='7'>No movies added yet!</td></tr>";
    } else {
        movies.forEach((movie, index) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${movie.name}</td>
                <td>${movie.description.substring(0, 100)}...</td>
                <td>${movie.year}</td>
                <td>${movie.rating}</td>
                <td>${movie.genre}</td>
                <td><img src="${movie.poster}" width="50"></td>
                <td><button onclick="deleteMovie(${index})">Delete</button></td>
            `;
            movieList.appendChild(row);
        });
    }
}

function deleteMovie(index) {
    let movies = JSON.parse(localStorage.getItem("movies"));
    movies.splice(index, 1);
    localStorage.setItem("movies", JSON.stringify(movies));
    location.reload();
}
