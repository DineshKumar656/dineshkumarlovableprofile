
import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex space-x-8">
      <a href="https://linkedin.com" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
        <Linkedin className="h-8 w-8" />
      </a>
      <a href="https://github.com" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
        <Github className="h-8 w-8" />
      </a>
      <a href="mailto:dineshkumar22106007@gmail.com" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
        <Mail className="h-8 w-8" />
      </a>
    </div>
  );
};

export default SocialLinks;
