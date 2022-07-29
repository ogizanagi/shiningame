'use strict';

import { Controller } from '@hotwired/stimulus';

/**
 * Same as original Symfony UX controller, but handling srcSet attributes.
 * Also prevents loading all images at once. Loads in call order and wait instead.
 *
 * @see https://github.com/symfony/ux-lazy-image/blob/main/Resources/assets/src/controller.js
 */
export default class extends Controller {
  static ready = true;
  static done = [];

  connect() {
    // Add a tmp width attribute if asked:
    if (this.element.getAttribute('data-hd-add-width')) {
      this.element.width = this.element.getAttribute('data-hd-add-width');
    }

    const hdSrc = this.element.getAttribute('data-hd-src');
    const srcSet = this.element.getAttribute('data-hd-srcset');

    const interval = setInterval(() => {
      if (!this.constructor.ready && !this.constructor.done.includes(hdSrc)) {
        return;
      }

      // stop waiting for previous image to be loaded:
      clearInterval(interval);
      this.constructor.ready = false;

      const image = new Image();

      image.addEventListener('load', () => {
        this.element.src = hdSrc;
        if (srcSet) {
          this.element.srcset = srcSet;
        }

        // Remove the tmp width attribute asked
        if (this.element.getAttribute('data-hd-add-width')) {
          delete this.element.removeAttribute('width');
        }

        this._dispatchEvent('lazy-image:ready', { image });

        // Let the next image load:
        this.constructor.ready = true;
        this.constructor.done.push(hdSrc);
      });

      image.src = hdSrc;
      if (srcSet) {
        image.srcset = srcSet;
      }

      this._dispatchEvent('lazy-image:connect', { image });
    }, 50);
  }

  _dispatchEvent(name, payload = null) {
    this.element.dispatchEvent(new CustomEvent(name, { detail: payload }));
  }
}
