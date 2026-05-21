function SearchBar({ lugares, onResultados }) {
    function handleSearch(e) {
        const termo = e.target.value.toLowerCase().trim();

        if (termo === '') {
            onResultados([]);
            return;
        }
        const termos = termo.split('/').map(t => t.trim()).filter(t => t !== '');

        const resultados = lugares.filter(lugar => {
            const campos = [
                lugar.nome,
                lugar.categoria,
                lugar.zona,
                lugar.preco,
                lugar.resumo,
                lugar.endereco,
            ].map(c => c.toLowerCase());

            return termos.some(t => campos.some(campo => campo.includes(t)));
        });

        onResultados(resultados);
    }

    return (
        <div id="search-bar">
            <input
                type="text"
                id="search"
                placeholder='Buscar por nome, categoria, preço... (use "/" para busca múltipla)'
                onChange={handleSearch}
            />
        </div>
    );
}