import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Services', to: 'services' },
    { name: 'Emergency', to: 'emergency' },
    { name: 'Team', to: 'team' },
    { name: 'Contact', to: 'contact' }
  ];

  const services = [
    'General Cleanings',
    'Teeth Whitening',
    'Orthodontics',
    'Dental Implants',
    'Emergency Care'
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: '#', color: 'hover:text-blue-600' },
    { icon: <FaInstagram />, href: '#', color: 'hover:text-pink-600' },
    { icon: <FaTwitter />, href: '#', color: 'hover:text-blue-400' },
    { icon: <FaLinkedin />, href: '#', color: 'hover:text-blue-800' }
  ];

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ 
        type: 'spring',
        bounce: 0.3,
        duration: 0.8 
      }}
      viewport={{ once: true }}
      className="bg-navy text-white"
    >
      <div className="container mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Clinic Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <motion.h3
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold mb-4 text-hover"
            >
              BrightSmile Dental Clinic
            </motion.h3>
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-gray-300 mb-6 max-w-md text-hover"
            >
              Creating beautiful, healthy smiles with expert care and cutting-edge technology. 
              Your comfort and satisfaction are our top priorities.
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="space-y-2 text-gray-300 text-hover"
            >
              <p>📍 123 Dental Street, New York, NY 10001</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@brightsmileclinic.com</p>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h4
              whileHover={{ scale: 1.02 }}
              className="text-lg font-semibold mb-4 text-hover"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="hover-scale"
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    className="text-gray-300 hover:text-primary transition-colors cursor-pointer block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h4
              whileHover={{ scale: 1.02 }}
              className="text-lg font-semibold mb-4 text-hover"
            >
              Our Services
            </motion.h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="text-gray-300 hover:text-primary transition-colors hover-scale"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Emergency Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-destructive rounded-lg p-6 mb-8 text-center"
        >
          <motion.h4
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="text-xl font-bold mb-2 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            24/7 Emergency Dental Care
          </motion.h4>
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mb-4 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            Dental emergencies don't wait for business hours
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-destructive font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors hover-scale"
          >
            Call (555) 123-EMERGENCY
          </motion.button>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          {/* Copyright */}
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="text-gray-300 text-center md:text-left mb-4 md:mb-0 text-hover"
          >
            © 2024 BrightSmile Dental Clinic. Made with{' '}
            <motion.span
              whileHover={{ scale: 1.2 }}
              className="inline-block hover-scale"
            >
              <FaHeart className="inline text-red-500 mx-1" />
            </motion.span>
            for beautiful smiles.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl text-gray-300 transition-colors hover-scale ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Back to Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="fixed bottom-8 right-8"
        >
          <Link to="hero" smooth duration={500}>
            <motion.button
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 10px 30px rgba(38, 166, 154, 0.3)'
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors hover-scale"
            >
              ↑
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;