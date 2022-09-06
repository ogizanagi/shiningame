'use strict';

import { Controller } from '@hotwired/stimulus';

export default class extends Controller {

  initialize() {
    document.addEventListener('fullscreenchange', () => {
      document.fullscreenElement
        ? document.querySelector('.page').classList.add('fullscreen')
        : document.querySelector('.page').classList.remove('fullscreen')
      ;
    });
  }

  connect() {
    const toggleFullscreen = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }

      document.activeElement && document.activeElement.blur();
    };

    this.element.addEventListener('click', toggleFullscreen);
  }
}
