export class Page {
  constructor(params) {
    this.params = params || Date.now().toString()
  }

  getRoot() {
    throw new Error('Method "get root" should be implemented ')
  }

  afterRender() {}

  destroy() {}
}
