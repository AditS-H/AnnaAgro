import React, { useState } from 'react';
import { Mic, Camera, Brain, ArrowUp, MapPin, Star, Upload, Zap, CheckCircle, AlertCircle } from 'lucide-react';

const Features = ({ language, isDarkMode }) => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [uploadDemo, setUploadDemo] = useState(false);
  const [rating, setRating] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showEscalation, setShowEscalation] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');

  const texts = {
    en: {
      title: "The Farming Struggle We Solve",
      problems: [
        "Overburdened helplines and rare expert access",
        "Language barriers in diverse regions", 
        "No personalization for your crop, location, or season"
      ],
      featuresTitle: "How It Works – Farmer-First AI",
      waitingStat: "Farmers wait >24hrs for advice",
      languageStat: "Language barrier issues",
      personalizationStat: "Need personalized solutions",
      uploadText: "Upload crop photo",
      analyzingText: "AI is analyzing your image...",
      escalationText: "Connecting to local officer...",
      ratingText: "Rate this response",
      thankYou: "Thanks! System learned from this.",
      tryDemo: "Try Demo",
      features: [
        {
          icon: Mic,
          title: "Natural Language Queries",
          description: "Speak or type in Malayalam. E.g., 'Banana leaf spot pesticide?'",
          demo: "Try voice input",
          demoResponse: "Use Mancozeb spray - apply 2g/L water. Spray early morning or evening. Avoid during flowering stage."
        },
        {
          icon: Camera,
          title: "Multimodal Inputs", 
          description: "Upload crop photos or voice notes for analysis",
          demo: "Upload image",
          demoResponse: "Detected: Coconut leaf blight. Recommendation: Apply Bordeaux mixture (1%) + improve drainage around tree base."
        },
        {
          icon: Brain,
          title: "AI Knowledge Engine",
          description: "Powered by LLMs + local datasets (pests, weather, subsidies)",
          demo: "See AI response",
          demoResponse: "Based on Kerala Agricultural University data + current weather patterns in your region..."
        },
        {
          icon: MapPin,
          title: "Context Awareness",
          description: "Tailored to your location, crop history and season",
          demo: "Set location",
          demoResponse: "For Thrissur district, current monsoon season: Avoid chemical sprays. Use organic neem solution instead."
        },
        {
          icon: ArrowUp,
          title: "Escalation System",
          description: "Complex issues? We connect to your local Agri Officer",
          demo: "Try escalation",
          demoResponse: "Escalating to Thrissur Krishibhavan... Officer Ravi Kumar will call you within 2 hours."
        },
        {
          icon: Star,
          title: "Learning Loop",
          description: "Improves with your feedback and ratings",
          demo: "Rate response",
          demoResponse: "Thank you! Your feedback helps improve our AI for all farmers in Kerala."
        }
      ]
    },
    ml: {
      title: "ഞങ്ങൾ പരിഹരിക്കുന്ന കാർഷിക പ്രശ്നങ്ങൾ",
      problems: [
        "അമിതഭാരം ഉള്ള ഹെൽപ്പ്ലൈനുകളും വിദഗ്ധ പ്രവേശനവും",
        "വിവിധ പ്രദേശങ്ങളിലെ ഭാഷാ തടസ്സങ്ങൾ",
        "നിങ്ങളുടെ വിള, സ്ഥാനം, കാലാവസ്ഥ എന്നിവക്ക് വ്യക്തിഗതമാക്കാനുള്ള സൗകര്യമില്ല"
      ],
      featuresTitle: "എങ്ങനെ പ്രവർത്തിക്കുന്നു – കർഷക-കേന്ദ്രീകൃത AI",
      waitingStat: "കർഷകർ ഉപദേശത്തിനായി 24 മണിക്കൂറിലധികം കാത്തിരിക്കുന്നു",
      languageStat: "ഭാഷാ തടസ്സ പ്രശ്നങ്ങൾ",
      personalizationStat: "വ്യക്തിഗത പരിഹാരങ്ങൾ ആവശ്യം",
      uploadText: "വിള ചിത്രം അപ്ലോഡ് ചെയ്യുക",
      analyzingText: "AI നിങ്ങളുടെ ചിത്രം വിശകലനം ചെയ്യുന്നു...",
      escalationText: "പ്രാദേശിക ഓഫീസറുമായി ബന്ധപ്പെടുത്തുന്നു...",
      ratingText: "ഈ പ്രതികരണം റേറ്റ് ചെയ്യുക",
      thankYou: "നന്ദി! സിസ്റ്റം ഇതിൽ നിന്ന് പഠിച്ചു.",
      tryDemo: "ഡെമോ പരീക്ഷിക്കൂ",
      features: [
        {
          icon: Mic,
          title: "സ്വാഭാവിക ഭാഷാ ചോദ്യങ്ങൾ",
          description: "മലയാളത്തിൽ സംസാരിക്കുക അല്ലെങ്കിൽ ടൈപ്പ് ചെയ്യുക",
          demo: "വോയ്സ് ഇൻപുട്ട് പരീക്ഷിക്കൂ",
          demoResponse: "മാൻകോസെബ് സ്പ്രേ ഉപയോഗിക്കുക - 2g/L വെള്ളത്തിൽ കലർത്തി. രാവിലെ അല്ലെങ്കിൽ വൈകുന്നേരം സ്പ്രേ ചെയ്യുക."
        },
        {
          icon: Camera,
          title: "മൾട്ടിമോഡൽ ഇൻപുട്ടുകൾ",
          description: "വിള ചിത്രങ്ങളോ വോയ്സ് നോട്ടുകളോ അപ്ലോഡ് ചെയ്യുക",
          demo: "ചിത്രം അപ്ലോഡ് ചെയ്യുക",
          demoResponse: "കണ്ടെത്തി: തെങ്ങിൻ ഇല വാടൽ രോഗം. ശുപാർശ: ബോർഡോ മിശ്രിതം (1%) + മരത്തിന് ചുറ്റും നീർവാർച്ച മെച്ചപ്പെടുത്തുക."
        },
        {
          icon: Brain,
          title: "AI അറിവ് എഞ്ചിൻ",
          description: "LLM + പ്രാദേശിക ഡാറ്റാസെറ്റുകൾ ഉപയോഗിച്ച് പ്രവർത്തിക്കുന്നു",
          demo: "AI പ്രതികരണം കാണുക",
          demoResponse: "കേരള കാർഷിക സർവകലാശാലയുടെ ഡാറ്റയും നിങ്ങളുടെ പ്രദേശത്തെ നിലവിലെ കാലാവസ്ഥാ പാറ്റേണുകളും അടിസ്ഥാനമാക്കി..."
        },
        {
          icon: MapPin,
          title: "സന്ദർഭ ബോധം",
          description: "നിങ്ങളുടെ സ്ഥാനം, വിള ചരിത്രം, കാലാവസ്ഥ എന്നിവയ്ക്ക് അനുയോജ്യം",
          demo: "സ്ഥാനം സെറ്റ് ചെയ്യുക",
          demoResponse: "തൃശൂർ ജില്ലയ്ക്ക്, നിലവിലെ മൺസൂൺ കാലാവസ്ഥ: കെമിക്കൽ സ്പ്രേകൾ ഒഴിവാക്കുക. പകരം ഓർഗാനിക് വേപ്പ് ലായനി ഉപയോഗിക്കുക."
        },
        {
          icon: ArrowUp,
          title: "എസ്കലേഷൻ സിസ്റ്റം",
          description: "സങ്കീർണ്ണമായ പ്രശ്നങ്ങൾ? പ്രാദേശിക കൃഷി ഓഫീസറുമായി ബന്ധപ്പെടുത്തുന്നു",
          demo: "എസ്കലേഷൻ പരീക്ഷിക്കൂ",
          demoResponse: "തൃശൂർ കൃഷിഭവനിലേക്ക് എസ്കലേറ്റ് ചെയ്യുന്നു... ഓഫീസർ രവി കുമാർ 2 മണിക്കൂറിനുള്ളിൽ ഫോൺ ചെയ്യും."
        },
        {
          icon: Star,
          title: "പഠന ചക്രം",
          description: "നിങ്ങളുടെ ഫീഡ്ബാക്ക് കൊണ്ട് മെച്ചപ്പെടുന്നു",
          demo: "പ്രതികരണം റേറ്റ് ചെയ്യുക",
          demoResponse: "നന്ദി! നിങ്ങളുടെ ഫീഡ്ബാക്ക് കേരളത്തിലെ എല്ലാ കർഷകർക്കും ഞങ്ങളുടെ AI മെച്ചപ്പെടുത്താൻ സഹായിക്കുന്നു."
        }
      ]
    }
  };

  const currentText = texts[language];

  const handleFeatureDemo = async (index) => {
    if (activeFeature === index) {
      setActiveFeature(null);
      return;
    }

    setActiveFeature(index);
    
    if (index === 1) { // Upload demo
      setUploadDemo(true);
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisResult(currentText.features[index].demoResponse);
      }, 3000);
      setTimeout(() => {
        setUploadDemo(false);
        setAnalysisResult('');
      }, 8000);
    }
    
    if (index === 4) { // Escalation demo
      setShowEscalation(true);
      setTimeout(() => setShowEscalation(false), 4000);
    }
  };

  const handleRating = (stars) => {
    setRating(stars);
    setTimeout(() => setRating(0), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white dark:from-green-900 dark:to-green-800">
      <div className="container mx-auto px-4">
        
        {/* Problem Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-8">
              {currentText.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {currentText.problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-lg">
                      {['⏰', '🗣️', '🎯'][index]}
                    </span>
                  </div>
                  <p className="text-green-700 dark:text-green-300 text-lg leading-relaxed">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Animated Statistics */}
            <div className="bg-white dark:bg-green-800 rounded-2xl p-8 shadow-xl border border-green-200 dark:border-green-600">
              <div className="space-y-8">
                <div className="text-center transform hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-orange-500 mb-2 animate-pulse">80%</div>
                  <p className="text-green-600 dark:text-green-300 font-medium">
                    {currentText.waitingStat}
                  </p>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-blue-500 mb-2 animate-pulse" style={{animationDelay: '0.5s'}}>60%</div>
                  <p className="text-green-600 dark:text-green-300 font-medium">
                    {currentText.languageStat}
                  </p>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-green-500 mb-2 animate-pulse" style={{animationDelay: '1s'}}>90%</div>
                  <p className="text-green-600 dark:text-green-300 font-medium">
                    {currentText.personalizationStat}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-4">
            {currentText.featuresTitle}
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentText.features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index;
            
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-green-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
                  isActive ? 'border-green-500 ring-4 ring-green-200' : 'border-transparent hover:border-green-300'
                } transform hover:-translate-y-2`}
                onClick={() => handleFeatureDemo(index)}
              >
                <div className="text-center">
                  {/* Icon with background animation */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'bg-green-500 scale-110' : 'bg-green-100 dark:bg-green-700 group-hover:bg-green-200'
                  }`}>
                    <Icon className={`w-10 h-10 transition-colors ${
                      isActive ? 'text-white' : 'text-green-600 dark:text-green-300'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-green-600 dark:text-green-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <button className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-green-500 text-white shadow-lg' 
                      : 'bg-yellow-400 text-green-800 hover:bg-yellow-500 hover:shadow-md'
                  }`}>
                    {feature.demo}
                  </button>
                </div>

                {/* Demo Interactions */}
                {isActive && (
                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-900 rounded-xl border border-green-200 dark:border-green-600">
                    {/* Voice Input Demo */}
                    {index === 0 && (
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-700 dark:text-green-300">
                            {language === 'en' ? 'Listening...' : 'കേൾക്കുന്നു...'}
                          </span>
                        </div>
                        <div className="bg-white dark:bg-green-800 p-3 rounded-lg">
                          <p className="text-green-800 dark:text-green-200 text-sm">{feature.demoResponse}</p>
                        </div>
                      </div>
                    )}

                    {/* Upload Demo */}
                    {index === 1 && (
                      <div className="space-y-3">
                        {uploadDemo && !isAnalyzing && !analysisResult && (
                          <div className="border-2 border-dashed border-green-300 rounded-lg p-6 text-center">
                            <Upload className="w-8 h-8 mx-auto mb-2 text-green-500" />
                            <p className="text-sm text-green-600">{currentText.uploadText}</p>
                          </div>
                        )}
                        {isAnalyzing && (
                          <div className="flex items-center space-x-3">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-500"></div>
                            <span className="text-sm text-green-700 dark:text-green-300">{currentText.analyzingText}</span>
                          </div>
                        )}
                        {analysisResult && (
                          <div className="bg-white dark:bg-green-800 p-3 rounded-lg border border-green-300">
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                              <p className="text-green-800 dark:text-green-200 text-sm">{analysisResult}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* AI Response Demo */}
                    {(index === 2 || index === 3) && (
                      <div className="bg-white dark:bg-green-800 p-3 rounded-lg">
                        <p className="text-green-800 dark:text-green-200 text-sm">{feature.demoResponse}</p>
                      </div>
                    )}

                    {/* Escalation Demo */}
                    {index === 4 && (
                      <div className="space-y-3">
                        {showEscalation && (
                          <div className="flex items-center space-x-3">
                            <div className="animate-pulse">
                              <AlertCircle className="w-6 h-6 text-orange-500" />
                            </div>
                            <span className="text-sm text-green-700 dark:text-green-300">{currentText.escalationText}</span>
                          </div>
                        )}
                        <div className="bg-white dark:bg-green-800 p-3 rounded-lg">
                          <p className="text-green-800 dark:text-green-200 text-sm">{feature.demoResponse}</p>
                        </div>
                      </div>
                    )}

                    {/* Rating Demo */}
                    {index === 5 && (
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-green-800 p-3 rounded-lg mb-3">
                          <p className="text-green-800 dark:text-green-200 text-sm">{feature.demoResponse}</p>
                        </div>
                        <div>
                          <p className="text-sm text-green-700 dark:text-green-300 mb-2">{currentText.ratingText}</p>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                onClick={() => handleRating(star)}
                                className="transition-colors"
                              >
                                <Star 
                                  className={`w-6 h-6 ${
                                    star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                  }`} 
                                />
                              </button>
                            ))}
                          </div>
                          {rating > 0 && (
                            <p className="text-sm text-green-600 dark:text-green-400 mt-2 animate-fade-in">
                              {currentText.thankYou}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Floating badge for active state */}
                {isActive && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Try Demo CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'en' ? 'Ready to revolutionize farming?' : 'കാർഷികത്തിൽ വിപ്ലവം വരുത്താൻ തയ്യാറോ?'}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {language === 'en' 
                ? 'Join thousands of farmers already using our AI assistant'
                : 'ഞങ്ങളുടെ AI അസിസ്റ്റന്റ് ഇതിനകം ഉപയോഗിക്കുന്ന ആയിരക്കണക്കിന് കർഷകരോട് ചേരുക'
              }
            </p>
            <button className="px-8 py-4 bg-yellow-400 text-green-800 font-bold rounded-xl hover:bg-yellow-500 transition-colors transform hover:scale-105 shadow-lg">
              {currentText.tryDemo}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Features;