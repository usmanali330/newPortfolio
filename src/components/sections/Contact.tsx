import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiFiverr, SiUpwork } from 'react-icons/si';

const contactInfo = [
  { icon: FiMapPin, label: 'Location', value: 'Sardheri, Charsadda, KPK, Pakistan', href: 'https://maps.google.com/?q=Sardheri+Charsadda+Pakistan' },
  { icon: FiPhone, label: 'Phone', value: '0370-5040330', href: 'tel:+923705040330' },
  { icon: FaWhatsapp, label: 'WhatsApp', value: '+92 370 5040330', href: 'https://wa.me/923705040330' },
  { icon: FiMail, label: 'Email', value: 'usmanalishah5040@gmail.com', href: 'mailto:usmanalishah5040@gmail.com' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/usman-ali-software-engineer', href: 'https://www.linkedin.com/in/usman-ali-software-engineer/' },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/usmanali330', href: 'https://github.com/usmanali330/' },
  { icon: SiFiverr, label: 'Fiverr', value: 'fiverr.com/s/jjAzG49', href: 'https://www.fiverr.com/s/jjAzG49' },
  { icon: SiUpwork, label: 'Upwork', value: 'Upwork Profile', href: '#contact' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website',
    message: '',
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const projectType = formData.projectType || 'Website';
    const message = formData.message.trim();

    const details = [
      `Name: ${name || 'Not provided'}`,
      `Email: ${email || 'Not provided'}`,
      `Project Type: ${projectType}`,
      '',
      'Message:',
      message || 'No message provided',
    ].join('\n');

    const whatsappText = encodeURIComponent(details);
    const whatsappUrl = `https://wa.me/923705040330?text=${whatsappText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Let's Build Your Next Project"
          subtitle="Tell me what you need and I will help turn it into a reliable, scalable product for your business or startup."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto mb-10">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="surface-card p-5 sm:p-6 gradient-border flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="icon-chip group-hover:bg-primary/20 group-hover:glow-effect mb-4 h-14 w-14">
                <info.icon className="w-7 h-7" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
              <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm break-all">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none ring-0 focus:border-primary"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none ring-0 focus:border-primary"
                placeholder="Your email"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="projectType">Project Type</label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => handleChange('projectType', e.target.value)}
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
              >
                <option>Website</option>
                <option>Web Application</option>
                <option>Flutter App</option>
                <option>Management System</option>
                <option>API Integration</option>
                <option>Bug Fixing</option>
                <option>Custom Software</option>
                <option>Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button type="submit" className="btn-primary">
                <FiSend className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
