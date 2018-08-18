// Back-End logic
var cssScore = 0;
var rubyScore = 0;
var csharpScore = 0;

function calculateScore(answer) {
  if (answer === 1) {
    cssScore += 1;
  } else if (answer === 2) {
    rubyScore += 1;
  } else if (answer === 3) {
    csharpScore += 1;
  }
}

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

    calculateScore(q1Answer);
    calculateScore(q2Answer);
    calculateScore(q3Answer);
    calculateScore(q4Answer);
    calculateScore(q5Answer);

  if (cssScore === 0 && rubyScore === 0 && csharpScore === 0) {
    alert("Whoops! You need to answer at least one question");
  } else if ((cssScore >= rubyScore) && (cssScore >= csharpScore)) {
    var winner = "CSS / React";
    $('#cssCard').slideToggle();
  } else if ((rubyScore >= cssScore) && (rubyScore >= csharpScore)) {
    var winner = "Ruby / Rails";
    $('#rubyCard').slideToggle();
  } else if ((csharpScore >= cssScore) && (csharpScore >= rubyScore)) {
    var winner = "C# / .NET";
    $('#csharpCard').slideToggle();
  }

  $(".userName").text(userName);
  $(".winner").text(winner);

  event.preventDefault();
  });
});
