import Link from "next/link";

const ArtworkGalleryImage = ({ art }: any) => {
  return (
    <div className="mb-5">
      <Link href="">
        <img key={art.id} src={art.bigImg} className="rounded-md w-full" />
      </Link>
      {/* <div className="flex justify-between px-3">
        <div>&#9829;</div>
        <div>Comment</div>
      </div> */}
    </div>
  );
};

export default ArtworkGalleryImage;
