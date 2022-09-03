import Link from "next/link";

const ArtworkGalleryImage = ({ art }: any) => {
  return (
    <div className="mb-5 cursor-pointer">
      <Link href={`/artwork/${art.job_id}`} scroll={false}>
        <img key={art.id} src={art.bigImg} className="rounded-md w-full" />
      </Link>
    </div>
  );
};

export default ArtworkGalleryImage;
