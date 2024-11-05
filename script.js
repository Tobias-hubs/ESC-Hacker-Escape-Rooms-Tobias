document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const overlay = document.getElementById('overlay');
    const modal = document.querySelector('.modal');
    const closeButton = document.getElementById('closeButton');

    menuButton.addEventListener('click', function () {
        // Show overlay
        overlay.classList.remove('hidden'); // Remove hidden
        overlay.style.opacity = 0; // Opacity 0
        overlay.style.visibility = 'visible'; // Overlay visible

        // Fade in overlay
        setTimeout(() => {
            overlay.style.opacity = 1;
        }, 100);


        setTimeout(() => {
            modal.classList.add('show');
            closeButton.style.opacity = 1;
        }, 500);
    });

    closeButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('show');
        closeButton.style.opacity = 0;

        // Fade out overlay
        overlay.style.opacity = 0;

        setTimeout(() => {
            overlay.style.visibility = 'hidden';
        }, 500);
    }
});
