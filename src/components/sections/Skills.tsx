import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import SectionHeading from '../SectionHeading';
import { 
  SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiCss3, 
  SiBootstrap, SiGit, SiGithub, SiPhp, SiMysql,
  SiAdobephotoshop, SiCanva,
  SiNextdotjs,
  SiFigma
} from 'react-icons/si';
import { TbFileSpreadsheet } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { FiMonitor, FiCode } from 'react-icons/fi';

const skills = [
  { name: 'ReactJS', percentage: 90, color: 'from-cyan-400 to-cyan-600' },
  { name: 'JavaScript', percentage: 85, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Tailwind CSS', percentage: 95, color: 'from-teal-400 to-teal-600' },
  { name: 'HTML/CSS', percentage: 90, color: 'from-orange-400 to-orange-600' },
  { name: 'PHP', percentage: 75, color: 'from-indigo-400 to-indigo-600' },
  { name: 'MySQL', percentage: 70, color: 'from-blue-400 to-blue-600' },
];

const technologies = [
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiReact, name: 'ReactJS', color: '#61DAFB' },
  { icon: SiPhp, name: 'PHP', color: '#777BB4' },
  { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiGithub, name: 'GitHub', color: '#181717' },
  { icon: VscCode, name: 'VS Code', color: '#007ACC' },
  { icon: TbFileSpreadsheet, name: 'MS Office', color: '#D83B01' },
  { icon: SiAdobephotoshop, name: 'Photoshop', color: '#31A8FF' },
  { icon: SiCanva, name: 'Canva', color: '#00C4CC' },
  { icon: FiMonitor, name: 'Responsive Design', color: '#10B981' },
  { icon: FiCode, name: 'ES6+', color: '#F59E0B' },
  { icon: SiFigma, name: 'Figma', color: '#F24E1E' },        // Added
  { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },   // Added
];


interface AnimatedCounterProps {
  target: number;
  isInView: boolean;
}

const AnimatedCounter = ({ target, isInView }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target]);
  
  return <span>{count}%</span>;
};

const Skills = () => {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <SectionHeading 
          title="Skills & Technologies" 
          subtitle="My technical expertise and tools I work with"
        />
        
        {/* Skill Bars */}
        <div ref={skillsRef} className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover-lift"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-display font-semibold text-foreground">{skill.name}</span>
                <span className="text-primary font-bold">
                  <AnimatedCounter target={skill.percentage} isInView={isInView} />
                </span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" 
                       style={{ backgroundSize: '200% 100%' }} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-display font-bold gradient-text mb-2">Technologies I Use</h3>
          <p className="text-muted-foreground">Tools and frameworks in my tech stack</p>
        </motion.div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                rotateX: -15,
              }}
              className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer group hover:glow-effect transition-all duration-300"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <tech.icon 
                className="w-8 h-8 transition-colors duration-300" 
                style={{ color: tech.color }}
              />
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
