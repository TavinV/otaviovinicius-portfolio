import Section from '../layout/Section';
import ProjectCard from '../ui/ProjectCard';
import useProjects from '../../hooks/useProjects';

const ProjectsSection = () => {
    const {projects, loading, error} = useProjects();
        
    if (loading) {
        return <p>Carregando projetos...</p>;
    }

    if (error) {
        return <p>Erro ao carregar projetos: {error.message}</p>;
    }
    return (
        <Section id="projetos" title={"Projetos"} subtitle={"💡 Dica: clique em um projeto para saber informações"}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {projects.map((project) => (
                    <ProjectCard 
                    key={project.title} 
                    title={project.title} 
                    description={project.description} 
                    image={project.image} 
                    link={project.link} 
                    github={project.github}
                    technologies={project.technologies} />
                ))}
            </div>
        </Section>

    );
};

export default ProjectsSection;
