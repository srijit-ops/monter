import React from "react";
import { usePagination, DOTS } from "../hooks/usePagination.hooks";
import Styles from "../styles/pagination.module.css"
import Image from "next/image";

const Pagination = ({onPageChange,
  // totalCount,
  totalPageCount,
  currentPage,
  pageSize
}) => {


  const paginationRange = usePagination({
    currentPage,
    totalPageCount,
    // totalCount,
    pageSize
  });

  if (paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = totalPageCount;
  return (
    <ul
      className="flex justify-between items-center gap-3"
    >
      <li
        className={`${currentPage===1?"text-gray-400 cursor-default":"text-black cursor-pointer"}`}
        onClick={onPrevious}
      >
        <div className="flex justify-center items-center gap-3">
          
          <Image
            src={"/back.png"}
            alt={"filter"}
            layout="fill"
            // height={230}
            // width={238}
            className={`object-contain ${Styles.img}`}/>
            <p className="text-[0.9rem]">Prev</p>
          </div>

      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="font-semibold text-lg text-gray-800 ">&#8230;</li>;
        }

        return (
          <li
            className={`cursor-pointer px-3 py-2 rounded-md border border-gray-400  text-center text-[0.9rem] font-semibold  ${pageNumber===currentPage?"bg-[#f4511e] text-white":"text-gray-500 bg-white"}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        onClick={onNext}
        className={`${currentPage===lastPage?"text-gray-400 cursor-default":"text-black cursor-pointer"}`}
      >
        <div className="flex justify-center items-center gap-3">
          <p className="text-[0.9rem]">Next</p>
          <Image
            src={"/back.png"}
            alt={"filter"}
            layout="fill"
            // height={230}
            // width={238}
            className={`object-contain rotate-180 ${Styles.img}`}/>
          </div>
      </li>
    </ul>
  );
};

export default Pagination;
