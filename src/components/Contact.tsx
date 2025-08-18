import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const mapContainerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '12px'
  };

  const center = {
    lat: 40.7589, // NYC coordinates
    lng: -73.9851
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-xl" />,
      title: 'Phone',
      details: ['(555) 123-4567', 'Emergency: (555) 123-EMERGENCY']
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: 'Email',
      details: ['info@brightsmileclinic.com', 'emergency@brightsmileclinic.com']
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: 'Address',
      details: ['123 Dental Street', 'New York, NY 10001']
    },
    {
      icon: <FaClock className="text-xl" />,
      title: 'Hours',
      details: ['Mon-Fri: 8AM-6PM', 'Sat: 10AM-2PM', 'Sun: Emergency Only']
    }
  ];

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
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-hover">
            Ready to transform your smile? Contact us today to schedule your consultation
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 max-w-full overflow-x-hidden">
          {/* Consultation Form */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              type: 'spring',
              bounce: 0.3,
              duration: 0.8 
            }}
            viewport={{ once: false, amount: 0 }}
            className="glass-card p-6 sm:p-8 flex flex-col h-full max-w-full"
          >
            <motion.h3
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold text-navy mb-6 text-hover"
            >
              Book Your Consultation
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input w-full"
                  required
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input w-full"
                  required
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input w-full"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                className="flex-grow"
              >
                <textarea
                  name="message"
                  placeholder="Tell us about your dental needs..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="form-input resize-none w-full h-full min-h-[120px]"
                  required
                />
              </motion.div>
              
              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.15, ease: 'easeInOut' }
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient w-full mt-auto"
                style={{ willChange: 'transform' }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              type: 'spring',
              bounce: 0.3,
              duration: 0.8 
            }}
            viewport={{ once: false, amount: 0 }}
            className="glass-card p-6 sm:p-8 max-w-full"
          >
            <motion.h3
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold text-navy mb-6 text-hover"
            >
              Contact Information
            </motion.h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 hover-scale"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-primary mt-1"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1 text-hover">{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <motion.p
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="text-muted-foreground text-hover"
                      >
                        {detail}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 pt-6 border-t border-border"
            >
              <h4 className="font-semibold text-navy mb-4 text-hover">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebook />, color: 'hover:text-blue-600' },
                  { icon: <FaInstagram />, color: 'hover:text-pink-600' },
                  { icon: <FaTwitter />, color: 'hover:text-blue-400' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-2xl text-muted-foreground transition-colors hover-scale ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: false, amount: 0 }}
          className="glass-card p-4 overflow-hidden max-w-full"
        >
          <motion.h3
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-bold text-navy mb-6 text-center text-hover"
          >
            Find Us
          </motion.h3>
          
          <LoadScript 
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}
            loadingElement={
              <div className="w-full h-[300px] bg-secondary rounded-lg flex items-center justify-center">
                <div className="text-muted-foreground">Loading map...</div>
              </div>
            }
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
                options={{
                  styles: [
                    {
                      featureType: 'all',
                      elementType: 'geometry.fill',
                      stylers: [{ color: '#f0f4f8' }]
                    },
                    {
                      featureType: 'water',
                      elementType: 'geometry',
                      stylers: [{ color: '#26a69a' }]
                    }
                  ]
                }}
              >
                <Marker 
                  position={center}
                  title="BrightSmile Dental Clinic"
                />
              </GoogleMap>
            </motion.div>
          </LoadScript>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;