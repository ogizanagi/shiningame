'use strict';

import { Controller } from 'stimulus';

/**
 * Same as original Symfony UX controller, but handling srcSet attributes.
 * Also prevents loading all images at once. Loads in call order and wait instead.
 *
 * @see https://github.com/symfony/ux-lazy-image/blob/main/Resources/assets/src/controller.js
 */
export default class extends Controller {
  static ready = true;

  connect() {
    // Add a tmp width attribute if asked:
    if (this.element.getAttribute('data-hd-add-width')) {
      this.element.width = this.element.getAttribute('data-hd-add-width');
    }

    const interval = setInterval(() => {
      if (!this.constructor.ready) {
        return;
      }

      // stop waiting for previous image to be loaded:
      clearInterval(interval);
      this.constructor.ready = false;

      const hd = new Image();

      hd.addEventListener('load', () => {
        this.element.src = this.element.getAttribute('data-hd-src');
        if (this.element.getAttribute('data-hd-srcset')) {
          this.element.srcset = this.element.getAttribute('data-hd-srcset');
        }

        // Remove the tmp width attribute asked
        if (this.element.getAttribute('data-hd-add-width')) {
          delete this.element.removeAttribute('width');
        }

        this._dispatchEvent('lazy-image:ready', { hd });

        // Let the next image load:
        this.constructor.ready = true;
      });

      hd.src = this.element.getAttribute('data-hd-src');
      if (this.element.getAttribute('data-hd-srcset')) {
        hd.srcset = this.element.getAttribute('data-hd-srcset');
      }

      this._dispatchEvent('lazy-image:connect', { hd });
    }, 50);
  }

  _dispatchEvent(name, payload = null, canBubble = false, cancelable = false) {
    const userEvent = document.createEvent('CustomEvent');
    userEvent.initCustomEvent(name, canBubble, cancelable, payload);

    this.element.dispatchEvent(userEvent);
  }
}
