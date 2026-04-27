/**
 * Category filtering for skills and projects sections.
 * Toggles visibility of cards based on the selected category tab/button.
 * Maintains section height to prevent parallax/scroll breakage.
 */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /**
   * Recalculate grid min-height based on currently visible cards.
   * Temporarily clears min-height, measures, then re-applies.
   */
  function updateGridHeight(grid) {
    if (!grid) return;
    grid.style.minHeight = '';
    requestAnimationFrame(() => {
      grid.style.minHeight = grid.offsetHeight + 'px';
    });
  }

  /**
   * Clear GSAP inline styles from a card so CSS takes over cleanly.
   */
  function clearCardStyles(card) {
    if (typeof gsap !== 'undefined') {
      gsap.set(card, { clearProps: 'opacity,transform' });
    }
  }

  // No ScrollTrigger.refresh() needed — section heights are preserved
  // via min-height, so scroll positions remain stable.

  // ── Skill tabs filtering ─────────────────────────────────────────
  const skillTabs = document.querySelector('.skill-tabs');

  if (skillTabs) {
    const skillButtons = skillTabs.querySelectorAll('button');
    const skillCards = document.querySelectorAll('.skill-card');
    const skillsGrid = document.querySelector('.skills-grid');

    skillTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;

      const category = btn.getAttribute('data-category');

      skillButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      skillCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.removeAttribute('data-visible');
          clearCardStyles(card);
        } else {
          card.setAttribute('data-visible', 'false');
        }
      });

      updateGridHeight(skillsGrid);
    });
  }

  // ── Project filters ──────────────────────────────────────────────
  const filterButtons = document.querySelector('.filter-buttons');

  if (filterButtons) {
    const projectButtons = filterButtons.querySelectorAll('button');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.querySelector('.projects-grid');

    filterButtons.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;

      const filter = btn.getAttribute('data-filter');

      projectButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        const cardStatus = card.getAttribute('data-status');
        const match = filter === 'all'
          || cardCategory === filter
          || cardStatus === filter;

        if (match) {
          card.removeAttribute('data-visible');
          clearCardStyles(card);
        } else {
          card.setAttribute('data-visible', 'false');
        }
      });

      updateGridHeight(projectsGrid);
    });
  }
});
