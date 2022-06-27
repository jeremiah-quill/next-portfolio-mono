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
      className={`${colSpan} ${rowSpan} border-2 rounded-lg border-orange-400 flex justify-center items-center h-full w-full hover:scale-105 hover:shadow-lg hover:shadow-black transition-all overflow-hidden`}>
      {children}
    </div>
  );
};

export default GridItem;
