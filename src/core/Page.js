export class Page {
  constructor(params) {
    this.params = params
  }

  getRoot() {
    throw new Error('Method "get root" should be implemented ')
  }

  afterRender() {}

  destroy() {}
}
