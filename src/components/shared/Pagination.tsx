"use client";
import React from "react";
import Pagination from "rc-pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface IProps {
  page: number;
  totalData: number;
  itemsPerPage: number;
  setPage: (param: number) => void;
}

const CustomPagination = ({
  page,
  totalData,
  itemsPerPage,
  setPage,
}: IProps) => {
  const onChange = (newPage: number) => {
    setPage(newPage);
  };

  const itemRender = (current: number, type: string) => {
    if (type === "prev") {
      return (
        <button className="cursor-pointer flex items-center gap-1 border border-gray-700 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 text-sm">
          <IoIosArrowBack /> Prev
        </button>
      );
    }

    if (type === "next") {
      return (
        <button className="cursor-pointer flex items-center gap-1 border border-gray-700 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 text-sm">
          Next <IoIosArrowForward />
        </button>
      );
    }

    if (type === "page") {
      const isActive = current === page;
      return (
        <button
          className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-md border text-sm ${
            isActive
              ? "bg-gray-800 text-white border-gray-800"
              : "text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {current}
        </button>
      );
    }

    return null;
  };

  return (
    <div className="flex justify-center mt-6">
      <Pagination
        current={page}
        total={totalData}
        pageSize={itemsPerPage}
        onChange={onChange}
        itemRender={itemRender}
        showLessItems
        className="flex gap-3 items-center" // override ul layout
      />
    </div>
  );
};

export default CustomPagination;
