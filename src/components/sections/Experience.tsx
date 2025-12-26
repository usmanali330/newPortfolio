import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiCheck, FiCode, FiLayers, FiSmartphone, FiZap, FiUsers } from 'react-icons/fi';

const experiences = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces using ReactJS, JavaScript, and modern CSS frameworks.',
  },
  {
    icon: FiLayers,
    title: 'Component-Based Architecture',
    description: 'Creating reusable, modular components for scalable and maintainable codebases.',
  },
  {
    icon: FiSmartphone,
    title: 'Responsive Design',
    description: 'Ensuring seamless user experience across all devices with mobile-first design approach.',
  },
  {
    icon: FiZap,
    title: 'Performance Optimization',
    description: 'Implementing best practices for fast loading times and smooth animations.',
  },
  {
    icon: FiUsers,
    title: 'Team Collaboration',
    description: 'Working effectively with teams using Git, GitHub, and agile methodologies.',
  },
];

const highlights = [
  'Proficient in ReactJS ecosystem and modern JavaScript',
  'Strong understanding of UI/UX principles',
  'Experience with version control (Git/GitHub)',
  'Ability to translate designs into pixel-perfect code',
  'Continuous learner and problem solver',
  'Excellent communication and teamwork skills',
  'Experience with responsive and mobile-first design',
  'Familiarity with RESTful APIs and integration',
  'Knowledge of modern CSS frameworks like Tailwind CSS and Bootstrap',
  'Hands-on experience with component libraries and design systems',
  'Basic understanding of backend technologies and database integration',
  'Ability to optimize applications for performance and scalability',
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
          title="Experience Highlights" 
          subtitle="What I bring to the table"
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
