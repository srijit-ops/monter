import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Styles from "../styles/allreports.module.css";
import Select from "react-select";
import Pagination from "./Pagination";
import TableComponent from "./TableComponent";

const rowOptions = [
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
  {
    value: 8,
    label: 8,
  },
  {
    value: 9,
    label: 9,
  },
  {
    value: 10,
    label: 10,
  },
];

function AllReports({ data }) {
  const [selectedOption, setSelectedOption] = useState({ value: 5, label: 5 });

  const [DataCountPerPage, setDataCountPerPage] = useState(
    selectedOption ? selectedOption.value : 6
  );

  const totalPageAmount = Math.ceil(data.length / DataCountPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setDataCountPerPage(selectedOption?.value);
  }, [selectedOption]);

  const finalData = useMemo(() => {
    const firstDataIndex = (currentPage - 1) * DataCountPerPage;
    const lastDataIndex = firstDataIndex + DataCountPerPage;
    return data.slice(firstDataIndex, lastDataIndex);
  }, [currentPage, DataCountPerPage]);

  return (
    <div className="md:py-4 md:px-4 py-4 px-2 w-full">
      <div className="relative w-full my-6 flex justify-center items-center gap-10">
        <p className="sm:text-center text-start font-semibold tracking-wider md:text-lg text-sm text-black w-fit">
          Recently generated reports
        </p>
        <button className="text-black  w-1/12">
          <Image
            src={"/filter.png"}
            alt={"filter"}
            layout="fill"
            className={`object-contain ${Styles.img}`}
          />
        </button>
      </div>
      <TableComponent finalData={finalData} />
      <div className="flex justify-between items-center mt-6 flex-wrap pt-6 border-t border-gray-200">
        <div className="md:w-3/5 w-full md:mb-0 mb-5">
          <Pagination
            currentPage={currentPage}
            totalPageAmount={totalPageAmount}
            DataCountPerPage={DataCountPerPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
        <div className="flex justify-center items-center md:w-1/3 w-full">
          <p className="text-gray-600 mr-4 md:text-[0.9rem] text-[0.8rem]">
            Rows per page
          </p>
          <Select
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
            menuPlacement="auto"
            maxMenuHeight={100}
            menuPortalTarget={document.body}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={rowOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default AllReports;
