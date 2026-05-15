import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiBriefcase, FiDownload, FiGithub, FiLinkedin, FiMail, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import profileImage from '@/assets/profile-1.jpg';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/usmanali330', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/usman-ali-655600344/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:usmanalishah5040@gmail.com', label: 'Email' },
  { icon: FaWhatsapp, href: 'https://wa.me/923705040330', label: 'WhatsApp' },
];

const trustStats = [
  '3+ Years Experience',
  'Flutter Apps',
  'MERN Stack',
  'Client Support',
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-28">
      <div className="section-container">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto lg:mx-0 mb-5 inline-flex rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs sm:text-sm font-semibold text-primary"
            >
              Available for Fiverr, Upwork, startups, and business clients
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
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-5 min-h-16 md:min-h-12"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Web & Flutter App Developer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                  'Mobile App Developer',
                  2000,
                  'React Developer',
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
              className="text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-balance"
            >
              I build scalable web applications and modern mobile apps for startups, businesses, and clients worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {trustStats.map((stat) => (
                <div key={stat} className="glass-card rounded-lg px-3 py-3 text-center hover:-translate-y-1">
                  <p className="text-xs md:text-sm font-semibold text-foreground">{stat}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:flex gap-3 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <FiBriefcase className="w-5 h-5" />
                Hire Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary gradient-border text-foreground"
              >
                View Projects
                <FiArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/Usman Ali web and app developer.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-primary"
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-foreground"
              >
                <FiMessageCircle className="w-5 h-5 text-primary" />
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 justify-center lg:justify-start"
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
                  className="p-3 glass-card rounded-lg hover:glow-effect transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute -inset-5 rounded-full bg-gradient-primary opacity-30 blur-2xl"
              />

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden glass-card p-2"
              >
                <img
                  src={profileImage}
                  alt="Usman Ali - Full Stack Web and Flutter App Developer"
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-4 left-1/2 w-[86%] -translate-x-1/2 glass-card rounded-lg px-4 py-3 text-center">
                <p className="text-xs text-muted-foreground">Full Stack Web & Flutter App Developer</p>
                <p className="text-sm font-semibold text-foreground">Available for client projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
