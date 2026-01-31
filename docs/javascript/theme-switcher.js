/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THEME SWITCHER & PERSISTENCE
 * Manages dark/light mode switching with localStorage persistence
 * ═══════════════════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  // Get or initialize theme preference
  function getThemePreference() {
    const saved = localStorage.getItem('theme-preference');
    if (saved) {
      return saved;
    }
    
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  // Set theme
  function setTheme(theme) {
    const scheme = theme === 'dark' ? 'slate' : 'default';
    const root = document.documentElement;
    root.setAttribute('data-md-color-scheme', scheme);
    localStorage.setItem('theme-preference', theme);
    
    // Update button label
    const button = document.querySelector('.md-header__button[aria-label*="Switch"]');
    if (button) {
      button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }

  // Toggle theme
  function toggleTheme() {
    const current = localStorage.getItem('theme-preference') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    const theme = getThemePreference();
    setTheme(theme);

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme-preference')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });

    // Add theme toggle functionality to existing buttons
    const buttons = document.querySelectorAll('.md-header__button[aria-label*="Switch"]');
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        toggleTheme();
      });
    });
  });

  // Expose toggle to window
  window.toggleTheme = toggleTheme;

})();
