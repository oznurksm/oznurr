document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    if (contactForm && successMessage) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var message = document.getElementById("message").value;
            console.log("Gönderilen Mesaj: ", message);

            successMessage.style.display = 'block';
            contactForm.reset();

            setTimeout(function() {
                successMessage.style.display = 'none';
            }, 3000);
        });
    } else {
        console.error('ID\'ye sahip elementler bulunamadı.');
    }

    const müzikImages = document.querySelectorAll('.müzikgörsel img');
    müzikImages.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('büyüt');
        });
    });

    const münazaraImages = document.querySelectorAll('.münazaragörsel img');
    münazaraImages.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('büyüt');
        });
    });

    const tasarımImages = document.querySelectorAll('.tasarımgörsel img');
    tasarımImages.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('büyüt');
        });
    });
});
