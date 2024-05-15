let imgs = document.querySelector(".imgs");
let h = "";

let urel = "./imgs/photo_2023-11-14_15-42-01.jpg";

for (let i = 0; i < 12; i++) {
  h += `<div class="img">
  <img src="${urel}" alt="" id="img${i}"></img>
  <h1>Kiyim nomi</h1>
  <h3>soni</h3>
  <p>materiali</p>
  <h4>narxi</h4>
  </div>
  `;
}

imgs.innerHTML = h;

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
  <button>Orqaga</button>
  </div>
  `;
  });
}

let button = document.querySelector("button");

button.addEventListener("click", () => {
  imgs.innerHTML = h;
});
