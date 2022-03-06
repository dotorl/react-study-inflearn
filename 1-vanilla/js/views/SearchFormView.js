import { qs } from '../helpers.js';
import View from './View.js';

export default class SerachFormView extends View {
  constructor() {
    super(qs('#search-form-view'));

    this.resetElement = qs('[type=reset]', this.element);
    this.showResetbutton(false);
  }

  showResetbutton(visible = true) {
    console.log('showResetbutton', visible);
    console.log(this.resetElement);
    this.resetElement.style.display = visible ? 'block' : 'none';
  }
}
