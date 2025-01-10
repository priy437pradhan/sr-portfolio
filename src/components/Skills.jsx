// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      mainSkills: ["React", "Vue", "Angular"],
      subSkills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind", "SASS"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      mainSkills: ["Node.js", "Python", "Java"],
      subSkills: ["Express", "Django", "Spring", "MongoDB", "PostgreSQL", "Redis"]
    },
    {
      category: "Mobile",
      icon: "📱",
      mainSkills: ["React Native", "Flutter", "Swift"],
      subSkills: ["iOS", "Android", "Expo", "Firebase", "App Store", "Play Store"]
    },
    {
      category: "DevOps",
      icon: "🚀",
      mainSkills: ["Docker", "Kubernetes", "AWS"],
      subSkills: ["CI/CD", "Jenkins", "Terraform", "Linux", "Nginx", "Cloud"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="min-h-screen pt-20 pb-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 
                       bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">Crafting digital experiences with modern technologies</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`h-full rounded-2xl p-6 bg-gradient-to-br 
                           ${hoveredCategory === index ? 'from-purple-900/40 to-purple-600/20' : 'from-purple-900/20 to-purple-600/10'}
                           border border-purple-500/10 hover:border-purple-500/30
                           transition-all duration-500 ease-out`}>
                
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                {/* Main Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.mainSkills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-purple-500/10 border border-purple-500/20 
                               rounded-full px-4 py-1.5 text-sm font-medium text-purple-300
                               hover:bg-purple-500/20 hover:border-purple-500/30 
                               transition-all duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Sub Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.subSkills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-sm text-gray-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      {skill}{skillIndex !== category.subSkills.length - 1 && " •"}
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl 
                            opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Skills;