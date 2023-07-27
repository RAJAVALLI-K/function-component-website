import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './FruitsList.css';
import img from './img';

function FruitsList() {
    return (
        <section className='scroll'>
            <div className='container'>
                <div className='row-scroll'>
                    <div className='col-scroll'>
                        <OwlCarousel items={4} className="owl-theme" loop margin={8} autoplay={true}>
                            {img.map((li,i) => {
                                return (
                                    <div key={i}>
                                        <img src={li.src} alt='imgs' />
                                    </div>
                                )
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FruitsList