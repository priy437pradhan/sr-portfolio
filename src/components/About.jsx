import { motion } from 'framer-motion';
import pp from '../images/pp.jpeg';

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
          src={pp}
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-purple-500"
        />
        <h2 className="text-4xl font-bold mb-4">Sambit Ray</h2>
        <p className="text-xl text-gray-300 mb-6">Software Engineer</p>
        <p className="text-gray-400 leading-relaxed">
        Leveraging my Master's in Computer Applications and more than 3 years of experience in Software Developer role, I'm instrumental in developing web applications that elevate business efficiency and user engagement. 

    With a foundation in software engineering from MIET, Bhubaneswar, I bring a strategic mindset to the Software Development Life Cycle. Our collaborative efforts yield digital narratives that drive meaningful interactions and satisfy stakeholder expectations.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
