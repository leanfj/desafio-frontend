import toggleClass from "./main";

//Listagem de Repositorios
let btnRepo = document.querySelector("#js-btn");

btnRepo.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/leanfj/repos", true);
  xhr.onload = () => {
    let repos = JSON.parse(xhr.responseText);

    let reposList = document.querySelector(".repositorios__lista");

    let element = "";
    for (let key in repos) {
      element += `
      <li class="repositorios__lista__item">
      <a href="${
        repos[key].html_url
      }" class="repositorios__lista__item__link" target="_blank">
      ${repos[key].name}
      </a>
      </li>
      `;
    }

    reposList.innerHTML = element;
  };
  xhr.send();
  toggleClass();
});
