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
        <GridItem colSpan={1} rowSpan={1}>
          <IconLink
            src={"/spotify.svg"}
            url="https://open.spotify.com/user/jcq5010?si=531f0314cf8f462c"
          />
        </GridItem>
        {/* Email */}
        <GridItem colSpan={1} rowSpan={1}>
          <IconLink src={"/email.svg"} url="https://www.email.com" />
        </GridItem>
        {/* Github */}
        <GridItem colSpan={1} rowSpan={1}>
          <IconLink src={"/github.svg"} url="https://github.com/jeremiah-quill" />
        </GridItem>
        <GridItem colSpan={"col-span-3"} rowSpan={"row-span-2"}>
          <Spotify />
        </GridItem>
        {/* Location */}
        <GridItem colSpan={"col-span-2"} rowSpan={"row-span-2"}>
          <Location />
        </GridItem>
        {/* LinkedIn */}
        <GridItem colSpan={1} rowSpan={1}>
          <IconLink
            src={"/linkedin.svg"}
            url="https://www.linkedin.com/in/jeremiah-quill-281b06122/"
          />
        </GridItem>
        {/* Recipes */}
        <GridItem colSpan={1} rowSpan={1}>
          <IconInternalLink src={"/cookbookios.png"} url="/recipes" />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} children={null} />
        <GridItem colSpan={1} rowSpan={1} children={null} />
        <GridItem colSpan={1} rowSpan={1} children={null} />
        <GridItem colSpan={1} rowSpan={1} children={null} />
        <GridItem colSpan={1} rowSpan={"row-span-2"} children={null} />
        <GridItem colSpan={1} rowSpan={1} children={null} />
        <GridItem colSpan={1} rowSpan={1} children={null} />
        <GridItem colSpan={1} rowSpan={1} children={null} />
        <GridItem colSpan={1} rowSpan={1} children={null} />
        <GridItem colSpan={1} rowSpan={1} children={null} />
        <GridItem colSpan={"col-span-2"} rowSpan={1} children={null} />
        <GridItem colSpan={1} rowSpan={1} children={null} />
        <GridItem colSpan={1} rowSpan={1} children={null} />
      </div>
    </div>
  );
};

export default Home;
