window.Gizmo = (function() {

  function Gizmo() {

  }

  Gizmo.prototype = {

    addition: function(num) {
      return num += 5;
    },

    getArea: function(width, height) {
      return width * height;
    },

    stringLength: function(string) {
      string.split("").join("");
      return string.length
    },

    rounding: function(num) {
      return Math.round(num);
    },
















  };


  return Gizmo;

  

})();