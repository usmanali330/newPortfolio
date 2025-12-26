import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/usmanali330', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/usman-ali-655600344/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:usmanalishah5040@gmail.com', label: 'Email' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#home" className="font-display text-2xl font-bold gradient-text mb-2 block">
              UA
            </a>
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
              © {currentYear} Usman Ali. Built with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {/* <FiHeart className="w-4 h-4 text-red-500 fill-red-500" /> */}
              </motion.span>
              {' '}using ReactJS & Tailwind CSS
            </p>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 glass-card rounded-xl hover:glow-effect transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass-card rounded-full hover:glow-effect transition-all duration-300"
            aria-label="Scroll to top"
          >
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
