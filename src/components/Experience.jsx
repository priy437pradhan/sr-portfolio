import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Company Name",
      position: "Senior Developer",
      duration: "2020 - Present",
      description: "Led development of multiple web applications using React and Node.js"
    },
    // Add more experiences
  ];

  return (
    <section id="experience" className="min-h-screen pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all"
            >
              <h3 className="text-xl font-bold text-purple-400">{exp.position}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;