$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").slideToggle();
  });
  $("button#light").click(function() {
      $("body").removeClass();
      $("body").addClass("dark-on-light");
    });

  $("button#dark").click(function() {
      $("body").removeClass();
      $("body").addClass("light-on-dark");
    });
    $("p#paragraph").click(function() {
        $("p#paragraph").toggleClass("highlight");
      });
});
