import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Services', to: 'services' },
    { name: 'Emergency', to: 'emergency' },
    { name: 'Team', to: 'team' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50"
    >
      <div className="container mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }} 
          className="text-2xl font-bold text-navy hover-scale cursor-pointer"
        >
          BrightSmile Dental Clinic
        </motion.h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <motion.div
              key={link.to}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'hsla(var(--primary-light) / 0.3)',
                border: '2px solid hsl(var(--primary-dark))'
              }}
              className="nav-link cursor-pointer"
            >
              <Link 
                to={link.to} 
                smooth 
                duration={500} 
                offset={-80}
                className="block"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-navy text-xl p-2 hover-scale"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-md border-t border-primary/20"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="block"
            >
              <Link 
                to={link.to} 
                smooth 
                duration={500} 
                offset={-80}
                className="block py-3 px-6 text-navy hover:bg-primary-light/30 hover:text-primary transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;