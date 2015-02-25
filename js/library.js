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

    complexMath: function(num) {
      return (num + 100)/5;
    },

    superComplexMath: function(num) {
      return (num + 10 - 3)/(5-2)*24;
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

    stringReplace: function(string) {
      return string.replace(string, "Gizmo is the cutest dog in the world!");
    },
    










  };


  return Gizmo;

  

})();