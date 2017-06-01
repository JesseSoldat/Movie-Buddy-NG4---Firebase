import { MovieBuddyPage } from './app.po';

describe('movie-buddy App', () => {
  let page: MovieBuddyPage;

  beforeEach(() => {
    page = new MovieBuddyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
