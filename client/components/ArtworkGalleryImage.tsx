import ProgressiveImg from "./ProgressiveImg";

const ArtworkGalleryImage = ({ art }: any) => {
  return (
    <div className="w-full rounded-md">
      <img key={art.id} src={art.bigImg} />
      <div className="flex justify-between px-3">
        <div>&#9829;</div>
        <div>Comment</div>
      </div>
    </div>
  );
};

export default ArtworkGalleryImage;
