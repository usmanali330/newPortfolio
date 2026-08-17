import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiArrowRight, FiCheckCircle, FiClock, FiMessageCircle, FiShield, FiStar } from 'react-icons/fi';
import { SiFiverr, SiUpwork } from 'react-icons/si';

const freelanceServices = [
  'Custom Business Websites',
  'Full Stack MERN Applications',
  'Admin Dashboards & Management Systems',
  'REST API Development & Integration',
  'Website Maintenance & Bug Fixing',
  'Flutter App Development',
];

const trustBadges = [
  { icon: FiClock, label: 'Fast Delivery' },
  { icon: FiMessageCircle, label: 'Clear Communication' },
  { icon: FiShield, label: 'Long-term Support' },
  { icon: FiStar, label: 'Client-Focused' },
];

const Freelance = () => {
  return (
    <section id="freelance" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Freelance Platforms"
          subtitle="Available for freelance projects through Fiverr and Upwork, helping startups, businesses, educational institutions, and entrepreneurs build reliable products."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="surface-card p-5 sm:p-6 md:p-8 gradient-border flex flex-col justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-primary mb-3">For buyers, founders, and business owners</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-balance">Hire a developer who can build, fix, and support your product.</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I provide practical development services for clients who need dependable execution, clean code, responsive design, and support after delivery.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {freelanceServices.map((service) => (
                  <div key={service} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FiCheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.fiverr.com/s/jjAzG49"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1dbf73] px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <SiFiverr className="w-5 h-5" />
                Fiverr Profile
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#14a800] px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <SiUpwork className="w-5 h-5" />
                Upwork Inquiry
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <article className="surface-card p-5 sm:p-6 hover:glow-effect transition-all duration-300 hover:-translate-y-1">
              <SiFiverr className="w-10 h-10 text-[#1dbf73] mb-5" />
              <h3 className="font-display text-xl font-bold mb-3">Fiverr Client Work</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Web builds, app development, fixes, maintenance, dashboards, and custom business solutions for diverse clients.
              </p>
              <a href="https://www.fiverr.com/s/jjAzG49" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold">
                Fiverr Profile <FiArrowRight className="w-4 h-4" />
              </a>
            </article>

            <article className="surface-card p-5 sm:p-6 hover:glow-effect transition-all duration-300 hover:-translate-y-1">
              <SiUpwork className="w-10 h-10 text-[#14a800] mb-5" />
              <h3 className="font-display text-xl font-bold mb-3">Upwork Client Work</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Hourly or milestone-based support for businesses, startups, founders, and teams needing a dependable developer.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold">
                Discuss Project <FiArrowRight className="w-4 h-4" />
              </a>
            </article>

            <div className="sm:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="surface-card p-4 text-center hover:-translate-y-1"
                >
                  <badge.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{badge.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
