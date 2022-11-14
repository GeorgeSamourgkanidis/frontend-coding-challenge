import "./StoreItem.scss";
import BooksTable from "./BooksTable/BooksTable";
import RatingStars from "./rating-stars/rating-stars";

const StoreItem = (props) => {
  const { attributes, books, countryFlagCode } = props;

  const calculateDate = (date) => {
    const splittedDate = date.slice(0, 10).split("-");
    return splittedDate.reverse().join("-");
  };

  return (
    <div className="storeContainer">
      <div className="content">
        <img className="storeImage" src={attributes.storeImage} alt="" />
        <div className="details">
          <div className="title-row">
            <h2 className="title">{attributes.name}</h2>
            <RatingStars rating={attributes.rating} />
          </div>
          <BooksTable books={books} />
        </div>
      </div>

      <div className="footer">
        <span>
          {calculateDate(attributes.establishmentDate) +
            " - " +
            attributes.website}
        </span>
        <img
          className="countryFlag"
          src={`${process.env.REACT_APP_COUNTRIES_URL}/png/${countryFlagCode}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default StoreItem;
