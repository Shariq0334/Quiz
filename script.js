const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
var score = 0;
var total = 100;
var results = document.getElementById("results")
var quiz = document.getElementById("quiz")
var name = document.getElementById("name")


function named(){
  window.location.href = "quiz.html"
  var mane = document.getElementById("name").value
  localStorage.setItem("name",mane)

}
function getUser(){
  var names = localStorage.getItem("name");

  return names;

  
  
}
User_Name = getUser()
console.log(User_Name)


  


// if (name.value === ""){
//  btn= document.getElementById("quizbtn")
//  btn.disabled = true;
// }

var Questions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "ESLint"
      },
      correctAnswer: "answer3"
    },
    {
      question: "What come after C",
      answers: {
        a: "A",
        b: "B",
        c: "C",
        d: "D"
      },
      correctAnswer: "answer4"
    },
    {
      question: "What comes after G",
      answers: {
        a: "H",
        b: "i",
        c: "J",
        d: "K"
      },
      correctAnswer: "answer1"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "ESLint"
      },
      correctAnswer: "answer3"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "answer4"
    },
    {
        question: "Hyper Text Markup Language Stand For??",
        answers: {
          a: "HTML",
          b: "CSS",
          c: "JAVASCRIPT",
          d: "XHTML"
        },
        correctAnswer: "answer1"
      },
      {
        question: "Which language is used for styling web pages?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "HTML",
          d: "CSS"
        },
        correctAnswer: "answer4"
      },
      {
        question: "What is 30/3?",
        answers: {
          a: "10",
          b: "15",
          c: "5",
          d: "8"
        },
        correctAnswer: "answer1"
      },
      {
        question: "Which is not a JavaScript Framework?",
        answers: {
          a: "Phyton script",
          b: "JQUERY",
          c: "Django",
          d: "Nodejs"
        },
        correctAnswer: "answer3"
      },
      {
        question: "Which is used for Connect To Database?",
        answers: {
          a: "PHP",
          b: "HTML",
          c: "CSS",
          d: "ALL"
        },
        correctAnswer: "answer1"
      },


  ];
 



  var index = 0;
  // console.log(Questions[index].answers.a)
  var score = 0;
  var option1 = document.querySelector("#option1")
  var option2 = document.querySelector("#option2")
  var option3 = document.querySelector("#option3")
  var option4 = document.querySelector("#option4")
  var quest= document.getElementById("quest")

  var answers = document.querySelectorAll(".answer")
  console.log(Questions[index] )

  function loadQuestion(){
   
    console.log(Questions[index].question)
    quest.innerText = Questions[index].question
    option1.innerText = Questions[index].answers.a
    option2.innerText = Questions[index].answers.b
    option3.innerText = Questions[index].answers.c
    option4.innerText = Questions[index].answers.d 
  }
  loadQuestion();


  function nextQuestion(){
    var checkedAnswer = getAnswer()
    console.log(checkedAnswer)
    if (checkedAnswer === Questions[index].correctAnswer){
       score +=10
       console.log(score)
      };
    index ++
    deSelectAll()
    if (index < Questions.length){
      loadQuestion()
    }
    else {
      
      quiz.style.display = "none"
      results.style.display = "block"
      time =document.getElementById("demo")
      time.style.display = "none"
    }

        results.innerHTML =  `<h1> You Scored ${score}  </h1>`
  if (score >= 60){

  results.innerHTML =  `
  <h1> Total Score is ${total}  </h1>
  <br>
  <h1>${User_Name} You Scored ${score}  </h1> 
  <br>
  <h1> Congratulations  ${User_Name} You Are Passed </h1>
                                            `
  }
  else if (score <= 60){
    results.innerHTML =  `<h1> Total Score is ${total}  </h1> 
    <br>
    <h1>${User_Name} You Scored ${score}  </h1> 
    <br>
    <h1> ${User_Name} You are failed </h1>
    <br>
    <h1> Better Luck Next Time  ${User_Name}</h1>
    `
  }
  else {
    results.innerHTML =  `<h1> Total Score is ${total}  </h1> 
    <br>
    <h1>${User_Name} You Scored ${score}  </h1> 
    <br>
    <h1> ${User_Name} You are failed </h1>
    <br>
    <h1> Better Luck Next Time ${User_Name} </h1>
    `
  }


    }

  

 
 

  function getAnswer (){
    var answer;
    answers.forEach(function(currentElement) {
           if(currentElement.checked){
                 answer = currentElement.id
           console.log(answer)
             
           } 
            
          //  if (!currentElement.checked ){
          //    btu = document.getElementById("next").disabled = true
          //    console.log(btu)
          //  }
          //  else if (currentElement.checked) {
          //   btu = document.getElementById("next").disabled = false
          //  }
    });
   
    return answer
  }
  
function deSelectAll (){
  answers.forEach(function(currentElement) {
    currentElement.checked = false
    })
}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;
      --timer;
      if (minutes == 0 && seconds == 0){
      // var checkedAnswer = getAnswer()
      //     if (checkedAnswer === Questions[index].correctAnswer){
      //      score ++
      //      console.log(score)
      //     }// console.log(checkedAnswer)
          
        quiz.style.display = "none"
        results.style.display = "block"
        displayy = document.querySelector('#demo');
        displayy.style.display = "none"

      }

      
  }, 1000);
}

window.onload = function () {
  var threeMinutes = 60 * 3,
      displayy = document.querySelector('#demo');
  startTimer(threeMinutes, displayy);
};
console.log(score)

