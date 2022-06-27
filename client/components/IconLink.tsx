const IconLink = ({ src, url, title }: { src: string; url: string; title?: string }) => {
  return (
    <a className="w-full h-full" href={url} target="_blank">
      <div className="text-center flex flex-col h-full items-center justify-center gap-1">
        <img src={src} className="w-1/2" />
        <h1 className="text-white font-thin text-xs">{title}</h1>
      </div>
    </a>
  );
};

export default IconLink;
