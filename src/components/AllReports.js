import React, { useMemo, useState } from 'react'
import Image from "next/image";
import Styles from "../styles/allreports.module.css"
import TableComponent from './TableComponent';
import Select from "react-select";
import Pagination from './Pagination';

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
    let PageSize = 6;
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
        // className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      /> */}
      <Pagination
        // className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      {/* <Select options={rowOptions} onChange={(value) => {
        this.setValues(value)
        console.log("haha")
    }} 
        multi={false}/>; */}
        <Select
        // className="basic-single"
        // classNamePrefix="select"
        // defaultValue={colourOptions[0]}
        // isDisabled={isDisabled}
        // isLoading={isLoading}
        // isClearable={isClearable}
        // isRtl={isRtl}
        // isSearchable={isSearchable}
        name="color"
        menuPortalTarget={document.body}
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
      />
        <Select
            menuPortalTarget={document.body}
            menuPosition="fixed"
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
          />
        </div>
    </div>
  )
}

export default AllReports