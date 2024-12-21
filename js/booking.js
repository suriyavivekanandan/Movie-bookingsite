// Import data
import { showtimes } from './data/showtimes.js';

// Seat layout configuration
const ROWS = 8;
const SEATS_PER_ROW = 10;

// Initialize booking data
let selectedSeats = new Set();
let selectedShowtime = null;
let totalAmount = 0;

// Create seat layout
function createSeatLayout() {
    const seatContainer = document.getElementById('seatLayout');
    for (let row = 0; row < ROWS; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'seat-row mb-2';
        
        for (let seat = 0; seat < SEATS_PER_ROW; seat++) {
            const seatBtn = document.createElement('button');
            const seatId = `${String.fromCharCode(65 + row)}${seat + 1}`;
            seatBtn.className = 'seat-btn btn btn-outline-primary m-1';
            seatBtn.textContent = seatId;
            seatBtn.onclick = () => toggleSeat(seatBtn, seatId);
            rowDiv.appendChild(seatBtn);
        }
        seatContainer.appendChild(rowDiv);
    }
}

// Toggle seat selection
function toggleSeat(seatBtn, seatId) {
    if (selectedSeats.has(seatId)) {
        selectedSeats.delete(seatId);
        seatBtn.classList.remove('selected');
    } else {
        selectedSeats.add(seatId);
        seatBtn.classList.add('selected');
    }
    updateSummary();
}

// Update booking summary
function updateSummary() {
    const summarySeats = document.getElementById('selectedSeats');
    const summaryTotal = document.getElementById('totalAmount');
    const submitBtn = document.getElementById('submitBooking');
    
    if (selectedSeats.size > 0 && selectedShowtime) {
        const showtime = showtimes[movieTitle].find(s => s.time === selectedShowtime);
        totalAmount = selectedSeats.size * showtime.price;
        
        summarySeats.textContent = Array.from(selectedSeats).join(', ');
        summaryTotal.textContent = `$${totalAmount.toFixed(2)}`;
        submitBtn.disabled = false;
    } else {
        summarySeats.textContent = 'No seats selected';
        summaryTotal.textContent = '$0.00';
        submitBtn.disabled = true;
    }
}

// Initialize showtimes
function initializeShowtimes() {
    const movieTitle = document.getElementById('movieTitle').dataset.movie;
    const showtimeSelect = document.getElementById('showtimeSelect');
    
    if (showtimes[movieTitle]) {
        showtimes[movieTitle].forEach(show => {
            const option = document.createElement('option');
            option.value = show.time;
            option.textContent = `${show.time} - $${show.price}`;
            showtimeSelect.appendChild(option);
        });
    }
}

// Handle showtime selection
function handleShowtimeChange(e) {
    selectedShowtime = e.target.value;
    updateSummary();
}

// Handle booking submission
function handleBookingSubmit(e) {
    e.preventDefault();
    
    // In a real application, this would send data to a server
    const bookingData = {
        movie: document.getElementById('movieTitle').dataset.movie,
        showtime: selectedShowtime,
        seats: Array.from(selectedSeats),
        total: totalAmount
    };
    
    console.log('Booking submitted:', bookingData);
    alert('Booking successful! Check your email for confirmation.');
    window.location.href = 'index.html';
}

// Initialize booking page
document.addEventListener('DOMContentLoaded', () => {
    createSeatLayout();
    initializeShowtimes();
    
    // Event listeners
    document.getElementById('showtimeSelect').addEventListener('change', handleShowtimeChange);
    document.getElementById('bookingForm').addEventListener('submit', handleBookingSubmit);
});