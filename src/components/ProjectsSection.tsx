'use client';

import ProjectCard, { Project } from './ProjectCard';

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
    return (
        <section id="projects" className="relative py-24 px-6 md:py-28 md:px-8 border-t border-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-xs text-orange-500 font-mono mb-4 tracking-widest">
                    [PROJECTS.ARCHIVE]
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-14 tracking-tight">PROJECTS</h2>

                {/* One card per row, compact height. If you want two columns at xl, wrap with grid and careful about image width. */}
                <div className="grid gap-6 md:gap-7">
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.id} {...project} delay={idx * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
