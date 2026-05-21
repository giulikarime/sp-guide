function readDB(){
    const data = localStorage.getItem('roteiro');
    return data ? JSON.parse(data) : [];
}

export function loadItinerary(){
    const roteiro = readDB();
    const list = document.getElementById('ulLocates');
    list.innerHTML = "";

    if(roteiro.length === 0){
        list.innerText = "Nenhum item no roteiro.";
        return;
    }

    roteiro.forEach((item)=>{
        const li = document.createElement('li');
        li.innerHTML = `
        <div>
            <h1>${item.nome}</h1>
            <button>Apagar</button>
        </div>
        <p>${item.zona} - ${item.categoria}</p>
        <p>${item.endereco}</p>
        <p>${item.preco}</p>
        <p>${item.acessibilidade ? "Acessível" : "Não Acessível"}</p>
        <p>${item.resumo}</p>
        `;
        li.querySelector('button').onclick = () =>{ removeItem(li); }
        list.appendChild(li);
    })
}

function removeItem(index){
    const roteiro = readDB();
    roteiro.splice(index,1);
    localStorage.setItem('roteiro',JSON.stringify(roteiro));
    loadItinerary();
}