describe('findAndReplace', function() {
  it("replaces one string with another string", function() {
    expect(findAndReplace('bar','bar','foo')).to.equal('foo');
  });
});
