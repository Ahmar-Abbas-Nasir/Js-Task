let nmbr =  document.getElementsByClassName("nmbr")[0];
let firstStep = document.getElementById("1");
let newText = document.querySelector(".text");
let next = document.getElementById("next");
let previous = document.getElementById("prev");
let reset = document.getElementById("reset");
firstStep.classList.add("purple");
previous.classList.add("disabled")
let count=2;
next.addEventListener("click", function(){
 previous.classList.remove("disabled");
 if(count==1){
  count=2;
 }
 purpleColor();

 count++;
 if (count > 3) {
  next.classList.add("disabled");
  count = 3;
}
console.log("next", count);
});
previous.addEventListener("click", function(){
  console.log("prev",count);
  next.classList.remove("disabled");
  if(count>1){
    count--;
    console.log("if", count);
    if(count<2){
      previous.classList.add("disabled");
      count=1;
      
    }
   purpleColor();
  }
  
});
reset.addEventListener("click", function(){
  count=2;
  let currentPurple = nmbr.querySelector(".purple");
  currentPurple.classList.remove("purple");
  firstStep.classList.add("purple");
  newText.textContent="Step 1: Learn HTML";
  next.classList.remove("disabled");
  previous.classList.add("disabled");
})
function purpleColor(){
  let currentPurple = nmbr.querySelector(".purple");
  currentPurple.classList.remove("purple");
  let nextPurple = document.getElementById(`${count}`);
  nextPurple.classList.add("purple");


  if(nextPurple.id=="1"){
   newText.textContent="Step 1: Learn HTML";
  } else if(nextPurple.id=="2"){
   newText.textContent="Step 2: Learn CSS";
  }else if(nextPurple.id=="3"){
    newText.textContent="Step 3: Learn JAVASCRIPT";
   }
}
