var name = $(".name").val();

$(document).ready(function() {
  $("#survey").submit(function(event) {
    $("#survey").hide("slow");

    event.preventDefault();
  });
  $("#showSurvey").click(function() {
    $("#survey").show("slow");
  });
});
