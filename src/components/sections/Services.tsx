import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiArrowRight, FiCode, FiDatabase, FiGlobe, FiServer, FiShield, FiSmartphone, FiTool, FiZap } from 'react-icons/fi';
import { SiFirebase, SiFlutter, SiMongodb, SiReact } from 'react-icons/si';

const services = [
  {
    icon: SiFlutter,
    title: 'Flutter App Development',
    description: 'Modern Android and cross-platform apps with clean UI, Firebase, APIs, optimization, and ongoing support.',
    items: ['Android Apps', 'Cross Platform Apps', 'Firebase Integration', 'API Integration', 'Custom UI Design', 'Bug Fixing'],
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    icon: SiReact,
    title: 'Full Stack Web Development',
    description: 'Scalable MERN stack products for founders and businesses that need secure, responsive, production-ready apps.',
    items: ['MERN Stack Apps', 'Admin Dashboards', 'Authentication Systems', 'REST APIs', 'Responsive Websites', 'Backend Development'],
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    icon: FiTool,
    title: 'Freelance Project Services',
    description: 'Reliable project delivery for Fiverr and Upwork clients, from fixes and maintenance to full application builds.',
    items: ['Fiverr Client Work', 'Upwork Client Work', 'Long-term Support', 'Maintenance Services', 'Deployment Assistance', 'UI/UX Improvements'],
    accent: 'from-violet-500 to-fuchsia-600',
  },
];

const process = [
  { icon: FiShield, label: 'Clean Code' },
  { icon: FiZap, label: 'Fast Delivery' },
  { icon: FiGlobe, label: 'Responsive Design' },
  { icon: FiDatabase, label: 'Scalable Apps' },
  { icon: FiServer, label: 'API Ready' },
  { icon: FiCode, label: 'Production Focus' },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Client-Focused Services"
          subtitle="Premium web and mobile development services for Fiverr buyers, Upwork clients, startups, business owners, and teams hiring developers."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mb-10 lg:mb-12">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="surface-card p-5 sm:p-6 gradient-border h-full hover:-translate-y-1"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-glow mb-5`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {service.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-card p-5 md:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-2xl font-bold gradient-text mb-2">Need a complete app or a fast fix?</h3>
            <p className="text-muted-foreground max-w-3xl">
              I help clients plan, build, improve, deploy, and maintain web and mobile products with clear communication and practical delivery.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary whitespace-nowrap"
          >
            Start a Project
            <FiArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 mt-6">
          {process.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="surface-card p-4 text-center hover:-translate-y-1"
            >
              <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
