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
    var answers = document.getElementsByName("question1")
    if (answers[0].checked || answers[1].checked || answers[2].checked)
      {document.getElementById("question1").style.display = "none";
      document.getElementById("question2").style.display = "inline-block";
    }
    else alert('Please choose an answer')
}

  function getQuestion3() {
    var answers = document.getElementsByName("question2")
    if (answers[0].checked || answers[1].checked || answers[2].checked)
      {document.getElementById("question2").style.display = "none";
      document.getElementById("question3").style.display = "inline-block";
    }
    else alert('Please choose an answer')   
  }

  function getQuestion4() {
    var answers = document.getElementsByName("question3")
    if (answers[0].checked || answers[1].checked || answers[2].checked)
      {document.getElementById("question3").style.display = "none";
      document.getElementById("question4").style.display = "inline-block";
    }
    else alert('Please choose an answer')   
  }

  function getQuestion5() {
    var answers = document.getElementsByName("question4")
    if (answers[0].checked || answers[1].checked || answers[2].checked)
      {document.getElementById("question4").style.display = "none";
      document.getElementById("question5").style.display = "inline-block";
    }
    else alert('Please choose an answer')   
  }
  function getQuestion6() {
    var answers = document.getElementsByName("question5")
    if (answers[0].checked || answers[1].checked || answers[2].checked)
      {document.getElementById("question5").style.display = "none";
      document.getElementById("question6").style.display = "inline-block";
    }
    else alert('Please choose an answer')    
  }
  function getResults() {
    caclulateResults()
    var answers = document.getElementsByName("question6")
    if (answers[0].checked || answers[1].checked || answers[2].checked)
      {document.getElementById("question6").style.display = "none";
      document.getElementById("results").style.display = "inline-block";
    }
    else alert('Please choose an answer')
  }
  function caclulateResults(){
      
  }
  function restart() {
    document.getElementById("results").style.display = "none";
    document.getElementById("introCard").style.display = "inline-block";
    document.getElementById("quizform").reset();
  }      
