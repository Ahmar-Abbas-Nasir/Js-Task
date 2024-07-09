const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "imgs/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "imgs/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "imgs/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "imgs/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "imgs/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "imgs/prosciutto.jpg",
    soldOut: false,
  },
];
let container = document.getElementsByClassName("container")[0];
pizzaData.forEach((data)=>{
  let newDiv = document.createElement("div");
  newDiv.className="containerItem";
  if(data.soldOut==true){
    newDiv.classList.add("opacity");
    data.price="Sold Out";
  }
  newDiv.innerHTML=`
  <div class="item">
  <img src="${data.photoName}" alt="${data.name}">
  </div>
  <div class="itemDetail">
  <h3 class="itemName">${data.name}</h3>
  <p class="ing">${data.ingredients}</p>
  <p class="price">${data.price}</p>
  </div>
  `;
  
  container.appendChild(newDiv);
});
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  let timing = document.createElement("p");
  // const currentHour = 0;
  const currentHour = now.getHours();
  // const currentMinute = 59;
  const currentMinute = now.getMinutes();
  if(currentHour>=11 && currentMinute>=0) {
    console.log("open");
    timing.textContent="We're happy to welcome you between 11:00am and 12:00 am";
  }else{
    console.log("close");
    timing.textContent="We're happy to welcome you between 11:00am and 12:00 am";
  }
  container.appendChild(timing);

