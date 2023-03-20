import React from "react";
import ReactPaginate from "react-paginate";
import "../styles.css";

const Pagination = ({ totalPost, postPerPage, setCurrentPage}) => {
  const pages = [];
  const totalPages = Math.ceil(totalPost / postPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  console.log(totalPages);
  console.log(pages);

  const handlePageClick = (data) => {
    console.log(data.nextSelectedPage +1);
    setCurrentPage(data.nextSelectedPage +1);
  };

  return (
    <ReactPaginate
      previousLabel={"Prev"}
      nextLabel={"Next"}
      breakLabel={"..."}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onClick={handlePageClick}
      containerClassName = {'pagi justify-content-center'}
      pageClassName = {'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName = {'page-item'}
      previousLinkClassName={'page-link '}
      nextClassName={'page-item'}
      nextLinkClassName= {'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
    />
  );


  }
export default Pagination;
