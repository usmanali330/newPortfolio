import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiBarChart2, FiCheckCircle, FiCloud, FiShoppingCart, FiTruck, FiUsers } from 'react-icons/fi';
import { SiAndroid, SiApple, SiFirebase, SiFlutter } from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';

const appCards = [
  { icon: FiShoppingCart, title: 'E-commerce App', text: 'Product browsing, carts, orders, authentication, and payment-ready flows.' },
  { icon: FiUsers, title: 'Attendance App', text: 'QR attendance, employee tracking, reports, and real-time Firebase sync.' },
  { icon: FiTruck, title: 'Delivery App', text: 'Order tracking, driver screens, status updates, and business dashboards.' },
  { icon: TbBrandOpenai, title: 'AI App', text: 'AI-powered prompts, image tools, chat workflows, and API integrations.' },
  { icon: FiBarChart2, title: 'Business Dashboard App', text: 'Mobile dashboards for sales, staff, operations, and decision making.' },
];

const features = ['Flutter expertise', 'Android and iOS support', 'Firebase auth and database', 'REST API integration', 'Custom mobile UI', 'Performance optimization'];

const MobileApps = () => {
  return (
    <section id="mobile-apps" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Mobile App Development"
          subtitle="Flutter apps built for startups, service businesses, and freelance clients who need reliable mobile products with modern UI and scalable integrations."
        />

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 xl:gap-12 items-center mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="surface-card p-5 sm:p-6 md:p-8 gradient-border"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {[SiFlutter, SiFirebase, SiAndroid, SiApple].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="icon-chip"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-balance">Premium Flutter apps with backend-ready architecture</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I build mobile apps that connect smoothly with Firebase, REST APIs, dashboards, authentication, cloud data, and business workflows. The focus is simple: clean UI, stable features, and a product your users can actually trust.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FiCheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative min-h-[360px] sm:min-h-[430px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md">
              <div className="space-y-4 pt-8">
                <div className="glass-card rounded-2xl p-3 h-56 sm:h-64 border-primary/20">
                  <div className="h-full rounded-xl bg-gradient-to-br from-cyan-500/90 to-blue-700/90 p-4 text-white flex flex-col justify-between">
                    <SiFlutter className="w-8 h-8" />
                    <div>
                      <p className="text-sm text-white/75">Mobile UI</p>
                      <h4 className="font-display text-xl font-bold">Flutter App</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="h-12 rounded-lg bg-white/20" />
                      <span className="h-12 rounded-lg bg-white/20" />
                    </div>
                  </div>
                </div>
                <div className="surface-card p-4 flex items-center gap-3">
                  <FiCloud className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Firebase Sync</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="surface-card p-4">
                  <p className="text-xs text-muted-foreground mb-2">API Status</p>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '82%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                      className="h-full bg-gradient-primary"
                    />
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-3 h-64 sm:h-72">
                  <div className="h-full rounded-xl bg-background p-4 flex flex-col gap-3">
                    <span className="w-16 h-2 rounded-full bg-primary/30 mx-auto" />
                    <div className="h-20 rounded-xl bg-primary/10" />
                    <div className="grid grid-cols-2 gap-2">
                      <span className="h-16 rounded-lg bg-muted" />
                      <span className="h-16 rounded-lg bg-muted" />
                    </div>
                    <div className="h-20 rounded-xl bg-gradient-primary opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {appCards.map((app, index) => (
            <motion.article
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="surface-card p-5 hover:glow-effect transition-all duration-300 hover:-translate-y-1"
            >
              <app.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-display font-bold mb-2">{app.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{app.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileApps;
