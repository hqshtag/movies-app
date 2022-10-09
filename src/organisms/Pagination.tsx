import "../css/pagination.scss";

import usePagination, { DOTS } from "../hooks/usePagination";

import { nanoid } from "nanoid";

interface IPaginationProps {
    onPageChange: (n: number)=> void,
    onPageSizeOptionChange: (n: number)=> void,
    pageSizeOptions: number[]
    totalCount: number,
    currentPage: number,
    pageSize: number,
    disabledNavigation?: boolean
}


function Pagination({
  onPageChange,
  onPageSizeOptionChange,
  totalCount,
  currentPage,
  pageSize,
  pageSizeOptions,
  disabledNavigation
}: IPaginationProps) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  const isNextPageAvailable = currentPage < totalCount / pageSize;
  const isPreviousPageAvailable = currentPage > 1;

  const onNext = () => {
    if(isNextPageAvailable) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if(isPreviousPageAvailable) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <ul
      className="pagination-wrapper"
      // Do not remove the aria-label below, it is used for Hatchways automation.
      aria-label="Blog post pagination list"
    >
      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton left"
          // Do not remove the aria-label below, it is used for Hatchways automation.
          aria-label="Goto previous page"
          onClick={onPrevious}
          disabled={disabledNavigation || !isPreviousPageAvailable} // change this line to disable a button.
        >
         ←
        </button>
      </li>

      {paginationRange.map((pageNumber) => {
        const key = nanoid();

        if (pageNumber === DOTS) {
          return (
            <li key={key} className="dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={key}
            className="paginationItem"
            aria-current={currentPage === pageNumber ? 'page' : 'false'} // change this line to highlight a current page.
          >
            <button
              type="button"
              // Do not remove the aria-label below, it is used for Hatchways automation.
              aria-label={`Goto page ${pageNumber}`}
              onClick={typeof pageNumber === 'number' ? () =>  onPageChange(pageNumber) : undefined}
              disabled={pageNumber === currentPage} // change this line to disable a button.
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton right"
          // Do not remove the aria-label below, it is used for Hatchways automation.
          aria-label="Goto next page"
          onClick={onNext}
          disabled={disabledNavigation || !isNextPageAvailable} // change this line to disable a button.
        >
          →
        </button>
      </li>

      <select
        className="paginationSelector"
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="Select page size"
        value={pageSize}
        onChange={(e) => {
          onPageSizeOptionChange(parseInt(e.target.value));
        }}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} selected={pageSize === size} value={size}>
            {size} per page
          </option>
        ))}
      </select>
    </ul>
  );
}



export default Pagination;
