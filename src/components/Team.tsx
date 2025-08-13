import { motion } from 'framer-motion';
import { FaClock, FaGraduationCap, FaStar } from 'react-icons/fa';

interface TeamMember {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  availability: string;
  bio: string;
  rating: number;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'General & Cosmetic Dentistry',
    experience: '15+ Years',
    availability: 'Mon-Fri 9AM-5PM',
    bio: 'Dr. Johnson specializes in creating beautiful, healthy smiles with a gentle touch and personalized care approach.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&face'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Orthodontics & Implants',
    experience: '12+ Years',
    availability: 'Tue-Sat 10AM-6PM',
    bio: 'Specializing in advanced orthodontic treatments and dental implants with cutting-edge technology.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&face'
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatric Dentistry',
    experience: '10+ Years',
    availability: 'Mon-Thu 8AM-4PM',
    bio: 'Dedicated to making dental visits fun and comfortable for children with specialized pediatric care.',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1594824919066-83d3034f9b7b?w=400&h=400&fit=crop&face'
  },
  {
    id: 4,
    name: 'Dr. David Park',
    specialty: 'Oral Surgery & Periodontics',
    experience: '18+ Years',
    availability: 'Wed-Fri 11AM-7PM',
    bio: 'Expert in complex oral surgeries and periodontal treatments with a focus on patient comfort.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&face'
  }
];

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction * 100
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6 text-hover">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-hover">
            Our experienced dentists are committed to providing exceptional care with the latest technology and techniques
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              custom={index % 2 === 0 ? -1 : 1}
              whileHover={{ 
                scale: 1.05,
                y: -10
              }}
              className="glass-card p-6 text-center hover-scale group"
            >
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Name and Specialty */}
              <motion.h3
                whileHover={{ scale: 1.02 }}
                className="text-xl font-bold text-navy mb-2 text-hover group-hover:text-primary transition-colors"
              >
                {member.name}
              </motion.h3>
              
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="text-primary font-medium mb-3 text-hover"
              >
                {member.specialty}
              </motion.p>

              {/* Rating */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-1 mb-4 hover-scale"
              >
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < Math.floor(member.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">{member.rating}</span>
              </motion.div>

              {/* Bio */}
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="text-muted-foreground text-sm mb-4 text-hover"
              >
                {member.bio}
              </motion.p>

              {/* Info Cards */}
              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-2 bg-primary/10 rounded-lg p-2 hover-scale"
                >
                  <FaGraduationCap className="text-primary text-sm" />
                  <span className="text-sm font-medium text-navy">{member.experience}</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-2 bg-secondary rounded-lg p-2 hover-scale"
                >
                  <FaClock className="text-primary text-sm" />
                  <span className="text-sm text-muted-foreground">{member.availability}</span>
                </motion.div>
              </div>

              {/* Book Appointment Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient w-full mt-6"
              >
                Book with {member.name.split(' ')[1]}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: '10,000+', label: 'Happy Patients' },
            { number: '25+', label: 'Years Combined Experience' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '24/7', label: 'Emergency Care' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center hover-scale"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-3xl font-bold text-primary mb-2 text-hover"
              >
                {stat.number}
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-muted-foreground text-hover"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;