/**
 * Sonali Nayak Portfolio - Main JavaScript
 * Handles navigation interactions, accessibility, smooth scrolling, and resume download.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSmoothScroll();
  initResumeDownload();
  initHeroInteraction();
});

/**
 * Mobile Navigation Toggle & Accessibility
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav__link, .btn--header');

  if (!toggleBtn || !mainNav) return;

  function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? false : !mainNav.classList.contains('is-open');
    mainNav.classList.toggle('is-open', isOpen);
    toggleBtn.classList.toggle('is-active', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', () => toggleMenu());

  // Close when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('is-open')) {
        toggleMenu(true);
      }
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (event) => {
    if (
      mainNav.classList.contains('is-open') &&
      !mainNav.contains(event.target) &&
      !toggleBtn.contains(event.target)
    ) {
      toggleMenu(true);
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
      toggleMenu(true);
      toggleBtn.focus();
    }
  });
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Download Resume Handler
 */
function initResumeDownload() {
  const resumeBtn = document.getElementById('resume-download-btn');
  if (!resumeBtn) return;

  resumeBtn.addEventListener('click', (e) => {
    // If a static PDF file exists in assets/resume.pdf, let it download.
    // Otherwise show a polite interactive notice.
    const resumePath = 'assets/resume.pdf';
    
    fetch(resumePath, { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          const link = document.createElement('a');
          link.href = resumePath;
          link.download = 'Sonali_Nayak_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          showToast('Resume file will be linked when uploaded to assets/resume.pdf');
        }
      })
      .catch(() => {
        showToast('Resume file will be linked when uploaded to assets/resume.pdf');
      });
  });
}

/**
 * Lightweight Toast Notification
 */
function showToast(message) {
  let toast = document.querySelector('.portfolio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'portfolio-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 28px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background-color: var(--color-primary);
      color: #ffffff;
      padding: 12px 24px;
      border-radius: var(--radius-pill);
      font-size: 0.875rem;
      font-weight: 500;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
      opacity: 0;
      pointer-events: none;
      transition: opacity 250ms ease, transform 250ms ease;
      z-index: 1000;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 3200);
}

/**
 * Subtle 3D Tilt Effect on Hero Artwork (Desktop only)
 */
function initHeroInteraction() {
  const visualCard = document.querySelector('.hero__visual-inner');
  if (!visualCard || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  if (window.innerWidth > 992) {
    visualCard.addEventListener('mousemove', (e) => {
      const rect = visualCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const tiltX = (y / (rect.height / 2)) * -4;
      const tiltY = (x / (rect.width / 2)) * 4;

      visualCard.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-2px)`;
    });

    visualCard.addEventListener('mouseleave', () => {
      visualCard.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  }
}
