import { useEffect, useState } from "react";
import ProjectLink from "./ProjectLink";

interface Project {
  slug: string;
  src: string;
  title: string;
  subtitle: string;
  id: number;
}

const Gallery = ({ projects }: Project[]) => {
  // const [slides, setSlides] = useState(projects);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      console.log("in timeout!!!");
      setCurrentSlide((curr) => {
        if (curr === projects.length - 1) {
          return 0;
        } else {
          return curr + 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <ProjectLink
        title={projects[currentSlide].title}
        subtitle={projects[currentSlide].subtitle}
        src={`http://localhost:1337${projects[currentSlide].src}`}
        url={`/projects/${projects[currentSlide].slug}`}
      />
    </>
  );
};

export default Gallery;
