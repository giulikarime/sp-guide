
import sp_map from '../../assets/images/mapa_sp.svg';
import sp_map_raw from '../../assets/images/mapa_sp.svg?raw';
import {useEffect, useRef} from 'react';
import ListLocates from "../../components/ListLocates.jsx";
import {handleLoad} from "./exploracao.js";
import './exploracao.css'
import { searchItem } from "../../components/searchBar.js";


function Exploracao(){
    const imgRef = useRef(null);

    useEffect(() => {

    }, []);

    useEffect(() => {
        const img = imgRef.current;
        if(img && img.complete){
            handleLoad({ target: img }, sp_map_raw);
        }
    }, []);

    return(
        <section className="rotSection">
            <img ref={imgRef} onLoad={(e)=>{handleLoad(e,sp_map_raw)}} className="imgMap" src={sp_map} alt=""/>
            <div id="container">
                <input onChange={searchItem} type="search" name="" id="searchBar"/>
                <label htmlFor="searchBar">Pesquisa</label>
            </div>
            <div>
                <input type="checkbox" id='checkPago'    onChange={searchItem}/>
                <label htmlFor="checkPago">Pago</label>

                <input type="checkbox" id='checkGratuito' onChange={searchItem}/>
                <label htmlFor="checkGratuito">Gratuito</label>
            </div>
            <div>
                <select onChange={searchItem} name="categorias" id="categorias">
                    <option value="">Selecione uma opção</option>
                    <option value="Museu">Museu</option>
                    <option value="Parque">Parque</option>
                    <option value="Cultura">Cultura</option>
                    <option value="Gastronomia">Gastronomia</option>
                    <option value="Histórico">Histórico</option>
                    <option value="Centro Cultural">Centro Cultural</option>
                    <option value="Lazer">Lazer</option>
                </select>
            </div>
            <ListLocates />
        </section>
    );
}

export default Exploracao;