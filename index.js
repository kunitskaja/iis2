// age, siblings, funny, pet, color

let bloom = [25, 2, 3, 3, 1];
let stella = [20, 1, 1, 5, 3];
let flora = [22, 0, 2, 2, 2];
let musa = [19, 3, 5, 4, 4];
let techna = [24, 0, 4, 1, 5];

let you = {age: 23, siblings: 0, funny: 3, pet: 4, color: 1};
let res = "";

function ageCheck(event) {
  const e = document.getElementById("age");
  you.age = e.value;
}

function siblingsCheck(event) {
  const e = document.getElementById("siblings");
  you.siblings = e.value;
}

function funnyCheck(event) {
  const e = document.getElementById("funny");
  you.funny = e.value;
}

function petCheck(event) {
  const e = document.getElementById("pet");
  you.pet = e.value;
}

function colorCheck(event) {
  const e = document.getElementById("color");
  you.color = e.value;
}

function result(event) {
  let resArr = []
  resArr.push(you.age);
  resArr.push(you.siblings);
  resArr.push(you.funny);
  resArr.push(you.pet);
  resArr.push(you.color);

  let rbloom = 0;
  let rstella = 0;
  let rflora = 0;
  let rmusa = 0;
  let rtechna = 0;

  for (let i = 0; i<=resArr.length - 1; i++) {
    rbloom += Math.abs(bloom[i] - resArr[i]);
    rstella += Math.abs(stella[i] - resArr[i]);
    rflora += Math.abs(flora[i] - resArr[i]);
    rmusa += Math.abs(musa[i] - resArr[i]);
    rtechna += Math.abs(techna[i] - resArr[i]);
  }

  let delta = Math.min(rbloom, rflora, rstella, rmusa, rtechna);
  console.log(delta);
  let winx = new Map();
  winx.set(rbloom, "bloom");
  winx.set(rflora, "flora");
  winx.set(rstella, "stella");
  winx.set(rmusa, "musa");
  winx.set(rtechna, "techna");

  res = winx.get(delta);

  document.getElementById('imagebox').src = res + ".png";
}