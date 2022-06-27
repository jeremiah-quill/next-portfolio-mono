const ProjectLink = ({
  title,
  subtitle,
  src,
}: {
  title: string;
  subtitle: string;
  src: string;
}) => {
  return (
    <div className="font-robot text-white text-center">
      <h1 className="text-2xl">{title}</h1>
      <img src={src} className="w-5/6 m-auto rounded" />
      {/* <h2 className="text-lg">{subtitle}</h2> */}
    </div>
  );
};

export default ProjectLink;
