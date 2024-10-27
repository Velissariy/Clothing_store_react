import React, {useEffect} from 'react';

const CatalogPagination = ({totalPages, currentPage, handleChangePage}) => {
  const renderPageLinks = () => {
    return [...Array(totalPages)].map((_, index) => {
      const pageNumber = index + 1;
      return (
        <a key={pageNumber}
           href="#"
           className={currentPage === pageNumber ? "pagination__active" : ""}
           onClick={(e) => {
             e.preventDefault();
             handleChangePage(pageNumber);
           }}
        >
          {pageNumber}
        </a>
      );
    });
  };

  return (
    <div className="catalog__pages pagination">
      <img
        className="pagination__leftButton"
        src={`${process.env.PUBLIC_URL}/img/catalogPaginationRight.svg`}
        alt="Previous page"
        onClick={() => handleChangePage(currentPage > 1 ? currentPage - 1 : currentPage)}
      />
      {renderPageLinks()}
      <img
        className="pagination__rightButton"
        src={`${process.env.PUBLIC_URL}/img/catalogPaginationLeft.svg`}
        alt="Next page"
        onClick={() => handleChangePage(currentPage < totalPages ? currentPage + 1 : currentPage)}
      />
    </div>
  );
};

export default CatalogPagination;