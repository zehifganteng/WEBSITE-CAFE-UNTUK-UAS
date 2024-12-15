const header = document.querySelector('header');

// Mengecilkan header saat di-scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

// Menyorot tautan navigasi yang aktif
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add("active");
        }
    });
});

// Fungsi carousel
const carouselImages = document.querySelector('.carousel-images');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
const intervalTime = 3000;

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    const translateX = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${translateX}%)`;
}

setInterval(nextSlide, intervalTime);

// Tombol kembali ke atas
const backToTopButton = document.createElement('button');
backToTopButton.id = 'back-to-top';
backToTopButton.innerHTML = '↑';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fungsi slider ulasan
let currentReview = 1;
const totalReviews = 3;

function showReview(index) {
    const reviews = document.querySelectorAll('.review-box');
    reviews.forEach(review => review.style.opacity = 0);

    setTimeout(() => {
        reviews.forEach(review => review.style.display = 'none');
        const reviewToShow = document.getElementById(`review-${index}`);
        reviewToShow.style.display = 'block';
        reviewToShow.style.opacity = 1;
    }, 500);
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentReview = currentReview - 1 < 1 ? totalReviews : currentReview - 1;
    showReview(currentReview);
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentReview = currentReview + 1 > totalReviews ? 1 : currentReview + 1;
    showReview(currentReview);
});

showReview(currentReview);

// Listener event untuk tombol kirim
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function () {
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        if (email === '' || name === '' || message === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Harap isi semua kolom formulir!',
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Pesan Terkirim!',
            text: 'Terima kasih atas kritik & saran Anda.',
        });

        document.getElementById('email').value = '';
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    });
});
