const modelButtom = document.querySelectorAll(".mod-btn");
const moden = document.querySelector(".morden");
const modelClose = document.querySelector(".close-morden-btn");
const closeModel = function () {
  moden.classList.add("hidden");
};

for (let i = 0; i < modelButtom.length; i++) {
  modelButtom[i].addEventListener("click", function () {
    moden.classList.remove("hidden");
    // console.log("button Click");
  });
}
// modelButtom.addEventListener("click", function () {
//   moden.classList.remove("hidden");
// });
modelClose.addEventListener("click", closeModel);
// console.log(modelButtom);
