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
    $("#cssCard").show();
  } else if ((rubyScore >= cssScore) && (rubyScore >= csharpScore)) {
    $("#rubyCard").show();
  } else if ((csharpScore >= cssScore) && (csharpScore >= rubyScore)) {
    $("#csharpCard").show();
  }


  console.log(cssScore);
  console.log(rubyScore);
  console.log(csharpScore);

    event.preventDefault();
  });
});
