// Back-End logic
var cssScore = 0;
var rubyScore = 0;
var csharpScore = 0;


// Front-End logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
  var q1Answer = parseInt($("#q1").val());
  var q2Answer = parseInt($("#q2").val());
  var q3Answer = parseInt($("#q3").val());
  var q4Answer = parseInt($("#q4").val());
  var q5Answer = parseInt($("#q5").val());
  var userName = $("#userName").val();

  if(!userName) {
    alert("Please enter your name.")
    return;
  }

  if (q1Answer === 1) {
    cssScore += 1;
  } else if (q1Answer === 2) {
    rubyScore += 1;
  } else if (q1Answer === 3) {
    csharpScore += 1;
  }

  if (q2Answer === 1) {
    cssScore += 1;
  } else if (q2Answer === 2) {
    rubyScore += 1;
  } else if (q2Answer === 3) {
    csharpScore += 1;
  }

  if (q3Answer === 1) {
    cssScore += 1;
  } else if (q3Answer === 2) {
    rubyScore += 1;
  } else if (q3Answer === 3) {
    csharpScore += 1;
  }

  if (q4Answer === 1) {
    cssScore += 1;
  } else if (q4Answer === 2) {
    rubyScore += 1;
  } else if (q4Answer === 3) {
    csharpScore += 1;
  }

  if (q5Answer === 1) {
    cssScore += 1;
  } else if (q5Answer === 2) {
    rubyScore += 1;
  } else if (q5Answer === 3) {
    csharpScore += 1;
  }

  if ((cssScore >= rubyScore) && (cssScore >= csharpScore)) {
    var winner = "css";
    $("#cssCard").slideToggle();
  } else if ((rubyScore >= cssScore) && (rubyScore >= csharpScore)) {
    var winner = "ruby";
    $("#rubyCard").slideToggle();
  } else if ((csharpScore >= cssScore) && (csharpScore >= rubyScore)) {
    var winner = "csharp";
    $("#csharpCard").slideToggle();
  }

  $(".userName").text(userName);


  console.log(cssScore);
  console.log(rubyScore);
  console.log(csharpScore);
  console.log(winner);


    event.preventDefault();
  });
});
