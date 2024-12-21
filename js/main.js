
const movies = {
    nowShowing: [
        {
            title: "Inception",
            image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800",
            rating: 4.8,
            releaseDate: "2023-03-15",
            genre: ["Sci-Fi", "Action"]
        },
        {
            title: "The Dark Knight",
            image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800",
            rating: 4.9,
            releaseDate: "2023-04-01",
            genre: ["Action", "Drama"]
        },
        {
            title: "Interstellar",
            image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&w=800",
            rating: 4.7,
            releaseDate: "2023-02-28",
            genre: ["Sci-Fi", "Adventure"]
        }
    ],
    comingSoon: [
        {
            title: "The Matrix Resurrections",
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800",
            rating: 4.5,
            releaseDate: "2024-01-15",
            genre: ["Sci-Fi", "Action"]
        },
        {
            title: "Dune: Part Two",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800",
            rating: 4.6,
            releaseDate: "2024-02-01",
            genre: ["Sci-Fi", "Adventure"]
        }
    ]
};


function createMovieCard(movie) {
    return `
        <div class="col-md-4">
            <div class="card movie-card">
                <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <div class="d-flex align-items-center mb-2">
                        <span class="movie-rating">★</span>
                        <span class="ms-1">${movie.rating}/5</span>
                    </div>
                    <p class="card-text">Release: ${movie.releaseDate}</p>
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


    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with: ${email}`);
            e.target.reset();
        });
    }
});