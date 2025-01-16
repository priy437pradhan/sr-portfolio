import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      school: "Mahavir Institute of Engineering and Technology (MIET), Khurda, Bhubaneswar",
      degree: "MCA - Master of Computer Applications",
      duration: "2018 - 2021",
    },
    {
      school: "Paradeep Degree College, Paradeep",
      degree: "B Sc. Mathematics",
      duration: "2014- 2017",
    },
    {
      school: "Marshaghai College, Marshaghai, Kendrapara",
      degree: "12th(CHSE Board)",
      duration: "2012-2014",
    },
    {
      school: "Janasakti High School, Pentha, Kendrapara ",
      degree: "10th (Higher Secondary Certificate)",
      duration: "2012",
    },
    
  ];

  return (
    <section id="education" className="min-h-screen pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all"
            >
              <h3 className="text-xl font-bold text-purple-400">{edu.degree}</h3>
              <p className="text-gray-400">{edu.school}</p>
              <p className="text-sm text-gray-500">{edu.duration}</p>
              {/* <p className="mt-2 text-gray-300">{edu.description}</p> */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;