import { useEffect, useState } from "react";
import "./Stores.scss";
import StoreItem from "./StoreItem/StoreItem";

const Stores = () => {
  const [storesData, setStoresData] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/stores")
      .then((response) => response.json())
      .then((res) => {
        setStoresData(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className="storesListContainer">
      {storesData.length > 0 &&
        storesData.map((storeData, storeIndex) => {
          return (
            <StoreItem
              key={"store" + storeIndex}
              storeAttributes={storeData.attributes}
              books={
                storeData.relationships.books
                  ? storeData.relationships.books.data
                  : []
              }
              countryId={storeData.relationships.countries.data.id}
            />
          );
        })}
    </div>
  );
};

export default Stores;
