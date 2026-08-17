import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiCode, FiDatabase, FiCpu, FiMonitor, FiSmartphone, FiTool } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: FiMonitor,
    skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Web Design', 'Redux Basics'],
  },
  {
    title: 'Mobile App Development',
    icon: FiSmartphone,
    skills: ['Flutter', 'Dart', 'Android Development', 'Cross-Platform App Development', 'Firebase', 'REST API Integration', 'State Management', 'App Deployment'],
  },
  {
    title: 'Backend Development',
    icon: FiCode,
    skills: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'JWT Authentication', 'CRUD Operations', 'API Integration'],
  },
  {
    title: 'Database & Data Management',
    icon: FiDatabase,
    skills: ['MongoDB', 'MySQL', 'Firebase Firestore', 'Database Design'],
  },
  {
    title: 'Programming Languages',
    icon: FiCpu,
    skills: ['JavaScript', 'PHP', 'Dart', 'Python', 'Java', 'C/C++', 'Kotlin'],
  },
  {
    title: 'Development Tools & Platforms',
    icon: FiTool,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify', 'Vercel', 'Xcode', 'Canva', 'Microsoft Office'],
  },
  {
    title: 'AI Tools',
    icon: FiCpu,
    skills: ['ChatGPT', 'Claude AI', 'Google Gemini', 'Perplexity AI'],
  },
  {
    title: 'Soft Skills',
    icon: FiCode,
    skills: ['Communication', 'Team Collaboration', 'Problem Solving', 'Time Management', 'Client Handling', 'Project Coordination', 'Technical Mentoring', 'Attention to Detail'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Practical expertise across frontend, backend, mobile, databases, and professional delivery"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {skillCategories.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-5 h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-chip">
                  <group.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/15 bg-primary/5 px-3 py-2 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
