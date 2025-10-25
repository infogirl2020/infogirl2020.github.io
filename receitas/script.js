const container = document.getElementById('conteudo');
const sumario = document.getElementById('sumario');

let receitasData = [];

function carregarReceitas() {
    container.innerHTML = '';
    if (!receitasData.length) {
        container.innerHTML = '<p>Nenhuma receita encontrada.</p>';
        return;
    }

    receitasData.forEach(receita => {
                container.insertAdjacentHTML('beforeend', `
      <div class="comida" id="${receita.nome}">
        <div class="descricao">
            <h2>${receita.nome}</h2>
            <img src="imagens/${receita.foto}" alt="${receita.nome}" class="foto">
            <h3>Categoria: ${receita.categoria}</h3>
            <h3>Tempo de preparo: ${receita.tempo_preparo}</h3>       
        </div>
        <div class="ingredientes">
        <h3>Ingredientes:</h3>
            <ul>
            ${receita.ingredientes.map(i => `<li>${i.item} - ${i.quantidade || ''}</li>`).join('')}
            </ul>
        </div>
        <div class="preparo">
            <h3>Modo de preparo:</h3>
            <ol>
            ${receita.modo_preparo.map(p => `<li class="passos">${p}</li>`).join('')}
            </ol>
        </div>
      </div>
    `);
  });
}

function carregarLista(){
  sumario.innerHTML = '';
  if (!receitasData.length) {
        container.innerHTML = '<p>Nenhuma receita encontrada.</p>';
        return;
    }
  receitasData.forEach(receita => {
    sumario.insertAdjacentHTML('beforeend', `
      <li><a href="#${receita.nome}">${receita.nome}</a></li>      
      `);
  });
}

fetch('receitas.json')
  .then(res => {
    if (!res.ok) throw new Error('Falha ao carregar receitas.json: ' + res.status);
    return res.json();
  })
  .then(data => {
    receitasData = data;
    carregarReceitas();
    carregarLista();
  })
  .catch(err => {
    console.error(err);
    container.innerHTML = `<p>Erro ao carregar receitas. Veja o console para detalhes.</p>`;
  });

function ordenar(criterio) {
  if (!receitasData || receitasData.length === 0) return;
  receitasData.sort((a, b) => a[criterio].localeCompare(b[criterio], 'pt-BR', { sensitivity: 'base' }));
  carregarReceitas();
}

document.getElementById('ordenar-nome').addEventListener('click', () => ordenar('nome'));
document.getElementById('ordenar-categoria').addEventListener('click', () => ordenar('categoria'));