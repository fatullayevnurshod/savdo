let imgs = document.querySelector(".imgs");
let h = "";

let urel0 = "./imgs/tovar1.jpg";
let urel1 = "./imgs/tovar2.jpg";
let urel2 = "./imgs/tovar3.jpg";
let urel3 = "./imgs/tovar4.jpg";
let urel4 = "./imgs/tovar5.jpg";
let urel5 = "./imgs/tovar6.jpg";
let urel6 = "./imgs/tovar7.jpg";
let urel7 = "./imgs/tovar8.jpg";

for (let i = 0; i < 8; i++) {
  h += `<div class="img">
  <img src="${urel0}" alt="" id="img${i}"></img>
  <h1>Kiyim nomi</h1>
  <h3>soni</h3>
  <p>materiali</p>
  <h4>narxi</h4>
  </div>
  `;
}

imgs.innerHTML = h;

let img12 = document.querySelector("#img1");
img12.src = urel1;

let img13 = document.querySelector("#img2");
img13.src = urel2;

let img14 = document.querySelector("#img5");
img14.src = urel3;

let img15 = document.querySelector("#img4");
img15.src = urel6;

let img16 = document.querySelector("#img3");
img16.src = urel5;

let img17 = document.querySelector("#img6");
img17.src = urel4;

let img18 = document.querySelector("#img7");
img18.src = urel7;

let fon = document.querySelector(".fon");
let imag = document.querySelectorAll(".imgs img");
let h1 = document.querySelector(".imgs h1");
for (let i = 0; i < 12; i++) {
  imag[i].addEventListener("click", () => {
    console.log("salom");
    fon.innerHTML = `
  <div class="aloqa">
  <h1>Ravshanbek: 945146014</h1>
  <h1>Azizbek: 911497232</h1>
  <h3 class="btn">Orqaga</h3>
  </div>
  `;
  });
}

let button1 = document.querySelector(".btn");

// button1.addEventListener("click", () => {
//   for (let i = 0; i < 12; i++) {
//     h += `<div class="img">
//     <img src="${urel}" alt="" id="img${i}"></img>
//     <h1>Kiyim nomi</h1>
//     <h3>soni</h3>
//     <p>materiali</p>
//     <h4>narxi</h4>
//     </div>
//     `;
//   }

//   imgs.innerHTML = h;
// });
