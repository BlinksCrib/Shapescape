import React, { useState } from "react";

interface Data {
  dataPerPage: any;
  totalData: any;
  children: any;
}

// Define types explicitly
type PageNumber = number;

const Pagination: React.FC<Data> = ({ dataPerPage, totalData, children }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageNumbers: PageNumber[] = [];
  console.log(pageNumbers);

  for (let i = 1; i <= Math.ceil(totalData.length / dataPerPage); i++) {
    pageNumbers.push(i);
    console.log(i);
  }

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber - 1);

  const totalPages = Math.ceil(totalData.length / dataPerPage);

  const goToNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages - 1));
  };

  const goToPrevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 0));
  };

  // Only show the items on the current page
  const dataOnCurrentPage = totalData.slice(
    currentPage * dataPerPage,
    (currentPage + 1) * dataPerPage
  );

  // Function to render pagination numbers with ellipses
  const renderPageNumbers = () => {
    const numbers = [];
    const maxVisiblePages = 6; // Maximum visible page numbers excluding ellipses

    // Function to determine if the current viewport is mobile
    const isMobileView = () => {
      return window.innerWidth <= 768; // Adjust as per your mobile breakpoint
    };

    if (isMobileView()) {
      // Pagination logic for mobile view
      const maxMobilePages = 2; // Maximum visible page numbers on mobile
      const startPage = Math.max(1, currentPage - Math.floor(maxMobilePages / 2));
      const endPage = Math.min(startPage + maxMobilePages - 1, totalPages);

      if(currentPage === 0){

      }
      for (let i = startPage; i <= endPage; i++) {
        numbers.push(
          <li
            key={i}
            className={`${
              currentPage + 1 === i ? "bg-[#ffffff] border border-[#041c3b] px-4 py-2 rounded-lg" : ""
            } first:ml-8 mr-8 cursor-pointer`}
            onClick={() => paginate(i)}
          >
            {i}
          </li>
        );
      }

      if (startPage > 1) {
        numbers.unshift(<li key="startEllipsis">...</li>);
      }

      if (endPage < totalPages) {
        numbers.push(<li key="endEllipsis">...</li>);
      }
    } else {
      // Pagination logic for desktop view
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(
          <li
            key={i}
            className={`${
              currentPage + 1 === i ? "bg-[#ffffff] border border-[#041c3b] px-4 py-2 rounded-lg" : ""
            } first:ml-8 mr-8 cursor-pointer`}
            onClick={() => paginate(i)}
          >
            {i}
          </li>
        );
      }
    }

    return numbers;
  };

  return (
    <div>
      {children(dataOnCurrentPage)}
      {totalPages <= 1 ? (
        <></>
      ) : (
        <div className="flex justify-center items-center  mt-[4rem]">
          <button
            className={`cursor-pointer  ${
              currentPage === 0 ? "text-[#b2b2b4]" : "text-[#041c3b]"
            }`}
            onClick={goToPrevPage}
            disabled={currentPage === 0}
          >
            <i className="fa-solid fa-arrow-left"></i>{" "}
            <span className="ml-3 hover:ml-4 duration-300 ease-in-out">Prev.</span>
          </button>
          <ul className="flex justify-center items-center">
          {renderPageNumbers()}
            {/* {pageNumbers.map((number) => (
              <li
                key={number}
                className={`${
                  currentPage + 1 == number
                    ? "bg-[#ffffff] border border-[#041c3b] px-4 py-2 rounded-lg"
                    : ""
                } first:ml-8 mr-8 cursor-pointer`}
                onClick={() => paginate(number)}
              >
                {number}
              </li>
            ))} */}
          </ul>
          {/* <h1>{totalPages}</h1> */}
          <button
            className={` ${
              currentPage === totalPages - 1 ? "text-[#b2b2b4]" : "text-[#041c3b]"
            }`}
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
          >
            <span className="mr-3 hover:mr-4 duration-300 ease-in-out">Next</span>
            <i className="fa-solid fa-arrow-right"></i>{" "}
          </button>
        </div>
      )}
    </div>
  );
};
export default Pagination;
