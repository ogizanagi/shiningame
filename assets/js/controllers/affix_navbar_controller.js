'use strict';

import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  connect() {
    let ticking = false;
    let affixed = false;
    const AFFIX_OFFSET = document.getElementsByClassName('game-banner')[0].offsetHeight;

    window.addEventListener('scroll', () => {
      const y = window.scrollY;

      if (affixed && y >= AFFIX_OFFSET) {
        return;
      }

      if (!affixed && y < AFFIX_OFFSET) {
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (y >= AFFIX_OFFSET) {
            this.element.classList.add('navbar-items--fixed');
            affixed = true;
          } else {
            this.element.classList.remove('navbar-items--fixed');
            affixed = false;
          }

          ticking = false;
        });
      }

      ticking = true;
    });
  }
}
