
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
      $("#littleExperience").show("slow");
    }
    else if (document.getElementById("intermediate").checked) {
      $("#intermediateExperience").show("slow");
    }
    else if (document.getElementById("advance").checked) {
      $("#advanceExperience").slideDown("slow");
    }
    // else if (document.getElementById("intermediate")
    else {
      alert("error");
    }

    event.preventDefault();
  });
  $("#showSurvey").click(function() {
    $(".jumbotron").show("slow");
    $("#showSurvey").hide();
    $("#introToProgram").hide();
    $("#littleExperience").hide();
    $("#intermediateExperience").hide();
    $("#advanceExperience").hide();
  });
});
