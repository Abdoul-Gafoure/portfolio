
    document.addEventListener('DOMContentLoaded', function () {
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      let currentSlide = 0;
      const slides = document.querySelectorAll('.slide');
      const indicators = document.querySelectorAll('.slider-indicator');
      function showSlide(index) {
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.classList.remove('slide-inactive');
            slide.classList.add('slide-active');
          } else {
            slide.classList.remove('slide-active');
            slide.classList.add('slide-inactive');
          }
        });
        indicators.forEach((indicator, i) => {
          if (i === index) {
            indicator.classList.add('bg-primary');
            indicator.classList.remove('bg-gray-300');
          } else {
            indicator.classList.remove('bg-primary');
            indicator.classList.add('bg-gray-300');
          }
        });
      }
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          currentSlide = index;
          showSlide(currentSlide);
        });
      });
      setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }, 5000);
    });

    document.addEventListener('DOMContentLoaded', function () {
      const filterButtons = document.querySelectorAll('.portfolio-filter');
      const projectCards = document.querySelectorAll('.project-card');
      filterButtons.forEach(button => {
        button.addEventListener('click', function () {
          const filter = this.dataset.filter;
          filterButtons.forEach(btn => {
            btn.classList.remove('bg-primary', 'text-white');
            btn.classList.add('bg-gray-100', 'text-gray-700');
          });
          this.classList.remove('bg-gray-100', 'text-gray-700');
          this.classList.add('bg-primary', 'text-white');
          projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      let currentTestimonial = 0;
      const track = document.getElementById('testimonial-track');
      const indicators = document.querySelectorAll('.testimonial-indicator');
      const totalTestimonials = 3;
      function showTestimonial(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((indicator, i) => {
          if (i === index) {
            indicator.classList.add('bg-primary');
            indicator.classList.remove('bg-gray-300');
          } else {
            indicator.classList.remove('bg-primary');
            indicator.classList.add('bg-gray-300');
          }
        });
      }
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          currentTestimonial = index;
          showTestimonial(currentTestimonial);
        });
      });
      setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
      }, 6000);
    });
    document.addEventListener('DOMContentLoaded', function () {
      const counters = document.querySelectorAll('.counter');
      let animated = false;
      function animateCounters() {
        if (animated) return;
        animated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.target);
          const increment = target / 50;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, 40);
        });
      }
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      });
      counters.forEach(counter => {
        observer.observe(counter);
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      const voirCreationsBtn = document.getElementById('voir-creations-btn');
      const portfolioSection = document.getElementById('portfolio');
      voirCreationsBtn.addEventListener('click', function () {
        portfolioSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      const newsletterBtn = document.querySelector('.bg-primary.px-6.py-3.rounded-r-lg');
      const emailInput = document.querySelector('input[type="email"][placeholder="Votre email"]');
      function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `fixed top-6 right-6 z-50 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`;
        toast.innerHTML = `
            <div class="flex items-center">
            <i class="ri-${type === 'success' ? 'check' : 'error-warning'}-line text-xl mr-3"></i>
            <span>${message}</span>
            </div>
        `;
        document.body.appendChild(toast);
        setTimeout(() => {
          toast.classList.remove('translate-x-full');
        }, 100);
        setTimeout(() => {
          toast.classList.add('translate-x-full');
          setTimeout(() => {
            document.body.removeChild(toast);
          }, 300);
        }, 3000);
      }
      function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
      newsletterBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (!email) {
          showToast('Veuillez saisir votre adresse email', 'error');
          return;
        }
        if (!validateEmail(email)) {
          showToast('Veuillez saisir une adresse email valide', 'error');
          return;
        }
        showToast('Inscription à la newsletter réussie ! Merci pour votre confiance.', 'success');
        emailInput.value = '';
      });
    });
