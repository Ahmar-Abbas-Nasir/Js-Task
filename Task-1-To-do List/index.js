let navBtn = document.getElementsByClassName("btn1")[0];
let input = document.getElementsByClassName("inputItems")[0];
let dropDown = document.getElementById("dropDown");
let clearBtn = document.getElementsByClassName("clearBtn")[0];
let orderDropDown = document.getElementById("dropDown2");
let apendCount = 0;
let packedCount = 0;
let footerHeading = document.getElementsByClassName("footerHeading")[0];
let packingList = document.getElementsByClassName("packingList");

// function for Add button in Section 1

navBtn.addEventListener("click", function () {
  let inputField = input;
  let resultDiv = document.getElementsByClassName("packingList")[0];
  let apendBtn = document.createElement("div");
  apendBtn.id = "lsitItemBtn";

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "newCheckbox";

  let btnText = document.createElement("span");
  btnText.textContent = dropDown.value + " " + inputField.value + " ";
  apendBtn.className = "btn";

  let apendInnerBtn = document.createElement("button");
  apendInnerBtn.className = "apendInnerBtn";
  apendInnerBtn.innerText = "X";
  apendInnerBtn.addEventListener("click", function () {
    if (checkBox.checked){//this condition is to if the checkbox of item we want to delete is clicked then delete the item and also decrease packed item by 1.
      apendBtn.remove();
      packedCount--;
    }else {
      apendBtn.remove();
    }
    
    apendCount--; // when we delate any item we also have to decrease the total items thats why i use decreament operator.
    if (packedCount <= 0 && apendCount <= 0) {
      footerHeading.innerText = `Start adding some items to your packing list`;
    } else if (packedCount > 0) {
      footerHeading.innerText = `You have ${apendCount} items in your list, your ${
        (packedCount / apendCount) * 100
      }% packing is done`;
    } else if (packedCount <= 0 && apendCount > 0) {
      footerHeading.innerText = `You have ${apendCount} items in your list`;
    }
  });

  checkBox.addEventListener("click", function () {
    if (checkBox.checked) { // to check the list is packed or not i.e the check box is clicked or not if then inc packedCount
      btnText.parentNode.style.textDecoration = "line-through";
      packedCount++;
      footerHeading.innerText = `You have ${apendCount} items in your list, your ${
        (packedCount / apendCount) * 100
      }% packing is done`;
    } else {
      btnText.parentNode.style.textDecoration = "none";
      packedCount--;
      if (packedCount == 0 && apendCount == 0) {
        footerHeading.innerText = `Start adding some items to your packing list`;
      } else if (packedCount > 0) {
        footerHeading.innerText = `You have ${apendCount} items in your list, your ${
          (packedCount / apendCount) * 100
        }% packing is done`;
      } else if (packedCount == 0 && apendCount > 0) {
        footerHeading.innerText = `You have ${apendCount} items in your list`;
      }
    }
  });
  apendBtn.appendChild(checkBox);
  apendBtn.appendChild(btnText);
  apendBtn.appendChild(apendInnerBtn);

  if (inputField.value != "") { // to show error if the input field is empty and we click add button
    resultDiv.appendChild(apendBtn);
    apendCount++;
    if (packedCount <= 0) {
      footerHeading.innerText = `You have ${apendCount} items in your list`;
    } else if (apendCount > 0 && packedCount > 0) {
      footerHeading.innerText = `You have ${apendCount} items in your list, your ${
        (packedCount / apendCount) * 100
      }% packing is done`;
    } else if (apendCount <= 0) {
      footerHeading.innerText = `Start adding some items to your packing list`;
    }
  } else {
    alert("Enter item and then click add button.\nThank you");
  }
  // to empty the input field and reset the drop down after clicking add button
  inputField.value = "";
  dropDown.value = "1";
});
//  to clear all the packed items.
clearBtn.addEventListener("click", function () {
  // let removeDiv = document.getElementsByClassName("section2");
  // removeDiv.innerHTML="";
  let removeList = document.getElementById("section2");
  
    removeList.innerHTML="";
  
  apendCount = 0;
  footerHeading.innerText = `Start adding some items to your packing list`;
});
