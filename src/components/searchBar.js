let cachedData = null;

async function getData() {
    if (cachedData) return cachedData;
    const response = await fetch('data/pontos_turisticos.json');
    cachedData = await response.json();
    return cachedData;
}

export async function searchItem() {
    const input    = document.getElementById('searchBar')?.value.trim().toLowerCase() ?? '';
    const categoria = document.getElementById('categorias')?.value ?? '';
    const checkPago     = document.getElementById('checkPago')?.checked ?? false;
    const checkGratuito = document.getElementById('checkGratuito')?.checked ?? false;

    const data = await getData();

    const results = data.filter(item => {
        const passaTexto = input === '' || input
            .split('/')
            .map(t => t.trim())
            .filter(t => t.length > 0)
            .some(term =>
                [item.nome, item.categoria, item.zona, item.endereco, item.acessibilidade ? "Acessível" : "Não Acessível"]
                    .some(campo =>
                        String(campo ?? '').toLowerCase().includes(term)
                    )
            );

        const passaCategoria = categoria === '' || item.categoria === categoria;

        const nenhumCheck = !checkPago && !checkGratuito;
        const passaPreco = nenhumCheck ||
            (checkPago     && item.preco !== 'Gratuito') ||
            (checkGratuito && item.preco === 'Gratuito');

        return passaTexto && passaCategoria && passaPreco;
    });

    fillList(results);
}

function fillList(items) {
    const list = document.getElementById('ulLocates');
    list.innerHTML = "";

    if (items.length === 0) {
        list.innerHTML = '<li class="no-results">Nenhum resultado encontrado.</li>';
        return;
    }

    items.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <h1>${item.nome}</h1>
                <button>Adicionar ao roteiro</button>
            </div>
            <p>${item.zona} - ${item.categoria}</p>
            <p>${item.endereco}</p>
            <p>${item.preco}</p>
            <p>${item.acessibilidade ? "Acessível" : "Não Acessível"}</p>
            <p>${item.descricao_longa}</p>
        `;
        li.querySelector('button').onclick = () => createItinerary(item);
        list.appendChild(li);
    });
}

function readDB() {
    const data = localStorage.getItem('roteiro');
    return data ? JSON.parse(data) : [];
}

function createItinerary(item) {
    const roteiro = readDB();
    const itemExist = roteiro.some(salvo => salvo.id === item.id);
    if (itemExist) {
        alert(`${item.nome} já está no roteiro.`);
        return;
    }
    roteiro.push(item);
    localStorage.setItem('roteiro', JSON.stringify(roteiro));
    alert(`${item.nome} foi adicionado com sucesso.`);
}