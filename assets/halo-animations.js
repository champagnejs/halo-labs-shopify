/**
 * Halo Labs Animation Enhancements
 * Vanilla JavaScript - No dependencies
 */

(function() {
  'use strict';

  /**
   * Initialize all animations when DOM is ready
   */
  function init() {
    setupSmoothScroll();
    setupScrollAnimations();
    setupCategoryCardInteractions();
    setupTabSwitching();
  }

  /**
   * Smooth scroll for anchor links
   */
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ignore empty hash or hash-only links
        if (href === '#' || href === '#!') {
          return;
        }

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  /**
   * Intersection Observer for scroll-triggered animations
   */
  function setupScrollAnimations() {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('halo-animated');
          // Optional: stop observing after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with animation class
    const animatedElements = document.querySelectorAll('.halo-animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
  }

  /**
   * Enhanced hover interactions for category cards
   */
  function setupCategoryCardInteractions() {
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
      // Add subtle tilt effect on mouse move
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const tiltX = (y - centerY) / 20;
        const tiltY = (centerX - x) / 20;

        this.style.transform = `translateY(-4px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      });

      // Reset on mouse leave
      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });

      // Add click ripple effect (optional)
      card.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  /**
   * Tab switching for custom product template
   */
  function setupTabSwitching() {
    const tabButtons = document.querySelectorAll('.product-custom__tab-button');
    const tabContents = document.querySelectorAll('.product-custom__tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');

        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('product-custom__tab-button--active'));
        tabContents.forEach(content => content.classList.remove('product-custom__tab-content--active'));

        // Add active class to clicked button and corresponding content
        this.classList.add('product-custom__tab-button--active');
        const targetContent = document.querySelector(`[data-tab-content="${targetTab}"]`);
        if (targetContent) {
          targetContent.classList.add('product-custom__tab-content--active');
        }
      });
    });
  }

  /**
   * Enhance halo glow animation with parallax effect
   */
  function enhanceHaloGlow() {
    const haloGlow = document.querySelector('.hero-halo__glow');
    
    if (!haloGlow) {
      return;
    }

    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      
      haloGlow.style.transform = `translate(-50%, calc(-50% + ${rate}px)) scale(${1 + scrolled * 0.0001})`;
    });
  }

  /**
   * Lazy load images for better performance
   */
  function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }

            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
              img.removeAttribute('data-srcset');
            }

            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }

  /**
   * Add keyboard navigation support
   */
  function setupKeyboardNavigation() {
    // Allow keyboard navigation for card grids
    const cards = document.querySelectorAll('.category-card, .product-card');
    
    cards.forEach(card => {
      // Make cards keyboard focusable if they're not already links
      if (!card.hasAttribute('href')) {
        card.setAttribute('tabindex', '0');
      }

      // Add keyboard event for Enter/Space
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
  }

  /**
   * Performance optimization: debounce function
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Handle window resize events
   */
  function setupResponsiveHandlers() {
    const handleResize = debounce(() => {
      // Recalculate any layout-dependent features
      // Add custom resize logic here if needed
    }, 250);

    window.addEventListener('resize', handleResize);
  }

  /**
   * Check for reduced motion preference
   */
  function respectMotionPreferences() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      // Disable animations for users who prefer reduced motion
      document.documentElement.style.setProperty('--transition-speed', '0s');
      
      // Remove animation classes
      document.querySelectorAll('[class*="animate"]').forEach(el => {
        el.style.animation = 'none';
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Additional setup
  enhanceHaloGlow();
  setupLazyLoading();
  setupKeyboardNavigation();
  setupResponsiveHandlers();
  respectMotionPreferences();

})();
