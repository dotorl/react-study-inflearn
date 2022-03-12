const tag = '[Controller]';

export default class Controller {
  constructor(store, { SerachFormView }) {
    this.store = store;

    // TODO
    this.SerachFormView = SerachFormView;

    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    this.searchFormView.on('@submit', (event) => this.search(event.detail.value));
  }

  search(searchKeyword) {
    console.log(tag, 'search', searchKeyword);
    // TODO
  }
}
