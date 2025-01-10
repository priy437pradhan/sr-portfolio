import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen pt-16 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <img
          src="/your-photo.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-purple-500"
        />
        <h2 className="text-4xl font-bold mb-4">Your Name</h2>
        <p className="text-xl text-gray-300 mb-6">Full Stack Developer</p>
        <p className="text-gray-400 leading-relaxed">
          A passionate developer with expertise in modern web technologies.
          I love creating beautiful and functional applications that solve real-world problems.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
