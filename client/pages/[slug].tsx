import { extractProject } from "../utils/helpers";

export async function getStaticProps({ params }: { params: any }) {
  const { slug } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=featuredImgBig,featureSpotlight,notable_features,figures.imgUrl,stack`
  );
  const { data: rawProjects } = await res.json();
  const rawProjectData = rawProjects.find((rawProject: any) => rawProject.attributes.slug === slug);
  const project = extractProject(rawProjectData);

  return {
    props: { project },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects`);
  const { data: projects } = await res.json();

  const projectPaths = projects.map((project: any) => ({
    params: { slug: project.attributes.slug },
  }));

  return {
    paths: [...projectPaths],
    fallback: false,
  };
}

const ProjectPage = ({ project }: any) => {
  console.log(project);
  return (
    <div className="w-full pt-36 font-robot text-white">
      <div>
        <div className="text-center py-32">
          <h1 className="text-6xl mb-3 text-white">{project.title}</h1>
          <h2 className="text-xl text-white font-robot">{project.subtitle}</h2>
          <div className="mt-10 flex justify-center gap-5 font-robot text-xl">
            <a
              rel="noreferrer"
              href={project.liveUrl}
              target="_blank"
              className="text-white rounded hover:text-gray-400 transition-all cursor-pointer underline">
              Live
            </a>
            <a
              rel="noreferrer"
              href={project.codeUrl}
              target="_blank"
              className="text-white rounded hover:text-gray-400 transition-all cursor-pointer underline">
              Repo
            </a>
          </div>
        </div>
        <div className="p-5 max-w-screen-lg m-auto flex flex-col gap-40 my-20">
          <div style={{ aspectRatio: "1.6" }}>
            {/* <ProgressiveImg
              aspectRatio="1.6"
              className="rounded"
              lowQualityImg={featuredImgSmall}
              highQualityImg={featuredImgBig}
            /> */}
            <img src={`${project.featuredImgBig}`} />
          </div>
          <div>
            <h3 className="text-center mb-5 text-4xl font-robot text-white">Summary</h3>
            <p className="text-lg text-white">{project.summary}</p>
          </div>
          <div>
            <h3 className="text-center mb-5 font-robot text-4xl text-white">Technologies</h3>
            <ul className="flex justify-center max-w-xl flex-wrap gap-5 m-auto mb-5">
              {project.stack.map((tech: any) => (
                <li
                  key={tech.id}
                  className="px-3 py-1 bg-white text-xl text-black rounded-3xl font-robot">
                  {tech.tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-center mb-5 text-4xl font-robot">Notable Features</h3>
            <ul className="flex flex-col items-center">
              {project.notable_features.map((feature: any) => (
                <li className="font-robot text-xl" key={feature.id}>
                  {feature.feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-center mb-5 text-4xl">
              Feature Spotlight: {project.featureSpotlight.title}
            </h4>
            <p className="text-lg">{project.featureSpotlight.content}</p>
          </div>
          {project.figures.map((figure: any) => (
            <div key={figure.imgUrl}>
              <img className="rounded mb-5" alt={figure.caption} src={`${figure.imgUrl}`} />
              <p className="text-md m-auto px-5 text-center text-white">{figure.caption}</p>
            </div>
          ))}
          {/* <div>
            <h3 className="text-center mb-5 text-2xl">Key Takeaways</h3>
            <ul className="flex flex-col gap-5 mt-10 px-5">
              {keyTakeaways.map((takeaway) => (
                <li key={takeaway.title}>
                  <h4 className="mb-3 text-center text-lg text-orange-accent italic">
                    {takeaway.title}
                  </h4>
                  <p>{takeaway.content}</p>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
