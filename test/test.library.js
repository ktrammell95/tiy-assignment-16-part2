describe("Gizmo", function() {
  var giz;

  beforeEach(function() {
    giz = new Gizmo();
  });

  describe("addition", function() {

    it("takes a number and adds 5 to it ", function() {
      expect( giz.addition(5) ).eq(10);
    });

  // });

  

  });

});