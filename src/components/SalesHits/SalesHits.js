import React from 'react';
import  './salesHits.css'
import HitsCard from "../HitsCard/HitsCard";
const SalesHits = () => {
    return (
        <div className={'container'}>
            <div className={'title-bar'}>
                <h2>Хиты продаж</h2>
                <button>перейти в каталог</button>
            </div>
            <div>
                <HitsCard/>
            </div>


        </div>
    );
};

export default SalesHits;