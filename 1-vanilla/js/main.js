import Controller from './Controller.js';
import Store from './store.js';
import storage from './storage.js';
import SerachFormView from './views/SearchFormView.js';

document.addEventListener('DOMContentLoaded', main);

function main() {
  const store = new Store(storage);

  const views = {
    // TODO
    searchFormView: new SerachFormView(),
  };

  new Controller(store, views);
}
