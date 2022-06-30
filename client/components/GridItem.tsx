import React from "react";
import { getCol, getRow } from "../utils/helpers";

type GridItemProps = {
  colSpan?: string;
  rowSpan?: string;
  children?: React.ReactNode;
};

// TODO: refactor types
const GridItem = ({ colSpan, rowSpan, children = null }: GridItemProps) => {
  return (
    <div
      className={`col-span-1 row-span-1 ${colSpan} ${rowSpan} text-black bg-gray-500 border-2 border-transparent flex justify-center items-center h-[300px] md:h-full w-full hover:border-orange-400 transition-all overflow-hidden`}>
      {children}
    </div>
  );
};

export default GridItem;
