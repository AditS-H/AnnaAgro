import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Send, Volume2 } from 'lucide-react';

const Hero = ({ language, isDarkMode }) => {
  const [isListening, setIsListening] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');

  const texts = {
    en: {
      title: "Your Digital Krishi Officer",
      subtitle: "Ask in Malayalam, Get Instant Agri Advice – Voice, Text, or Photo",
      tryDemo: "Try a Demo Query",
      learnMore: "Learn More",
      placeholder: "Ask your farming question here...",
      sampleQuery: "Why are my coconut leaves drying?",
      sampleResponse: "Based on your location in Kerala and current season, coconut leaf drying could be due to: 1) Drought stress - increase watering frequency. 2) Nutrient deficiency - apply potash fertilizer. 3) Root rot - check drainage. Apply Mancozeb 2g/L as preventive spray."
    },
    ml: {
      title: "നിങ്ങളുടെ ഡിജിറ്റൽ കൃഷി ഓഫീസർ",
      subtitle: "മലയാളത്തിൽ ചോദിക്കൂ, ഉടനെ കാർഷിക ഉപദേശം നേടൂ",
      tryDemo: "ഡെമോ പരീക്ഷിക്കൂ",
      learnMore: "കൂടുതൽ അറിയൂ",
      placeholder: "നിങ്ങളുടെ കാർഷിക ചോദ്യം ഇവിടെ ചോദിക്കൂ...",
      sampleQuery: "എന്റെ തെങ്ങിന്റെ ഇലകൾ വരണ്ടുപോകുന്നത് എന്തുകൊണ്ട്?",
      sampleResponse: "കേരളത്തിലെ നിങ്ങളുടെ സ്ഥാനവും നിലവിലെ കാലാവസ്ഥയും അടിസ്ഥാനമാക്കി, തെങ്ങിന്റെ ഇലകൾ വരണ്ടുപോകാനുള്ള കാരണങ്ങൾ: 1) വെള്ളക്കുറവ് - നനയ്ക്കുന്നത് കൂട്ടുക. 2) പോഷകക്കുറവ് - പൊട്ടാഷ് വളം നൽകുക. 3) റൂട്ട് റോട്ട് - വെള്ളം കെട്ടാതെ നോക്കുക."
    }
  };

  const currentText = texts[language];

  // Typewriter effect for subtitle
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < currentText.subtitle.length) {
        setTypewriterText(currentText.subtitle.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [currentText.subtitle]);

  const handleVoiceToggle = () => {
    if (isListening) {
      setIsListening(false);
    } else {
      setIsListening(true);
      setQuery(currentText.sampleQuery);
      setTimeout(() => setIsListening(false), 3000);
    }
  };

  const handleSubmitQuery = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setResponse('');
    
    // Simulate AI processing
    setTimeout(() => {
      setResponse(currentText.sampleResponse);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-green-600 dark:from-green-800 dark:via-blue-900 dark:to-green-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-yellow-200 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Title */}
          <div className="mb-8 animate-fade-in">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl">🌱</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {currentText.title}
            </h1>
            <div className="h-16 md:h-12">
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          {/* Demo Query Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6">
              {language === 'en' ? 'Try Our AI Assistant' : 'ഞങ്ങളുടെ AI അസിസ്റ്റന്റ് പരീക്ഷിക്കൂ'}
            </h3>
            
            {/* Query Input */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={currentText.placeholder}
                  className="w-full px-6 py-4 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400 backdrop-blur-sm"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleVoiceToggle}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    isListening 
                      ? 'bg-red-500 text-white animate-pulse' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  } border border-white/30`}
                >
                  {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                </button>
                <button
                  onClick={handleSubmitQuery}
                  disabled={isLoading}
                  className="p-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl transition-colors disabled:opacity-50 border border-yellow-400"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
                <span className="ml-3 text-white">
                  {language === 'en' ? 'AI is analyzing...' : 'AI വിശകലനം ചെയ്യുന്നു...'}
                </span>
              </div>
            )}

            {/* Response */}
            {response && !isLoading && (
              <div className="bg-white/20 rounded-xl p-6 text-left border border-white/30">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <span className="text-white font-semibold">
                    {language === 'en' ? 'Digital Krishi Officer' : 'ഡിജിറ്റൽ കൃഷി ഓഫീസർ'}
                  </span>
                </div>
                <p className="text-white/90 leading-relaxed">{response}</p>
                <button className="mt-4 flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  <Volume2 className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Listen to response' : 'ഉത്തരം കേൾക്കുക'}
                </button>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              {currentText.tryDemo}
            </button>
            <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-green-800 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
              {currentText.learnMore}
            </button>
          </div>

          {/* Farmer Avatar with Speech Bubble */}
          <div className="mt-12 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30">
                <span className="text-4xl">👨‍🌾</span>
              </div>
              <div className="absolute -top-16 -right-8 bg-white/90 backdrop-blur-md rounded-xl p-3 border border-white/30 max-w-xs">
                <p className="text-sm text-green-800 font-medium">
                  {currentText.sampleQuery}
                </p>
                <div className="absolute bottom-0 left-8 w-4 h-4 bg-white/90 transform rotate-45 translate-y-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;