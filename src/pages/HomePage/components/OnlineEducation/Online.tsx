import './Online.scss';
import { HeaderText } from '../../../../components/HeaderText/HeaderText';
import { Summary } from '../../../../components/Summary/Summary';
import photo1 from './product-cover-139.png'
import photo2 from './product-cover-137.png'
import photo3 from './product-cover-138.png'
import photo4 from './product-cover-140.png'

export const Online = () => {
    return (
        <section id="online_education">
            <div className="container">
                <div className="row">
                    <div className="summary">
                        <HeaderText title='Practice lessons'/>
                        <h2>Make online education accessible</h2>
                        <Summary text='  Problems trying to resolve the conflict between the two major
                        realms of Classical physics: Newtonian mechanics'/>
                    </div>
                </div>
                <div className="cards-row">
                    <div className="card">
                        <img src={photo1} alt="card-top" />
                        <div className="sale">Sale</div>

                        <div className="main">
                            <h5>English</h5>
                            <h3>Graphic Design</h3>
                            <p>We focus on ergonomics and meeting you....</p>
                            <div className="sales">
                                <i className="fa-solid fa-download"></i>
                                <p>15 Sales</p>
                            </div>
                            <div className="price">
                                <p>$16.48</p>
                                <p>$6.48</p>
                            </div>
                            <div className="info">
                                <span> <i className="fa-regular fa-clock"></i> Pro...</span>
                                <span>
                                    <i className="fa-solid fa-chart-line orange"></i> 64
                                    Les...</span>
                                <span> <i className="fa-regular fa-clock"></i> 22 hr..</span>
                            </div>
                            <button>
                                Learn More
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={photo2} alt="card-top" />
                        <div className="sale">Sale</div>

                        <div className="main">
                            <h5>English</h5>
                            <h3>Graphic Design</h3>
                            <p>We focus on ergonomics and meeting you....</p>
                            <div className="sales">
                                <i className="fa-solid fa-download"></i>
                                <p>15 Sales</p>
                            </div>
                            <div className="price">
                                <p>$16.48</p>
                                <p>$6.48</p>
                            </div>
                            <div className="info">
                                <span> <i className="fa-regular fa-clock"></i> Pro...</span>
                                <span>
                                    <i className="fa-solid fa-chart-line orange"></i> 64
                                    Les...</span>
                                <span> <i className="fa-regular fa-clock"></i> 22 hr..</span>
                            </div>
                            <button>
                                Learn More
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={photo3} alt="card-top" />
                        <div className="sale">Sale</div>

                        <div className="main">
                            <h5>English</h5>
                            <h3>Graphic Design</h3>
                            <p>We focus on ergonomics and meeting you....</p>
                            <div className="sales">
                                <i className="fa-solid fa-download"></i>
                                <p>15 Sales</p>
                            </div>
                            <div className="price">
                                <p>$16.48</p>
                                <p>$6.48</p>
                            </div>
                            <div className="info">
                                <span> <i className="fa-regular fa-clock"></i> Pro...</span>
                                <span>
                                    <i className="fa-solid fa-chart-line orange"></i> 64
                                    Les...</span>
                                <span> <i className="fa-regular fa-clock"></i> 22 hr..</span>
                            </div>
                            <button>
                                Learn More
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={photo4} alt="card-top" />
                        <div className="sale">Sale</div>
                        <div className="main">
                            <h5>English</h5>
                            <h3>Graphic Design</h3>
                            <p>We focus on ergonomics and meeting you....</p>
                            <div className="sales">
                                <i className="fa-solid fa-download"></i>
                                <p>15 Sales</p>
                            </div>
                            <div className="price">
                                <p>$16.48</p>
                                <p>$6.48</p>
                            </div>
                            <div className="info">
                                <span> <i className="fa-regular fa-clock"></i> Pro...</span>
                                <span>
                                    <i className="fa-solid fa-chart-line orange"></i> 64
                                    Les...</span>
                                <span> <i className="fa-regular fa-clock"></i> 22 hr..</span>
                            </div>
                            <button>
                                Learn More <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};