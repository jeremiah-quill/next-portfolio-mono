import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between top-4 md:left-2 font-robot md:text-2xl w-full text-white z-10 absolute">
      <Link href="/">
        <a className="hover:text-gray-300 transition-all">
          <h1>Jeremiah Quill: dev</h1>
        </a>
      </Link>
      <div className="flex flex-wrap gap-5">
        <div className="">jcq5010@gmail.com</div>
        <div>/</div>
        <div className="md:mr-5">508.439.9618</div>
      </div>
    </div>
  );
};

export default Header;
