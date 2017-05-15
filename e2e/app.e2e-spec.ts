import { TodoApplicationPage } from './app.po';

describe('todo-application App', () => {
  let page: TodoApplicationPage;

  beforeEach(() => {
    page = new TodoApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
