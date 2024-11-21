document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");
    

    const productImages = document.querySelectorAll(".item img");


    productImages.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImage.src = img.src; 
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});





document.querySelectorAll('a[href^="."]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetClass = this.getAttribute('href').substring(1); 
        const targetElement = document.querySelector('.' + targetClass);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



