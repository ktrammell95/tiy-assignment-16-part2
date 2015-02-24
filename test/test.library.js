describe("KT", function() {
  var kt;

  beforeEach(function() {
    kt = new KT();
  });

  describe("hello", function() {

    it("takes a name and returns a greeting ", function() {
      expect( KT.hello("Katherine") ).eq("Hello, Katherine, how are you?");
    });

  });

});