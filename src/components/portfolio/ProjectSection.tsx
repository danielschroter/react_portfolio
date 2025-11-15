import React from "react";

type ProjectSectionProps = {
  title?: string;
  children: React.ReactNode;
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, children }) => (
  <section className="space-y-3">
    {title && (
      <h3 className="text-xl font-semibold tracking-wide text-white">
        {title}
      </h3>
    )}
    <div className="space-y-3 text-base leading-relaxed text-white/80">
      {children}
    </div>
  </section>
);

export default ProjectSection;
