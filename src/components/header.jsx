import React, {useState} from 'react'
import { FaBasketShopping } from "react-icons/fa6";

export default function Header({cart, deleteFromCart}) {

    let [cartOpen, setCart] = useState(false);


  return (
    <header>

        <div className='top-section'>
            <span className='title'>House Stuff</span>

            <div className='nav-wrapper'> 
                <ul>
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Кабінет</li>
                </ul>

                <FaBasketShopping onClick={() => setCart(cartOpen = !cartOpen)} className='shop-cart' />

                {cartOpen && (
                    <div className='cart-open'>
                        <h4>Кошик</h4>

                        {cart.length === 0 ? (

                            <p>Ваш кошик порожній</p>
                        ) : (
                            cart.map( el => (

                                <div className='cart-item' key={el.id}>

                                    <div className='cart-item-wrapper'>  
                                        <img src={'./img/' + el.img } />
                                        <p>{el.title}</p>
                                    </div>

                                    <div className='price-delete-cart'>
                                        <p>{el.count + 'x' + el.price + '$'}</p>
                                        <p onClick={() => deleteFromCart(el)} className='delete-cart-item'>Видалити з кошику</p>
                                    </div>
                                </div>
                            ))
                        )}

                    </div>
                )}

            </div>
        </div>

        <div className='presentation'></div>
    </header>
  )
}
