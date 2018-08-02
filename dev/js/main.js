let $button = document.querySelector("#js-btn");

let addClass = () => {
  let element = document.querySelector(".repositorios");
  element.classList.toggle("showrepos");
};

$button.addEventListener("click", () => {
  addClass();
});
