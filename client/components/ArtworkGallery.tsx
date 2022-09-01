import ProgressiveImg from "./ProgressiveImg";
import ArtworkGalleryImage from "./ArtworkGalleryImage";

const ArtworkGallery = ({ art }: any) => {
  return (
    <div className="lg:columns-4 md:columns-3 s:columns-2 xs:columns-1 gap-5">
      {art.map((pieceOfArt: any) => (
        <ArtworkGalleryImage art={pieceOfArt} key={pieceOfArt.id} />
      ))}
    </div>
  );
};

export default ArtworkGallery;
