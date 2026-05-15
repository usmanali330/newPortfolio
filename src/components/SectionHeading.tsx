import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10 sm:mb-14 lg:mb-16"
    >
      <h2 className="heading-secondary gradient-text mb-4 text-balance">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base leading-relaxed text-balance">{subtitle}</p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 mx-auto w-20 sm:w-24 h-1 bg-gradient-primary rounded-full"
      />
    </motion.div>
  );
};

export default SectionHeading;
