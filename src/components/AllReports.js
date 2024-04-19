import React, { useEffect, useMemo, useState } from 'react'
import Image from "next/image";
import Styles from "../styles/allreports.module.css"
import TableComponent from './TableComponent';
import Select from "react-select";
import Pagination from './Pagination';

function AllReports({data}) {
  const [selectedOption, setSelectedOption] = useState({value:5, label:5});
  const [PageSize, setPageSize] = useState(selectedOption?selectedOption.value:6)
    const rowOptions = [
      {
        value: 4,
        label: 4
      },
      {
        value: 5,
        label: 5
      },
        {
          value: 6,
          label: 6
        },
        {
          value: 7,
          label: 7
        },
        {
          value: 8,
          label: 8
        },
        {
          value: 9,
          label: 9
        },
        {
          value: 10,
          label: 10
        },
      ];
    // let PageSize = 10;
      const [currentPage, setCurrentPage] = useState(1);
      useEffect(() => {
        console.log(selectedOption)
        setPageSize(selectedOption?.value)
      }, [selectedOption])
      
    
      const finalData = useMemo(() => {
        const firstDataIndex = (currentPage - 1) * PageSize;
        const lastDataIndex = firstDataIndex + PageSize;
        return data.slice(firstDataIndex, lastDataIndex);
      }, [currentPage,PageSize]);

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
        <div className='flex justify-between items-center mt-8 flex-wrap'>
        {/* <Pagination
        // className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      /> */}
      <div className='md:w-3/5 w-full'>
      <Pagination
        // className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      </div>
      
      {/* <Select options={rowOptions} onChange={(value) => {
        this.setValues(value)
        console.log("haha")
    }} 
        multi={false}/>; */}
        <div className='flex justify-center items-center md:w-1/3 w-full'>
        <p className='text-gray-600 mr-4 text-[0.9rem]'>Rows per page</p>
        <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={rowOptions}
      />
      {/* {console.log(selectedOption)} */}
        </div>
      </div>
      
        
        
        {/* <Select
            menuPortalTarget={document.body}
            menuPosition="fixed"
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
          /> */}
        </div>

  )
}

export default AllReports