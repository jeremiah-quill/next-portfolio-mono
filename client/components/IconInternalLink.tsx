import Link from "next/link";

const IconInternalLink = ({ url, src }: { url: string; src: string }) => {
  return (
    <Link href={url}>
      <a className="w-full h-full justify-center items-center flex">
        <img src={src} className="w-2/3" />
      </a>
    </Link>
  );
};

export default IconInternalLink;
