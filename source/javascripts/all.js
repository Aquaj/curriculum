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
        $('.fa-chevron-left').removeClass("hidden");
        $("."+this.id+"> .items")
        .css("opacity", 0)
        .toggleClass("hidden") // Hiding all categories
        .css("opacity", "");
        $(this).parent().css('display', ''); // Re-displaying the one we're in.
    });
  });

  $(".back-link").click(function(e){
    e.preventDefault();
    console.log($($(".items:not(.hidden)")[1]));
    $(".items:not(.hidden)")
    .last()
    .parent()
    .children(".trigger")
    .css("display", "")
    .css("opacity", "");
    $(".items:not(.hidden)")
    .last()
    .parent()
    .parent()
    .children(".category")
    .css("display", "")
    .css("opacity", "");
    $(".items:not(.hidden)")
    .last()
    .parent()
    .parent()
    .children(".category")
    .children(".trigger")
    .css("display", "")
    .css("opacity", "");
    $(".items:not(.hidden)")
    .last()
    .toggleClass("hidden");

 //   $($(".items:not(.hidden)")[1])
   // .css('opacity', 0)
 //   .one('transitionend', function () {
   //   $(this).parent().css('display', 'none'); // Hiding all categories
  //  });

    $($(".items:not(.hidden)")[1]).parent(".items");
  });
});
