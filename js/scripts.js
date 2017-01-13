$("h1").click(function() {
  alert("This is a header.");
});

$("div.my-menu").click(function() {
  alert("Redirecting to Epicodus Site.");
});

$("div.take-survey").click(function() {
  alert("Directing to track selector");
});



$("my-survey.html").ready(function() {
  $("#blanks form").submit(function(event) {
    var question1Input = $("input#question1").val();
    var question2Input = $("input#question2").val();
    var question3Input = $("input#question3").val();
    var question4Input = $("input#question4").val();
    var question5Input = $("input#question5").val();

    $(".question1").text(question1Input);
    $(".quesiton2").text(question2Input);
    $(".question3").text(question3Input);
    $(".question4").text(question4Input);
    $(".question5").text(question5Input);
    // $(".noun").text(nounInput);

    $("#answer1").show();
    $("#answer2").show();
    $("#answer3").show();

    event.preventDefault();
  });
});
