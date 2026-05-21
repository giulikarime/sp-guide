let cachedData = null;

async function getData() {
    if (cachedData) return cachedData;
    const response = await fetch('data/pontos_turisticos.json');
    cachedData = await response.json();
    return cachedData;
}

export async function searchItem() {
    const input = document.getElementById('searchBar').value.trim();
    const data = await getData();

    if (!input) {
        fillList([]);
        return;
    }

    const terms = input
        .split('/')
        .map(t => t.trim().toLowerCase())
        .filter(t => t.length > 0);

    const results = data.filter(item =>
        terms.some(term =>
            Object.values(item).some(value =>
                String(value).toLowerCase().includes(term)
            )
        )
    );

    fillList(results);
}

function fillList(items) {
    const list = document.getElementById('ulLocates');
    list.innerHTML = "";

    items.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <p>${item.nome}</p>
            <p>${item.resumo}</p>
            <button>Adicionar ao roteiro</button>
        `;
        li.querySelector('button').onclick = () => createItinerary(item)
        list.appendChild(li);
    });
}
function readDB(){
    const data = localStorage.getItem('roteiro');
    return data ? JSON.parse(data) : [];
}

function createItinerary(item){
    const roteiro = readDB();
    const itemExist = roteiro.some(salvo => salvo.id === item.id);
    if(itemExist){
        alert(`${item.nome} já está no roteiro.`);
        return;
    }
    roteiro.push(item);
    localStorage.setItem('roteiro',JSON.stringify(roteiro));
    alert(`${item.nome} foi adicionado com sucesso.`);
}