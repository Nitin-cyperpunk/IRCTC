function updateDateTime() {
    const now = new Date();
    const options = {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
    };
    const formattedDate = now.toLocaleDateString('en-IN', options);
    document.getElementById('datetime').textContent = formattedDate;
}


setInterval(updateDateTime, 1000);

function changeZoom(zoomLevel) {
    document.body.style.zoom = zoomLevel;
}

function changeLanguage(language) {
    if (language === 'hindi') {
        // Change the language to Hindi
        document.getElementById('register').textContent = 'पंजीकरण';
        document.getElementById('agent-login').textContent = 'एजेंट लॉगिन';
        document.getElementById('contact-us').textContent = 'संपर्क करें';
        document.getElementById('help-support').textContent = 'मदद और समर्थन';
        document.getElementById('daily-deals').textContent = 'रोज़ाना सौदे';
    } else {
        // Change the language back to English
        document.getElementById('register').textContent = 'REGISTER';
        document.getElementById('agent-login').textContent = 'AGENT LOGIN';
        document.getElementById('contact-us').textContent = 'CONTACT US';
        document.getElementById('help-support').textContent = 'HELP & SUPPORT';
        document.getElementById('daily-deals').textContent = 'DAILY DEALS';
    }
}



document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navLinks2 = document.getElementById('nav-links-2');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('hidden');
        navLinks2.classList.toggle('hidden');
    });
});

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
  }
  loco();

  