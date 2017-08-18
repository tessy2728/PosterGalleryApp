import { PosterGalleryAppPage } from './app.po';

describe('poster-gallery-app App', function() {
  let page: PosterGalleryAppPage;

  beforeEach(() => {
    page = new PosterGalleryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
