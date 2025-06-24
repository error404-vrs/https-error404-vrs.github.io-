import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 sm:p-10 m-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-sm shadow-2xl w-[97%] mr-auto ml-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.img
        src="./src/assets/me.png"
        alt="Photo de Nolann Domas"
        className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover mb-6 shadow-lg border-4 border-gray-700 hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.08 }}
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 leading-tight">
        Nice to meet you! I’m{" "}
        <span className="text-blue-500 underline decoration-4 decoration-blue-800">
          Nolann Domas
        </span>
        .
      </h1>
      <p className="text-gray-300 text-center text-lg sm:text-xl max-w-xl mb-4 px-4">
        Passionate developer and designer.
      </p>
      <p className="text-center text-xl sm:text-2xl font-semibold text-gray-200 max-w-2xl mb-6 px-4">
        I love <span className="text-indigo-500 font-bold">HTML</span>,{" "}
        <span className="text-indigo-500 font-bold">CSS</span>,{" "}
        <span className="text-indigo-500 font-bold">JavaScript</span>, and I’m
        learning <span className="text-indigo-500 font-bold">React.js</span>.
      </p>
      <a
        href="contact.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline hover:text-blue-600 transition"
      >
        Contact
      </a>
      <hr className="w-3/4 border-gray-600 mb-4" />
    </motion.div>
  );
}

export default Profile;
