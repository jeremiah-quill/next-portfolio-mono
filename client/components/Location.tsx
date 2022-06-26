import { useState } from "react";

const Location = () => {
  const [isDetails, setIsDetails] = useState<boolean>(false);

  return (
    <button className=" h-full w-full rounded-md" onClick={() => setIsDetails((curr) => !curr)}>
      {isDetails ? (
        <div>I live in Philly</div>
      ) : (
        <img className="h-full w-full rounded-md" src="/philly-map.png" />
      )}
    </button>
  );
};

export default Location;
