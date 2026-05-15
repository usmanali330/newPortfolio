import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiArrowRight, FiCheck, FiGithub } from 'react-icons/fi';
import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiPhp, SiReact, SiTailwindcss } from 'react-icons/si';

const projects = [
  {
    title: 'Afaniya Quran Academy',
    subtitle: 'Academy Website',
    description: 'Developed a responsive academy website with structured pages, contact forms, and dynamic website sections for visitor engagement.',
    tech: [
      { icon: SiHtml5, name: 'HTML' },
      { icon: SiCss3, name: 'CSS' },
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: SiPhp, name: 'PHP' },
      { icon: SiBootstrap, name: 'Bootstrap' },
    ],
    features: ['Responsive pages', 'Contact forms', 'Dynamic sections'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Umair Trader Website',
    subtitle: 'Business Website',
    description: 'Built a professional business website with responsive layouts, clean React components, and optimized frontend performance.',
    tech: [
      { icon: SiReact, name: 'React.js' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      { icon: SiJavascript, name: 'JavaScript' },
    ],
    features: ['Responsive layouts', 'Frontend optimization', 'Modern UI'],
    color: 'from-emerald-500 to-teal-700',
  },
  {
    title: 'Inventory Store Management System',
    subtitle: 'Management System',
    description: 'Developed an inventory management system with product tracking, admin features, and database-backed store operations.',
    tech: [
      { icon: SiPhp, name: 'PHP' },
      { icon: SiMysql, name: 'MySQL' },
      { icon: SiHtml5, name: 'HTML' },
      { icon: SiCss3, name: 'CSS' },
      { icon: SiJavascript, name: 'JavaScript' },
    ],
    features: ['Inventory tracking', 'Product management', 'Admin features'],
    color: 'from-violet-500 to-fuchsia-600',
  },
  {
    title: 'School Management System',
    subtitle: 'Full Stack Web App',
    description: 'Built a school management platform with student management, attendance features, and a secure admin dashboard.',
    tech: [
      { icon: SiReact, name: 'React.js' },
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiNodedotjs, name: 'Express.js' },
      { icon: SiMongodb, name: 'MongoDB' },
    ],
    features: ['Student management', 'Attendance system', 'Admin dashboard'],
    color: 'from-orange-500 to-rose-600',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Real Projects"
          subtitle="Client-ready web and mobile projects that show full stack development, Flutter app development, API integration, and product-focused execution."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5 mb-10 lg:mb-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              <div className="surface-card overflow-hidden h-full flex flex-col hover:glow-effect transition-all duration-500">
                <div className={`relative min-h-32 bg-gradient-to-br ${project.color} p-4 text-white overflow-hidden`}>
                  <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/10" />
                  <div className="absolute right-4 bottom-4 flex gap-2 opacity-20">
                    {project.tech.map((tech) => (
                      <tech.icon key={tech.name} className="w-9 h-9" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm font-medium mb-2">{project.subtitle}</p>
                  <h3 className="text-lg font-display font-bold leading-tight max-w-sm">{project.title}</h3>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1">{project.description}</p>

                  <div className="grid gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-2 text-xs font-medium bg-primary/10 text-primary rounded-md px-3 py-2"
                      >
                        <FiCheck className="w-3.5 h-3.5" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      {project.tech.map((tech) => (
                        <motion.div
                          key={tech.name}
                          whileHover={{ scale: 1.2, y: -3 }}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          title={tech.name}
                        >
                          <tech.icon className="w-5 h-5" />
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-[11px] text-muted-foreground leading-snug">{project.tech.map((tech) => tech.name).join(' / ')}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/usmanali330"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary group"
          >
            <FiGithub className="w-5 h-5" />
            <span>View More Work on GitHub</span>
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
