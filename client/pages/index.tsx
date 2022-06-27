import type { NextPage } from "next";

import GridItem from "../components/GridItem";
import Location from "../components/Location";
import IconLink from "../components/IconLink";
import IconInternalLink from "../components/IconInternalLink";
import Spotify from "../components/Spotify";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gray-600">
      <div className="md:aspect-[1.5/1] grid gap-2 grid-cols-3 w-full h-full md:grid-cols-6 md:grid-rows-5 md:h-auto">
        {/* Spotify */}
        <GridItem>
          <IconLink
            src={"/spotify.svg"}
            url="https://open.spotify.com/user/jcq5010?si=531f0314cf8f462c"
          />
        </GridItem>
        {/* Email */}
        <GridItem>
          <IconLink src={"/email.svg"} url="https://www.email.com" />
        </GridItem>
        {/* Github */}
        <GridItem>
          <IconLink src={"/github.svg"} url="https://github.com/jeremiah-quill" />
        </GridItem>
        {/* Now playing */}
        <GridItem colSpan={"col-span-3"}>
          <Spotify />
        </GridItem>
        {/* Location */}
        <GridItem colSpan={"col-span-2"} rowSpan={"row-span-2"}>
          <Location />
        </GridItem>
        {/* LinkedIn */}
        <GridItem>
          <IconLink
            src={"/linkedin.svg"}
            url="https://www.linkedin.com/in/jeremiah-quill-281b06122/"
          />
        </GridItem>
        {/* Recipes */}
        <GridItem>
          <IconInternalLink src={"/cookbookios.png"} url="/recipes" />
        </GridItem>
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem rowSpan={"row-span-2"} />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem colSpan={"col-span-2"} />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
    </div>
  );
};

export default Home;
