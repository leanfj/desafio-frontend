//Carregamento de informações do usuário

let brand = document.querySelector(".brand");
let infoLista = document.querySelector(".info__lista");
let jsLink = document.querySelector("#js-link");
let desafioCard = document.querySelector(".desafio__card");

let loadUser = () => {
  const xhr = new XMLHttpRequest();
  const apiUserURL = "https://api.github.com/users/leanfj";
  xhr.open("GET", apiUserURL, true);
  xhr.onload = () => {
    if (xhr.status == 200) {
      let user = JSON.parse(xhr.responseText);

      brand.innerHTML = `
          <img src="${user.avatar_url}" class="brand__img" alt="Foto Perfil">
          <a href="${
            user.html_url
          }" class="brand__link" target="_blank">Visitar Perfil</a>
        `;

      infoLista.innerHTML = `
            <li class="info__lista__item">Repositórios: ${
              user.public_repos
            }</li>
            <li class="info__lista__item">Seguidores: ${user.followers}</li>
            <li class="info__lista__item">Seguindo: ${user.following}</li>
        `;

      jsLink.setAttribute("href", user.html_url + "?tab=stars");
    } else {
      desafioCard.innerHTML = `<p>Erro ao carregar dados</p>`;
    }
  };
  xhr.send();
};
window.onload = loadUser();
