class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.innerHTML.trim()
  }

  clear() {
    this.html('')
    return this
  }

  get data() {
    return this.$el.dataset
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  find(selector) {
    return $(this.$el.querySelector(selector))
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
    return this
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback, false)
    return this
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  css(styles = {}) {
    const keys = Object.keys(styles)
    if (keys.length === 0) {
      return this.$el
    }
    keys.forEach(key => this.$el.style[key] = styles[key])
    return this.$el
  }

  addClass(className) {
    return this.$el.classList.add(className)
  }

  removeClass(className) {
    return this.$el.classList.remove(className)
  }

  focus() {
    this.$el.focus()
    return this
  }

  id(parse) {
    if (parse) {
      const [row, col] = this.id().split(':')
      return {
        row: +row,
        col: +col
      }
    }
    return this.data.id
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}

