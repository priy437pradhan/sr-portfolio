import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Odisha Television Network",
      position: "Automation Engineer",
      duration: "Oct 2024 - Jan 2025",
      description: "Developed custom API integrations, automated workflows with Deluge scripting, extended Zoho CRM functionality with custom PHP modules, and implemented real-time data synchronization, reporting, and email notification systems using PHP, MySQL, and Zoho CRM triggers to enhance efficiency and streamline operations."
    },
    {
      company: "Dietary Business Intelligence LLC(DBI360)",
      position: "Software Engineer",
      duration: "Jan 2024 - Oct 2024",
      description: "Designed, developed, and maintained high-performance web applications using PHP, Node.js, and MySQL; collaborated with cross-functional teams to deliver innovative solutions; implemented third-party API integrations; ensured code quality through unit testing and debugging; and managed version control and documentation with Git for streamlined development."
    },
    {
      company: "Jeeva Organic Private Limited",
      position: "Software Engineer",
      duration: "Dec 2021 - Jan 2024",
      description: "Developed and tested robust software solutions, managed API-based backend projects with Node.js and PHP, implemented scalable front-end architecture using advanced JavaScript and ES6+ features, delivered high-quality results aligned with specifications, applied agile methodologies for sprint planning and backlog prioritization, and efficiently managed team resources to meet sprint goals on time."
    }
    
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