import type { NextPage } from "next";

import GridItem from "../components/GridItem";
import ProjectLink from "../components/ProjectLink";
import Location from "../components/Location";
import IconLink from "../components/IconLink";
import IconInternalLink from "../components/IconInternalLink";
import Spotify from "../components/Spotify";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="md:aspect-[1.5/1] grid gap-2 grid-cols-3 w-full h-full md:grid-cols-6 md:grid-rows-5 md:h-auto">
          {/* about */}
          <GridItem colSpan={"col-span-2"} rowSpan={"row-span-2"}>
            <About />
          </GridItem>
          <GridItem colSpan={"col-span-2"} rowSpan={"row-span-2"}>
            <ProjectLink
              title="Flow with Megmo"
              subtitle="Full stack scheduling tool for online yoga instructor"
              src="/fwm_hero.png"
            />
          </GridItem>
          <GridItem colSpan={"col-span-2"} rowSpan={"row-span-2"}>
            <ProjectLink
              title="Brainfood"
              subtitle="Use GPT-3 AI to generate custom recipes"
              src="/brainfood_hero.png"
            />
          </GridItem>
          {/* Recipes */}
          <GridItem>
            <IconInternalLink src={"/cookbookios.png"} url="/recipes" title="Food Blog" />
          </GridItem>
          {/* Github */}
          <GridItem>
            <IconLink src={"/github.svg"} url="https://github.com/jeremiah-quill" title="Github" />
          </GridItem>
          <GridItem colSpan={"col-span-2"} rowSpan={"row-span-2"}>
            <ProjectLink
              title="Wishlist"
              subtitle="Secret Santa manager"
              src="/wishlist_hero.png"
            />
          </GridItem>
          {/* about */}
          <GridItem colSpan={"col-span-2"} rowSpan={"row-span-2"}>
            <ProjectLink
              title="Playlist Palette"
              subtitle="Create randomized spotify playlists on the fly"
              src="/pp_hero.png"
            />
          </GridItem>
          <GridItem />
          {/* LinkedIn */}
          <GridItem>
            <IconLink
              src={"/linkedin.svg"}
              url="https://www.linkedin.com/in/jeremiah-quill-281b06122/"
              title="LinkedIn"
            />
          </GridItem>
          <GridItem />
          <GridItem />
          <GridItem />
          {/* Now playing */}
          <GridItem colSpan={"col-span-3"}>
            <Spotify />
          </GridItem>
        </div>
      </div>
    </>
  );
};

export default Home;
