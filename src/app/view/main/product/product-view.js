import './product.css';
import View from '../../view.js';
import cardInfo from '../../../../data/cards.js';
import CardView from './card/card-view.js';

const CssClasses = {
  PRODUCT: 'product',
};

export default class ProductView extends View {
  constructor() {
    /**
     * @type {import('../../../utill/ElementCreator').ElementParams}
     */
    const params = {
      tag: 'section',
      classNames: [CssClasses.PRODUCT],
      textContent: '',
      callback: null,
    }
    super(params);
    this.configureView();
  }

  configureView() {
    cardInfo.forEach((card) => {
      const cardView = new CardView(card);

      this.elementCreator.addInnerElement(cardView.getHTMLElement());
    })
  }
}