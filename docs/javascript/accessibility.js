/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ACCESSIBILITY ENHANCEMENTS
 * - Skip-to-content link
 * - Keyboard navigation improvements
 * - Screen reader enhancements
 * - Focus management
 * ═══════════════════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  // Add skip-to-content link
  function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.setAttribute('aria-label', 'Skip to main content');
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  // Enhance headings with IDs for linking
  function enhanceHeadings() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.id) {
        const text = heading.textContent.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        heading.id = text || `heading-${index}`;
      }
    });
  }

  // Add ARIA labels to interactive elements
  function enhanceAriaLabels() {
    // Code copy buttons
    const copyButtons = document.querySelectorAll('[title="Copy"]');
    copyButtons.forEach(btn => {
      btn.setAttribute('aria-label', 'Copy code block');
      btn.setAttribute('role', 'button');
    });

    // Navigation links
    const navLinks = document.querySelectorAll('.md-nav__link');
    navLinks.forEach(link => {
      if (link.getAttribute('aria-current') === 'page') {
        link.setAttribute('aria-current', 'page');
      }
    });

    // Admonitions
    const admonitions = document.querySelectorAll('.admonition');
    admonitions.forEach((admon, idx) => {
      const titleEl = admon.querySelector('.admonition-title');
      if (titleEl) {
        const ariaLabel = titleEl.textContent || 'Note';
        admon.setAttribute('role', 'note');
        admon.setAttribute('aria-labelledby', `admon-title-${idx}`);
        titleEl.id = `admon-title-${idx}`;
      }
    });
  }

  // Keyboard navigation enhancements
  function enhanceKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Skip to content on Alt+S
      if (e.altKey && e.shiftKey && e.key === 'S') {
        const skipLink = document.querySelector('.skip-to-content');
        if (skipLink) {
          skipLink.focus();
          skipLink.click();
        }
      }

      // Theme toggle on Alt+T
      if (e.altKey && e.key === 't') {
        e.preventDefault();
        if (window.toggleTheme) {
          window.toggleTheme();
        }
      }
    });
  }

  // Improve focus visible states
  function enhanceFocusStates() {
    // Show focus outline on keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
      *:focus-visible {
        outline: 3px solid var(--hsp-accent, #06b6d4);
        outline-offset: 2px;
        border-radius: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  // Add language attribute to code blocks
  function enhanceCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach((code, idx) => {
      const pre = code.parentElement;
      if (!pre.hasAttribute('role')) {
        pre.setAttribute('role', 'region');
        pre.setAttribute('aria-label', `Code block ${idx + 1}`);
        
        // Detect language
        const classes = code.className.split(' ');
        const langClass = classes.find(c => c.startsWith('language-'));
        if (langClass) {
          const lang = langClass.replace('language-', '').toUpperCase();
          pre.setAttribute('aria-label', `${lang} code block ${idx + 1}`);
        }
      }
    });
  }

  // Announce content changes to screen readers
  function createLiveRegion() {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'sr-announcer';
    document.body.appendChild(liveRegion);
  }

  // Announce navigation changes
  function announceNavigation() {
    const liveRegion = document.getElementById('sr-announcer');
    if (liveRegion) {
      const mainHeading = document.querySelector('h1');
      if (mainHeading) {
        liveRegion.textContent = `Page loaded: ${mainHeading.textContent}`;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 3000);
      }
    }
  }

  // Performance: Lazy load images
  function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  // Initialize all accessibility features
  document.addEventListener('DOMContentLoaded', () => {
    console.log('🔧 Initializing accessibility enhancements...');
    
    addSkipLink();
    enhanceHeadings();
    enhanceAriaLabels();
    enhanceKeyboardNavigation();
    enhanceFocusStates();
    enhanceCodeBlocks();
    createLiveRegion();
    announceNavigation();
    lazyLoadImages();

    console.log('✅ Accessibility enhancements complete');
  });

  // Also run on instant.js navigation (MkDocs Instant)
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', enhanceAriaLabels);
  }

})();
