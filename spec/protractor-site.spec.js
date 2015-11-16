describe('Protractor 公式サイトのテスト', function () {
  it('最初はホームページでなければならない', function () {
    browser.get('https://angular.github.io/protractor/');

    const result = browser.getTitle();

    expect(result).toContain('Protractor');
  });
});
