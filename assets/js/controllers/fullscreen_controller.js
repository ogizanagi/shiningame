'use strict';

import { Controller } from 'stimulus';

export default class extends Controller {

  initialize() {
    document.addEventListener('fullscreenchange', () => {
      document.fullscreenElement
        ? document.documentElement.classList.add('fullscreen')
        : document.documentElement.classList.remove('fullscreen')
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
