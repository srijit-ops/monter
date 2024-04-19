import { useMemo } from 'react';

export const DOTS = '...';

function range(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}


export const usePagination = ({
  totalPageCount,
  // totalCount,
  pageSize,
  currentPage
}) => {
  const paginationRange = useMemo(() => {
  
   

    // total pages count is  firstPage + lastPage + currentPage + 2*DOTS + 2left and right pages for the current page
    const totalPageNumbers = 7; //if i want to shpw 1 pagenumber in each side of current page the it becomes total of 2 paenumber buttons

   
    if (totalPageNumbers >= totalPageCount) {  //suppose we want to show 7 page number buttons always, but there are only 5 pages, so we'll show them without any dots, just simple [1,2,3,4,5]
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = currentPage - 2;
    const rightSiblingIndex = currentPage;

    /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageNumber = 1;
    const lastPageNumber = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
    
      let leftRange = range(1, 4);  //i want to show 4 pagenumbers just before the left side of right dots,[1,2,3,4,...,10]

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {

      let rightRange = range(  //i want to show 4 pagenumbers just before the right side of left dots,[1,...7,8,9,10]
        totalPageCount -3,
        totalPageCount
      );
      return [firstPageNumber, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageNumber, DOTS, ...middleRange, DOTS, lastPageNumber];
    }
  }, [totalPageCount, currentPage, pageSize]);

  return paginationRange;
};
