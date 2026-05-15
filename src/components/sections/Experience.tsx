import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiCheck, FiCode, FiLayers, FiSmartphone, FiZap, FiUsers } from 'react-icons/fi';

const experiences = [
  {
    icon: FiCode,
    title: '3+ Years Full Stack Development',
    description: 'Building full-stack applications with React.js, Node.js, Express.js, MongoDB, REST APIs, and scalable project structure.',
  },
  {
    icon: FiLayers,
    title: 'Client-Focused Web Solutions',
    description: 'Creating dashboards, authentication systems, responsive websites, and business workflows designed around client goals.',
  },
  {
    icon: FiSmartphone,
    title: 'Flutter Mobile App Development',
    description: 'Developing Android and cross-platform apps with Firebase, APIs, custom UI, optimization, and bug fixing.',
  },
  {
    icon: FiZap,
    title: 'API & Performance Optimization',
    description: 'Integrating REST APIs and applying best practices for fast loading times, efficient rendering, and smooth interactions.',
  },
  {
    icon: FiUsers,
    title: 'Freelance Client Experience',
    description: 'Supporting Fiverr and Upwork-style projects with clear communication, maintenance, deployment help, and long-term updates.',
  },
];

const highlights = [
  'Flutter Developer for Android and cross-platform mobile apps',
  'MERN Stack Developer for full-stack web application development',
  'React Developer with modern JavaScript and Tailwind CSS experience',
  'Mobile App Developer with Firebase and API integration skills',
  'Experience with freelance client work, support, and revisions',
  'Experience with version control (Git/GitHub)',
  'Ability to turn business requirements into working products',
  'Clean code, responsive design, and scalable app structure',
  'Strong communication for Fiverr, Upwork, and direct clients',
  'Experience with responsive and mobile-first design',
  'REST API integration and backend development',
  'Deployment assistance, maintenance services, and bug fixing',
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <SectionHeading 
          title="Freelance Experience & Strengths" 
          subtitle="What I bring to client projects, startup products, and development teams"
        />
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="glass-card rounded-xl p-6 flex gap-4 group hover:glow-effect transition-all duration-300"
              >
                <div className="p-3 h-fit rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Highlights List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 gradient-border"
          >
            <h3 className="text-2xl font-display font-bold gradient-text mb-6">
              Key Strengths
            </h3>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    className="p-1 rounded-full bg-primary/20 mt-0.5"
                  >
                    <FiCheck className="w-3 h-3 text-primary" />
                  </motion.div>
                  <span className="text-muted-foreground">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
