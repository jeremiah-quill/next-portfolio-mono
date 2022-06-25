const IconLink = ({ src, url }: { src: string; url: string }) => {
  return (
    <a className="w-2/3 flex justify-center" href={url} target="_blank">
      <img src={src} />
    </a>
  );
};

export default IconLink;
