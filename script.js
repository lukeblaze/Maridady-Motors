document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var topNav = document.querySelector('.top-nav');

    menuIcon.addEventListener('click', function() {
        if (topNav.style.display === 'flex') {
            topNav.style.display = 'none';
        } else {
            topNav.style.display = 'flex';
        }
    });
});
