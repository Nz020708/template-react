import { HeaderText } from '../../../../components/HeaderText/HeaderText';
import { Summary } from '../../../../components/Summary/Summary';
import './Client.scss';

export const Client = () => {
    return (
        <section id="client" className="testim">
            <div className="row">
            <HeaderText title="Practice Advice" />
                <h2>Each and every client is important.</h2>
                <Summary text='  Problems trying to resolve the conflict between the two major
                        realms of Classical physics: Newtonian mechanics'/>
            </div>

            <div className="row-card cont slide-in" id="testim-content"></div>
        </section>
    );
};
