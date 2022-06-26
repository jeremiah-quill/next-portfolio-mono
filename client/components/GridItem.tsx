import React from "react";

// TODO: refactor types
const GridItem = ({
  colSpan,
  rowSpan,
  children,
}: {
  colSpan: string;
  rowSpan: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`${colSpan} ${rowSpan} border-2 rounded-lg border-orange-400 flex justify-center items-center h-full w-full hover:scale-105 hover:shadow-lg hover:shadow-black transition-all`}>
      {children}
    </div>
  );
};

export default GridItem;
