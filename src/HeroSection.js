import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold"
      >
        We Build Digital Magic
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-xl max-w-2xl"
      >
        From banners to branding, websites to mobile apps—we power your digital presence.
      </motion.p>
    </section>
  );
};

export default HeroSection;
