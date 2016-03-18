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
        $('.back-link').removeClass("hidden");
        $(".history").trigger(this.id);
        $("."+this.id+"> .items")
        .css("opacity", 0)
        .toggleClass("hidden") // Hiding all categories
        .css("opacity", "");
        $(this).parent().css('display', ''); // Re-displaying the one we're in.
    });
  });

  $(".back-link").click(function(e){
    e.preventDefault();
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

    if($(".items:not(.hidden)").length == 1){
      $(this).addClass("hidden");
      $(".history").html("");
    } else {
      $(".history").trigger($($(".items:not(.hidden)")[1]).parent().children(".trigger")[0].id);
    };
  });

  $(".history").on('software', function(e){
    $(".history").html("")
    .append("<p>Licence Informatique - Université Bordeaux I</p>")
    .append("<p>Master 1 - Algorithmes & Méthodes Formelles</p>");
  });
  $(".history").on('web', function(e){
    $(".history").html("")
    .append("<p><a href='http://share-your-trip.herokuapp.com'>Share Your Trip</a> - Rails</p>")
    .append("<p><a href='#'>Cette page</a> - Middleman</p>")
    .append("<p><a href='http://rpps-api.herokuapp.com'>RPPS Api</a> - Sinatra</p>");
  });
  $(".history").on('back', function(e){
    $(".history").html("")
    .append("<p>Formation FullStack Le Wagon <a href='https://twitter.com/lewagonbordeaux'><i class='fa fa-twitter'></i></a> - Batch #19</p>");
  });
  $(".history").on('front', function(e){
    $(".history").html("")
    .append("<p>Formation FullStack Le Wagon <a href='https://twitter.com/lewagonbordeaux'><i class='fa fa-twitter'></i></a> - Batch #19</p>");
  });
});
