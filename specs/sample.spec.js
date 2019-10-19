const reportportal = require('wdio-reportportal-reporter');
const fs = require('fs');
const path = require('path');
const assert = require('assert');

//
// describe('Some awesome feature', function() {
//   Array(2).fill(5).forEach(function (val, idx)  {
//     // it(`Passed test ${idx}`, function () {
//     //   browser.url('https://github.com/borisosipov');
//     //   reportportal.sendLog('INFO', "Hello")
//     //   const outputFile = path.join(__dirname, 'README.md');
//     //   reportportal.sendFile('DEBUG', 'README.md', fs.readFileSync(outputFile), 'text/plain');
//     //   expect($('.p-name').getText()).toContain('Boris Osipov')
//     // });
//
//     it(`Failed ${idx} @test @build`, function () {
//       browser.url('https://github.com/borisosipov');
//       expect($('.p-name').getText()).toContain('Boris2 Osipov')
//     });
//     //
//     // xit(`Skipped ${idx} @some @issue`, function () {
//     //   browser.url('https://github.com/borisosipov');
//     //   expect($('.p-name').getText()).toContain('Boris2 Osipov')
//     // });
//   })
// });

describe('test', function () {

  before( function () {
    assert.ok(false, 'before hook failed')
  })

  it('Verify test 1', () => {
    browser.url('https://github.com/');
    assert.ok(true, 'test passed')
  })
});
