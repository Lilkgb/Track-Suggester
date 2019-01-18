var name = $(".name").val();

$(document).ready(function() {
  $("#survey").submit(function(event) {
    $(".jumbotron").hide("slow");
    $("#showSurvey").show();

    event.preventDefault();
  });
  $("#showSurvey").click(function() {
    $(".jumbotron").show("slow");
    $("#showSurvey").hide();
  });
});
