import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiBook, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Bacha Khan University Charsadda',
    location: 'Charsadda, KPK',
    period: '2024 - Present',
    description: 'Currently pursuing BS in Computer Science with focus on Web Development and Software Engineering.',
    status: 'In Progress',
  },
  {
    degree: 'Intermediate in Pre-Computer Science (FSc)',
    institution: 'GHSS NO 01 Charsadda',
    location: 'Charsadda, KPK',
    period: '2022 - 2024',
    description: 'Completed intermediate education with Pre-Computer Science subjects including Physics, and Mathematics.',
    status: 'Completed',
  },
  {
    degree: 'Secondary School Certificate (Matric)',
    institution: 'Govt. High School Shakar Dhand',
    location: 'Sardheri, Charsadda',
    period: '2020 - 2022',
    description: 'Completed secondary education with Science subjects.',
    status: 'Completed',
  },

  {
    degree: 'Hafiz Quran',
    institution: 'Jamia Masjid Ameer Maoya, Landai Shah',
    location: 'Landai Shah, Charsadda',
    period: '2017 - 2019', // Adjust if needed
    description: 'Memorized the entire Quran.',
    status: 'Completed',
  },
  {
    degree: 'Tajweed',
    institution: 'Taleem ul Quran, Sardheri',
    location: 'Sardheri, Charsadda',
    period: '2019 - 2020', // Adjust if needed
    description: 'Learned proper pronunciation and recitation rules of the Quran.',
    status: 'Completed',
  },


];

const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="section-container">
        <SectionHeading 
          title="Education" 
          subtitle="My academic journey"
        />
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
          
          {/* Education Cards */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2 }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className={`hidden md:block absolute top-8 w-4 h-4 rounded-full bg-primary pulse-glow ${
                    index % 2 === 0 ? '-right-2' : '-left-2'
                  }`}
                />
                
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card rounded-2xl p-6 gradient-border hover:glow-effect transition-all duration-500 cursor-pointer"
                >
                  {/* Status Badge */}
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
