import { useState } from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Twitter, Download ,X ,Menu} from 'lucide-react';
import cv from  '../documents/cv.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: 'About', to: 'about' },
    { title: 'Experience', to: 'experience' },
    { title: 'Projects', to: 'projects' },
    // { title: 'Hire Me', to: 'hire' },
    { title: 'Skills', to: 'skills' },
    { title: 'Education', to: 'education' },
  ];

  const socialLinks = [
    
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sambit-ray-software-engineer/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/SambitRay10', label: 'Twitter' },
  ];

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Sambit Ray</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Social Icons - Desktop */}
            <div className="flex items-center space-x-3 ml-4 border-l border-gray-700 pl-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* CV Download Button - Desktop */}
            <a
              href={cv}
              download
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              <Download size={16} className="mr-2" />
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
          <button
      onClick={() => setIsOpen(!isOpen)}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
    >
      <span className="sr-only">Open main menu</span>
      {isOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          
          {/* Social Icons - Mobile */}
          <div className="flex items-center space-x-4 px-3 py-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* CV Download Button - Mobile */}
          <a
            href={cv}
            download
            className="block mx-3 px-4 py-2 text-center rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors"
          >
            <Download size={16} className="inline-block mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;