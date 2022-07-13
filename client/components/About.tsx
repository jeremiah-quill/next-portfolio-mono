import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Link href="/about">
      <a className="h-full w-full object-fill overflow-hidden">
        <motion.img
          src="/bio-img-compress.png"
          // layoutId="bioImg"
          className="object-cover h-full w-full"
          transition={{ duration: 1 }}
          alt="Jeremiah"
        />
      </a>
    </Link>
  );
};

export default About;
