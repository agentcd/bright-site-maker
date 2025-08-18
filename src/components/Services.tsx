import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTooth, FaHeart } from 'react-icons/fa6';
import { FaSmile, FaShieldAlt, FaCut, FaMagic } from 'react-icons/fa';
import { X } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  fullDescription: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'General Cleanings',
    description: 'Professional dental cleanings to maintain optimal oral health.',
    icon: <FaTooth className="text-3xl" />,
    fullDescription: 'Our comprehensive dental cleanings remove plaque, tartar, and stains while preventing gum disease and cavities. Our gentle approach ensures a comfortable experience.',
    features: ['Deep cleaning', 'Plaque removal', 'Fluoride treatment', 'Oral health assessment']
  },
  {
    id: 2,
    title: 'Teeth Whitening',
    description: 'Advanced whitening treatments for a brighter, more confident smile.',
    icon: <FaSmile className="text-3xl" />,
    fullDescription: 'Transform your smile with our professional whitening treatments. Safe, effective, and long-lasting results that can brighten your teeth up to 8 shades.',
    features: ['Professional grade whitening', 'Customized treatment', 'Long-lasting results', 'Safe and comfortable']
  },
  {
    id: 3,
    title: 'Orthodontics',
    description: 'Modern braces and clear aligners to straighten your teeth.',
    icon: <FaCut className="text-3xl" />,
    fullDescription: 'Achieve the perfect smile with our orthodontic treatments including traditional braces, clear aligners, and retainers. Customized treatment plans for all ages.',
    features: ['Traditional braces', 'Clear aligners', 'Retainers', 'Adult orthodontics']
  },
  {
    id: 4,
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solutions that look and feel natural.',
    icon: <FaShieldAlt className="text-3xl" />,
    fullDescription: 'Replace missing teeth with our state-of-the-art dental implants. Titanium implants provide a permanent, natural-looking solution that preserves jaw bone health.',
    features: ['Titanium implants', 'Crown placement', 'Bone grafting', 'Full mouth reconstruction']
  },
  {
    id: 5,
    title: 'Preventive Care',
    description: 'Comprehensive preventive treatments to maintain long-term oral health.',
    icon: <FaHeart className="text-3xl" />,
    fullDescription: 'Preventive care is the foundation of excellent oral health. Our comprehensive programs include regular checkups, sealants, and personalized hygiene plans.',
    features: ['Regular checkups', 'Dental sealants', 'Oral cancer screening', 'Personalized hygiene plans']
  },
  {
    id: 6,
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with our advanced cosmetic procedures.',
    icon: <FaMagic className="text-3xl" />,
    fullDescription: 'Transform your smile with our comprehensive cosmetic dentistry services including veneers, bonding, and smile makeovers designed to boost your confidence.',
    features: ['Porcelain veneers', 'Dental bonding', 'Smile makeovers', 'Gum contouring']
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 10,
      scale: 1.0
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1.02,
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 12
      }
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-secondary overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6 text-hover">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-hover">
            Comprehensive dental care with state-of-the-art technology and personalized treatment plans
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-full"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: '0 4px 15px rgba(38, 166, 154, 0.3)',
                transition: { duration: 0.15, ease: 'easeInOut' }
              }}
              className="glass-card p-6 sm:p-8 text-center cursor-pointer group max-w-full"
              style={{ willChange: 'transform', maxWidth: '100%', boxSizing: 'border-box' }}
              onClick={() => setSelectedService(service)}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.15, ease: 'easeInOut' }}
                className="text-primary mb-6 flex justify-center"
              >
                {service.icon}
              </motion.div>
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15, ease: 'easeInOut' }}
                className="text-xl font-bold text-navy mb-4 group-hover:text-primary transition-colors"
              >
                {service.title}
              </motion.h3>
              <motion.p 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15, ease: 'easeInOut' }}
                className="text-muted-foreground mb-6"
              >
                {service.description}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15, ease: 'easeInOut' }}
                className="btn-gradient"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-x-hidden"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 10,
                duration: 0.15
              }}
              className="glass-card max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 max-w-[calc(100vw-2rem)]"
              onClick={e => e.stopPropagation()}
              style={{ willChange: 'transform' }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-primary text-4xl">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-navy">
                    {selectedService.title}
                  </h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedService(null)}
                  className="text-muted-foreground hover:text-navy transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                {selectedService.fullDescription}
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-navy mb-4">Features & Benefits:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient w-full"
              >
                Schedule Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;