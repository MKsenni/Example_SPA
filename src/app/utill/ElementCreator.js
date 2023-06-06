/**
 * @typedef {{
 * tag: string,
 * classNames: Array<string>,
 * textContent: string,
 * callback: function,
 * }} ElementParams
 */

export default class ElementCreator {
  /**
   * @param {ElementParams} params 
   */
  constructor(params) {
    this.element = null;
    this.createElement(params);
  }

  /**
   * @param {ElementParams} params
   */
  createElement(params) {
    this.element = document.createElement(params.tag);
    this.setCssClasses(params.classNames);
    this.setTextContent(params.textContent);
    this.setCallBack(params.callback);
  }

  /**
   * @returns {HTMLElement}
   */
  getElement() {
    return this.element;
  }

  /**
   * @param {Array<string>} cssClasses
   */
  setCssClasses(cssClasses) {
    cssClasses.forEach((className) => this.element.classList.add(className));
  }

  /**
   * @param {string} text 
   */
  setTextContent(text) {
    this.element.textContent = text;
  }

  /**
   * @param {function} callback 
   */
  setCallBack(callback) {
    if (typeof callback === 'function') {
      this.element.addEventListener('click', (event) => callback(event));
    }
  }

  /**
   * 
   * @param {HTMLElement | ElementCreator} element
   */
  addInnerElement (element) {
    if (element instanceof ElementCreator) {
      this.element.append(element.getElement());
    } else {
      this.element.append(element);
    }
  }
}