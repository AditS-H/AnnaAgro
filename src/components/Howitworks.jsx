import React, { useState, useEffect } from 'react';
import { Mic, Brain, MessageCircle, Phone, RotateCcw, ArrowRight } from 'lucide-react';

const HowItWorks = ({ language, isDarkMode }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const texts = {
    en: {
      title: "From Query to Action – In Seconds",
      subtitle: "See how our AI transforms your farming questions into actionable advice",
      steps: [
        {
          icon: Mic,
          title: "Ask (Voice/Text/Image)",
          description: "Speak in Malayalam, type your question, or upload a photo of your crop issue",
          details: "Our system accepts multiple input formats to make it easy for every farmer to ask questions naturally."
        },
        {
          icon: Brain,
          title: "AI Analyzes Context",
          description: "Our AI processes your query using local weather, soil, and crop data",
          details: "Advanced machine learning considers your location, season, crop type, and historical data for accurate advice."
        },
        {
          icon: MessageCircle,
          title: "Delivers Advice",
          description: "Get personalized recommendations with sources and local guidelines",
          details: "Responses include specific treatments, application methods, timing, and references to Kerala agricultural guidelines."
        },
        {
          icon: Phone,
          title: "Escalate if Needed",
          description: "Complex issues are forwarded to local agricultural officers",
          details: "When AI confidence is low or issues are complex, we connect you directly with human experts."
        },
        {
          icon: RotateCcw,
          title: "Feedback & Learn",
          description: "Your feedback helps improve future recommendations",
          details: "Rate responses and provide feedback to continuously improve our AI's accuracy for your region."
        }
      ]
    },
    ml: {
      title: "ചോദ്യത്തിൽ നിന്ന് പ്രവർത്തനത്തിലേക്ക് – നിമിഷങ്ങളിൽ",
      subtitle: "നിങ്ങളുടെ കാർഷിക ചോദ്യങ്ങൾ പ്രായോഗിക ഉപദേശമാക്കി ഞങ്ങളുടെ AI എങ്ങനെ രൂപാന്തരപ്പെടുത്തുന്നുവെന്ന് കാണുക",
      steps: [
        {
          icon: Mic,
          title: "ചോദിക്കുക (ശബ്ദം/ടെക്സ്റ്റ്/ചിത്രം)",
          description: "മലയാളത്തിൽ സംസാരിക്കുക, ചോദ്യം ടൈപ്പ് ചെയ്യുക, അല്ലെങ്കിൽ വിള പ്രശ്നത്തിന്റെ ഫോട്ടോ അപ്ലോഡ് ചെയ്യുക",
          details: "എല്ലാ കർഷകർക്കും സ്വാഭാവികമായി ചോദ്യങ്ങൾ ചോദിക്കാൻ എളുപ്പമാക്കാൻ ഞങ്ങളുടെ സിസ്റ്റം ഒന്നിലധികം ഇൻപുട്ട് ഫോർമാറ്റുകൾ സ്വീകരിക്കുന്നു."
        },
        {
          icon: Brain,
          title: "AI സന്ദർഭം വിശകലനം ചെയ്യുന്നു",
          description: "പ്രാദേശിക കാലാവസ്ഥ, മണ്ണ്, വിള ഡാറ്റ എന്നിവ ഉപയോഗിച്ച് ഞങ്ങളുടെ AI നിങ്ങളുടെ ചോദ്യം പ്രോസസ് ചെയ്യുന്നു",
          details: "കൃത്യമായ ഉപദേശത്തിനായി വിപുലമായ മെഷീൻ ലേണിംഗ് നിങ്ങളുടെ സ്ഥാനം, സീസൺ, വിളയുടെ തരം, ചരിത്ര ഡാറ്റ എന്നിവ പരിഗണിക്കുന്നു."
        },
        {
          icon: MessageCircle,
          title: "ഉപദേശം നൽകുന്നു",
          description: "ഉറവിടങ്ങളും പ്രാദേശിക മാർഗ്ഗനിർദ്ദേശങ്ങളുമായി വ്യക്തിഗതമാക്കിയ ശുപാർശകൾ നേടുക",
          details: "പ്രതികരണങ്ങളിൽ നിർദ്ദിഷ്ട ചികിത്സകൾ, പ്രയോഗ രീതികൾ, സമയം, കേരള കാർഷിക മാർഗ്ഗനിർദ്ദേശങ്ങളുടെ റഫറൻസുകൾ എന്നിവ ഉൾപ്പെടുന്നു."
        },
        {
          icon: Phone,
          title: "ആവശ്യമെങ്കിൽ എസ്കലേറ്റ് ചെയ്യുക",
          description: "സങ്കീർണ്ണമായ പ്രശ്നങ്ങൾ പ്രാദേശിക കൃഷി ഉദ്യോഗസ്ഥർക്ക് കൈമാറുന്നു",
          details: "AI വിശ്വാസം കുറവായിരിക്കുമ്പോഴോ പ്രശ്നങ്ങൾ സങ്കീർണ്ണമായിരിക്കുമ്പോഴോ, ഞങ്ങൾ നിങ്ങളെ നേരിട്ട് മനുഷ്യ വിദഗ്ധരുമായി ബന്ധിപ്പിക്കുന്നു."
        },
        {
          icon: RotateCcw,
          title: "ഫീഡ്ബാക്ക് & പഠനം",
          description: "നിങ്ങളുടെ ഫീഡ്ബാക്ക് ഭാവിയിലെ ശുപാർശകൾ മെച്ചപ്പെടുത്താൻ സഹായിക്കുന്നു",
          details: "നിങ്ങളുടെ പ്രദേശത്തിന് ഞങ്ങളുടെ AI-യുടെ കൃത്യത തുടർച്ചയായി മെച്ചപ്പെടുത്താൻ പ്രതികരണങ്ങൾ റേറ്റ് ചെയ്യുകയും ഫീഡ്ബാക്ക് നൽകുകയും ചെയ്യുക."
        }
      ]
    }
  };

  const currentText = texts[language];

  // Auto-advance steps
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % currentText.steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, currentText.steps.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 dark:from-green-900 dark:via-blue-900 dark:to-green-800 relative overflow-hidden">
      {/* Background Wave Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,85.3C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="currentColor" className="text-green-200 dark:text-green-700"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-200 mb-4">
            {currentText.title}
          </h2>
          <p className="text-xl text-green-600 dark:text-green-300 max-w-3xl mx-auto">
            {currentText.subtitle}
          </p>
        </div>

        {/* Auto-play Controls */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              autoPlay 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-white text-green-500 border-2 border-green-500'
            }`}
          >
            {autoPlay 
              ? (language === 'en' ? '⏸ Pause Auto Demo' : '⏸ ഓട്ടോ ഡെമോ താൽക്കാലികമായി നിർത്തുക')
              : (language === 'en' ? '▶ Play Auto Demo' : '▶ ഓട്ടോ ഡെമോ പ്ലേ ചെയ്യുക')
            }
          </button>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:flex justify-between items-center mb-12 relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-green-200 dark:bg-green-700 rounded-full transform -translate-y-1/2">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${((activeStep + 1) / currentText.steps.length) * 100}%` }}
              ></div>
            </div>

            {/* Step Indicators */}
            {currentText.steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveStep(index);
                    setAutoPlay(false);
                  }}
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 transform ${
                    isActive 
                      ? 'bg-green-500 text-white scale-125 shadow-xl' 
                      : isCompleted
                        ? 'bg-blue-500 text-white scale-110'
                        : 'bg-white text-green-500 hover:bg-green-50 scale-100 shadow-lg'
                  } border-4 border-white`}
                >
                  <Icon className="w-8 h-8" />
                  {isActive && (
                    <div className="absolute -inset-2 bg-green-500/30 rounded-full animate-ping"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Steps Selector */}
          <div className="lg:hidden mb-8">
            <div className="flex justify-center space-x-2 mb-4">
              {currentText.steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveStep(index);
                    setAutoPlay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeStep ? 'bg-green-500' : 'bg-green-200 dark:bg-green-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="bg-white dark:bg-green-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    {React.createElement(currentText.steps[activeStep].icon, { 
                      className: "w-6 h-6 text-white" 
                    })}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">
                      {language === 'en' ? 'Step' : 'ഘട്ടം'} {activeStep + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">
                      {currentText.steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-green-600 dark:text-green-300 mb-6 leading-relaxed">
                  {currentText.steps[activeStep].description}
                </p>

                <p className="text-green-700 dark:text-green-400 leading-relaxed">
                  {currentText.steps[activeStep].details}
                </p>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8">
                  <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="px-4 py-2 text-green-600 dark:text-green-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-100 dark:hover:bg-green-700 rounded-lg transition-colors"
                  >
                    ← {language === 'en' ? 'Previous' : 'മുമ്പത്തേത്'}
                  </button>

                  <div className="text-sm text-green-500 font-medium">
                    {activeStep + 1} / {currentText.steps.length}
                  </div>

                  <button
                    onClick={() => setActiveStep(Math.min(currentText.steps.length - 1, activeStep + 1))}
                    disabled={activeStep === currentText.steps.length - 1}
                    className="px-4 py-2 text-green-600 dark:text-green-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-100 dark:hover:bg-green-700 rounded-lg transition-colors flex items-center"
                  >
                    {language === 'en' ? 'Next' : 'അടുത്തത്'} <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>

              {/* Visual Side */}
              <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-700 dark:to-blue-800 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  {activeStep === 0 && (
                    <div className="animate-pulse">
                      <div className="w-32 h-32 bg-green-200 dark:bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Mic className="w-16 h-16 text-green-600 dark:text-green-300 animate-bounce" />
                      </div>
                      <p className="text-green-700 dark:text-green-300 font-semibold">
                        {language === 'en' ? '"My coconut leaves are drying..."' : '"എന്റെ തെങ്ങിന്റെ ഇലകൾ വരണ്ടുപോകുന്നു..."'}
                      </p>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="relative">
                      <div className="w-32 h-32 bg-blue-200 dark:bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Brain className="w-16 h-16 text-blue-600 dark:text-blue-300 animate-spin" style={{animationDuration: '3s'}} />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-40 h-40 border-2 border-dashed border-blue-400 rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-blue-700 dark:text-blue-300 font-semibold">
                        {language === 'en' ? 'Processing with Kerala data...' : 'കേരള ഡാറ്റ ഉപയോഗിച്ച് പ്രോസസ്സിംഗ്...'}
                      </p>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div>
                      <div className="w-32 h-32 bg-yellow-200 dark:bg-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce">
                        <MessageCircle className="w-16 h-16 text-yellow-600 dark:text-yellow-300" />
                      </div>
                      <div className="bg-white dark:bg-green-700 rounded-lg p-4 shadow-lg max-w-xs mx-auto">
                        <p className="text-sm text-green-800 dark:text-green-200">
                          {language === 'en' 
                            ? '🌱 Apply Mancozeb 2g/L\n💧 Increase watering\n📍 Based on Thrissur weather'
                            : '🌱 മാൻകോസെബ് 2g/L പ്രയോഗിക്കുക\n💧 നനയ്ക്കുന്നത് കൂട്ടുക\n📍 തൃശ്ശൂർ കാലാവസ്ഥ അടിസ്ഥാനമാക്കി'
                          }
                        </p>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div>
                      <div className="w-32 h-32 bg-orange-200 dark:bg-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Phone className="w-16 h-16 text-orange-600 dark:text-orange-300 animate-pulse" />
                      </div>
                      <div className="bg-orange-100 dark:bg-orange-900 rounded-lg p-4 shadow-lg max-w-xs mx-auto">
                        <p className="text-sm text-orange-800 dark:text-orange-200 font-semibold">
                          {language === 'en' ? '📞 Connecting to expert...' : '📞 വിദഗ്ധനുമായി ബന്ധപ്പെടുന്നു...'}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeStep === 4 && (
                    <div>
                      <div className="w-32 h-32 bg-purple-200 dark:bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <RotateCcw className="w-16 h-16 text-purple-600 dark:text-purple-300 animate-spin" />
                      </div>
                      <div className="flex justify-center space-x-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-2xl text-yellow-400 animate-pulse" style={{animationDelay: `${star * 0.2}s`}}>
                            ⭐
                          </span>
                        ))}
                      </div>
                      <p className="text-purple-700 dark:text-purple-300 font-semibold text-sm">
                        {language === 'en' ? 'Your feedback improves AI' : 'നിങ്ങളുടെ ഫീഡ്ബാക്ക് AI മെച്ചപ്പെടുത്തുന്നു'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white dark:bg-green-800 rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-500 mb-2">
              <span className="counter">95%</span>
            </div>
            <p className="text-green-700 dark:text-green-300 font-semibold">
              {language === 'en' ? 'Accuracy Rate' : 'കൃത്യതാ നിരക്ക്'}
            </p>
          </div>
          
          <div className="text-center bg-white dark:bg-green-800 rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-500 mb-2">
              <span className="counter">&lt;30</span><span className="text-lg">s</span>
            </div>
            <p className="text-green-700 dark:text-green-300 font-semibold">
              {language === 'en' ? 'Response Time' : 'പ്രതികരണ സമയം'}
            </p>
          </div>
          
          <div className="text-center bg-white dark:bg-green-800 rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-yellow-500 mb-2">
              <span className="counter">24/7</span>
            </div>
            <p className="text-green-700 dark:text-green-300 font-semibold">
              {language === 'en' ? 'Availability' : 'ലഭ്യത'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;