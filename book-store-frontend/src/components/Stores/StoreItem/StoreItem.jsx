import "./StoreItem.scss";
import BooksTable from "./BooksTable/BooksTable";

const StoreItem = (props) => {
  const { storeAttributes, books, countryId } = props;

  return (
    <div className="storeContainer">
      <div className="content">
        <img className="image" src={storeAttributes.storeImage} alt="" />
        <div className="details">
          <h2 className="title">{storeAttributes.name}</h2>
        </div>
      </div>

      <div className="footer">
        <span>{storeAttributes.website}</span>
        <span>flag</span>
      </div>
      <BooksTable />
    </div>
  );
};

export default StoreItem;
