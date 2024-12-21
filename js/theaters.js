
const theaters = [
    {
        name: "Cineplex IMAX",
        location: "Downtown City Center",
        rating: 4.8,
        facilities: ["IMAX", "Dolby Atmos", "Recliner Seats"],
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800",
        address: "123 Main Street, Downtown"
    },
    {
        name: "Star Cinemas",
        location: "West Mall",
        rating: 4.6,
        facilities: ["4K Projection", "Dolby Sound", "Food Court"],
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800",
        address: "456 West Mall Road"
    },
    {
        name: "Luxury Cinema",
        location: "North Square",
        rating: 4.9,
        facilities: ["VIP Seating", "Dine-in Service", "Valet Parking"],
        image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=800",
        address: "789 North Square Avenue"
    },
    {
        name: "Family Cineplex",
        location: "East End",
        rating: 4.5,
        facilities: ["Family Seating", "Kids Play Area", "3D Screens"],
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800",
        address: "321 East End Boulevard"
    },
    {
        name: "Premium Pictures",
        location: "South City",
        rating: 4.7,
        facilities: ["Premium Lounges", "Bar Service", "4DX"],
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800",
        address: "654 South City Road"
    },
    {
        name: "Metro Movies",
        location: "Central Station",
        rating: 4.4,
        facilities: ["Metro Access", "Digital Projection", "Snack Bar"],
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800",
        address: "987 Station Square"
    },
    {
        name: "Royal Cinema",
        location: "Historic District",
        rating: 4.8,
        facilities: ["Historic Building", "Classic Screenings", "Premium Sound"],
        image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=800",
        address: "147 Heritage Street"
    },
    {
        name: "Digital Dreams",
        location: "Tech Park",
        rating: 4.6,
        facilities: ["8K Projection", "AR Experience", "Mobile Ordering"],
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800",
        address: "258 Innovation Drive"
    },
    {
        name: "Sunset Cinema",
        location: "Beach Front",
        rating: 4.7,
        facilities: ["Outdoor Screening", "Beach View", "Lounge Chairs"],
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800",
        address: "369 Beach Road"
    },
    {
        name: "Community Theater",
        location: "University District",
        rating: 4.3,
        facilities: ["Student Discounts", "Local Films", "Discussion Area"],
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800",
        address: "741 Campus Drive"
    }
];


function createTheaterCard(theater) {
    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <img src="${theater.image}" class="card-img-top" alt="${theater.name}">
                <div class="card-body">
                    <h5 class="card-title">${theater.name}</h5>
                    <div class="d-flex align-items-center mb-2">
                        <span class="movie-rating">★</span>
                        <span class="ms-1">${theater.rating}/5</span>
                    </div>
                    <p class="card-text">
                        <strong>Location:</strong> ${theater.location}<br>
                        <strong>Address:</strong> ${theater.address}
                    </p>
                    <div class="mb-3">
                        <strong>Facilities:</strong><br>
                        ${theater.facilities.map(f => `<span class="badge bg-light text-dark me-1 mb-1">${f}</span>`).join('')}
                    </div>
                    <button class="btn btn-primary w-100">View Showtimes</button>
                </div>
            </div>
        </div>
    `;
}


document.addEventListener('DOMContentLoaded', () => {
    const theatersContainer = document.getElementById('theatersList');
    if (theatersContainer) {
        theatersContainer.innerHTML = theaters.map(createTheaterCard).join('');
    }
});