import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiCheck, FiBriefcase, FiUsers, FiCode, FiBookOpen } from 'react-icons/fi';

const experiences = [
  {
    role: 'Web & App Developer',
    company: 'Soft Breeze Software House',
    period: '2025 – Present',
    responsibilities: [
      'Develop and maintain professional web and mobile applications for real-world clients.',
      'Work across frontend, backend, APIs, databases, debugging, testing, and deployment.',
      'Collaborate with developers and clients to deliver reliable and scalable software solutions.',
    ],
    icon: FiCode,
  },
  {
    role: 'Web & App Developer',
    company: 'CISD, Sardheri, Charsadda',
    period: '2023 – 2026',
    responsibilities: [
      'Developed websites, web applications, mobile apps, and business management systems.',
      'Worked with React.js, Flutter, PHP, JavaScript, MySQL, MongoDB, and REST APIs.',
      'Built practical software solutions for education, retail, travel, inventory, and business management.',
    ],
    icon: FiBriefcase,
  },
  {
    role: 'Senior Instructor',
    company: 'Shahab Digital College',
    period: '2025 – Present',
    responsibilities: [
      'Teach web development, programming, software development, and practical IT skills.',
      'Train students through hands-on projects and real-world development workflows.',
      'Guide students in developing websites, applications, portfolios, and software projects.',
    ],
    icon: FiBookOpen,
  },
  {
    role: 'Freelance Team Leader',
    company: 'Freelance Development Team',
    period: '2024 – Present',
    responsibilities: [
      'Lead development teams in planning, developing, testing, and delivering client projects.',
      'Manage task distribution, deadlines, code quality, project requirements, and client communication.',
      'Coordinate web, mobile, API, database, and custom software development projects.',
    ],
    icon: FiUsers,
  },
  {
    role: 'Freelance Web & App Developer',
    company: 'Self-Employed | Remote',
    period: '2024 – Present',
    responsibilities: [
      'Develop custom websites, Flutter applications, dashboards, and business management systems.',
      'Provide API integration, database development, bug fixing, maintenance, and deployment services.',
      'Manage client requirements and deliver web and mobile projects through freelance platforms.',
    ],
    icon: FiCode,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Professional Experience"
          subtitle="Building digital products, leading freelance work, and mentoring others in practical software development"
        />

        <div className="space-y-5">
          {experiences.map((job, index) => (
            <motion.article
              key={`${job.role}-${job.company}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.08 }}
              className="glass-card rounded-2xl p-5 lg:p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="icon-chip mt-1">
                    <job.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{job.role}</h3>
                    <p className="text-primary font-semibold">{job.company}</p>
                  </div>
                </div>
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                  {job.period}
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <FiCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
