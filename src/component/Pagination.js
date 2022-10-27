import React, { useEffect, useState} from "react";

function Pagination({ paginate, pageNumber, page }) {
  const [oneToFive, setOneToFive] = useState(true);
  const [fourOrMore, setFourOrMore] = useState(false);
  const [lastNumber, setLastNumber] = useState(false);

  const pageNumbers = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= pageNumber; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (page >= 4 && page < pageNumber-4) {
      setFourOrMore(true);
      setOneToFive(false);
      setLastNumber(false);
    } else if (page < 4) {
      setOneToFive(true);
      setFourOrMore(false);
      setLastNumber(false);
    } else if (page >= pageNumber-4) {
      setLastNumber(true);
      setFourOrMore(false);
      setOneToFive(false);
    }
  },[page])

  return (
    <nav>
      <ul className="pagination">
        <button onClick={() => paginate(page-1)} href="!#" className="page-link">
          prev
        </button>
        {
          // display angka pertama pada saat 6 angka saat lebih dari 4
        }
        {fourOrMore && (
          <li key={1} className="page-item">
            <button onClick={() => 
              paginate(1)} 
              href="!#" className="page-link">
              {1}
            </button>
          </li>
        )}

        {
          // display angka pertama pada saat 6 angka terakhir
        }
      {lastNumber && (
          <li key={1} className="page-item">
            <button onClick={() => 
              paginate(1)} 
              href="!#" className="page-link">
              {1}
            </button>
          </li>
        )}

        {
          // display titik titik setelah angka pertama
        }
        {lastNumber && (
          <li className="page-item">
            <button
              href="!#" className="page-link">
              ...
            </button>
          </li>
        )}
        
        {
          // display 6 angka saat lebih dari 4
        }
        {fourOrMore && pageNumbers.slice(page-3, page+3).map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => 
              paginate(number)} 
              href="!#" className="page-link">
              {number}
            </button>
          </li>
        ))}

        {
          // display 6 angka pertama
        }
        {oneToFive && pageNumbers.slice(0, 7).map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => 
              paginate(number)} 
              href="!#" className="page-link">
              {number}
            </button>
          </li>
        ))}

        {
          // display 6 angka terakhir
        }
        {lastNumber && pageNumbers.slice(pageNumber-6, pageNumber+7).map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => 
              paginate(number)} 
              href="!#" className="page-link">
              {number}
            </button>
          </li>
        ))}

        {
          // display titik titik sebelum angka terakhir
        }
        {oneToFive && (
          <li className="page-item">
            <button
              href="!#" className="page-link">
              ...
            </button>
          </li>
        )}
      {
        // display angka terakhir pada saat 6 angka pertama
      }
      {oneToFive && (
          <li key={pageNumber} className="page-item">
          <button onClick={() => 
            paginate(pageNumber)} 
            href="!#" className="page-link">
            {pageNumber}
          </button>
        </li>
        )}

        {// display angka terakhir pada saat lebih dari 4
        }
        {fourOrMore && (
          <li key={pageNumber} className="page-item">
          <button onClick={() => 
            paginate(pageNumber)} 
            href="!#" className="page-link">
            {pageNumber}
          </button>
        </li>
        )}

        <button onClick={() => paginate(page+1)} href="!#" className="page-link">
          next
        </button>
      </ul>
    </nav>
  );
}

export default Pagination;
