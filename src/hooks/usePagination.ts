import { useState, useEffect } from "react";
export const DOTS = "...";

/**
 * Generate the desired range of pages to display in the pagination component.
 * in case of a single page, the range will be [1]
 * in case of a page with less than 3 pages, the range will be [1, 2, 3]
 * in case you are on the second page, the range will be [1, 2, 3, ..., totalPages]
 * in case of your current page is in the middle of the range, the range will be [1, ..., currentPage - 1, currentPage, currentPage + 1, ..., totalPages]
 * 
 * @param {Number} currentPage the current page number
 * @param {Number} totalCount the total number of items
 * @param {Number} pageSize the number of items per page 
 * @returns range array as described above
 */

interface IPaginationHookParams {
    currentPage: number,
    totalCount: number,
    pageSize: number
}
type TRange = (string | number)[];

function usePagination(params: IPaginationHookParams) {
  const {currentPage, totalCount, pageSize} = params;
  const [paginationRange, setPaginationRange] = useState<TRange>([]);
  
  useEffect(() => {
    const range: TRange = [];
    const totalPages = Math.ceil(totalCount / pageSize);
    const leftBound = Math.max(1, currentPage - 1);
    const rightBound = Math.min(totalPages, currentPage + 1);

    if (totalPages <= 3) {
      for (let i = 1 ; i<= totalPages; i++) {
        range.push(i);
      }
      setPaginationRange(range);
    } else {
      if (currentPage <= 2) {
        for (let i = 1; i <= 3; i++) {
          range.push(i);
        }
        range.push(DOTS);
        range.push(totalPages);
        setPaginationRange(range);
      } else if (currentPage >= totalPages - 1) {
        range.push(1);
        range.push(DOTS);
        for (let i = totalPages - 2; i <= totalPages; i++) {
          range.push(i);
        }
        setPaginationRange(range);
      } else {
        range.push(1);
        range.push(DOTS);
        for (let i = leftBound; i <= rightBound; i++) {
          range.push(i);
        }
        range.push(DOTS);
        range.push(totalPages);
        setPaginationRange(range);
      }
    }
  }
    , [currentPage, totalCount, pageSize]);
  return paginationRange;
}


export default usePagination;
