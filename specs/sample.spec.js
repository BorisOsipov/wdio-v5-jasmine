describe('describe', function() {
  it('it', function () {
    browser.url('https://github.com/borisosipov');
    expect($('.p-name').getText()).toContain('Boris Osipov')
  });
});
