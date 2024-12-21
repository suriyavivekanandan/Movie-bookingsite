
const movies = {
    nowShowing: [
        {
            title: "Viduthali Part-2",
            image: "images/viduhali.jpeg?",
            rating: 4.8,
            releaseDate: "2023-03-15",
            genre: ["Sci-Fi", "Action"],
            duration: "2h 28min"
        },
        {
            title: "The Dark Knight",
            image: "images/dark.jpeg",
            rating: 4.9,
            releaseDate: "2023-04-01",
            genre: ["Action", "Drama"],
            duration: "2h 32min"
        },
        {
            title: "Interstellar",
            image: "images/intrasteller.jpeg",
            rating: 4.7,
            releaseDate: "2023-02-28",
            genre: ["Sci-Fi", "Adventure"],
            duration: "2h 49min"
        },
        {
            title: "Pulp Fiction",
            image: "images/pluup.jpeg",
            rating: 4.8,
            releaseDate: "2023-05-10",
            genre: ["Crime", "Drama"],
            duration: "2h 34min"
        },
        {
            title: "The Matrix",
            image: "images/matrix.jpeg",
            rating: 4.7,
            releaseDate: "2023-05-15",
            genre: ["Sci-Fi", "Action"],
            duration: "2h 16min"
        },
        {
            title: "Avatar",
            image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800",
            rating: 4.6,
            releaseDate: "2023-05-20",
            genre: ["Sci-Fi", "Adventure"],
            duration: "2h 42min"
        }
    ],
    comingSoon: [
        {
            title: "The Matrix Resurrections",
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800",
            rating: 4.5,
            releaseDate: "2024-01-15",
            genre: ["Sci-Fi", "Action"],
            duration: "2h 28min"
        },
        {
            title: "Dune: Part Two",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800",
            rating: 4.6,
            releaseDate: "2024-02-01",
            genre: ["Sci-Fi", "Adventure"],
            duration: "2h 35min"
        },
        {
            title: "Black Widow",
            image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=800",
            rating: 4.4,
            releaseDate: "2024-03-15",
            genre: ["Action", "Adventure"],
            duration: "2h 14min"
        },
        {
            title: "The Batman 2",
            image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=800",
            rating: 4.7,
            releaseDate: "2024-04-01",
            genre: ["Action", "Crime"],
            duration: "2h 45min"
        }
    ]
};


function createMovieCard(movie) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card movie-card h-100">
                <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <div class="d-flex align-items-center mb-2">
                        <span class="movie-rating">★</span>
                        <span class="ms-1">${movie.rating}/5</span>
                    </div>
                    <p class="card-text">
                        <strong>Release:</strong> ${movie.releaseDate}<br>
                        <strong>Duration:</strong> ${movie.duration}
                    </p>
                    <div class="mb-3">
                        ${movie.genre.map(g => `<span class="badge bg-light text-dark me-1">${g}</span>`).join('')}
                    </div>
                    <button class="btn btn-primary w-100">Book Tickets</button>
                </div>
            </div>
        </div>
    `;
}


document.addEventListener('DOMContentLoaded', () => {
    const nowShowingContainer = document.getElementById('nowShowingMovies');
    const comingSoonContainer = document.getElementById('comingSoonMovies');

    if (nowShowingContainer) {
        nowShowingContainer.innerHTML = movies.nowShowing.map(createMovieCard).join('');
    }

    if (comingSoonContainer) {
        comingSoonContainer.innerHTML = movies.comingSoon.map(createMovieCard).join('');
    }
});