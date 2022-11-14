import { useEffect, useState } from "react";
import "./Stores.scss";
import StoreItem from "./StoreItem/StoreItem";

const Stores = () => {
  const [storesData, setStoresData] = useState(null);

  const getBookStoreData = (storeData) => {
    const attributes = storeData.attributes;
    const books = storeData.relationships.books
      ? getTopTwoBooks(storeData.relationships.books.data)
      : null;
    const countryFlagCode = getRelatedItem(
      storeData.relationships.countries.data
    ).attributes.code;

    return { attributes, books, countryFlagCode };
  };

  const getTopTwoBooks = (relatedBooks) => {
    let booksDetails = [];
    relatedBooks.forEach((book) => {
      const bookDetails = getRelatedItem(book);

      const author = bookDetails.relationships.author.data;
      const authorDetails = getRelatedItem(author);

      booksDetails.push({
        bookName: bookDetails.attributes.name,
        copiesSold: bookDetails.attributes.copiesSold,
        author: authorDetails.attributes.fullName,
      });
    });

    if (booksDetails.length > 1) {
      booksDetails.sort((a, b) => b.copiesSold - a.copiesSold);
      if (booksDetails.length > 2) {
        booksDetails = booksDetails.slice(0, 2);
      }
    }
    return booksDetails;
  };

  const getRelatedItem = (relatedItem) => {
    return storesData.included.find(
      (element) =>
        element.type === relatedItem.type && element.id === relatedItem.id
    );
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/stores")
      .then((response) => response.json())
      .then((res) => {
        setStoresData(res);
      });
  }, []);

  return (
    <div className="storesListContainer">
      {storesData?.data.length > 0 &&
        storesData.data.map((storeData, storeIndex) => {
          return (
            <StoreItem
              key={"store" + storeIndex}
              {...getBookStoreData(storeData)}
            />
          );
        })}
    </div>
  );
};

export default Stores;
