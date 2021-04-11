'use strict';

import { Controller } from 'stimulus';

export default class extends Controller {
  connect() {
    let ticking = false;

    const incrParallax = (y) => {
      this.element.style.setProperty('--tw-translate-y', `-${parseInt(y / 5)}px`);
    };

    window.addEventListener('scroll', () => {
      const y = window.scrollY;

      if (y >= 400 || y < 0) {
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          incrParallax(y);
          ticking = false;
        });
      }

      ticking = true;
    });
  }
}
