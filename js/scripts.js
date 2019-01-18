var name = $(".name").val();
// var experience = $("input, #1");
// var howa = $("input, #2");

$(document).ready(function() {
  $("#survey").submit(function(event) {
    $(".jumbotron").hide("slow");
    $("#showSurvey").show();
    if (document.getElementById('1').checked) {
      alert("hello");
    }
    else if (document.getElementById('2').checked) {
      alert("spaghetti");
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
