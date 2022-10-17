import { Controller } from '@hotwired/stimulus';
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupProgressPlugin from '@swup/progress-plugin';

export default class extends Controller {
  connect() {
    this.element.addEventListener('swup:pre-connect', this._onPreConnect);
  }

  disconnect() {
    this.element.removeEventListener('swup:pre-connect', this._onPreConnect);
  }

  _onPreConnect(event) {
    /**
     * Circumvents an issue with Swup and scrolling to the URL anchor on page load.
     */
    setTimeout(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          window.scrollTo({ top: element.getBoundingClientRect().y });
        }
      }
    }, 100);

    event.detail.options.plugins.push(
      new SwupScrollPlugin({
        doScrollingRightAway: true,
        animateScroll: {
          betweenPages: true,
        },
      }),
      new SwupProgressPlugin({
        transition: 300,
        delay: 0,
        initialValue: 0.25,
        hideImmediately: true
      }),
    );
  }
}
