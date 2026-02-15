const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

document.getElementById("btnStart").addEventListener("click", () => {
  step1.classList.add("hidden");
  step2.classList.remove("hidden");
});

document.getElementById("btnNext").addEventListener("click", () => {
  step2.classList.add("hidden");
  step3.classList.remove("hidden");
});
