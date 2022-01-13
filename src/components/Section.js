export default class Section {
  constructor({
    items,
    renderer,
    userId
  }, containerSelector) {
    this.renderedItems = items;
    this._renderer = renderer;
    this._userId = userId;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.append(element);
  }

  prependItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this.renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}