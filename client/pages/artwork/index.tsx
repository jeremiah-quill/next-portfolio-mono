// import Link from "next/link";
import { extractArt } from "../../utils/helpers";
import ProgressiveImg from "../../components/ProgressiveImg";
import ArtworkGallery from "../../components/ArtworkGallery";

// TODO: make this 100% type safe
export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/artworks?populate=*`);
  const { data: rawArtwork } = await res.json();

  const allArt = rawArtwork.map((rawArtwork: any) => {
    return extractArt(rawArtwork);
  });

  console.log(allArt);

  return {
    props: {
      art: allArt,
    },
    revalidate: 3600,
  };
}

const ArtworkPage = ({ art }: { art: any }) => {
  return (
    <div className="relative w-full h-full font-robot">
      <div className="m-auto w-full text-center pt-36 pb-20 text-2xl text-gray-400">
        <ArtworkGallery art={art} />
      </div>
    </div>
  );
};

export default ArtworkPage;
