import React from "react";
import { getCol, getRow } from "../utils/helpers";

type GridItemProps = {
  colSpan?: string;
  rowSpan?: string;
  children?: React.ReactNode;
};

// TODO: refactor types
const GridItem = ({ colSpan, rowSpan, children }: GridItemProps) => {
  return (
    <div
      className={`col-span-1 row-span-1 ${colSpan} ${rowSpan} text-black bg-gray-500 flex justify-center items-center h-[300px] md:h-full w-full border border-transparent md:hover:border-orange-400 transition-all overflow-y-hidden`}>
      {children}
    </div>
  );
};

export default GridItem;
