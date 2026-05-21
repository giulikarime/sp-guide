
import sp_map from '../../assets/images/mapa_sp.svg';
import sp_map_raw from '../../assets/images/mapa_sp.svg?raw';
import {useEffect, useRef} from 'react';
import ListLocates from "../../components/ListLocates.jsx";
import {handleLoad} from "./exploracao.js";
import './exploracao.css'
function Exploracao(){
    const imgRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;
        if(img && img.complete){
            handleLoad({ target: img }, sp_map_raw);
        }
    }, []);

    return(
        <section className="rotSection">
            <img ref={imgRef} onLoad={(e)=>{handleLoad(e,sp_map_raw)}} className="imgMap" src={sp_map} alt=""/>
            <ListLocates/>
        </section>
    );
}

export default Exploracao;