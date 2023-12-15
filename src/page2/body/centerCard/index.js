import './styles.css';
import cardsData from './CardData';

const CenterCard = () => {

    const Card = ({header, text, buttonText }) => (
        <div className="card-container">
          <div className="header_text">{header}</div>
          <div className="text">
            {text}
          </div>
          <button className="button_text">{buttonText}</button>
        </div>
      );
      
        return (
          <div className='container'>
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        );
};
export default CenterCard;