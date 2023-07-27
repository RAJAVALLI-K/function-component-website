import React from 'react';
import './FooterCopy.css';

function FooterCopy() {
    return (
        <section className='lastpart'>
            <div className='container'>
                <div className='last-row'>
                    <div className='last-col'>
                        <p className='p-tag'>Copyrights © 2019 - <a href="#">Imran Hossain</a>,  All Rights Reserved.<br />
                            Distributed By - <a href="#">Themewagon</a>
                        </p>
                    </div>
                    <div className='last-col'>
                        <ul>
                            <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-dribbble"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterCopy