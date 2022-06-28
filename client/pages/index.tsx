import type { NextPage } from "next";

import GridItem from "../components/GridItem";
import IconLink from "../components/IconLink";
import IconInternalLink from "../components/IconInternalLink";
import Spotify from "../components/Spotify";
import About from "../components/About";
import Gallery from "../components/Gallery";

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/projects?populate=*");
  const { data: rawProjects } = await res.json();

  const projects = rawProjects.map((project: any) => ({
    slug: project.attributes.slug,
    src: project.attributes.featuredImgBig?.data[0].attributes.url,
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

const Home: NextPage = ({ projects }: Project[]) => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="md:aspect-[1.5/1] grid gap-2 grid-cols-1 w-full h-full md:grid-cols-6 md:grid-rows-4 md:h-auto text-black">
          <GridItem colSpan={"col-span-2"} rowSpan={"row-span-2"}>
            <About />
          </GridItem>
          <GridItem colSpan={"col-span-4"} rowSpan={"row-span-3"}>
            <Gallery projects={projects} />
          </GridItem>
          <GridItem>
            <IconInternalLink src={"/cookbookios.png"} url="/recipes" title="Food Blog" />
          </GridItem>
          <GridItem>
            <IconLink src={"/github.svg"} url="https://github.com/jeremiah-quill" title="Github" />
          </GridItem>
          <GridItem />
          <GridItem>
            <IconLink
              src={"/linkedin.svg"}
              url="https://www.linkedin.com/in/jeremiah-quill-281b06122/"
              title="LinkedIn"
            />
          </GridItem>
          <GridItem />
          <GridItem colSpan={"col-span-3"}>
            <Spotify />
          </GridItem>
        </div>
      </div>
    </>
  );
};

export default Home;
