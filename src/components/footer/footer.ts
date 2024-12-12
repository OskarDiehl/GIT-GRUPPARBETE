document.addEventListener('DOMContentLoaded', function () {
    const socialLinks = document.querySelectorAll('.footer a');
    
    socialLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        alert(` Tack för att du kontaktar oss ${link.textContent}`);
      });
    });
  });
  