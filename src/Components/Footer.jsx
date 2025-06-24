import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import planetAnimationData from './1750687030769.json';

const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_38ha0k6', 'template_958b8us', form.current, 'HlwpDtSAEAiBSiD-l')
      .then(
        () => {
          setSuccessMessage('Message envoyé avec succès !');
          setErrorMessage('');
          form.current.reset();
        },
        () => {
          setErrorMessage('Échec de l\'envoi. Veuillez réessayer plus tard.');
          setSuccessMessage('');
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full max-w-2xl mx-auto p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg backdrop-blur-md relative z-10"
    >
      <h2 className="text-2xl font-semibold text-white mb-4 text-center">Contactez-moi</h2>
      <label className="block text-white mb-2 font-semibold" htmlFor="email">Email</label>
      <input
        className="w-full p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        type="email"
        id="email"
        name="user_name"
        placeholder="Votre email"
        required
      />
      <label className="block text-white mb-2 font-semibold" htmlFor="message">Message</label>
      <textarea
        className="w-full p-3 mb-4 rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
        id="message"
        name="message"
        placeholder="Votre message"
        required
      />
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105"
      >
        Envoyer
      </button>
      {successMessage && (
        <p className="mt-4 text-green-400 text-center font-semibold">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="mt-4 text-red-500 text-center font-semibold">{errorMessage}</p>
      )}
    </form>
  );
};

const Footer = () => {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 w-[97%] mx-auto rounded-lg mb-8 shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-32 h-32 md:w-40 md:h-40">
        <Lottie animationData={planetAnimationData} loop={true} />
      </div>
      <div className="max-w-4xl mx-auto text-center text-gray-300 relative z-10 space-y-6">
        <h1 className="text-gray-500 font-bold text-4xl mb-4 uppercase tracking-widest">
          CONTACT
        </h1>
        <p className="text-white text-lg mb-8 px-4 font-light">
          Je serais ravi d'entendre parler de votre projet. Contactez-moi par téléphone ou email, et je vous répondrai rapidement.
        </p>
        <ul className="bg-gray-900 bg-opacity-70 p-6 rounded-xl shadow-inner space-y-4 font-medium text-gray-200 max-w-2xl mx-auto">
          <li className="flex items-center justify-center space-x-3">
            <span className="font-semibold">Gmail :</span>
            <a
              href="mailto:ndomas@edenschool.fr"
              className="underline decoration-2 hover:decoration-green-400 transition"
            >
              ndomas@edenschool.fr
            </a>
          </li>
          <li className="flex items-center justify-center space-x-3">
            <span className="font-semibold">Téléphone :</span>
            <span className="underline decoration-4 decoration-green-600 hover:decoration-yellow-400 transition">
              +33 6 98 79 52 06
            </span>
          </li>
          <li className="text-red-500 font-bold underline decoration-4 decoration-blue-400 hover:decoration-red-500 transition">
            Précisez votre email dans le message !
          </li>
        </ul>
        <div className="mt-10">
          <ContactUs />
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;