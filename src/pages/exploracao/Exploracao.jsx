
import sp_map from '../../assets/images/mapa_sp.svg';
import sp_map_raw from '../../assets/images/mapa_sp.svg?raw';
import {useEffect, useRef} from 'react';
import ListLocates from "../../components/ListLocates.jsx";
import {handleLoad} from "./exploracao.js";
import './exploracao.css'
import { searchItem } from "../../components/searchBar.js";
import Filter from "../../components/Filter.jsx";


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
            <Filter/>
            <ListLocates />
        </section>
    );
}

export default Exploracao;