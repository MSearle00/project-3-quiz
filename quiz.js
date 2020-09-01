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

  const radios1 = document.querySelectorAll('input[name="question1"]');
  let q1Value;
  for (const rb of radios1) {
      if (rb.checked) {
          q1Value = rb.value;
          break;
      }
  }
  const radios2 = document.querySelectorAll('input[name="question2"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }
  const radios3 = document.querySelectorAll('input[name="question3"]');
  let q3Value;
  for (const rb of radios3) {
      if (rb.checked) {
          q3Value = rb.value;
          break;
      }
  }

  const radios4 = document.querySelectorAll('input[name="question4"]');
  let q4Value;
  for (const rb of radios4) {
      if (rb.checked) {
          q4Value = rb.value;
          break;
      }
  }
  const radios5 = document.querySelectorAll('input[name="question5"]');
  let q5Value;
  for (const rb of radios5) {
      if (rb.checked) {
          q5Value = rb.value;
          break;
      }
  }
  const radios6 = document.querySelectorAll('input[name="question6"]');
  let q6Value;
  for (const rb of radios6) {
      if (rb.checked) {
          q6Value = rb.value;
          break;
      }
  }

  let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value) + Number(q6Value);
  result = Math.round(total / 6 * 100);


    if (result > 80) {
      resultMessage = "You got " + result + "% this is worth an A!"
    } else if (result >= 70) {
      resultMessage = "You got " + result + "% this is worth a B!"
    } else if (result >= 55){
      resultMessage = "You got " + result + "% this is worth a C!"
    } else if (result >= 45){
      resultMessage = "You got " + result + "% this is worth a D!"
    } else{
      resultMessage = "You have answered too many questions incorrectly, please retake the test."
    }

    document.getElementById("result").innerHTML = resultMessage
  }

  function restart() {
    document.getElementById("results").style.display = "none";
    document.getElementById("introCard").style.display = "inline-block";
    document.getElementById("quizform").reset();
  }      
