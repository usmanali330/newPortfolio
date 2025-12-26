import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import profileImage from '@/assets/profile-1.jpg';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/usmanali330', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/usman-ali-655600344/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:usmanalishah5040@gmail.com', label: 'Email' },
  { icon: FaWhatsapp, href: 'https://wa.me/923705040330', label: 'WhatsApp' },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4 text-lg"
            >
              👋 Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="heading-primary mb-4"
            >
              <span className="gradient-text text-shadow-glow">Usman Ali</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6 h-12"
            >
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'ReactJS Specialist',
                  2000,
                  'Frontend Engineer',
                  2000,
                  
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-display"
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Passionate about creating beautiful, responsive, and user-friendly web applications with modern technologies.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-xl shadow-glow hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] transition-all duration-500"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-card font-semibold rounded-xl gradient-border hover:glow-effect transition-all duration-500 flex items-center gap-2"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-card font-semibold rounded-xl hover:glow-effect transition-all duration-500 flex items-center gap-2 text-primary"
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass-card rounded-xl hover:glow-effect transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Profile Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow Ring */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -inset-4 rounded-full bg-gradient-primary opacity-30 blur-xl"
              />
              
              {/* Profile Container */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-card p-2"
              >
                <img 
                  src={profileImage} 
                  alt="Usman Ali" 
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
              
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 1.5 }}
          // className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            // animate={{ y: [0, 10, 0] }}
            // transition={{ duration: 1.5, repeat: Infinity }}
            // className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div
              // animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              // transition={{ duration: 1.5, repeat: Infinity }}
              // className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
