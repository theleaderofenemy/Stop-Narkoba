
// Mobile Menu Toggle
 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 const navMenu = document.getElementById('nav-menu');

 mobileMenuBtn.addEventListener('click', () => {
     navMenu.classList.toggle('show');
 });

 // Smooth Scrolling for Navigation Links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
         
         if (targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 70,
                 behavior: 'smooth'
             });
             
             // Close mobile menu if open
             if (navMenu.classList.contains('show')) {
                 navMenu.classList.remove('show');
             }
         }
     });
 });

 // Form Submission
 const form = document.getElementById('consultation-form');
 
 form.addEventListener('submit', function(e) {
     e.preventDefault();
     
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;
     
     alert(`Terima kasih ${name}! Pesan Anda telah dikirim. Kami akan menghubungi Anda melalui email ${email} segera.`);
     form.reset();
 });

 // Intersection Observer for animations
 const observerOptions = {
     threshold: 0.2
 };

 // Function to animate number counting
 function animateCount(element, start, end, duration) {
     let startTimestamp = null;
     const step = (timestamp) => {
         if (!startTimestamp) startTimestamp = timestamp;
         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
         const currentCount = Math.floor(progress * (end - start) + start);
         
         // Format the number with commas
         element.textContent = currentCount.toLocaleString('id-ID') + (end === 3600000 ? ' orang' : ' orang');
         
         if (progress < 1) {
             window.requestAnimationFrame(step);
         } else {
             element.textContent = end.toLocaleString('id-ID') + ' orang';
         }
     };
     window.requestAnimationFrame(step);
 }

 // Animate statistics bars
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             if (entry.target.classList.contains('section-title')) {
                 entry.target.classList.add('animated');
             } else if (entry.target.classList.contains('stats-container')) {
                 entry.target.classList.add('animated');
                 
                 // Animate the progress bars
                 setTimeout(() => {
                     document.querySelector('.users').style.width = '1.3%';
                     document.querySelector('.non-users').style.width = '98.7%';
                     
                     // Animate the count numbers
                     animateCount(document.getElementById('users-count'), 0, 3600000, 2000);
                     animateCount(document.getElementById('non-users-count'), 0, 265000000, 2000);
                 }, 300);
             } else if (entry.target.classList.contains('dangers-grid')) {
                 entry.target.classList.add('animated');
                 
                 // Animate each card with delay
                 const cards = entry.target.querySelectorAll('.danger-card');
                 cards.forEach((card, index) => {
                     setTimeout(() => {
                         card.classList.add('animated');
                     }, 200 * index);
                 });
             } else if (entry.target.classList.contains('stories-container')) {
                 entry.target.classList.add('animated');
                 
                 // Animate each story card with delay
                 const cards = entry.target.querySelectorAll('.story-card');
                 cards.forEach((card, index) => {
                     setTimeout(() => {
                         card.classList.add('animated');
                     }, 200 * index);
                 });
             } else if (entry.target.classList.contains('form-container')) {
                 entry.target.classList.add('animated');
             }
             
             // Unobserve after animation
             observer.unobserve(entry.target);
         }
     });
 }, observerOptions);

 // Observe elements for animation
 document.querySelectorAll('.section-title, .stats-container, .dangers-grid, .stories-container, .form-container').forEach(element => {
     observer.observe(element);
 });

 // Floating effect for danger icons
 const dangerIcons = document.querySelectorAll('.danger-icon');
 dangerIcons.forEach(icon => {
     let randomDelay = Math.random() * 2;
     icon.style.animation = `float 3s ease-in-out ${randomDelay}s infinite`;
 });

 // Add floating animation
 const style = document.createElement('style');
 style.textContent = `
     @keyframes float {
         0% {
             transform: translateY(0px);
         }
         50% {
             transform: translateY(-10px);
         }
         100% {
             transform: translateY(0px);
         }
     }
 `;
 document.head.appendChild(style);


(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'963b15d116c83d7b',t:'MTc1MzI3MjczNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();

// Tutup navbar saat scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

if (scrollTop !== lastScrollTop) {
 if (navMenu.classList.contains('show')) {
     navMenu.classList.remove('show');
 }
}

lastScrollTop = scrollTop;
});