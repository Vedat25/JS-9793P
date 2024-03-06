function myFunction() {
  let deger = document.getElementById("counter");
  let arttir = Number(deger.innerHTML);
  deger.innerHTML = arttir + 1;
}

function myFunction2() {
  let deger2 = document.getElementById("counter");
  let azalt = Number(deger2.innerHTML);
  if (azalt > 0) {
    deger2.innerHTML = azalt - 1;
  }
}

document.getElementById("resetButton").addEventListener("click", function(){
  document.getElementById("counter").innerText = "0"
})