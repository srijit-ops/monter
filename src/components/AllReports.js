import React, { useMemo, useState } from 'react'
import Image from "next/image";
import Styles from "../styles/allreports.module.css"
import TableComponent from './TableComponent';
import Select from "react-dropdown-select";

function AllReports({data}) {

    const rowOptions = [
        {
          value: 5,
          label: 5
        },
        {
          value: 10,
          label: 10
        }
      ];
    let PageSize = 10;
      const [currentPage, setCurrentPage] = useState(1);
    
      const finalData = useMemo(() => {
        const firstDataIndex = (currentPage - 1) * PageSize;
        const lastDataIndex = firstDataIndex + PageSize;
        return data.slice(firstDataIndex, lastDataIndex);
      }, [currentPage]);

  return (
    <div className='p-4'>
        <div className='relative w-full my-6 flex justify-center items-center gap-10'>
            <p className='text-center font-semibold tracking-wider text-lg text-black w-fit'>
            Recently generated reports
            </p>
            <button className='text-black w-1/12'>
            <Image
            src={"/filter.png"}
            alt={"filter"}
            layout="fill"
            // height={230}
            // width={238}
            className={`object-contain ${Styles.img}`}
          />
            </button>
        </div>
        <TableComponent finalData={finalData}/>
        <div className='flex justify-between items-center'>
        {/* <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      /> */}
      <Select options={rowOptions} onChange={(value) => {
        this.setValues(value)
        console.log("haha")
    }} 
        multi={false}/>;
        </div>
    </div>
  )
}

export default AllReports