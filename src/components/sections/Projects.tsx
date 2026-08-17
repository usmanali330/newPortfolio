import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionHeading from '../SectionHeading';
import { FiArrowRight, FiCheck, FiExternalLink, FiGithub } from 'react-icons/fi';

const categories = ['All', 'Web', 'Mobile', 'Management Systems', 'Business Software', 'Educational', 'Freelance'];

const projects = [
  {
    title: 'School Management System',
    category: 'Management Systems',
    description: 'Developed a complete school management platform for managing students, teachers, attendance, fees, and administration.',
    stack: ['Custom Development', 'Management System'],
    liveUrl: '',
    githubUrl: '',
    accent: 'from-orange-500 to-rose-600',
  },
  {
    title: 'Jewelry Management System',
    category: 'Business Software',
    description: 'Developed a business management system for managing jewelry products, customers, sales, purchases, and inventory.',
    stack: ['Business Software', 'Inventory Management'],
    liveUrl: '',
    githubUrl: '',
    accent: 'from-violet-500 to-fuchsia-600',
  },
  {
    title: 'Travel & Tour Management System',
    category: 'Business Software',
    description: 'Built a management system for handling tours, customers, bookings, travel records, and business operations.',
    stack: ['Travel Software', 'Business Management'],
    liveUrl: '',
    githubUrl: '',
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Inventory & Store Management System',
    category: 'Management Systems',
    description: 'Developed an inventory system for managing products, stock, sales, purchases, and store records.',
    stack: ['Inventory Management', 'Store Software'],
    liveUrl: '',
    githubUrl: '',
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Mobile Shop Management System',
    category: 'Management Systems',
    description: 'Built a mobile shop management system for managing mobile products, customers, sales, purchases, and inventory.',
    stack: ['Business Software', 'Sales Tracking'],
    liveUrl: '',
    githubUrl: '',
    accent: 'from-sky-500 to-indigo-600',
  },
  {
    title: 'Sanitary Store Management System',
    category: 'Management Systems',
    description: 'Developed a store management system for managing sanitary products, stock, customers, sales, and transactions.',
    stack: ['Store Management', 'POS Workflow'],
    liveUrl: '',
    githubUrl: '',
    accent: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Rent Shop Management System',
    category: 'Business Software',
    description: 'Built a rental management system for managing rental products, customers, transactions, and rental records.',
    stack: ['Rental System', 'Business Software'],
    liveUrl: '',
    githubUrl: '',
    accent: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Afaniya Quran Academy',
    category: 'Educational',
    description: 'Developed a responsive educational website using HTML, CSS, JavaScript, PHP, and Bootstrap.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
    liveUrl: 'https://www.afaniyahquranacademy.com/',
    githubUrl: '',
    accent: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Umair Trader Website',
    category: 'Web',
    description: 'Built a responsive business website using React.js, Tailwind CSS, and JavaScript.',
    stack: ['React.js', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://umairtrader.netlify.app/',
    githubUrl: '',
    accent: 'from-emerald-500 to-teal-700',
  },
  {
    title: 'Notes App',
    category: 'Mobile',
    description: 'Developed a Flutter-based notes application with local storage for creating, editing, and managing notes.',
    stack: ['Flutter', 'Dart', 'Local Storage'],
    liveUrl: '',
    githubUrl: '',
    accent: 'from-indigo-500 to-violet-600',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Projects"
          subtitle="A practical portfolio of web apps, mobile apps, business systems, and educational platforms"
        />

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'border border-border bg-background/40 text-muted-foreground hover:border-primary/30 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 mb-10 lg:mb-12">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              <div className="surface-card overflow-hidden h-full flex flex-col hover:glow-effect transition-all duration-500">
                <div className={`relative min-h-28 bg-gradient-to-br ${project.accent} p-4 text-white overflow-hidden`}>
                  <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/10" />
                  <span className="relative inline-block rounded-full bg-white/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="relative mt-4 text-xl font-display font-bold leading-tight">{project.title}</h3>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-muted-foreground">Live demo unavailable</span>
                    )}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-foreground"
                      >
                        <FiGithub className="w-4 h-4" />
                        GitHub
                      </a>
                    ) : null}
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
