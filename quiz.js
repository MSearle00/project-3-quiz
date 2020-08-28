function hideElements(){
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "none";
    document.getElementById("question6").style.display = "none";
    document.getElementById("results").style.display = "none";

}

function getQuestion1() {
    document.getElementById("introCard").style.display = "none";
    document.getElementById("question1").style.display = "inline-block";
}

function getQuestion2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "inline-block";
}

  function getQuestion3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "inline-block";
  }

  function getQuestion4() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "inline-block";
  }

  function getQuestion5() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "inline-block";
  }
  function getQuestion6() {
    document.getElementById("question5").style.display = "none";
    document.getElementById("question6").style.display = "inline-block";
  }
  function getResults() {
    document.getElementById("question6").style.display = "none";
    document.getElementById("results").style.display = "inline-block";
  }
  function restart() {
    document.getElementById("results").style.display = "none";
    document.getElementById("introCard").style.display = "inline-block";
  }