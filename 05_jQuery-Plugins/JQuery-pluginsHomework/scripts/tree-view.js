(function($){
  $.fn.treeView = function(){

    var element = $(this);
    element.find("ul").hide();

    element.on("click", "li", function (ev) {
      var child = $(this).children();

      if(child.length > 0) {
        $(this).prevAll().children().hide();
        $(this).nextAll().children().hide();

        child[0].style.display === "none" ? child.show() : child.hide();
      }

      ev.stopPropagation();
    });

    return this;
  }
}(jQuery));