import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between top-4 left-2 font-robot text-2xl text-white w-full z-10 absolute">
      <Link href="/">
        <a className="hover:text-gray-300 transition-all">
          <h1>Jeremiah Quill: Dev</h1>
        </a>
      </Link>
      <div className="flex gap-5">
        <div className="">jcq5010@gmail.com</div>
        <div>/</div>
        <div className="mr-5">508.439.9618</div>
      </div>
    </div>
  );
};

export default Header;
