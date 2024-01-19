import React from 'react';
import './hitsCard.css'
import ProductPhoto from '../assets/фото.png'

const HitsCard = () => {
    return (
        <div className={'product-card'}>
            <img src={ProductPhoto} alt=""/>
            <p>Держатель для лейки BOOU PG605</p>
           <div className={'card-price'}>
               <h3>1294 с</h3>
               <span>В наличии</span>
               <li>Комплект</li>
           </div>
            <div className={'more-less'}>
                <button>-</button>
                <div>999</div>
                <button>+</button>
            </div>
        </div>
    );
};

export default HitsCard;