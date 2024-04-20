import React from "react";
import Image from "next/image";
import { usePagination, dots } from "../hooks/usePagination.hooks";
import Styles from "../styles/pagination.module.css";

function Pagination({
  onPageChange,
  totalPageAmount,
  currentPage,
  DataCountPerPage,
}) {
  const paginationButtonsArray = usePagination({
    currentPage,
    totalPageAmount,
    DataCountPerPage,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrev = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = totalPageAmount;

  if (paginationButtonsArray.length < 2) {
    return null;
  }

  return (
    <ul className="flex justify-between items-center md:gap-3 gap-2">
      <li
        className={`${
          currentPage === 1
            ? "text-gray-400 cursor-default"
            : "text-black cursor-pointer"
        }`}
        onClick={onPrev}
      >
        <div className="flex justify-center items-center md:gap-3 gap-2">
          <Image
            src={"/back.png"}
            alt={"arrow"}
            layout="fill"
            className={`object-contain ${Styles.img}`}
          />
          <p className="md:text-[0.9rem] text-[0.7rem]">Prev</p>
        </div>
      </li>
      {paginationButtonsArray.map((pageNumber, index) => {
        if (pageNumber === dots) {
          return (
            <li className="font-semibold text-lg text-gray-800" key={index}>
              &#8230;
            </li>
          );
        }
        return (
          <li
            key={index}
            className={`cursor-pointer md:px-3 md:py-2 py-1 px-2 rounded-md border border-gray-400  text-center md:text-[0.9rem] text-[0.7rem] font-semibold  ${
              pageNumber === currentPage
                ? "bg-[#f4511e] text-white"
                : "text-gray-500 bg-white"
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        onClick={onNext}
        className={`${
          currentPage === lastPage
            ? "text-gray-400 cursor-default"
            : "text-black cursor-pointer"
        }`}
      >
        <div className="flex justify-center items-center md:gap-3 gap-2">
          <p className="md:text-[0.9rem] text-[0.7rem]">Next</p>
          <Image
            src={"/back.png"}
            alt={"arrow"}
            layout="fill"
            className={`object-contain rotate-180 ${Styles.img}`}
          />
        </div>
      </li>
    </ul>
  );
}

export default Pagination;
