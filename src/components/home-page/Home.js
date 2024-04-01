import React, { Fragment } from "react";
import Header from "./Header"
import './Homee.css';
import about from '../../assets/about.png';
import ing from '../../assets/2.png';
import Data from "../../Data";
import { Carousel } from "react-bootstrap";
import item1 from './../../assets/1.jpg';
import item2 from './../../assets/2.jpg';
import face from './../../assets/icon/facebook-app-symbol.png';
import ins from './../../assets/icon/instagram.png';
import you from './../../assets/icon/social.png';
import lin from './../../assets/icon/linkedin.png';

const Home = () => {
    const prod = Data.map((item) => {
        return (
            <div className="col-md-4" key={item.id}>
                <div className="box">
                    <img src={item.img} alt="this is photo product" />
                    <h5>{item.title}</h5>
                    <span>{item.time}</span>
                    <h6>{item.price}</h6>
                    <button><a href="/">order now</a></button>
                </div>
            </div>
        );
    });

    return (
        <Fragment>
            <Header />
            <section className="number">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>1562+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>5565+</h2>
                            <h6>photo</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>500+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>8025+</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pride" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={about} alt="this is img section about" />
                        </div>
                        <div className="col-md-6">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button><a href="/">Learn More</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ingredients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button><a href="/">Learn More</a></button>
                        </div>
                        <div className="col-md-6">
                            <img src={ing} alt="this is photo ingredients" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="stomach">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>When a man's stomach is full it makes no <br />
                                difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br />
                            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <a href="/"> Watch Our Story</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pro" id="product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>Explore Our Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        </div>
                    </div>
                    <div className="row">
                        {prod}
                    </div>
                </div>
            </section>
            <section className="slider" id="REVIEW">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2 className="h2r">Testimonials</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
        
                        <Carousel className="Carousel">
                    <Carousel.Item>
                        <img src={item1} alt="First slide" />
                        <Carousel.Caption>
                            <h3>simba dav - web Designer.</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={item2} alt="Second slide" />
                        <Carousel.Caption>
                            <h3>johnthan Doe  - ux Designer</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={item1} alt="First slide" />
                        <Carousel.Caption>
                            <h3>simba dav - web Designer.</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                        </div>
                    </div>
                </div>
            </section>
            <section className="questions">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 ">
                            <h2 className="questions-h2">Frequently Asked Questions</h2>
                        </div>
                        <div className="col-md-6">
                            <h2>~ Is Foodera Bread really baked fresh each day?</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="col-md-6">
                            <h2>~ Is Foodera Bread really baked fresh each day?</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="col-md-6">
                            <h2>~ Is Foodera Bread really baked fresh each day?</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="col-md-6">
                            <h2>~ Is Foodera Bread really baked fresh each day?</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Baked ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Baked fresh daily by bakers with passion.</h3>
                        </div>
                        <div className="col-md-6">
                            <button><a href="/">Learn More</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>Hurry up! Subscribe our newsletter <br/> and get 25% Off</h2>
                            <p>Limited time offer for this month. No credit card required.</p>
                        </div>
                        <div className="col-md-12">
                        <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="col-md-12 ">
                            <button><a href="/">subscribe</a></button>
                        </div>
                            </div>
                            </div>
            </section>
            <section className="footer" id="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <a href="/">Register</a>
                    <a href="/"> Forum </a>
                    <a href="/">Affiliate</a>
                    <a href="/">FAQ</a>
                </div>
                <div className="col-md-12 col-lg-12">
                    <a href="/"><img src={face}/></a>
                    <a href="/"><img src={you}/></a>
                    <a href="/"><img src={lin}/></a>
                    <a href="/"><img src={ins}/></a>
                </div>
                <div className="col-md-12 col-lg-12">
                    <p>© 2021. Foodera. All rights reserved.</p>
                </div>
            </div>
        </div>
            </section>
        </Fragment>
    );
}

export default Home;
