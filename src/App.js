import React, { useState } from 'react';
import { Mic, Camera, Brain, ArrowUp, Search, Sun, Moon, Globe } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/Howitworks'; 
import CallToAction from './components/CallToAction';
import Impact from './components/Impact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'en' ? 'ml' : 'en');

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-green-900' : 'bg-yellow-50'} transition-colors duration-300`}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-green-900/90 backdrop-blur-md z-50 border-b border-green-200 dark:border-green-700">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">🌱</span>
            </div>
            <span className="font-bold text-green-800 dark:text-green-200">
              {language === 'en' ? 'Anna Agro' : 'ഡിജിറ്റൽ കൃഷി ഓഫീസർ'}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-800 transition-colors"
            >
              <Globe className="w-5 h-5 text-green-600 dark:text-green-300" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-800 transition-colors"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-green-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero language={language} isDarkMode={isDarkMode} />
        <Features language={language} isDarkMode={isDarkMode} />
        <HowItWorks language={language} isDarkMode={isDarkMode} />
         <Impact language={language} isDarkMode={isDarkMode} />
        <CallToAction language={language} isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <footer className="bg-green-800 dark:bg-green-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">
                {language === 'en' ? 'Digital Krishi Officer' : 'ഡിജിറ്റൽ കൃഷി ഓഫീസർ'}
              </h3>
              <p className="text-green-200">
                {language === 'en' 
                  ? 'Empowering farmers with AI-driven agricultural advice in their native language.'
                  : 'കർഷകരുടെ മാതൃഭാഷയിൽ AI-അധിഷ്ഠിത കാർഷിക ഉപദേശം നൽകുന്നു.'
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">
                {language === 'en' ? 'Quick Links' : 'ലിങ്കുകൾ'}
              </h4>
              <ul className="space-y-2 text-green-200">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">
                {language === 'en' ? 'Contact' : 'ബന്ധപ്പെടുക'}
              </h4>
              <p className="text-green-200">SIH Team 2025</p>
              <p className="text-green-200">Kerala, India</p>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-4 text-center text-green-300">
            <p>© 2025 Digital Krishi Officer | Built for Smart India Hackathon</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;