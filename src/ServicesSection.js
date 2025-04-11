import { motion } from "framer-motion";

const services = [
  "Digital Marketing",
  "Media Designing",
  "Printing & Banner Designs",
  "Social Media Management",
  "Video Editing",
  "Website Development",
  "App Development"
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 bg-gray-800 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">{service}</h3>
            <p className="text-sm text-gray-300">We offer top-notch {service.toLowerCase()} solutions tailored to your needs.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
