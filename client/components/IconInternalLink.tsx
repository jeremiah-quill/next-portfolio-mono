import Link from "next/link";

const IconInternalLink = ({ url, src }: { url: string; src: string }) => {
  return (
    <Link href={url}>
      <a className="w-2/3">
        <img src={src} />
      </a>
    </Link>
  );
};

export default IconInternalLink;
