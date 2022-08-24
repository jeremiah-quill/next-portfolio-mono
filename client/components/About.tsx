import Link from "next/link";
import { motion } from "framer-motion";
import ProgressiveImg from "./ProgressiveImg";

const About = () => {
  return (
    <Link href="/about">
      <a className="h-full w-full object-fill overflow-hidden">
        <ProgressiveImg
          className="object-cover h-full w-full"
          aspectRatio="1"
          lowQualityImg={"./bio-img-compress_small.png"}
          highQualityImg={"./bio-img-compress.png"}
        />
        {/* className="object-cover h-full w-full" */}
      </a>
    </Link>
  );
};

export default About;
