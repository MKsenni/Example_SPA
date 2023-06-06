import '../style.css';
import FooterView from './view/footer/FooterView.js';
import HeaderView from './view/header/HeaderView.js';
import MainView from './view/main/MainView.js';
// import IndexView from './view/main/index/index-view.js';

export default class App{
  constructor() {
    this.createView();
  }

  createView() {
    const mainView = new MainView();
    const headerView = new HeaderView(mainView);
    const footerView = new FooterView();

    document.body.append(headerView.getHTMLElement(), mainView.getHTMLElement(), footerView.getHTMLElement());
  }
}