import "./BooksTable.scss";

const BooksTable = (props) => {
  const { books } = props;

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">Best-selling books</th>
        </tr>
      </thead>
      <tbody>
        {books ? (
          books.map((book, key) => (
            <tr key={"book" + key}>
              <td>{book.bookName}</td>
              <td>{book.author}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="2">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default BooksTable;
