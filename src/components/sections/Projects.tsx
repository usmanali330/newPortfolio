import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import { SiReact, SiTailwindcss, SiFramer } from 'react-icons/si';

// Images
import k2xImg from '@/assets/k2x.png';
import kfcImg from '@/assets/kfc.png';
import allInOneImg from '@/assets/allinone2.png';

const projects = [
  {
    title: "K2X Tech Corporate Website",
    subtitle: "Business Website",
    description:
      "A modern corporate website for a software company featuring clean UI, service sections, and strong call-to-actions.",
    image: k2xImg,
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      
    ],
    features: ["Responsive", "Modern UI", "CTA Focused"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "KFC Landing Page UI",
    subtitle: "Food Brand UI",
    description:
      "A high-impact landing page inspired by KFC with promotional banners, delivery options, and bold visuals.",
    image: kfcImg,
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
    features: ["Hero Banner", "Brand UI", "Marketing Layout"],
    color: "from-red-500 to-rose-600",
  },
  {
    title: "All-in-One Tools Web App",
    subtitle: "Utility Dashboard",
    description:
      "A multi-tool web application offering calculators, converters, timers, QR scanner, and daily-use utilities.",
    image: allInOneImg,
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
    features: ["Utilities", "Mobile-First", "Clean UI"],
    color: "from-purple-500 to-pink-600",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <SectionHeading 
          title="Projects" 
          subtitle="Some of my real-world UI & web development work"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, rotateY: 5, rotateX: -5 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:glow-effect transition-all duration-500">
                
                {/* Project Header with Image */}
                <div className={`relative h-40 bg-gradient-to-br ${project.color}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 p-4">
                    <p className="text-white/80 text-sm font-medium mb-1">{project.subtitle}</p>
                    <h3 className="text-xl font-display font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-xl shadow-glow hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] transition-all duration-500 group"
          >
            <FiGithub className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
