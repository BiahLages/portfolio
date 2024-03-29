const elementoTitulo1 = document.querySelector("#titulo1");
const elementoTitulo2 = document.querySelector("#titulo2");
const elementoMenuSobre = document.querySelector("#menuSobre");
const elementoMenuProjetos = document.querySelector("#menuProjetos");
const elementoOla = document.querySelector("#ola");
const elementoEstudante = document.querySelector("#estudante");
const elementoSobreTitle = document.querySelector("#sobreTitle");
const elementoSobreText = document.querySelector("#sobreText");
const elementoEmail = document.querySelector("#email");
const elementoGithub = document.querySelector("#github");
const elementoLinkedin = document.querySelector("#linkedin");
const elementoProjetosTitle = document.querySelector("#projetosTitle");
const elementoAnimes = document.querySelector("#animes");
const elementoTec1 = document.querySelector("#tec1");
const elementoPokedex = document.querySelector("#pokedex");
const elementoTec2 = document.querySelector("#tec2");
const elementoHumor = document.querySelector("#humor");
const elementoTec3 = document.querySelector("#tec3");
const elementoFooterText = document.querySelector("#footerText");
let elementoLanguage = document.querySelector("#language");

elementoLanguage.addEventListener("click", () => {
  if (elementoLanguage.value == "Portugues") {
    elementoTitulo1.innerText = "Portfolio";
    elementoTitulo2.innerText = "Portfolio";
    elementoMenuSobre.innerText = "About me";
    elementoMenuProjetos.innerText = "Projects";
    elementoLanguage.innerText = "Português";
    elementoOla.innerText = "Hey! I'm Beatriz Lages!";
    elementoEstudante.innerText = "Front-End Web Development Student";
    elementoSobreTitle.innerText = "About me";
    elementoSobreText.innerText =
      "I believe that the human's best quality is the ability to adapt when needed. With that in mind, I always try to put aside the fear of what's new and take a chance on what I believe it's best. For a long time I believed that I would pursue a career in the Administrative and Financial area, however, when I got to know Programming, I realized, in addition to the opportunities that I could have, that I identified a lot with the area. I immediately started studying and fell in love with programming logic. I'm looking forward to learning more every day and conquering my place in the technology market.";
    elementoEmail.innerText = "Send me an email";
    elementoGithub.innerText = "Access my Github";
    elementoLinkedin.innerText = "Access my LinkedIn";
    elementoProjetosTitle.innerText = "Projects";
    elementoAnimes.innerText = "Anime Catalog";
    elementoTec1.innerText = "Technologies: Javascript, EJS, CSS";
    elementoPokedex.innerText = "Pokedex";
    elementoTec2.innerText = "Technologies: Javascript, EJS, CSS";
    elementoHumor.innerText = "Humor Game";
    elementoTec3.innerText = "Technologies: Javascript, HTML, CSS";
    elementoFooterText.innerText = "Website developed by";
    elementoLanguage.value = "English";
  } else {
    elementoTitulo1.innerText = "Portfólio";
    elementoTitulo2.innerText = "Portfólio";
    elementoMenuSobre.innerText = "Sobre mim";
    elementoMenuProjetos.innerText = "Projetos";
    elementoLanguage.innerText = "English";
    elementoOla.innerText = "Olá! Eu sou a Beatriz Lages!";
    elementoEstudante.innerText = "Estudante de Desenvolvimento Web Front-End";
    elementoSobreTitle.innerText = "Sobre mim";
    elementoSobreText.innerText =
      "Eu acredito que a melhor qualidade do ser humano é a sua capacidade de se adaptar quando necessário. Com isso em mente, eu procuro sempre deixar o medo do novo de lado e me arriscar naquilo que acredito que será melhor. Por um bom tempo acreditei que seguiria carreira na área Administrativa e Financeira, porém, ao conhecer a Programação eu percebi, além das oportunidades que poderia ter, que me identificava muito com a área. Imediatamente comecei a fazer um curso e me apaixonei com a lógica de programação. Estou ansiosa para aprender cada dia mais e conquistar o meu espaço no mercado de trabalho na área de tecnologia.";
    elementoEmail.innerText = "Me envie um e-mail";
    elementoGithub.innerText = "Acesse o meu Github";
    elementoLinkedin.innerText = "Acesse o meu LinkedIn";
    elementoProjetosTitle.innerText = "Projetos";
    elementoAnimes.innerText = "Catálogo de Animes";
    elementoTec1.innerText = "Tecnologias: Javascript, EJS, CSS";
    elementoPokedex.innerText = "Pokédex";
    elementoTec2.innerText = "Tecnologias: Javascript, EJS, CSS";
    elementoHumor.innerText = "Jogo do Humor";
    elementoTec3.innerText = "Tecnologias: Javascript, HTML, CSS";
    elementoFooterText.innerText = "Site desenvolvido por";
    elementoLanguage.value = "Portugues";
  }
});
