import TopCard from './topCard';
import CenterCard from './centerCard';
import BottomCard from './bottomCard';

import './styles.css';
const Body = () => {

    return (
        <div className='main_container'>
           <TopCard />
           <CenterCard />
           <div className="sale-div">Where U Elevate Advantages</div>
           <BottomCard />
        </div>
    );

}
export default Body;