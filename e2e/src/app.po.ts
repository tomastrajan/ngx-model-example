import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMainText() {
    return element(by.css('nme-root h1')).getText();
  }

  getParagraphText() {
    return element(by.css('nme-root p')).getText();
  }

  getNameInput() {
    return element(by.css('nme-root input'));
  }

  getNameText() {
    return element(by.css('nme-root .name')).getText();
  }
}
