var name = $(".name").val();
var ne = document.getElementById("#new");
var little = $("input:radio[name=experience]:checked").val();
var intermediate = $("input:radio[name=experience]:checked").val();
var expert = $("input:radio[name=experience]:checked").val();

$(document).ready(function() {
  $("#survey").submit(function(event) {
    $(".jumbotron").hide("slow");
    $("#showSurvey").show();
    if (ne.checked) {
      alert("you are new to this");
    }
    else if (".2".checked) {
      alert("you can learn");
    }
    else {
      alert("error");
    }

    event.preventDefault();
  });
  $("#showSurvey").click(function() {
    $(".jumbotron").show("slow");
    $("#showSurvey").hide();
  });
});
