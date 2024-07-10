let container = document.querySelector("#container");

let step = document.querySelector(".step");
let trackSteps = parseInt(step.textContent[5]);

let count = document.querySelector(".count");
let trackCount = parseInt(count.textContent[6]);

let dateText = document.querySelector('.datePara');

function displaydate(){
  const now= new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateText.textContent =now.toLocaleDateString('en-US', options) ;
}

displaydate();

function stepPlus(){
  trackSteps++;
  step.textContent=`Step ${trackSteps}`;
}

function stepMinus(){
  if(trackSteps>1){
    trackSteps--;
    step.textContent=`Step ${trackSteps}`;
  }
}

function countPlus(){
  if(trackSteps>1){
    trackCount+=trackSteps;
  }else{
    trackCount++;
  }
    
    // trackCount++;
  
  count.textContent=`Count ${trackCount}`;

  const currentDate = new Date(dateText.textContent);
  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + trackSteps);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateText.textContent = nextDay.toLocaleDateString('en-US', options);
}

function countMinus(){
  if(trackSteps>1){
    trackCount-=trackSteps
  }else{
    trackCount--;
  }
  
    count.textContent=`Count ${trackCount}`;

    const currentDate = new Date(dateText.textContent);
    const prevDay = new Date(currentDate);
    prevDay.setDate(currentDate.getDate() - trackSteps);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateText.textContent = prevDay.toLocaleDateString('en-US', options);
}

function reset(){
  step.textContent="Step 1";
 trackSteps = parseInt(step.textContent[5]);

  count.textContent="Count 0";
 trackCount = parseInt(count.textContent[6]);

 displaydate()

}