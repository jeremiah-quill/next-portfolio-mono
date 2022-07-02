import type { NextPage } from "next";
import { isDev } from "../utils/helpers";

import GridItem from "../components/GridItem";
import IconLink from "../components/IconLink";
import IconInternalLink from "../components/IconInternalLink";
import Spotify from "../components/Spotify";
import About from "../components/About";
import Gallery from "../components/Gallery";

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*`);
  const { data: rawProjects } = await res.json();

  const projects = rawProjects.map((project: any) => ({
    slug: project.attributes.slug,
    src: project.attributes.featuredImgBig?.data[0].attributes.url,
    // src: isDev()
    //   ? process.env.NEXT_PUBLIC_STRAPI_URL +
    //     project.attributes.featuredImgBig?.data[0].attributes.url
    //   : project.attributes.featuredImgBig?.data[0].attributes.url,
    title: project.attributes.title,
    subtitle: project.attributes.subtitle,
    id: project.id,
  }));

  return {
    props: {
      projects: projects,
    },
  };
}
interface Project {
  slug: string;
  src: string;
  title: string;
  subtitle: string;
  id: number;
}

const Home: NextPage = ({ projects }: any) => {
  return (
    <>
      <div className="w-full pt-16 font-robot">
        <div className="text-black grid gap-2 grid-cols-1 grid-rows-8 w-full h-full md:grid-cols-6 md:grid-rows-4 md:h-auto md:aspect-[1.5/1]">
          <GridItem colSpan={"md:col-span-2"} rowSpan={"md:row-span-2"}>
            <About />
          </GridItem>
          <GridItem colSpan={"md:col-span-4"} rowSpan={"md:row-span-3"}>
            <div className="relative h-full w-full flex justify-center items-center">
              <Gallery projects={projects} />
            </div>
          </GridItem>
          <GridItem>
            <IconInternalLink src={"/cookbookios.png"} url="/recipes" title="Recipe Feed" />
          </GridItem>
          <GridItem>
            <IconLink src={"/github.svg"} url="https://github.com/jeremiah-quill" title="Github" />
          </GridItem>
          <GridItem>
            <IconLink
              src={"/linkedin.svg"}
              url="https://www.linkedin.com/in/jeremiah-quill-281b06122/"
              title="LinkedIn"
            />
          </GridItem>
          <GridItem>Coming soon</GridItem>
          <GridItem>Coming soon</GridItem>
          <GridItem colSpan={"md:col-span-3"}>
            <Spotify />
          </GridItem>
        </div>
      </div>
    </>
  );
};

export default Home;
