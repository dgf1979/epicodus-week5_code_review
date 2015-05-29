describe('findAndReplace', function() {
  it("replaces one string with another string", function() {
    expect(findAndReplace('bar','bar','foo')).to.equal('foo');
  });

  it("replaces one string with all instances of another string in a block of text", function() {
    var sentance = "I went to bar the door of the bar";
    expect(findAndReplace(sentance,'bar','foo')).to.equal("I went to foo the door of the foo");
  });

  it("optionally matches with case insensitivity", function() {
    var sentance = "I went to Bar the door of the BAR";
    expect(findAndReplace(sentance,'bar','foo', true)).to.equal("I went to foo the door of the foo");
  });

  it("matches only whole words", function() {
    var sentance = "I barred the door of the bar!";
    expect(findAndReplace(sentance,'bar','foo', true)).to.equal("I barred the door of the foo!");
  });
});
