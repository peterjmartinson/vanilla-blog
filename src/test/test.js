

describe('the test harness', function() {
  it('exists', function() {
    expect(1).to.equal(1);
  });
});

// hint, you can only test what's exported
describe('template.js', function() {
  it('contains an article', function() {
    expect(typeof article.innerHTML).to.equal('string');
  });
});
