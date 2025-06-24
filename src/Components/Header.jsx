import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaDeezer } from "react-icons/fa";
import { SiOnlyfans } from "react-icons/si";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
     className="flex flex-col bg-gradient-to-br md:flex-row items-center md:justify-between p-4 bg-gray-800 text-gray-100 font-sans mt-4 rounded-sm transition-all duration-300 shadow-lg w-[97%] ml-auto mr-auto from-gray-900 via-gray-800 to-gray-900"
     initial={{ opacity: 0, y: 40 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.1, ease: "easeOut" }}>
      <h1 className="text-3xl font-extrabold mb-4 md:mb-0 tracking-wide">Nolann Domas</h1>
      <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 p-2 md:p-3 rounded-lg transition-transform hover:scale-105 z-1">
        <button className="hover:bg-gray-700 p-2 rounded-full transition duration-300">
          <FaGithub size={30} />
        </button>
        <button className="hover:bg-gray-700 p-2 rounded-full transition duration-300">
          <FaDiscord size={30} />
        </button>
        <button className="hover:bg-gray-700 p-2 rounded-full transition duration-300">
          <FaDeezer size={30} />
        </button>
        <button className="hover:bg-gray-700 p-2 rounded-full transition duration-300">
          <SiOnlyfans size={30} />
        </button>
      </nav>
    </motion.div>
  );
}

export default Header;