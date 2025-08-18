import { motion } from 'framer-motion';
import { FaPhoneAlt, FaClock, FaShieldAlt } from 'react-icons/fa';

const Emergency = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gradient-to-r from-destructive to-red-700 relative overflow-hidden max-w-full"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-full overflow-x-hidden">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ 
            type: 'spring',
            bounce: 0.3,
            duration: 0.8 
          }}
          viewport={{ once: false, amount: 0 }}
          className="text-center text-white"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 hover-scale"
          >
            <FaShieldAlt className="text-3xl" />
          </motion.div>

          <motion.h2
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.15, ease: 'easeInOut' }
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 cursor-pointer"
            style={{ willChange: 'transform' }}
          >
            24/7 Emergency Dental Care
          </motion.h2>
          
          <motion.p
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.15, ease: 'easeInOut' }
            }}
            className="text-xl sm:text-2xl mb-8 cursor-pointer"
            style={{ willChange: 'transform' }}
          >
            Dental emergencies don't wait for business hours
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-lg font-semibold hover-scale"
            >
              <FaPhoneAlt className="text-xl" />
              <span>(555) 123-EMERGENCY</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-lg font-semibold hover-scale"
            >
              <FaClock className="text-xl" />
              <span>Available 24/7</span>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.15, ease: 'easeInOut' }
            }}
            whileTap={{ scale: 0.95 }}
            className="text-lg px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg"
            style={{ willChange: 'transform', borderRadius: '12px' }}
          >
            Call Emergency Line Now
          </motion.button>

          {/* Emergency Info Cards */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: false, amount: 0 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto overflow-x-hidden"
          >
            {[
              { title: 'Severe Toothache', desc: 'Immediate pain relief' },
              { title: 'Knocked Out Tooth', desc: 'Emergency reimplantation' },
              { title: 'Dental Trauma', desc: 'Urgent repair & treatment' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover-scale"
              >
                <h4 className="font-semibold mb-2 text-hover">{item.title}</h4>
                <p className="text-sm opacity-90 text-hover">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Emergency Icons */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 2, repeat: Infinity }
        }}
        className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hidden lg:block"
      >
        <FaPhoneAlt className="text-white text-xl" />
      </motion.div>

      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, -20, 0]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
          y: { duration: 3, repeat: Infinity }
        }}
        className="absolute bottom-10 right-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hidden lg:block"
      >
        <FaClock className="text-white" />
      </motion.div>
    </motion.section>
  );
};

export default Emergency;