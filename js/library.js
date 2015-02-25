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

  };


  return Gizmo;

  

})();