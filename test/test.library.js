describe("Gizmo", function() {
  var giz;

    beforeEach(function() {
      giz = new Gizmo();
    });

    describe("addition", function() {

      it("takes a number and adds 5 to it ", function() {
        expect( giz.addition(5) ).eq(10);
      });
    });

    describe("getArea", function() {

      it("multiplies width by height to get area ", function() {
        expect( giz.getArea(5,7) ).eq(35);
      });
    });

    describe("stringLength", function() {

      it("takes a string and tells you length of it", function() {
        expect( giz.stringLength("Katherine") ).eq(9);
      });
    });

    describe("rounding", function() {

      it("rounds a number to nearest integer", function() {
        expect( giz.rounding("6.896") ).eq(7);
      });
    });

    describe("upperCase", function() {

      it("takes a string and returns it all in uppercase letters", function() {
        expect( giz.upperCase("katherine") ).eq("KATHERINE");
      });
    });







});