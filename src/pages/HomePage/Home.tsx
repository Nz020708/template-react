import { Client } from './components/Client/Client';
import { Join } from './components/JoinUs/Join';
import { Online } from './components/OnlineEducation/Online';
import { Packages } from './components/Packages/Packages';
import { Watch } from './components/Watch/Watch';
import { Welcome } from './components/Welcome/Welcome';
import './HomePage.scss'
export const Home = () => {
    return (
        <>
          <Welcome/>
          <Packages/>
          <Online/>
          <Watch/>
          <Client/>
          <Join/>
        </>

    );
};