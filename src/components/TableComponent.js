import React from 'react'
import Image from "next/image";
import Styles from "../styles/allreports.module.css"

function TableComponent({finalData}) {
    function formatDate(isoDate) {
        const dateObj = new Date(isoDate);
    
        // Get hours and minutes
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes();
    
        // Convert hours to AM/PM format
        const amPm = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12; // Convert to 12-hour format
    
        // Get day, month, and year
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1; // January is 0, so add 1
        const year = dateObj.getFullYear();
    
        // Return an object containing time and date components separately
        return {
            time: `${displayHours}:${minutes.toString().padStart(2, '0')} ${amPm}`,
            date: `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`
        };
    }
  return (
    <div>
        <table className='w-full border-collapse'>
        <thead className='bg-[#f5f5f5]'>
          <tr className=' pl-4 py-2 text-gray-600'>
            <th>Date</th>
            <th>Report Name</th>
            <th className='text-center'>Download</th>
          </tr>
        </thead>
        <tbody className='border-t-[16px] border-transparent'>
          {finalData.map((item,index) => {
            const {date, time}= formatDate(item.createdAt)
            return (
              <tr key={index} className='pt-3 border-t border-gray-200'>
                <td>
                    {date}
                    <br/>
                    <span className='text-gray-500 text-sm'>
                    {time}
                    </span>
                    </td>
                <td>{item.reportName}</td>
                <td className='cursor-pointer flex justify-center'>
                <Image
            src={"/file.png"}
            alt={"filter"}
            layout="fill"
            // height={230}
            // width={238}
            className={`object-contain ${Styles.download}`}
          />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent