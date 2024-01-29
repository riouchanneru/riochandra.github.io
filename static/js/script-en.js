// script.js
document.getElementById('menu-click').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default behavior of the anchor link
    const link = document.getElementById('menu-click');
    const resultDiv = document.getElementById('result');

    if (link.classList.contains('link-clicked')) {
        link.classList.remove('link-clicked');
        
    } else {
        link.classList.add('link-clicked');
       
    }
});
