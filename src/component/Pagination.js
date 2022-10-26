import React from "react";

function Pagination({ paginate, pageNumber, page }) {
  const pageNumbers = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= pageNumber; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <button onClick={() => paginate(page - 1)} href="!#" className="page-link">
          Prev
        </button>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </button>
          </li>
        ))}
        <button onClick={() => paginate(page + 1)} href="!#" className="page-link">
          Next
        </button>
      </ul>
    </nav>
  );
}

export default Pagination;
