import cardsList from "./CardList";

import "./styles.css";

const BottomCard = () => {
  const Card = ({ header, text, commnet, view, time, imageUrl }) => (
    <div className="bottom-card-container2">
      {imageUrl && <img src={imageUrl} alt="Logo" className="logo-image" />}
      <div className="text-container">
        <div className="text-header">{header}</div>
        <div className="text-body">{text}</div>
        <div className="bottom-details">
          <div className="logo-text">
            <span role="img" aria-label="Logo" className="logo">
              💬
            </span>
            <div className="comment">{commnet}</div>
          </div>
          <div className="logo-text">
            <span role="img" aria-label="Logo" className="logo">
              👁️
            </span>
            <div className="view">{view} </div>
          </div>

          <div className="logo-text">
            <span role="img" aria-label="Logo" className="logo">
              🕓
            </span>
            <div className="time">{time}</div>
          </div>
        </div>
        <div className="read-more">Read More...</div>
      </div>
    </div>
  );

  const analyticData = [
    {
      value: "1000+",
      heading: "Job Offers Provided",
    },
    {
      value: "100+",
      heading: "Skill talent pool",
    },
    {
      value: "50+",
      heading: "Customers Services",
    },
    {
      value: "2k+",
      heading: "Industry Sectors",
    },
  ];

  return (
    <>
      <div className="bottom-container2">
        {cardsList.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="bottom-analytics">
        <div className="analytics-header">
          The Fastest Growing Innovative Workforce Is With Us
        </div>

        <div className="analytic-card-container">
          {analyticData.map((card) => (
            <div className="analytic-card">
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
