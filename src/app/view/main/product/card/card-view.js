import './card.css';

import ElementCreator from "../../../../utill/ElementCreator.js";
import View from "../../../view.js";


const CssClasses = {
  CONTAINER: 'card',
  CONTAINER_FULL: 'card__full',
  FIELD: 'card__field',
  BUTTON: 'card__button',
};
const CARD_TEXT_BACK = 'Подробнее...';

export default class CardView extends View {
  /**
   * 
   * @param {import('../../../../../data/cards').CardInfo} card 
   */
  constructor(card) {
        /**
     * @type {import('../../../../utill/ElementCreator').ElementParams}
     */
        const params = {
          tag: 'section',
          classNames: [CssClasses.CONTAINER],
          textContent: '',
          callback: null,
        }
        super(params);

        this.configureView(card);
  }

  /**
   * 
   * @param {import('../../../../../data/cards').CardInfo} card 
   */
  configureView(card) {
    const paramsLabel = {
      tag: 'label',
      classNames: [CssClasses.FIELD],
      textContent: card.name,
      callback: null,
    }
    const labelCreator = new ElementCreator(paramsLabel);

    const paramsButton = {
      tag: 'button',
      classNames: [CssClasses.BUTTON],
      textContent: CARD_TEXT_BACK,
      callback: null,
    }
    const buttonCreator = new ElementCreator(paramsButton);

    this.elementCreator.addInnerElement(labelCreator);
    this.elementCreator.addInnerElement(buttonCreator);
  }
}