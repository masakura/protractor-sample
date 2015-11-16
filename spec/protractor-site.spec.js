describe('Protractor 公式サイトのテスト', function () {
  beforeEach(function () {
    browser.get('https://angular.github.io/protractor/');
  });

  it('最初はホームページでなければならない', function () {
    const result = browser.getTitle();

    expect(result).toContain('Protractor');
  });

  it('チュートリアルが表示できなければならない', function () {
    element(by.linkText('Quick Start')).click();
    element(by.linkText('Tutorial')).click();

    const result = $('h1').getText();

    expect(result).toEqual('Tutorial');
  });

  it('ホームページの見出しを確認する', function () {
    const result = $$('h2').getText();

    expect(result).toEqual([
      'Setup',
      'Write a test',
      'Configuration',
      'Run the test',
      'Learn More',
    ]);
  });

  describe('外部サイトに飛べるか', function () {
    beforeEach(function () {
      browser.ignoreSynchronization = true;
    });

    afterEach(function () {
      browser.ignoreSynchronization = false;
    });

    it('GitHub に飛べる', function () {
      element(by.linkText('View on GitHub')).click();

      const result = browser.getCurrentUrl();

      expect(result).toEqual('https://github.com/angular/protractor');
    });
  });
});
