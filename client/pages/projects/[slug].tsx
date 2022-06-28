import { extractProject } from "../../utils/helpers";

export async function getStaticProps({ params }: { params: any }) {
  const { slug } = params;
  const res = await fetch("http://localhost:1337/api/projects?populate=*");
  const { data: rawProjects } = await res.json();

  const rawProjectData = rawProjects.find((rawProject: any) => rawProject.attributes.slug === slug);
  const project = extractProject(rawProjectData);

  return {
    props: { project },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/api/projects");
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
  return (
    <div className="w-full flex items-center justify-center">
      <h1>{project.title}</h1>
    </div>
  );
};

export default ProjectPage;
