import { useState } from "react";

const RecipeSearch = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex w-full mb-10">
      <input
        className="w-full max-w-lg m-auto bg-transparent text-white border-black border-b-2 px-2 py-1"
        placeholder="Search recipes..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
      />
    </div>
  );
};

export default RecipeSearch;
