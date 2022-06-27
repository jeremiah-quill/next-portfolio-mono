import Link from "next/link";

const IconInternalLink = ({ url, src, title }: { url: string; src: string; title?: string }) => {
  return (
    <Link href={url}>
      <a className="w-full h-full justify-center items-center flex">
        <div className="text-center flex flex-col items-center justify-center gap-1">
          <img src={src} className="w-1/2" />
          <h1 className="text-white font-thin text-xs">{title}</h1>
        </div>
      </a>
    </Link>
  );
};

export default IconInternalLink;
