const PortfolioCard = (props) => {
  return (
    <div className="block center">
      <h2>Example Portfolio 1</h2>
      <p>{props.address}</p>
    </div>
  );
};

export default PortfolioCard;
