import 'boxicons/css/boxicons.min.css';
import './cart.css'
import React, { useState } from 'react';



interface CartProps {
    visible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<CartProps> = ({ visible }) => {
    const [items, setItems] = useState([
        { id: 1, name: 'Jazzmaster', price: 1050, quantity: 1 },
        { id: 2, name: 'Rose Gold', price: 850, quantity: 1 },
        { id: 3, name: 'Longines Rose', price: 980, quantity: 1 }
    ]);

    const updateQuantity = (id: number, change: number) => {
        setItems(items.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(0, item.quantity + change);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="cart" id="cart">
            <i className='bx bx-x cart__close' onClick={() => visible(false)} id="cart-close"></i>

            <h2 className="cart__title-center">My Cart</h2>

            <div className="cart__container">
                {items.map((item) => (
                    <article key={item.id} className="cart__card">
                        <div className="cart__box">
                            <img src={`/img/${item.id === 1 ? 'featured1' : item.id === 2 ? 'featured3' : 'new1'}.png`} alt="" className="cart__img"/>
                        </div>

                        <div className="cart__details">
                            <h3 className="cart__title">{item.name}</h3>
                            <span className="cart__price">${item.price}</span>

                            <div className="cart__amount">
                                <div className="cart__amount-content">
                                    <span className="cart__amount-box" onClick={() => updateQuantity(item.id, -1)}>
                                        <i className='bx bx-minus'></i>
                                    </span>

                                    <span className="cart__amount-number">{item.quantity}</span>

                                    <span className="cart__amount-box" onClick={() => updateQuantity(item.id, 1)}>
                                        <i className='bx bx-plus'></i>
                                    </span>
                                </div>

                                <i className='bx bx-trash-alt cart__amount-trash'></i>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="cart__prices">
                <span className="cart__prices-item">{totalItems} items</span>
                <span className="cart__prices-total">${totalPrice}</span>
            </div>
        </div>
    )
}

export default Cart