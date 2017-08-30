
describe('first test', function() {
  it('should exist', function() {
    expect(typeof addsOne).to.equal('function');
  });
  it('should return 1', function() {
    expect(addsOne(5)).to.equal(6);
  });
});
