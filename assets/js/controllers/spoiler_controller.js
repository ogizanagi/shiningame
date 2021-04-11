'use strict';

import { Controller } from 'stimulus';

export default class extends Controller {
  connect() {
    const spoil = (e) => {

      e.preventDefault();
      e.stopPropagation();

      this.element.classList.remove('spoiler');
      this.element.removeEventListener('click', spoil);
    };

    this.element.addEventListener('click', spoil);
  }
}
