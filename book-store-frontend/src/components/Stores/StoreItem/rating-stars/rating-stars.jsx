import "./rating-stars.scss";

const RatingStars = (props) => {
  const { rating } = props;

  return (
    <div className="stars">
      {[...Array(5)].map((star, index) => {
        return (
          <span key={"star" + index} className={rating >= index + 1 ? "goldStar" : "greyStar"}>
            ★
          </span>
        );
      })}
    </div>
  );
};

export default RatingStars;
