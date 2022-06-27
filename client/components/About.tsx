import Link from "next/link";

const About = () => {
  return (
    <Link href="/about">
      <a className="h-full w-full object-fill overflow-hidden">
        <img src="/bio-img-compress.png" alt="Jeremiah" />
      </a>
    </Link>
  );
};

export default About;
