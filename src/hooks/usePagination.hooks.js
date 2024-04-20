import { useMemo } from "react";
import { range } from "@/utils/functions";

export const dots = "...";

export const usePagination = ({
  totalPageAmount,
  DataCountPerPage,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    // total pages count is  firstPage + lastPage + currentPage + 1 DOT + 2left and right pages for the current page
    const totalPageCount = 6; //if i want to shpw 1 pagenumber in each side of current page the it becomes total of 2 pagenumber buttons

    if (totalPageCount >= totalPageAmount) {
      //suppose we want to show 6 page number buttons always, but there are only 5 pages, so we'll show them without any dots, just simple [1,2,3,4,5]
      return range(1, totalPageAmount);
    }

    const leftAdjacentPageIndex = currentPage - 2;
    const rightAdjacentPageIndex = currentPage;

    const showLeftDots = leftAdjacentPageIndex > 2;
    const showRightDots = rightAdjacentPageIndex < totalPageAmount - 2;

    const firstPageNumber = 1;
    const lastPageNumber = totalPageAmount;

    if (!showLeftDots && showRightDots) {
      let leftRange = range(1, 4); //i want to show 4 pagenumbers just before the left side of right dots,[1,2,3,4,...,10]
      return [...leftRange, dots, totalPageAmount];
    }

    if (showLeftDots && !showRightDots) {
      let rightRange = range(
        //i want to show 4 pagenumbers just before the right side of left dots,[1,...7,8,9,10]
        totalPageAmount - 3,
        totalPageAmount
      );
      return [firstPageNumber, dots, ...rightRange];
    }

    if (showLeftDots && showRightDots) {
      let middleRange = range(leftAdjacentPageIndex, rightAdjacentPageIndex);
      return [firstPageNumber, dots, ...middleRange, dots, lastPageNumber];
    }
  }, [totalPageAmount, currentPage, DataCountPerPage]);

  return paginationRange;
};
