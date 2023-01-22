function move() {
    var elem = document.getElementsByClassName("div")[0];
    var posit = 0;
    var id = setInterval(frame, 5);
    function frame() {
    if (posit == 10) {clearInterval(id); }
    else {
    posit++;
    elem.style.top = posit + "px";;
    }
}}
$(document).ready(function() {
    var $magic = $(".magic"),
        magicWHalf = $magic.width() / 2;
    $(document).on("mousemove", function(e) {
      $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
    });
  });


  