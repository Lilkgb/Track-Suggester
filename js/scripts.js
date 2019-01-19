
$(document).ready(function() {
  $("#survey").submit(function(event) {
    var name = $("#name").val();
    $(".nameEnter").text(name);
    $(".jumbotron").hide("slow");
    $("#showSurvey").show();
    if (document.getElementById('new').checked) {
      $("#introToProgram").show("slow");
    }
    else if (document.getElementById('little').checked) {
      alert("spaghetti");
    }
    else if (document.getElementById("intermediate").checked) {
      alert("wahoo")
    }
    else if (document.getElementById("advance").checked) {
      alert("oh yes!!!")
    }
    else {
      alert("error");
    }

    event.preventDefault();
  });
  $("#showSurvey").click(function() {
    $(".jumbotron").show("slow");
    $("#showSurvey").hide();
    $("#introToProgram").hide();
  });
});
