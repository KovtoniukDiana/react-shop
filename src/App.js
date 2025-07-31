import React, { useState } from 'react';
import Header from './/components/header.jsx';
import Footer from './/components/footer.jsx'
import Items from './/components/items.jsx'
import FullItem from './components/FullItem.jsx';

import './index.css';


export default function App() {

  const [products] = useState([
    {
      id: 1,
      title: 'chair',
      img: 'chair.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      category: 'chairs',
      price: 400,
      count: 1
    },
    {
      id: 2,
      title: 'grey sofa',
      img: 'sofa.png',  
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      category: 'sofas',
      price: 1000,
      count: 1
    },
    {
      id: 3,
      title: 'table',
      img: 'table.png',  
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      category: 'tables',
      price: 1000,
      count: 1
    },
    {
      id: 4,
      title: 'blue sofa',
      img: 'sofa_2.png',  
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      category: 'sofas',
      price: 1000,
      count: 1
    },
    {
      id: 5,
      title: 'lamp',
      img: 'lamp.png',  
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      category: 'lamps',
      price: 1000,
      count: 1
    }
  ])
    
  const [cart, setCart] = useState([]);

  const AddToCart = (product) => {
    setCart((prev) => {

      const isAlreadyInCart = prev.find((el) => el.id === product.id);

      if(isAlreadyInCart) {
        return prev.map(item =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }

      return [...prev, product]
    })
  }

  const deleteFromCart = (product) => {
    setCart((prev) => {

      return prev.filter((el) => el.id !== product.id)

    })
  }

  const [ShowFullItem, setShowFullItem] = useState(false);

  const [fullItem, setFullItem] = useState({});

  const onShowItem = (item) => {
    setFullItem(el => fullItem = item)
    setShowFullItem(prev => prev == true)
  }


 
  return (

    <div className='wrapper'>

      <Header cart={cart} deleteFromCart={deleteFromCart} />
      <Items products={products} AddToCart={AddToCart} onShowItem={onShowItem} />
    
      {ShowFullItem && <FullItem item={fullItem} /> }

      <Footer />
    </div>
  )
}
