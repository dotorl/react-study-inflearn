import { qs, on } from '../helpers.js';
import View from './View.js';

const tag = '[SearchFormView]';

export default class SerachFormView extends View {
  constructor() {
    super(qs('#search-form-view'));

    this.inputElement = qs('[type=text]', this.element);
    this.resetElement = qs('[type=reset]', this.element);

    this.showResetbutton(false);
    this.bindEvent();
  }

  showResetbutton(visible = true) {
    this.resetElement.style.display = visible ? 'block' : 'none';
  }

  bindEvent() {
    on(this.inputElement, 'keyup', () => this.handleKeyup());
    this.on('submit', (event) => this.handleSubmit(event));
    // this.on('submit', (event) => this.handleSubmit(event));
  }

  handleKeyup() {
    console.log(tag, 'handleKeyup', this.inputElement.value);

    // this.inputElement.value.length > 0 ? this.showResetbutton(true) : this.showResetbutton(false);
    this.showResetbutton(this.inputElement.value.length > 0);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { value } = this.inputElement;
    this.emit('@submit', { value });
  }
}
