import ListLocates from "../../components/ListLocates.jsx";
import {useEffect} from "react";
import {loadItinerary} from './roteiro.js';

function Roteiro(){
    useEffect(() => {
        loadItinerary();
    }, []);
    return(
        <section>
            <h1>Meu Roteiro</h1>
            <ListLocates/>
        </section>
    );
}

export default Roteiro;