function Filter(){
    return(
        <div>
            <div>
                <input type="checkbox" id='checkPago'/>
                <label htmlFor="checkPago">Pago</label>

                <input type="checkbox" id='checkGratuito'/>
                <label htmlFor="checkGratuito">Gratuito</label>
            </div>
            <div>
                <select name="categorias" id="categorias">
                    <option value="museu">Museu</option>
                    <option value="parque">Parque</option>
                    <option value="cultura">Cultura</option>
                    <option value="gastronomia">Gastronomia</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;