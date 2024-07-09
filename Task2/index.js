let q1 = document.getElementById("1");
let q2 = document.getElementById("2");
let q3 = document.getElementById("3");
let q4 = document.getElementById("4");
let q5 = document.getElementById("5");
let q6 = document.getElementById("6");
let count=2;
let qh1 = document.getElementById("qh1");
let qh2 = document.getElementById("qh2");
let qh3 = document.getElementById("qh3");
let qh4 = document.getElementById("qh4");
let qh5 = document.getElementById("qh5");
let qh6 = document.getElementById("qh6");

function question1(){
  check();
  if(count%2==0)
    {
      q1.style.backgroundColor="pink";
      qh1.innerText="JavaScript";
      count=2;
      count++;
      console.log(count);
    }
else {
  q1.style.backgroundColor="white";
  qh1.innerText="What language is React based on?";
  count++;
  console.log(count);

}
}

function question2(){
  check();
  if(count%2==0)
    {
      q2.style.backgroundColor="pink";
      qh2.innerText="Components";
      count=2;
      count++;
    }
else {
  q2.style.backgroundColor="white";
  qh2.innerText="What are the building blocks of React apps?";
  count++;
}
}
function question3(){
  check();
  if(count%2==0)
    {
      q3.style.backgroundColor="pink";
      qh3.innerText="JSX";
      count=2;
      count++;
    }
else {
  q3.style.backgroundColor="white";
  qh3.innerText="What's the name of the syntax we use to describe a UI in React?";
  count++;
}
}
function question4(){
  check();
  if(count%2==0)
    {
      q4.style.backgroundColor="pink";
      qh4.innerText="Props";
      count=2;
      count++;
    }
else {
  q4.style.backgroundColor="white";
  qh4.innerText="How to pass data from parent to child components?";
  count++;
}
}
function question5(){
  check();
  if(count%2==0)
    {
      q5.style.backgroundColor="pink";
      qh5.innerText="useState hook";
      count=2;
      count++;
    }
else {
  q5.style.backgroundColor="white";
  qh5.innerText="How to give components memory?";
  count++;
}
}
function question6(){
  check();
  if(count%2==0)
    {
      q6.style.backgroundColor="pink";
      qh6.innerText="Controlled element";
      count=2;
      count++;
    }
else {
  q6.style.backgroundColor="white";
  qh6.innerText="What do we call an input element that is completely synchronised with state?";
  count++;
}
}


function check(){
  if(q1.style.backgroundColor=="pink"){
    q1.style.backgroundColor="white";
    qh1.innerText="What language is React based on?";

    // count++;
  }
  else if(q2.style.backgroundColor=="pink"){
    q2.style.backgroundColor="white";
  qh2.innerText="What are the building blocks of React apps?";

    // count++;
  }
  else if(q3.style.backgroundColor=="pink"){
    q3.style.backgroundColor="white";
    qh3.innerText="What's the name of the syntax we use to describe a UI in React?";

    // count++;
  }
  else if(q4.style.backgroundColor=="pink"){
    q4.style.backgroundColor="white";
  qh4.innerText="How to pass data from parent to child components?";

    // count++;
  }
  else if(q5.style.backgroundColor=="pink"){
    q5.style.backgroundColor="white";
  qh5.innerText="How to give components memory?";

    // count++;
  }
  else if(q6.style.backgroundColor=="pink"){
    q6.style.backgroundColor="white";
    qh6.innerText="What do we call an input element that is completely synchronised with state?";

    // count++;
  }
}