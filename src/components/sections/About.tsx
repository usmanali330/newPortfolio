import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiUser, FiMapPin, FiPhone, FiMail, FiGlobe, FiCalendar, FiHeart, FiBriefcase } from 'react-icons/fi';
import profileImage from '@/assets/profile-2.jpg';

const personalInfo = [
  { icon: FiUser, label: 'Name', value: 'Usman Ali' },
  { icon: FiCalendar, label: 'Date of Birth', value: '5 April 2003' },
  { icon: FiMapPin, label: 'Location', value: 'Sardheri, Charsadda, KPK' },
  { icon: FiPhone, label: 'Phone', value: '0370-5040330' },
  { icon: FiMail, label: 'Email', value: 'usmanalishah\n5040@gmail.com' },
  { icon: FiGlobe, label: 'Languages', value: 'Urdu, Pashto, English' },
  { icon: FiHeart, label: 'Interests', value: 'Web Development, UI/UX' },
  { icon: FiBriefcase, label: 'Experience', value: 'Web Developer' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me better"
        />
        
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-2xl bg-gradient-primary opacity-30 blur-lg"
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-64 h-80 rounded-2xl overflow-hidden glass-card p-2"
              >
                <img 
                  src={profileImage} 
                  alt="Usman Ali" 
                  className="w-full h-full rounded-xl object-cover object-top"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-8 gradient-border hover-lift">
              <h3 className="text-2xl font-display font-bold mb-4 gradient-text">
                Who I Am
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I am a passionate Web Developer and ReactJS Specialist with a strong foundation in modern web technologies. Currently pursuing my Bachelor's degree in Computer Science from Bacha Khan University Charsadda.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I specialize in building responsive, user-friendly web applications using ReactJS, Tailwind CSS, and JavaScript. I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to create impactful digital experiences that make a difference. I'm always eager to learn new technologies and take on challenging projects that push my boundaries.
              </p>
            </div>
          </motion.div>
          
          {/* Personal Info Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
          >
            {personalInfo.map((info, index) => (
              <motion.div
                key={info.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-xl p-4 flex flex-col items-center text-center gap-3 group cursor-pointer hover:glow-effect transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{info.label}</p>
                  <p className="text-sm font-medium text-foreground leading-tight">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
