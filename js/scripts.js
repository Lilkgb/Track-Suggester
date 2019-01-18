var name = $(".name").val();
var new = $("input:radio[name=new]:checked").val();
var little = $("input:radio[name=little]:checked").val();
var intermediate = $("input:radio[name=intermediate]:checked").val();
var expert = $("input:radio[name=expert]:checked").val();

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
