import { extractArt } from "../../utils/helpers";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const { slug } = params;
  // console.log("slug", slug);
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/artworks?populate=*`); // add "?pupulate=*" to include the upload property within attributes (so we can access images added to Strapi Media Library)
  const { data: rawArtwork } = await res.json();
  const rawArtworkData = rawArtwork.find((rawArt) => rawArt.attributes.job_id === slug);

  const art = extractArt(rawArtworkData);
  console.log(art);

  return {
    props: { art },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/artworks`);
  const { data } = await res.json();

  // console.log(data);
  // data.map((el) => console.log(el.attributes.job_id));

  const artPaths = data.map((el) => ({
    params: {
      slug: el.attributes.job_id,
    },
  }));

  return {
    paths: [...artPaths],
    fallback: false,
  };
}

const ArtPiecePage = ({ art }) => {
  return (
    <div className="relative w-full h-full py-20 font-robot">
      <Link href="/artwork">
        <BsFillGrid3X3GapFill className="text-white text-5xl cursor-pointer mx-auto mb-10 hover:scale-105 transition-all" />
      </Link>
      <img class="rounded-lg" src={art.bigImg} />
    </div>
  );
};

export default ArtPiecePage;
