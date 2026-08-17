import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiBook, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const educationData = [
  {
    degree: 'BS Computer Science',
    institution: 'Bacha Khan University Charsadda',
    location: 'Charsadda, KPK',
    period: '2024 – 2028',
    description: 'In progress. Focused on software engineering, programming fundamentals, and modern development practices.',
    status: 'In Progress',
  },
  {
    degree: 'Diploma in Information Technology',
    institution: 'KBTCE Peshawar',
    location: 'Peshawar, KPK',
    period: 'Diploma',
    description: 'Practical learning in information technology and core computing fundamentals.',
    status: 'Completed',
  },
  {
    degree: 'Higher Secondary School Certificate',
    institution: 'BISE Peshawar',
    location: 'Peshawar, KPK',
    period: 'HSSC',
    description: 'Completed higher secondary education with a science-focused academic background.',
    status: 'Completed',
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'BISE Peshawar',
    location: 'Peshawar, KPK',
    period: 'SSC',
    description: 'Completed secondary education with foundational academic and science learning.',
    status: 'Completed',
  },
  {
    degree: 'Hifz-ul-Quran',
    institution: 'Islamic Learning',
    location: 'Charsadda, KPK',
    period: 'Additional Education',
    description: 'Memorized the Quran with strong emphasis on discipline and dedication.',
    status: 'Completed',
  },
  {
    degree: 'Tajweed-ul-Quran',
    institution: 'Islamic Learning',
    location: 'Charsadda, KPK',
    period: 'Additional Education',
    description: 'Studied proper pronunciation and recitation principles of the Quran.',
    status: 'Completed',
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Education"
          subtitle="Academic background and continued learning"
        />

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={`${edu.degree}-${edu.period}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15 }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                }`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  className={`hidden md:block absolute top-8 w-4 h-4 rounded-full bg-primary pulse-glow ${
                    index % 2 === 0 ? '-right-2' : '-left-2'
                  }`}
                />

                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card rounded-2xl p-6 gradient-border hover:glow-effect transition-all duration-500 cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 text-primary">
                      <FiBook className="w-5 h-5" />
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        edu.status === 'In Progress'
                          ? 'bg-primary/20 text-primary'
                          : 'bg-secondary/20 text-secondary'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <FiCalendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center gap-2 text-primary mb-3">
                    <FiAward className="w-4 h-4" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <FiMapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
