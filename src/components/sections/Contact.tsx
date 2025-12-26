import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  { icon: FiMapPin, label: 'Location', value: 'Sardheri, Charsadda, KPK', href: 'https://www.google.com/maps/place/Sardheri,+Charsadda,+Khyber+Pakhtunkhwa,+Pakistan/@34.1569,71.7428,15z' },
  { icon: FiPhone, label: 'Phone', value: '+92 370 5040330', href: 'tel:+923705040330' },
  { icon: FaWhatsapp, label: 'WhatsApp', value: '+92 370 5040330', href: 'https://wa.me/923705040330' },
  { icon: FiMail, label: 'Email', value: 'usmanalishah5040@gmail.com', href: 'mailto:usmanalishah5040@gmail.com' },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Feel free to reach out through any of these channels!"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.label === 'Location' ? '_blank' : undefined}
              rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 gradient-border flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:glow-effect transition-all duration-300 mb-4">
                <info.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
              <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm break-all">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;