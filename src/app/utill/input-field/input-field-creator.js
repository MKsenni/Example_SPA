import ElementCreator from '../ElementCreator.js';
import './input-field.css';

const InputFieldCssClasses = {
  CONTAINER: 'field__container',
  CONTAINER_REVERSE: 'field__container_reverse',
};

/**
 * Пример наследования классов.
 * Данная реализация создателя элементов, унаследованная от базового, переопределяет
 * методы родительского класса createElement, setTextContent и setCallback. А так же
 * добавляет собственный метод setValue.
 */

export default class InputFieldCreator extends ElementCreator{
    /**
   *Переопределение дочерними классами метода родительского класса демонстрирует принцип
   * полиморфизма. Объекты InputFieldCreator и ElementCreator будут показывать разный
   * результат при вызове одного и того же метода.
   * @override
   * @param {import('../ElementCreator').ElementParams} params
   */
    createElement(params) {
      this.element = document.createElement('div');
      this.element.classList.add(InputFieldCssClasses.CONTAINER);
      params.classNames.forEach((name) => {
        this.element.classList.add(name);
      })

      this.setCallBack(params.callback);

      this.inputElement = document.createElement('input');

      this.labelElement = document.createElement('label');
      this.setTextContent(params.textContent);

      this.element.append(this.labelElement, this.inputElement);
    }

    /**
   * Переопределение дочерними классами метода родительского класса демонстрирует принцип
   * полиморфизма. Объекты InputFieldCreator и ElementCreator будут показывать разный
   * результат при вызове одного и того же метода.
   * @override
   * @param {string} text 
   */
  setTextContent(text) {
    this.labelElement.textContent = text;
  }

  /**
    *Переопределение дочерними классами метода родительского класса демонстрирует принцип
    *полиморфизма. Объекты InputFieldCreator и ElementCreator будут показывать разный
    *результат при вызове одного и того же метода.
    *@override
   * @param {function} callback 
   */
  setCallBack(callback) {
    if (typeof callback === 'function') {
      this.element.addEventListener('keyup', (event) => callback(event));
    }
  }
}