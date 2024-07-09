let nmbr =  document.getElementsByClassName("nmbr")[0];
let firstStep = document.getElementById("1");
let newText = document.querySelector(".text");
let next = document.getElementById("next");
let previous = document.getElementById("prev");
let reset = document.getElementById("reset");
firstStep.classList.add("purple");
let count=2;
next.addEventListener("click", function(){
 purpleColor();
 count++;
 if (count > 3) {
  count = 3;
}
});
previous.addEventListener("click", function(){
  count--;
  if(count<1){
    count=1;
  }
 purpleColor();
});
reset.addEventListener("click", function(){
  count=2;
  let currentPurple = nmbr.querySelector(".purple");
  currentPurple.classList.remove("purple");
  firstStep.classList.add("purple");
  newText.textContent="Step 1: Learn HTML";
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
    newText.textContent="Step 2: Learn JAVASCRIPT";
   }
}
