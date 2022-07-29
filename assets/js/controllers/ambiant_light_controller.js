'use strict';

import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  connect() {
    const toggle = () => {
      document.documentElement.classList.toggle('ambiant');
      document.activeElement && document.activeElement.blur();
    };

    this.element.addEventListener('click', toggle);
  }
}
