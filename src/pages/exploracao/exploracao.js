let lugares = [];
const loadData = false;

export const handleLoad = (e,svgRaw)=>{
    if(document.querySelector('svg')) return;
    const span = document.createElement('span');
    span.innerHTML = svgRaw;
    const inlineSVG = span.getElementsByTagName('svg')[0];
    inlineSVG.classList.add('imgMap');
    e.target.parentNode.replaceChild(inlineSVG,e.target);
    getData();
}

const getData = () =>{
    fetch('data/pontos_turisticos.json')
        .then((response)=>response.json())
        .then((response)=>{
            lugares = response;
            getActions();
        })
        .catch((err)=>console.log('Erro no fetch: ',err));
}

const getActions = () =>{
    const regiao = document.getElementsByClassName('region');
    for(let i = 0;i<regiao.length;i++){
        regiao[i].onclick = () => { regiaoClick(regiao[i]); }
    }
}

const regiaoClick = (regiao) =>{
    const id = regiao.getAttribute('id');
    const info = lugares.filter(item => item.zona.toLowerCase() === id.toLowerCase());
    if(!info) return;
    fillList(info);
}

const fillList = (info) =>{
    const list = document.getElementById('ulLocates');
    list.innerHTML = "";

    const items = Array.isArray(info) ? info : [info];
    items.forEach(item=>{
        const li = document.createElement('li');
        li.innerHTML = `
        <div>
            <h1>${item.nome}</h1>
            <button>Adicionar ao roteiro</button>
        </div>
        <p>${item.zona} - ${item.categoria}</p>
        <p>${item.endereco}</p>
        <p>${item.preco}</p>
        <p>${item.acessibilidade ? "Acessível" : "Não Acessível"} </p>
        <p>${item.descricao_longa}</p>
        `;

        li.querySelector('button').onclick = () => createItinerary(item);
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