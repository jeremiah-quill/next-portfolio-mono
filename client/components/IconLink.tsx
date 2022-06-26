const IconLink = ({ src, url }: { src: string; url: string }) => {
  return (
    <a className="w-full h-full flex justify-center" href={url} target="_blank">
      <img src={src} className="w-2/3" />
    </a>
  );
};

export default IconLink;
