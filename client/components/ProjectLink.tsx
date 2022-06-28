import Link from "next/link";

const ProjectLink = ({
  title,
  subtitle,
  src,
  url,
}: {
  title: string;
  subtitle: string;
  src: string;
  url: string;
}) => {
  return (
    <Link href={`${url}`}>
      <a>
        <div className="font-robot text-center">
          <h1 className="text-3xl">{title}</h1>
          <h2 className="text-xl mb-2">{subtitle}</h2>
          <img src={src} className="w-5/6 m-auto rounded" />
        </div>
      </a>
    </Link>
  );
};

export default ProjectLink;
