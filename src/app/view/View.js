import ElementCreator from '../utill/ElementCreator.js';

//можно пометить абстрактным классом в ts
/**
 * @typedef {{
 * tag: string,
 * classNames: Array<string>,
 * }} ViewParams
 */

export default class View {
  /**
   * @param {import('../utill/ElementCreator').ElementParams} params 
   */
  constructor(params) {
    this.elementCreator = this.createView(params);
  }

    /**
 * @returns {HTMLElement}
 */
    getHTMLElement() {
      return this.elementCreator.getElement();
    }

    /**
     * @param {import('../utill/ElementCreator').ElementParams} params
     * @returns {ElementCreator}
     */
    createView(params) {
      const elementParams = {
        tag: params.tag,
        classNames: params.classNames,
        textContent: params.textContent,
        callback: params.callback,
      }
  
      const elementCreator = new ElementCreator(elementParams);
  
      return elementCreator;
    }

    //abstract configureView() {} это для ts т.е. при наследовании View наследованный объект будет гореть крсным пока в нем не будет реализован метод abstract
}