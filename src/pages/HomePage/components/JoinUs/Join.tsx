import './Join.scss';
import { HeaderText } from '../../../../components/HeaderText/HeaderText';
import { Summary } from '../../../../components/Summary/Summary';

export const Join = () => {
    return (
        <section id="join_us">
            <div className="container">
                <div className="row">
                    <HeaderText title='Join'/>
                    <h2>JOIN US</h2>
                    <Summary text='  Problems trying to resolve the conflict between the two major
                        realms of Classical physics: Newtonian mechanics'/>
                </div>

                <div className="form-row">
                    <form action="#">
                        <div className="input-icon">
                            <i className="fa-regular fa-user"></i>
                            <input type="text" placeholder=" Your Name" />
                        </div>
                        <div className="input-icon">
                            <i className="fa-regular fa-envelope"></i>
                            <input type="email" placeholder=" Your Email" />
                        </div>
                        <input type="text" placeholder=" Your Message" />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};