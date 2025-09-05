import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from "../components/Navbar";

const experiences = [
  { company: "NodeOps", period: "2024 - Ongoing", url: "https://nodeops.network" },
  { company: "Metaforms AI", period: "2024 - 2024", url: "https://metaforms.ai" },
  { company: "Fold Health", period: "2023 - 2024", url: "https://fold.health" },
  { company: "Fileverse", period: "2022 - 2023", url: "https://fileverse.io" },
  { company: "AyuRythm", period: "2021 - 2023", url: "https://ayurythm.com" },
  { company: "BotX Automations", period: "2021 - 2021", url: "https://botx.co.in/" },
];

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-gray-100">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 md:px-8">
        {/* About Me Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h1>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div 
                    className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-indigo-500 shadow-xl cursor-pointer transform transition duration-300 hover:scale-105"
                    onClick={() => openImage('/design/profile1.png')}
                  >
                    <img 
                      src="/design/profile1.png" 
                      alt="Naved Alam" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div 
                    className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl overflow-hidden border-4 border-purple-500 shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
                    onClick={() => openImage('/design/profile2.png')}
                  >
                    <img 
                      src="/design/profile2.png" 
                      alt="Naved Alam" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg leading-relaxed text-gray-200 mb-4">
                  I'm a designer from India who loves crafting clean, thoughtful interfaces and telling stories through design. Over the past few years, I've worked across UI/UX, branding, and marketing, helping teams turn ideas into meaningful products.
                </p>
                <p className="text-lg leading-relaxed text-gray-200 mb-4">
                  I've worked with some amazing teams in the AI, Web3, and developer tools space - designing dashboards, building design systems, and creating products that feel as good as they look.
                </p>
                <p className="text-lg leading-relaxed text-gray-200">
                  These days, I'm spending more time learning how to build my own designs - getting hands-on with React and Tailwind CSS. I love the idea of not just imagining how something should look, but actually making it work.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-3 h-[calc(100%-24px)] w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-200 shadow-lg">
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="font-medium text-lg text-gray-100 hover:underline block mb-1">
                      {exp.company}
                    </a>
                    <p className="text-sm text-gray-400">{exp.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged profile" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button 
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
                onClick={closeImage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
