import 'boxicons/css/boxicons.min.css';
import Cart from '../Cart/Cart';
import './header.css'
import { useState } from 'react';


const Header = () => {
        
  {/*Adj egy funkciót a toggle ikonhoz amivel mobilnézetben le lehet nyitni a navigációs menüt a close ikonnal meg bezárni*/}
  
  {/*
    Adj egy funkciót a cart-shop ikonhoz amivel le lehet nyitni a vásárlási listát
    A vásárlási lista egy külön komponens.
    */}    
    const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <>
    <header className="header" id="header">
    <nav >
        <a href="#" className="nav__logo">
            <i className='bx bxs-watch nav__logo-icon'></i> Rolex
        </a>
        <div className="nav__menu"  id="nav-menu">      
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="#home" className="nav__link">Home</a>
                </li>
                <li className="nav__item">
                    <a href="#featured" className="nav__link">Featured</a>
                </li>
                <li className="nav__item">
                    <a href="#products" className="nav__link">Products</a>
                </li>
                <li className="nav__item">
                    <a href="#new" className="nav__link">New</a>
                </li>
            </ul>
            <div className="nav__close" id="nav-close">
                <i className='bx bx-x' ></i>
            </div>
        </div>
        <div className="nav__btns">           
            <i className='bx bx-moon change-theme' onClick={()=>document.body.classList.toggle("dark-theme")} id="theme-button"></i>
            <div className="nav__shop" id="cart-shop" >
                <i className='bx bx-shopping-bag' onClick={()=>setIsCartVisible(!isCartVisible)}></i>
            </div>
            <div className="nav__toggle" id="nav-toggle">
                <i className='bx bx-grid-alt' ></i>
            </div>
        </div>
    </nav>
</header>
{
    isCartVisible &&
        <Cart visible={setIsCartVisible}/>
}
 </>
  )
}

export default Header