let scene = 1;

/* =========================
TYPEWRITER NAMA
========================= */

const typingText = "UNTUK KAMU ";
let i = 0;

function typeWriter(){
const el = document.getElementById("typing");

if(!el) return;

if(i < typingText.length){
el.innerHTML += typingText.charAt(i);
i++;
setTimeout(typeWriter,120);
}
}

typeWriter();

/* =========================
PINDAH SCENE
========================= */

function nextScene(n){

document.querySelector(".active").classList.remove("active");

document.getElementById("scene"+n).classList.add("active");

scene = n;

/* kalau masuk garden */
if(n === 3){
createGarden();
}
}

/* =========================
TEBAK JAWABAN
========================= */

function answer(){
document.getElementById("answerText").innerHTML =
"BENERRR 🥳❤️ kamu pinter banget";
}

/* =========================
GARDEN / BUNGA BANYAK
========================= */

function createGarden(){

const garden = document.getElementById("garden");

/* BUNGA */
for(let i=0;i<25;i++){

let flower = document.createElement("div");
flower.className = "flower";

flower.style.left = Math.random()*100 + "vw";
flower.style.bottom = (Math.random()*20) + "px";
flower.style.transform = "scale("+(0.6 + Math.random())+")";

flower.innerHTML = `
<div class="stem"></div>

<div class="leaf left"></div>
<div class="leaf right"></div>

<div class="centerFlower"></div>

<div class="petal p1"></div>
<div class="petal p2"></div>
<div class="petal p3"></div>
<div class="petal p4"></div>
<div class="petal p5"></div>
<div class="petal p6"></div>
<div class="petal p7"></div>
<div class="petal p8"></div>
<div class="petal p9"></div>
<div class="petal p10"></div>
<div class="petal p11"></div>
<div class="petal p12"></div>
`;

garden.appendChild(flower);
}

/* KUPU KUPU */
for(let i=0;i<10;i++){

let b = document.createElement("div");
b.className = "butterfly";
b.innerHTML = "🦋";

b.style.top = Math.random()*80 + "vh";
b.style.left = Math.random()*100 + "vw";
b.style.animationDuration = (8 + Math.random()*8) + "s";

garden.appendChild(b);
}

/* EFEK ISENG: RANDOM FLOAT */
setInterval(()=>{

let heart = document.createElement("div");
heart.innerHTML = "❤️";
heart.style.position = "absolute";
heart.style.left = Math.random()*100 + "vw";
heart.style.top = "100vh";
heart.style.fontSize = "20px";
heart.style.opacity = "0.7";
heart.style.transition = "5s linear";

document.body.appendChild(heart);

setTimeout(()=>{
heart.style.top = "-10vh";
},100);

setTimeout(()=>{
heart.remove();
},5000);

},1500);

}

/* =========================
JANGAN KLIK BUTTON
========================= */

document.addEventListener("click", function(e){

if(e.target.id === "trapBtn"){

document.getElementById("trapText").innerHTML =
"YAHH KAMU TETEP KLIK,tapi gapapa,cewe selalu benar";

}
});
