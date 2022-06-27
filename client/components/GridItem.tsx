import React from "react";

type GridItemProps = {
  colSpan?: string;
  rowSpan?: string;
  children?: React.ReactNode;
};

// TODO: refactor types
const GridItem = ({
  colSpan = "col-span-1",
  rowSpan = "row-span-1",
  children = null,
}: GridItemProps) => {
  return (
    <div
      className={`${colSpan} ${rowSpan} border-2 border-gray-500 flex justify-center items-center h-full w-full hover:border-orange-400 transition-all overflow-hidden`}>
      {children}
    </div>
  );
};

export default GridItem;
