

function reset(){
  let input = document.getElementsByClassName("inputField")[0];
  let yourExp = document.getElementById("yourExp");
  let frndExp = document.getElementById("frndExp");
  input.value="";
  yourExp.selectedIndex = 0;
  frndExp.selectedIndex = 0;
}
function cal(){
  let input = document.getElementsByClassName("inputField")[0];
  let yourExp = document.getElementById("yourExp");
  let frndExp = document.getElementById("frndExp"); 
  let text = document.getElementById("msg");
  if(input.value==""){
    alert("Enter The Bill");
  }else{
    inputValue = parseInt(input.value);
    yourExpValue = parseInt(yourExp.value);
    frndExpValue = parseInt(frndExp.value);

    let totalDiscount = inputValue*((yourExpValue + frndExpValue)/2)/100;
    let totalBill = inputValue+totalDiscount;

    text.innerText=`You pay $ ${totalBill} (Bill $${inputValue} + Tip $${totalDiscount})`;
    text.classList.remove("none");
    text.classList.add("block");




    
  }

}
