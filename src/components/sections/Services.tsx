import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiArrowRight, FiCode, FiDatabase, FiGlobe, FiServer, FiShield, FiSmartphone, FiTool, FiZap } from 'react-icons/fi';
import { SiFirebase, SiFlutter, SiMongodb, SiReact } from 'react-icons/si';

const services = [
  {
    icon: SiFlutter,
    title: 'Flutter App Development',
    description: 'Modern Android and cross-platform apps with clean UI, Firebase, APIs, optimization, and ongoing support.',
    items: ['Android Applications', 'Cross-Platform Apps', 'Firebase Integration', 'REST API Integration', 'App Performance Optimization', 'App Maintenance & Support'],
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    icon: SiReact,
    title: 'Web Development',
    description: 'Custom business websites, dashboards, and full-stack MERN applications built for clients, startups, and businesses.',
    items: ['Custom Business Websites', 'Full Stack MERN Applications', 'Admin Dashboards', 'E-Commerce Applications', 'REST API Development', 'PHP & MySQL Applications'],
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    icon: FiTool,
    title: 'Custom Software Solutions',
    description: 'Reliable digital systems for education, retail, inventory, logistics, and business operations.',
    items: ['School Management Systems', 'Inventory & Store Management', 'Jewelry Management Systems', 'Travel & Tour Management', 'Mobile Shop Management', 'Rental Management Systems'],
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
          title="Freelance Services"
          subtitle="Available for freelance projects through Fiverr and Upwork, helping startups, businesses, educational institutions, and entrepreneurs build reliable web applications, mobile apps, and custom business solutions."
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
              <div className="grid grid-cols-1 gap-2">
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
              I am actively available for freelance, remote, and full-time opportunities. Whether you need a business website, web application, mobile app, management system, or custom software solution, I am ready to help.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary whitespace-nowrap">Start a Project</a>
            <a href="#projects" className="btn-secondary whitespace-nowrap">View Projects</a>
          </div>
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
