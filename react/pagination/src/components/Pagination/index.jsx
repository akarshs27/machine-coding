import "./style.css";

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  function handlePreviousClick() {
    setCurrentPage((prev) => prev - 1);
  }

  function handleNextClick() {
    setCurrentPage((prev) => prev + 1);
  }

  function handlePageClick(page) {
    setCurrentPage(page - 1);
  }

  return (
    <div className="pagination-wrapper">
      <button disabled={currentPage === 0} onClick={handlePreviousClick}>
        Prev
      </button>
      {[...Array(totalPages).keys()].map((eachPage) => (
        <button
          key={eachPage}
          onClick={() => handlePageClick(eachPage + 1)}
          className={currentPage === eachPage ? "active" : ""}
        >
          {eachPage + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages - 1}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
