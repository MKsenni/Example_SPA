import './index.css';

import InputFieldCreator from '../../../utill/input-field/input-field-creator.js';
import View from '../../view.js';

const CssClasses = {
  INDEX: 'index',
}

const FIELD_TEXT_ONE = 'Поле для ввода 1';
const FIELD_TEXT_TWO = 'Поле для ввода 1';

export default class IndexView extends View{
  constructor() {
    /**
     * @type {import('../../../utill/ElementCreator').ElementParams}
     */
    const params = {
      tag: 'section',
      classNames: [CssClasses.INDEX],
      textContent: '',
      callback: null,
    }
    super(params);

    this.firstField = '';
    this.secondField = '';


    this.configureView();
  }

  configureView() {
    let paramsInput = {
      tag: 'input',
      classNames: [],
      textContent: FIELD_TEXT_ONE,
      callback: (event) => this.keyupHandler(event, 'firstInput'),
    };

    let inputCreator = new InputFieldCreator(paramsInput);
    this.elementCreator.addInnerElement(inputCreator.getElement());

    paramsInput = {
      tag: 'input',
      classNames: [],
      textContent: FIELD_TEXT_TWO,
      callback: (event) => this.keyupHandler(event, 'secondInput'),
    };

    inputCreator = new InputFieldCreator(paramsInput);
    this.elementCreator.addInnerElement(inputCreator.getElement());
  }

  /**
   * 
   * @param {KeyboardEvent} event 
   * @param {string} fieldName 
   */
  keyupHandler(event, fieldName) {
    if (event.target instanceof HTMLInputElement) {
      this[fieldName] = event.target.value;
    }
  }
}