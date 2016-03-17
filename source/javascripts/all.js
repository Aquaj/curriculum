$(document).ready(function(doc){
  $(".trigger").click(function(e){
    e.preventDefault();
    $("."+this.className.split(" ").join("."))
    .css('opacity', 0)
    .one('transitionend', function () {
      $(this).css('display', 'none');
      $(this).parent().css('display', 'none'); // Hiding all categories
    });
    $(this).one('transitionend', function () {
        $("."+this.id+" .languages").toggleClass("hidden");
        $(this).parent().css('display', ''); // Re-displaying the one we're in.
    });
  });
});
