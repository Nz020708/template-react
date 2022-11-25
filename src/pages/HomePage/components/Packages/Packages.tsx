import './Packages.scss';
import { HeaderText } from '../../../../components/HeaderText/HeaderText';
import { Summary } from '../../../../components/Summary/Summary';

export const Packages=()=>{
    return(
        <section id="packages">
        <div className="container">
            <div className="row">
                <div className="summary">
                <HeaderText title="Practice Advice" />

                    <h2>Packages that are aprodable</h2>
                    <Summary text='  Problems trying to resolve the conflict between the two major
                        realms of Classical physics: Newtonian mechanics'/>
                </div>
            </div>
            <div className="cards">
                <div className="cards-row carousel"></div>
            </div>
            <div className="buttons">
                <i className="fa-solid fa-chevron-left"></i>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </section>
    );
};