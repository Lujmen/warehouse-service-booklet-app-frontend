import React from 'react';
import './paginationBar.css';

const PaginationBar = (props) => {
  const { setPage, page, totalPages } = props;
  console.log('PAGE: ' + page);
  console.log(totalPages);

  const prevPage = () => {
    console.log('Prev Page Clicked');

    setPage((prev) => ({ ...prev, page: prev.page * 1 - 1 }));
  };

  const nextPage = () => {
    console.log('Next Page Clicked');
    setPage((prev) => ({ ...prev, page: prev.page * 1 + 1 }));
  };

  return (
    <nav className="pagination-nav">
      <button disabled={page === 1} onClick={prevPage}>
        Prev Page
      </button>
      <p>{page}</p>
      <button disabled={page === totalPages} onClick={nextPage}>
        Next Page
      </button>
    </nav>
  );
};

export default PaginationBar;
