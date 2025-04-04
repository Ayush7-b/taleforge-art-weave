
import { Link } from "react-router-dom";
import { Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tale-midnight text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">TaleForge</h3>
            </Link>
            <p className="text-gray-300 mb-4">
              Unleash your creativity with AI-enhanced storytelling.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-tale-purple transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-tale-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-tale-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/read" className="text-gray-300 hover:text-tale-purple transition-colors">
                  Browse Stories
                </Link>
              </li>
              <li>
                <Link to="/create" className="text-gray-300 hover:text-tale-purple transition-colors">
                  Create Story
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-tale-purple transition-colors">
                  Featured Authors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-tale-purple transition-colors">
                  Collections
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-tale-purple transition-colors">
                  Writing Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-tale-purple transition-colors">
                  AI Art Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-tale-purple transition-colors">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-tale-purple transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-tale-purple transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-tale-purple transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-tale-purple transition-colors">
                  Copyright
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-tale-purple transition-colors">
                  Content Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TaleForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
