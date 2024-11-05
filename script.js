// document.getElementById('menuButton').addEventListener('click', function() {
//     var menu = document.getElementById('menu');
//     menu.classList.toggle('show');
    
// });

// document.getElementById('menuButton').addEventListener('click', function() {
//     var overlay = document.getElementById('overlay');
//     overlay.classList.remove('hidden');

//     // Copy <p> element from header
//     if (window.innerWidth <= 768) { // Checks for mobile px value
//         var menuContent = document.getElementById('menu').innerHTML;
//         document.getElementById('modalcontent').innerHTML = menuContent + '<button id="closeButton"><img src="close.png" alt="close" class="closebutton"></button>';
//     }

//     // Close menu
//     document.getElementById('closeButton').addEventListener('click', function() {
//         overlay.classList.add('hidden');
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const overlay = document.getElementById('overlay');
    const modal = document.querySelector('.modal');
    const closeButton = document.getElementById('closeButton');

    menuButton.addEventListener('click', function() {
        // Visa overlay
        overlay.classList.remove('hidden'); // Ta bort hidden för att visa overlay
        overlay.style.opacity = 0; // Sätt opacity till 0
        overlay.style.visibility = 'visible'; // Gör overlay synlig

        // Fade in overlay
        setTimeout(() => {
            overlay.style.opacity = 1; // Halvtransparent bakgrund
        }, 100); // Kort fördröjning

        // Vänta och visa modalen och close-knappen
        setTimeout(() => {
            modal.classList.add('show'); // Lägg till 'show' för modal
            closeButton.style.opacity = 1; // Gör close-knappen synlig
        }, 500); // Fördröjning på 0.5s
    });

    closeButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('show'); // Ta bort 'show' från modal
        closeButton.style.opacity = 0; // Fade out close-knappen

        // Fade out overlay
        overlay.style.opacity = 0; // Fade out overlay

        setTimeout(() => {
            overlay.style.visibility = 'hidden'; // Gör overlay osynlig efter fade-out
        }, 500); // Samma tid som transition-tiden
    }
});
