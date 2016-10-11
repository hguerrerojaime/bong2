import {Component} from '@angular/core';

@Component({
    selector: 'spinner',
    template:
    `<div class="in modal-backdrop spinner-overlay"></div>
      <div class="spinner-message-container" aria-live="assertive" aria-atomic="true">
          <div class="spinner-message"><img src="img/loader.svg" /></div>
      </div>
    `
})
export class SpinnerComponent {
    state = {
        message: 'Please wait...'
    };
}