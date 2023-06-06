import View from '../view.js';

const CssClasses = {
  MAIN: 'main',
}

export default class MainView extends View {
  constructor () {
    /**
     * @type {import('../../utill/ElementCreator').ElementParams}
     */
    const params = {
      tag: 'main',
      classNames: [CssClasses.MAIN],
      textContent: '',
      callback: null,
    }
    super(params);
  }

  /**
   * @param {View} view 
   */
  setContent(view) {
    const element = view.getHTMLElement();
    const currentElement = this.elementCreator.getElement();
    
    while(currentElement.firstElementChild) {
      currentElement.firstElementChild.remove();
    }

    this.elementCreator.addInnerElement(element);
    // currentElement.append(element); //идентичный способ добавления элемента тому что написан выше
  }
}