import { Summary } from '../../../../components/Summary/Summary';
import './Watch.scss';
import mainImg from './Main-img.png'

export const Watch = () => {
    return (
        <section id="watch">
            <div className="flex-container">
                <div className="section-image">
                    <img src={mainImg} alt="watch courses img" />
                </div>
                <div className="summary">
                    <div className="line"></div>
                    <h2>Watch our Courses</h2>
                    <Summary text='  Problems trying to resolve the conflict between the two major
                        realms of Classical physics: Newtonian mechanics'/>
                      
                    
                    <a href="#">Learn More
                        <span> <i className="fa-solid fa-arrow-right"></i></span>
                    </a>
                </div>
            </div>
        </section>

    );
};