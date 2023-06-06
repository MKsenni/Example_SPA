import './header.css';
import ElementCreator from "../../utill/ElementCreator.js";
import MainView from "../main/MainView.js";
import IndexView from "../main/index/index-view.js";
import ProductView from "../main/product/product-view.js";
import View from "../view.js";
import LinkView from "./link/LinkView.js";

const CssClasses = {
  HEADER: 'header',
  NAV: 'nav',
}

const NamePages = {
  INDEX: 'Главная',
  PRODUCT: 'Карточки',
}

const START_PAGE_INDEX = 0;

/**
 * @typedef {{ name: string, callback: function }} Page
 */

export default class HeaderView extends View {
  /**
   * 
   * @param {import('../main/MainView').default} mainComponent 
   */
  constructor (mainComponent) {
    /**
     * @type {import('../../utill/ElementCreator').ElementParams}
     */
    const params = {
      tag: 'header',
      classNames: [CssClasses.HEADER],
      textContent: '',
      callback: null,
    }
    super(params);
    this.linkElements = [];
    this.configureView(mainComponent);
  }

  /**
   * 
   * @param {import('../main/MainView').default} mainComponent
   */
  configureView(mainComponent) {
    const paramsNav = {
      tag: 'nav',
      classNames: [CssClasses.NAV],
      textContent: '',
      callback: null,
    };
    const creatorNav = new ElementCreator(paramsNav);

    this.elementCreator.addInnerElement(creatorNav);

    const pages = this.getPages(mainComponent);

    pages.forEach((page, index) => {
      const linkElement = new LinkView(page, this.linkElements);
      creatorNav.addInnerElement(linkElement.getHTMLElement());

      this.linkElements.push(linkElement);

      if (index === START_PAGE_INDEX) {
        page.callback();
        linkElement.setSelectedStatus();
      }
    })
  }

  /**
   * @param {import ('../main/MainView').default} mainComponent
   * @returns {Array<Page>}
   */
  getPages(mainComponent) {
    const indexView = new IndexView();
    const productView = new ProductView();
    const pages = [
      {
        name: NamePages.INDEX,
        callback: () => mainComponent.setContent(indexView), //передаем именно эту константу а не new IndexView, для того чтобы компонент не создавался каждый раз при запуске колбэка, т.е. не надо заботиться о сохранении состоянияю И при выборе другого компонента, этот не разрушается а по прежнему хранится в dom дереве вместе с данными
      },
      {
        name: NamePages.PRODUCT,
        callback: () => mainComponent.setContent(productView),
      }
    ];
    return pages;
  }
}