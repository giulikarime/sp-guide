function SearchResults({ resultados, onAdicionarAoRoteiro }) {
    if (resultados.length === 0) return null;

    return (
        <ul id="searchItems">
            {resultados.map(item => (
                <li key={item.id}>
                    <h3>{item.nome}</h3>
                    <p>{item.categoria} - {item.zona}</p>
                    <p>{item.endereco}</p>
                    <p>{item.preco}</p>
                    <p>{item.acessibilidade ? 'Acessível' : 'Não acessível'}</p>
                    <p>{item.resumo}</p>
                    <button onClick={() => onAdicionarAoRoteiro(item)}>
                        Adicionar ao Roteiro
                    </button>
                </li>
            ))}
        </ul>
    );
}