
//select elements and defined them globally

const start = document.getElementById("start");
const quiz = document.getElementById("quiz-wrap");
const question = document.getElementById("question");
const next = document.getElementById("next-btn");
const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const optionD = document.getElementById("D");
const progress = document.getElementById("progress");
const divScore = document.getElementById("scoreRecord");


//create array of question objects

let questions = [
  
  {
    question: "Who is the President of United States of America?",
    optionA: "Bill Clinton",
    optionB: "Hillary White",
    optionC: "Donald Trump",
    optionD: "George Washington",
    correct: "C"
  },
  
  {
    question: "Who acted Nikkita in the series Nikkita?",
    optionA: "Margaret Q",
    optionB: "Sean West",
    optionC: "Anna Kendrick",
    optionD: "Maggie Q",
    correct: "D"
  },
  
  {
    question: "What tone would you use to write a letter to the head of state?",
    optionA: "command",
    optionB: "formal",
    optionC: "informal",
    optionD: "seductive",
    correct: "B"
  },
  
  {
    question: "What year does Corona virus outbreak started?",
    optionA: "2019",
    optionB: "2020",
    optionC: "2018",
    optionD: "i am not sure",
    correct: "A"
  },
  
  {
    question: "How many colours are in Nigeria flag?",
    optionA: "3",
    optionB: "4",
    optionC: "1",
    optionD: "2",
    correct: "D"
  }
  
  ];


let liveQuestion = 0;
const lastQuestion = questions.length-1;
let score = 0;



//show questions

function updateQuestion(){
  let quest = questions[liveQuestion];
  question.innerHTML = "<p>" + quest.question + "</p>";
  optionA.innerHTML = quest.optionA;
  optionB.innerHTML = quest.optionB;
  optionC.innerHTML = quest.optionC;
  optionD.innerHTML = quest.optionD;
  //correct.innerHTML = quest.correct;
}


//Event listeners
start.addEventListener("click", startQuizGame);
next.addEventListener("click", updateQuestion);

//Start quiz

function startQuizGame() {
start.style.display = "none";
updateQuestion();
quiz.style.display = "block";
updateProgress();
shuffleQuestion();
}

//shuffle questions

function shuffleQuestion(){
questions.sort(() => Math.random()- 0.5);
}

//update progress bar

function updateProgress(){
  for(let addQuestion= 0; addQuestion <= lastQuestion; addQuestion++){
    progress.innerHTML += "<div class='progress' id="+ addQuestion+"></div>";
  }
}

//check options and match to correct

function checkOption(answer){
  if(answer == questions[liveQuestion].correct){
    //option chosen is correct
    score++;
    optionIsCorrect();
  } else {
    optionIsWrong();
  }
  if(liveQuestion < lastQuestion){
    liveQuestion++;
    updateQuestion();
  } else {
    
    //no question left
    quiz.style.display = "none";
    showScore();
  }
}

function optionIsCorrect(){
  document.getElementById(liveQuestion).style.backgroundColor = "green";
}

function optionIsWrong(){
  document.getElementById(liveQuestion).style.backgroundColor = "red";
}

function showScore(){
  divScore.style.display = "block";
  
  //score in percentage 
  const totalScore = Math.round(score/questions.length*100);
  
  divScore.innerHTML += "<p>"+ totalScore +"%</p>";
}
