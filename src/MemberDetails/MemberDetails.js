import React from 'react';
import './MemberDetails.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import MemberList from './MemberList';
// import Person from "./img/avatar1.png";
// import Person1 from "./img/avatar2.png";
// import Person2 from "./img/avatar3.png";


function MemberDetails() {
    return (
        <section className='scroll'>
            <div className='container'>
                <div className='roww'>
                    <OwlCarousel items={1} className="owl-theme" loop margin={8} autoplay={true}>
                        {MemberList.map((e,i) => {
                            return (
                                <div key={i} className='coll'>
                                    <div class="single-testimonial-slider">
                                        <div class="client-avater">
                                            <img src={e.src} alt="" />
                                        </div>
                                        <div class="client-meta">
                                            <h3>{e.name} <span>{e.shop}</span></h3>
                                            <p class="testimonial-body">
                                                {e.para}
                                            </p>
                                            <div class="last-icon">
                                                <i class="fa fa-quote-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        })}

                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default MemberDetails