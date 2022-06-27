import type { NextPage } from "next";

import GridItem from "../components/GridItem";
import Location from "../components/Location";
import IconLink from "../components/IconLink";
import IconInternalLink from "../components/IconInternalLink";
import Spotify from "../components/Spotify";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gray-600">
      <div className="md:aspect-[1.5/1] grid gap-2 grid-cols-3 w-full h-full md:grid-cols-6 md:grid-rows-5 md:h-auto">
        {/* about */}
        <GridItem colSpan={"col-span-2"} rowSpan={"row-span-2"}>
          <About />
        </GridItem>
        {/* Spotify */}
        <GridItem>
          <IconLink
            src={"/spotify.svg"}
            url="https://open.spotify.com/user/jcq5010?si=531f0314cf8f462c"
            title="Spotify"
          />
        </GridItem>
        {/* Email */}
        <GridItem>
          <IconLink src={"/email.svg"} url="https://www.email.com" title="Email" />
        </GridItem>
        {/* Github */}
        <GridItem>
          <IconLink src={"/github.svg"} url="https://github.com/jeremiah-quill" title="Github" />
        </GridItem>
        {/* <GridItem colSpan={"col-span-3"} rowSpan={"row-span-2"}>
          <div className="grid grid-rows-2 h-full w-full p-2">
            <div className="text-center flex justify-center items-center font-bold">Projects</div>
            <div className="grid gap-2 grid-cols-3 text-center">
              <GridItem>project 1</GridItem>
              <GridItem>project 1</GridItem>
              <GridItem>project 1</GridItem>
            </div>
          </div>
        </GridItem> */}
        {/* LinkedIn */}
        <GridItem>
          <IconLink
            src={"/linkedin.svg"}
            url="https://www.linkedin.com/in/jeremiah-quill-281b06122/"
            title="LinkedIn"
          />
        </GridItem>
        {/* Recipes */}
        <GridItem>
          <IconInternalLink src={"/cookbookios.png"} url="/recipes" title="Food Blog" />
        </GridItem>
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        {/* Now playing */}
        <GridItem colSpan={"col-span-3"}>
          <Spotify />
        </GridItem>
      </div>
    </div>
  );
};

export default Home;
