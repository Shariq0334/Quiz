const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
var score = 0;
var total = 100;

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


  ];



  var index = 0;
  // console.log(Questions[index].answers.a)
  var score = 0;
  var option1 = document.querySelector("#option1")
  var option2 = document.querySelector("#option2")
  var option3 = document.querySelector("#option3")
  var option4 = document.querySelector("#option4")
  var answers = document.querySelectorAll(".answer")

  function nextQuestion(){
   var quest= document.getElementById("quest")
    // quest.innerText = ("Q. " + Questions[index].question)
    // console.log(Questions[0].question)
    console.log(Questions[index].question)
    quest.innerText = Questions[index].question
    option1.innerText = Questions[index].answers.a
    option2.innerText = Questions[index].answers.b
    option3.innerText = Questions[index].answers.c
    option4.innerText = Questions[index].answers.d
    
    // deSelectAll()
    index = index + 1
    if (index == Questions.length){
      var quiz = document.getElementById("quiz")
      quiz.style.display= "none"
      var results = document.getElementById("results")
      results.style.display = "block"
      results.innerHTML =  `<h1> You Scored ${score}  </h1>`
      if (score > 60){

      results.innerHTML =  `
      <h1> Total Score is ${total}  </h1>
      <h1> You Scored ${score}  </h1> 
      <h1> Congratulations You Are Passed </h1>
                                                `
      }
      else {
        results.innerHTML =  `<h1> Total Score is ${total}  </h1> 
        <h1> You Scored ${score}  </h1> 
        <h1> You are failed </h1>
        <h1> Better Luck Next Time</h1>
        `
      }
    }

console.log(Questions[index])
    console.log(Questions[index].correctAnswer)

   {var checkedAnswer = getAnswer()
   console.log(checkedAnswer)
   if (checkedAnswer === Questions[index].correctAnswer){
     score ++
     console.log(score)
   }
   else{
     console.log("not scoreed")
   }
   }
    
   
  }
  nextQuestion()
 

  function getAnswer (){
    var answer;
    answers.forEach(function(currentElement) {
           if(currentElement.checked){
             answer = currentElement.id;
           }
      
    });
   
    return answer
  }
  
function deSelectAll (){
  answers.forEach(function(currentElement) {
    currentElement.checked = false
    })
}