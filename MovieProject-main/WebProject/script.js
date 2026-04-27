document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('#slider', {
            slidesPerView: 4,      
            spaceBetween: 30,     
            loop: true,           
        });
    } else {
        console.error("error");
    }
});


document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        const isOpen = this.classList.contains('open');
        const icon = this.querySelector('.icon');


        // Відкриваємо поточний
        if (!isOpen) {
            this.classList.add('open');
            icon.innerText = '−'; // Ставимо довге тире
        } else {
            this.classList.remove('open');
            icon.innerText = '+';
        }
    });
});

document.getElementById('checkoutBtn').addEventListener('click', function() {
    // 1. Находим элементы
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const activeMethod = document.querySelector('.method-item.active').getAttribute('data-method');
    const packName = document.querySelector('.payment-details span').innerText;

    // 2. Простая проверка на заполнение
    if (!email || !password) {
        alert("Proszę wpisać email и hasło!");
        return;
    }

    const container = document.querySelector('.payment-card').parentNode; 

container.innerHTML = `
    <div class="payment-success" style="text-align: center; padding: 40px; color: white; background: #1f1f1f; border-radius: 15px;">
        <div style="font-size: 60px; color: #4CAF50; margin-bottom: 20px;">✔</div>
        <h2 style="margin-bottom: 10px;">Płatność powiodła się!</h2>
        <p>Dziękujemy! Pakiet <strong>${packName}</strong> został aktywowany для <strong>${email}</strong>.</p>
        
        <a href="index.html" class="checkout-btn" style="display: inline-block; text-decoration: none; margin-top: 25px; width: auto; padding: 12px 40px;">
            Wróć do strony głównej
        </a>
    </div>
`;
});

// Логика переключения методов оплаты (чтобы класс active менялся)
document.querySelectorAll('.method-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.method-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});