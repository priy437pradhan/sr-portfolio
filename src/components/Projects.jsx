import { motion } from 'framer-motion';
import zyler from '../images/zyler.jpg';
import conflux from '../images/conflux.jpg';
import nexus from '../images/nexus.jpg';
import Zoho from '../images/Zoho.jpg';
import BA from '../images/business-automation.jpg';
import ACS from '../images/asc.jpg';



const Projects = () => {
  const projects = [
    {
      title: "Zyler ERP",
      description: "Zyler is a smart Cloud-based enterprise software that transforms businesses into intelligently driven enterprises. An effective business software, it meets the present needs of your business, while allowing future growth, without financially draining integrations. Catering to small and medium scale businesses, Zyler streamlines and automates the supply chain, while consolidating global transactions.",
      image: zyler,
      link: "https://dbi360.com/zyler"
    },
    {
      title: "ConfluxHR(HRMS)",
      description: "HRMS is Human Resource Management Software that enables several HR functions using the latest technology. It aims to maximize the productivity and efficiency of the business by automating several unproductive and repetitive tasks. At ConfluxHR, we understand that growing teams means additional work on the already loaded back of the HR. Assisting the HR department of businesses is our passion, and we are proud that we have the best solutions.",
      image: conflux,
      link: "https://dbi360.com/confluxHR/"
    },
    {
      title: "Nexus",
      description: "Nexus Platform AI was created to tackle a critical challenge: providing reliable, actionable data that drives smarter decisions. Built by DBI360's industry experts, Nexus delivers precise insights to accelerate lead generation, streamline operations, and uncover growth opportunities—50% faster. With unmatched data accuracy, advanced targeting, and seamless CRM integration, Nexus is transforming how businesses find and connect with leads.",
      image: nexus,
      link: "https://dbi360.com/nexus"
    },
    {
      title: "Zoho Projects",
      description: "As an automation engineer, I integrate Zoho products like People, CRM, Inventory, Books, and Expense using custom functions, Deluge scripts, and API calls to automate workflows. This includes onboarding in Zoho People, lead management in CRM, invoicing in Inventory, and expense reporting in Expense. By ensuring seamless data flow, I enhance operational efficiency and support better decision-making.",
      image: Zoho,
    },
    {
      title: "Automated Business Workflow System",
      description: "A workflow management system focuses on automating and optimizing specific tasks and processes within a business. These systems track the flow of work through predefined steps, ensuring tasks are completed efficiently and team members are notified of their responsibilities. They are particularly useful for businesses looking to streamline particular workflows without overhauling their entire operational structure.",
      image: BA,
    },
    {
      title: "Automated Communication System",
      description: "An automated email notification system can be built using Zapier, Make (formerly Integromat), Amazon SQS, and Vash templates. Zapier and Make automate workflows and trigger emails based on events, while Amazon SQS queues high-volume requests for reliable delivery. Vash templates enable personalized emails by injecting dynamic data into pre-designed templates, ensuring seamless, scalable, and tailored notifications.",
      image: ACS,
    },
    
  ];

  return (
    <section id="projects" className="min-h-screen py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                {project.link && (
                    <a
                      href={project.link}
                      className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-all"
                    >
                      View Project
                    </a>
                  )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;