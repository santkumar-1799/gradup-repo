import TopCard from './topCard';
import CenterCard from './centerCard';
import BottomCard from './bottomCard';

import './styles.css';
const Body = () => {

    return (
        <div className='main_container'>
           <TopCard />
           <CenterCard />
           <div className="advert-div">
            <div className='top-header'>
                    <div className='main-heading'>
                    High-performance hackathons generating lasting impact
                    </div>
                    <div className='side-heading'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit.
                    </div>
                </div>
             <BottomCard />
            </div>
          
        </div>
    );

}
export default Body;