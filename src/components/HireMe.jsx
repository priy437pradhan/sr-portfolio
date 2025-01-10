import { motion } from 'framer-motion';

const HireMe = () => {
  return (
    <section id="hire" className="min-h-screen pt-16 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Lets Work Together</h2>
        <p className="text-gray-400 mb-8">
          I'm currently available for freelance work and full-time opportunities.
        </p>
        <div className="space-y-4">
          <a
            href="mailto:your@email.com"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-all"
          >
            Get in Touch
          </a>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white transition-all">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all">
              Twitter
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HireMe;