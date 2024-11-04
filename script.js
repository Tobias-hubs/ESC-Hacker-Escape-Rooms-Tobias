// document.getElementById('menuButton').addEventListener('click', function() {
//     var menu = document.getElementById('menu');
//     menu.classList.toggle('show');
    
// });

document.getElementById('menuButton').addEventListener('click', function() {
    var overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden');

    // Copy <p> element from header
    if (window.innerWidth <= 768) { // Checks for mobile px value
        var menuContent = document.getElementById('menu').innerHTML;
        document.getElementById('modalcontent').innerHTML = menuContent + '<button id="closeButton"><img src="close.png" alt="close" class="closebutton"></button>';
    }

    // Close menu
    document.getElementById('closeButton').addEventListener('click', function() {
        overlay.classList.add('hidden');
    });
});