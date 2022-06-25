import { AiOutlineMail } from "react-icons/ai";

const Email = () => {
  return (
    <button
      className="h-full w-full flex justify-center items-center"
      onClick={() => console.log("clicked")}>
      <AiOutlineMail size="2rem" color="white" />
    </button>
  );
};

export default Email;
