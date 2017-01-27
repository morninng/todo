import { ChangeDetectionSamplePage } from './app.po';

describe('change-detection-sample App', function() {
  let page: ChangeDetectionSamplePage;

  beforeEach(() => {
    page = new ChangeDetectionSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
