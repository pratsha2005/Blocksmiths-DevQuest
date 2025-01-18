import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation()
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="w-full mx-auto max-w-screen-xl px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
          {/* Left side with logo and copyright */}
          <div className="flex items-center space-x-2">
            {/* Simple logo placeholder */}
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"></div>
            <div className="flex flex-col">
              <span className="font-bold text-white">Company</span>
              <span className="text-xs text-gray-400">© 2023 All rights reserved</span>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4 items-center text-sm font-medium">
            <a href="#" className="relative group">
              <span className="hover:text-white transition-colors duration-300">About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative group">
              <span className="hover:text-white transition-colors duration-300">Services</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative group">
              <span className="hover:text-white transition-colors duration-300">Blog</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative group">
              <span className="hover:text-white transition-colors duration-300">Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" 
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg 
                         hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg 
                         hover:shadow-indigo-500/25">
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;