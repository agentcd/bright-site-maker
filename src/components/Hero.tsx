import { motion } from 'framer-motion';
import heroImage from '../assets/hero-dental-clinic.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Modern dental clinic with smiling patient"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary-dark/70" style={{opacity: 0.6}}></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.15, ease: 'easeInOut' }
          }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.3 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 cursor-pointer"
          style={{ willChange: 'transform' }}
        >
          BrightSmile Dental Clinic
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.15, ease: 'easeInOut' }
          }}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring', bounce: 0.3 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 cursor-pointer"
          style={{ willChange: 'transform' }}
        >
          Expert Care for Your Smile
        </motion.p>
        
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: 'spring', bounce: 0.3 }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.15, ease: 'easeInOut' }
          }}
          whileTap={{ scale: 0.95 }}
          className="btn-gradient text-lg sm:text-xl px-8 py-4 animate-glow"
          style={{ willChange: 'transform' }}
        >
          Book Your Appointment Now
        </motion.button>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;