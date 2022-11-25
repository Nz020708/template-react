import './Slider.scss'
import Carousel from 'react-bootstrap/Carousel';
import miniImg from './2022-10-20 (1).png'
import slideImg2 from './AdobeStock_245129730.jpeg'
import slideImg3 from '../Slider/What-makes-a-great-programmer-banner-1536x1024-1 copy.jpeg'
import galaxyItem1 from './Ellipse 96edwsfre.jpg'
import galaxyItem2 from './Ellipse 97 (4).jpg'
import galaxyItem3 from './Ellipse 96 (7).jpg'
import galaxyItem4 from './Ellipse 96 (5).jpg'
import galaxyItem5 from './Ellipse 96 (3).jpg'
import galaxyItem6 from './Ellipse 96 (4).jpg'
import galaxyItem7 from './Ellipse 97 (1).png'
import galaxyItem8 from './Ellipse 97 (2).png'
import galaxyItem9 from './Ellipse 97 (3).jpg'
import galaxyItem10 from './Ellipse 96 (6).jpg'
import { HeaderText } from '../HeaderText/HeaderText';
import { title } from 'process';
import { Summary } from '../Summary/Summary';
function Slider() {
    return (
        <>
            {/* <div className="hero-slider">
                <div className="slide active">
                    <div className="summary">
                        <HeaderText title="Welcome" />
                        <h1>Sell On The Web Like A Pro</h1>
                        <Summary text='We know how large objects will act, but things on a small scale' />


                        <button className="getbtn">Get Quote Now</button>
                        <button className="learnbtn">Learn More</button>
                    </div>
                    <div className="galaxy">
                        <div className="firstorbit">
                            <img src={galaxyItem1} alt="person-planet" className="person-first" />
                            <img src={galaxyItem2} alt="pink" className="pink-planet" />
                            <img src={galaxyItem3} alt="person-planet" className="person-second" />

                            <div className="secondorbit">
                                <img src={galaxyItem4} alt="person-planet" className="person-third" />
                                <img src={galaxyItem5} alt="person-planet" className="person-fourth" />

                                <div className="thirdorbit">
                                    <img src={galaxyItem6} alt="person-planet" className="person-fifth" />
                                    <img src={galaxyItem7} alt="pink-planet" className="pink_first" />
                                    <img src={galaxyItem8} alt="pink-planet" className="pink_second" />

                                    <div className="lastorbit">
                                        <img src={galaxyItem9} alt="pink-planet" className="pink" />
                                        <img src={galaxyItem10} alt="person-planet" className="person-sixth" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={miniImg} alt="galaxy" className="galaxy-img" />
                </div>
                <div className="slide">
                    <div className="summary">
                        <HeaderText title="Welcome" />

                        <h1>Welcome to our Web Page!</h1>
                        <Summary text='We know how large objects will act, but things on a small scale' />

                        <button className="getbtn">Get Quote Now</button>
                        <button className="learnbtn">Learn More</button>
                    </div>
                    <div className="hero_img_container">
                        <img className="hero-img" src={slideImg2} alt="webpg-img" />
                    </div>
                </div>
                <div className="slide">
                    <div className="summary">
                        <HeaderText title="Welcome" />

                        <h1>Discover our Web Page</h1>
                        <Summary text='We know how large objects will act, but things on a small scale' />

                        <button className="getbtn">Get Quote Now</button>
                        <button className="learnbtn">Learn More</button>
                    </div>
                    <div className="hero_img_container">
                        <img className="hero-img" src={slideImg3}
                            alt="hero-img" />
                    </div>
                </div>
            </div> */}
            <Carousel variant="dark" className='hero-slider'>
                <Carousel.Item>
                    <div className="hero_img_container">
                        <div className="galaxy">
                            <div className="firstorbit">
                                <img src={galaxyItem1} alt="person-planet" className="person-first" />
                                <img src={galaxyItem2} alt="pink" className="pink-planet" />
                                <img src={galaxyItem3} alt="person-planet" className="person-second" />

                                <div className="secondorbit">
                                    <img src={galaxyItem4} alt="person-planet" className="person-third" />
                                    <img src={galaxyItem5} alt="person-planet" className="person-fourth" />

                                    <div className="thirdorbit">
                                        <img src={galaxyItem6} alt="person-planet" className="person-fifth" />
                                        <img src={galaxyItem7} alt="pink-planet" className="pink_first" />
                                        <img src={galaxyItem8} alt="pink-planet" className="pink_second" />

                                        <div className="lastorbit">
                                            <img src={galaxyItem9} alt="pink-planet" className="pink" />
                                            <img src={galaxyItem10} alt="person-planet" className="person-sixth" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={miniImg} alt='slide' />

                    </div>
                    <Carousel.Caption className='summary'>
                        <HeaderText title="Welcome" />

                        <h1>Welcome to our Web Page!</h1>
                        <Summary text='We know how large objects will act, but things on a small scale' />

                        <button className="getbtn">Get Quote Now</button>
                        <button className="learnbtn">Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="hero_img_container">
                        <img className="hero-img" src={slideImg2} alt="webpg-img" />
                    </div>

                    <Carousel.Caption className='summary'>
                        <HeaderText title="Welcome" />

                        <h1>Discover our Web Page</h1>
                        <Summary text='We know how large objects will act, but things on a small scale' />

                        <button className="getbtn">Get Quote Now</button>
                        <button className="learnbtn">Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="hero_img_container">
                        <img src={slideImg3} alt='slide' />

                    </div>

                    <Carousel.Caption className='summary'>
                        <HeaderText title="Welcome" />
                        <h1>Sell On The Web Like A Pro</h1>
                        <Summary text='We know how large objects will act, but things on a small scale' />


                        <button className="getbtn">Get Quote Now</button>
                        <button className="learnbtn">Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    );
}

export default Slider;