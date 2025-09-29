const resultadoContainer = document.querySelector(".resultado-container");
const btnRolar = document.getElementById("rolarDado");
const listaRestaurantes = document.getElementById("listaRestaurantes");
let restaurantes = [];

// Carrega o JSON
fetch("restaurantes.json")
    .then(res => {
        if (!res.ok) throw new Error("Erro ao carregar restaurantes.json");
        return res.json();
    })
    .then(data => {
        restaurantes = data;
        carregarLista();
    })
    .catch(err => {
        resultadoContainer.innerHTML = `<p style="color:red">Erro: ${err.message}</p>`;
    });

// Mostra lista completa no <ol>
function carregarLista() {
    listaRestaurantes.innerHTML = "";
    restaurantes.forEach(r => {
        listaRestaurantes.insertAdjacentHTML(
            "beforeend",
            `<li>${r.nome} - ${r.tipo}</li>`
        );
    });
}

// Evento do botão
btnRolar.addEventListener("click", () => {
    if (restaurantes.length === 0) {
        resultadoContainer.classList.add("mostrar");
        resultadoContainer.innerHTML = "<p>Dados ainda não carregados!</p>";
        return;
    }

    // mostrar container e dado inicial
    resultadoContainer.classList.add("mostrar");
    resultadoContainer.innerHTML = `
    <div class="resultado-box">
      <div class="dado-resultado">
        <i class="fas fa-dice-d20 dado-animando"></i>
      </div>
    </div>
  `;

    const dadoIcon = resultadoContainer.querySelector("i");

    // rolar números (animação)
    let contador = 0;
    const interval = setInterval(() => {
        contador++;
        dadoIcon.style.transform = `rotate(${Math.random() * 360}deg)`;
    }, 100);

    // número sorteado final
    const numero = Math.floor(Math.random() * 20) + 1;

    // após 1s, mostrar resultado
    setTimeout(() => {
        clearInterval(interval);

        const restaurante = restaurantes.find(r => r.id === numero);
        const precoFormatado = "$".repeat(restaurante.preco || 0);

        if (numero === 20) {
            resultadoContainer.innerHTML = `
                <div class="resultado-box">
                    <button class="fechar-resultado">&times;</button>
                    <div class="dado-resultado">
                        <i class="fas fa-dice-d20"></i>
                        <span class="numero">${numero}</span>
                    </div>
                    <p class="critico">SUCESSO CRÍTICO!</p>
                    <h2>${restaurante.nome}</h2>
                    <img src="imagens/${restaurante.foto}" alt="${restaurante.nome}" class="restaurante-foto">
                    <p><span id="cifrao">${precoFormatado}</span></p>
                    <p class="sucesso">Parabéns, você tirou um acerto crítico! Isso significa que ao invés de ir a um restaurante comum da lista, você pode escolher um restaurante estrela do Michelin para comer! <br></p>
                </div>
                `;
        } else if (numero === 1) {
            resultadoContainer.innerHTML = `
                <div class="resultado-box">
                    <button class="fechar-resultado">&times;</button>
                    <div class="dado-resultado">
                        <i class="fas fa-dice-d20"></i>
                        <span class="numero">${numero}</span>
                    </div>
                    <p  class="critico">FALHA CRÍTICA!</p>
                    <h2>${restaurante.nome}</h2>
                    <img src="imagens/${restaurante.foto}" alt="${restaurante.nome}" class="restaurante-foto">
                    <p><span id="cifrao">${precoFormatado}</span></p>
                    <p>${restaurante.tipo}</p>
                    <p>${restaurante.bairro}</p>
                </div>
                `;
        } else {
            resultadoContainer.innerHTML = `
                <div class="resultado-box">
                    <button class="fechar-resultado">&times;</button>
                    <div class="dado-resultado">
                        <i class="fas fa-dice-d20"></i>
                        <span class="numero">${numero}</span>
                    </div>
                    <h2>${restaurante.nome}</h2>
                    <img src="imagens/${restaurante.foto}" alt="${restaurante.nome}" class="restaurante-foto">
                    <p><span id="cifrao">${precoFormatado}</span></p>
                    <p>${restaurante.tipo}</p>
                    <p>${restaurante.bairro}</p>
                </div>
                `;
        }

        // botão fechar
        document.querySelector(".fechar-resultado").addEventListener("click", () => {
            resultadoContainer.classList.remove("mostrar");
        });
    }, 1000);
});