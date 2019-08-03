describe('describe', function() {
  Array(1).fill(5).forEach(function (val, idx)  {
    it(`Passed ${idx}`, function () {
      browser.url('https://github.com/borisosipov');
      expect($('.p-name').getText()).toContain('Boris Osipov')
    });

    it(`Failed ${idx} @test @build`, function () {
      browser.url('https://github.com/borisosipov');
      expect($('.p-name').getText()).toContain('Boris2 Osipov')
    });

    xit(`Skipped ${idx} @some @issue`, function () {
      browser.url('https://github.com/borisosipov');
      expect($('.p-name').getText()).toContain('Boris2 Osipov')
    });

  })
});
