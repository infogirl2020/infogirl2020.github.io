const listaSites = document.getElementById('sumario');
const cardsSites = document.getElementById('projetos');
let sites = [];

fetch("sites.json")
    .then(res => {
        if (!res.ok) throw new Error('Erro ao carregar o arquivo JSON');
        return res.json();
    })
    .then(data => {
        sites = data;
        carregarLista();
        carregarSites();
    })
    .catch(err => {
        listaSites.innerHTML = `<p style="color:red">Erro: ${err.message}</p>`;
    });


function carregarLista() {
    listaSites.innerHTML = "";
    sites.forEach(site => {
        listaSites.insertAdjacentHTML("beforeend",
            `<li><a href="${site.link}" target="_blank">${site.nome}</a></li>`
        );
    });
}

function carregarSites() {
    cardsSites.innerHTML = "";
    sites.forEach(site => {
        cardsSites.insertAdjacentHTML("beforeend",
            `<div class="card">
                <a href="${site.link}" target="_blank"><img src="imagens/${site.logo}" alt="Logo do site ${site.nome}" class="logo-site"></a>
                <h3 class="titulo-site"><a href="${site.link}" target="_blank">${site.nome}</a></h3>
                <p class="descricao-site">${site.descricao}</p>
                <p class="periodo-site">${site.periodo}</p>
            </div>`
        );
    });

}