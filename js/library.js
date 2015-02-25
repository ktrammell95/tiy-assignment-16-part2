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

    rounding: function(num) {
      return Math.round(num);
    },

    upperCase: function(string) {
      return string.toUpperCase();
    },

    stringLength: function(string) {
      string.split("").join("");
      return string.length
    },

    stringColor: function(string) {
      return string.fontcolor("red");
    },












  };


  return Gizmo;

  

})();