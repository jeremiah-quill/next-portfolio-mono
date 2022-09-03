import { extractArt } from "../../utils/helpers";
import ArtworkGalleryImage from "../../components/ArtworkGalleryImage";
import Masonry from "react-masonry-css";

// TODO: make this 100% type safe
export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/artworks?populate=*`);
  const { data: rawArtwork } = await res.json();

  const allArt = rawArtwork.map((rawArtwork: any) => {
    return extractArt(rawArtwork);
  });

  return {
    props: {
      art: allArt,
    },
    revalidate: 300,
  };
}

const ArtworkPage = ({ art }: { art: any }) => {
  return (
    <div className="relative w-full h-full font-robot">
      <div className="m-auto w-full text-center pt-36 pb-20 text-2xl text-gray-400">
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {art.map((pieceOfArt: any) => (
            <ArtworkGalleryImage art={pieceOfArt} key={pieceOfArt.id} />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default ArtworkPage;
