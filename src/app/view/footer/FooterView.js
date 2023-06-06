import './footer.css';
import View from "../view.js";

const CssClasses = {
  FOOTER: 'footer',
}

const TEXT = 'SPA Example app';

export default class FooterView extends View {
  constructor() {
    const params = {
      tag: 'footer',
      classNames: [CssClasses.FOOTER],
      textContent: TEXT,
      callback: null,
    }
    super(params);
  }
}