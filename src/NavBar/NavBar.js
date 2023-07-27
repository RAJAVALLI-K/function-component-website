import React from 'react'
import './NavBar.css';
import MyImage from './logo.png';
function NavBar() {
    return (
        <section className='bg-img'>
            <div className='container'>
                <div className='nav'>
                    <div className='logo'>
                        <img src={MyImage} alt="logo" className='img' />
                    </div>
                    <div>
                        <ul className='list'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Pages</li>
                            <li>News</li>
                            <li>Contact</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <div className='icon'>
                        <a href="#"><i className='fa fa-dolly'></i></a>
                        <a href="#"><i className='fa fa-search'></i></a>
                    </div>
                </div>
                <div className='row'>
                    <p className='para-text'>FRESH & ORGANIC</p>
                    <h1>Delicious Seasonal Fruits</h1>
                    <div className="hero-btns">
                        <a href="#" className="boxed-btn">Fruit Collection</a>
                        <a href="#" className="bordered-btn">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NavBar