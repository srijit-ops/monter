import React from "react";
import Image from "next/image";
import Styles from "../styles/allreports.module.css";
import { formatDate } from "@/utils/functions";

function TableComponent({ finalData }) {

  return (
    <div>
      <table className="w-full border-collapse">
        <thead className="bg-[#f5f5f5]">
          <tr className=" text-gray-600 md:text-base text-[0.8rem]">
            <th className="pt-4 pb-2 pl-3">Date</th>
            <th className="pt-4 pb-2">Report Name</th>
            <th className="text-center pt-4 pb-2">Download</th>
          </tr>
        </thead>
        <tbody className="border-t-[16px] border-transparent">
          {finalData.map((item, index) => {
            const { date, time } = formatDate(item.createdAt);
            return (
              <tr key={index} className="pt-3 border-t border-gray-200">
                <td className="md:text-base text-[0.8rem] py-2">
                  {date}
                  <br />
                  <span className="text-gray-500 sm:text-sm text-[0.7rem]">
                    {time}
                  </span>
                </td>
                <td className="md:text-base text-[0.8rem] py-2">
                  {item.reportName}
                </td>
                <td className="cursor-pointer flex justify-center py-2">
                  <Image
                    src={"/file.png"}
                    alt={"filter"}
                    layout="fill"
                    className={`object-contain mt-2 ${Styles.download}`}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
