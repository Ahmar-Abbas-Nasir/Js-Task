const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];
let questionContainer = document.getElementById("questionContainer");
questions.forEach((question) => {
  let newDiv = document.createElement("div");
  newDiv.classList.add("div");
  let divId = `question_${question.id};`;
  newDiv.setAttribute("id", divId);

  newDiv.innerHTML = `
  <h3 class="qDiv">${question.question}</h3>
  <h3 class="aDiv" style = "display:none;">${question.answer}</h3>`;
  

  newDiv.addEventListener("click", function () {
    
    
    let answerDiv = newDiv.querySelector(".aDiv");
    let questionDiv = newDiv.querySelector(".qDiv");

    if(answerDiv.style.display==="none"){

      hideAllAnswers();

      answerDiv.style.display="block";
      questionDiv.style.display="none";
      newDiv.style.backgroundColor="pink";
    }
    else{
      answerDiv.style.display="none";
      questionDiv.style.display="block";
      newDiv.style.backgroundColor="white";
    }
  });

  questionContainer.appendChild(newDiv);
});
function hideAllAnswers(){
  let a = questionContainer.querySelectorAll(".aDiv");
  let q = questionContainer.querySelectorAll(".qDiv");
  let newDiv = questionContainer.querySelectorAll(".div")
  a.forEach(answer =>{
    answer.style.display="none";
  });
  q.forEach(question =>{
    question.style.display="block";
  })
  newDiv.forEach(newDiv =>{
    newDiv.style.backgroundColor="white";
  })
}