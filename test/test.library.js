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

    describe("division", function() {

      it("takes a number and divides it by 2 ", function() {
        expect( giz.division(6) ).eq(3);
      });
    });

    describe("getArea", function() {

      it("multiplies width by height to get area ", function() {
        expect( giz.getArea(5,7) ).eq(35);
      });
    });

    describe("rounding", function() {

      it("rounds a number to nearest integer", function() {
        expect( giz.rounding(6.896) ).eq(7);
      });
    });

    describe("complexMath", function() {

      it("takes a number and adds it to 100 then divides by 5", function() {
        expect( giz.complexMath(10) ).eq(22);
      });
    });

    describe("superComplexMath", function() {

      it("takes a number, adds 10 then subtracts 3, then divides it by 5 minus 2, then times it by 24", function() {
        expect( giz.superComplexMath(10) ).eq(136);
      });
    });

    describe("upperCase", function() {

      it("takes a string and returns it all in uppercase letters", function() {
        expect( giz.upperCase("katherine") ).eq("KATHERINE");
      });
    });

    describe("stringLength", function() {

      it("takes a string and tells you length of it", function() {
        expect( giz.stringLength("Katherine") ).eq(9);
      });
    });

    describe("stringColor", function() {

      it("takes a string and changes the font color to red", function() {
        expect( giz.stringColor("Katherine") ).eq('<font color="red">Katherine</font>');
      });
    });

    describe("stringReplace", function() {

      it("takes a string and replaces it with a certain phrase", function() {
        expect( giz.stringReplace("Katherine") ).eq("Gizmo is the cutest dog in the world!");
      });
    });
});