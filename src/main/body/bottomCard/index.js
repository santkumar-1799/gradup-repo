import cardsList from './CardList';

import './styles.css'

const BottomCard = () => {

    const Card = ({logo, header, text }) => (
        <div className="bottom-card-container">
         <div className="logo-header-container">
          <span role="img" aria-label="Logo" className="logo">{logo}</span>
          <div className="bottom-header">{header}</div>
        </div>
          <div className="bottom-text">
            {text}
          </div>
        </div>
      );

      const analyticData = [
        {
          value: '1000+',
          heading: 'Job Offers Provided',
        },
        {
            value: '100+',
            heading: 'Skill talent pool',
          },
          {
            value: '50+',
            heading: 'Customers Services',
          },
          {
            value: '2k+',
            heading: 'Industry Sectors',
          },
      ];
      
        return (
            <>
            <div className='bottom-container'>
                {cardsList.map((card, index) => (
                <Card key={index} {...card} />
                ))}
            </div>
            <div className='bottom-analytics'>
                <div className='analytics-header'>
                The Fastest Growing Innovative Workforce Is With Us
                </div>

                <div className='analytic-card-container'>
                {analyticData.map((card ) => (
                        <div className='analytic-card'>
                            <h1>{card?.value}</h1>
                            <h3>{card?.heading}</h3>
                        </div>
                ))}
                 </div>
                
            </div>
          </>
        );
};
export default BottomCard;