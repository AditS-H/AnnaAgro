import React, { useState } from 'react';
import { Mail, Phone, Download, Send, Check, MapPin, Calendar, Users, Star, ArrowRight, Sparkles } from 'lucide-react';

const CallToAction = ({ language, isDarkMode }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const texts = {
    en: {
      title: "Ready to Transform Farming?",
      subtitle: "Join the digital agriculture revolution. Get instant AI-powered farming advice in Malayalam.",
      betaTitle: "Join Beta Program",
      betaDesc: "Be among the first farmers to experience AI-powered agricultural assistance",
      emailPlaceholder: "Enter your email",
      phonePlaceholder: "Enter your phone number",
      locationPlaceholder: "Your district (e.g., Thrissur)",
      joinBeta: "Join Beta Program",
      contactTeam: "Contact SIH Team",
      downloadConcept: "Download App Concept",
      submitting: "Submitting...",
      thankYou: "Thank you for joining! We'll contact you soon.",
      features: [
        "24/7 AI agricultural support",
        "Voice queries in Malayalam",
        "Expert escalation system",
        "Personalized crop advice",
        "Weather integration",
        "Pest identification"
      ],
      stats: [
        { number: "5000+", label: "Farmers Ready" },
        { number: "15", label: "Districts Covered" },
        { number: "50+", label: "Crop Types Supported" }
      ],
      testimonial: {
        text: "This AI system helped me save my entire coconut plantation. The Malayalam support made it so easy to ask questions!",
        author: "Raju Kumar",
        location: "Palakkad District"
      },
      whyJoin: "Why Join Our Beta?",
      benefits: [
        "Early access to cutting-edge AI technology",
        "Direct influence on feature development",
        "Free consultation with agricultural experts",
        "Priority support and feedback incorporation"
      ]
    },
    ml: {
      title: "കൃഷി രൂപാന്തരപ്പെടുത്താൻ തയ്യാറാണോ?",
      subtitle: "ഡിജിറ്റൽ കാർഷിക വിപ്ലവത്തിൽ ചേരുക. മലയാളത്തിൽ തൽക്ഷണ AI-പവർഡ് കാർഷിക ഉപദേശം നേടുക.",
      betaTitle: "ബീറ്റാ പ്രോഗ്രാമിൽ ചേരുക",
      betaDesc: "AI-പവർഡ് കാർഷിക സഹായം അനുഭവിക്കുന്ന ആദ്യ കർഷകരിൽ ഒരാളാകുക",
      emailPlaceholder: "നിങ്ങളുടെ ഇമെയിൽ നൽകുക",
      phonePlaceholder: "നിങ്ങളുടെ ഫോൺ നമ്പർ നൽകുക",
      locationPlaceholder: "നിങ്ങളുടെ ജില്ല (ഉദാ: തൃശ്ശൂർ)",
      joinBeta: "ബീറ്റാ പ്രോഗ്രാമിൽ ചേരുക",
      contactTeam: "SIH ടീമുമായി ബന്ധപ്പെടുക",
      downloadConcept: "ആപ്പ് കൺസെപ്റ്റ് ഡൗൺലോഡ് ചെയ്യുക",
      submitting: "സമർപ്പിക്കുന്നു...",
      thankYou: "ചേർന്നതിന് നന്ദി! ഞങ്ങൾ ഉടൻ നിങ്ങളെ ബന്ധപ്പെടും.",
      features: [
        "24/7 AI കാർഷിക സഹായം",
        "മലയാളത്തിൽ വോയ്‌സ് ക്വയറികൾ",
        "വിദഗ്ധ എസ്കലേഷൻ സിസ്റ്റം",
        "വ്യക്തിഗതമാക്കിയ വിള ഉപദേശം",
        "കാലാവസ്ഥാ സംയോജനം",
        "കീട തിരിച്ചറിയൽ"
      ],
      stats: [
        { number: "5000+", label: "കർഷകർ തയ്യാർ" },
        { number: "15", label: "ജില്ലകൾ കവർ ചെയ്തു" },
        { number: "50+", label: "വിള തരങ്ങൾ പിന്തുണയ്ക്കുന്നു" }
      ],
      testimonial: {
        text: "ഈ AI സിസ്റ്റം എന്റെ മുഴുവൻ തെങ്ങിൻ തോട്ടവും രക്ഷിക്കാൻ സഹായിച്ചു. മലയാള പിന്തുണ ചോദ്യങ്ങൾ ചോദിക്കാൻ വളരെ എളുപ്പമാക്കി!",
        author: "രാജു കുമാർ",
        location: "പാലക്കാട് ജില്ല"
      },
      whyJoin: "ഞങ്ങളുടെ ബീറ്റായിൽ എന്തിന് ചേരണം?",
      benefits: [
        "അത്യാധുനിക AI സാങ്കേതികവിദ്യയിലേക്കുള്ള നേരത്തെയുള്ള പ്രവേശനം",
        "ഫീച്ചർ വികസനത്തിൽ നേരിട്ടുള്ള സ്വാധീനം",
        "കാർഷിക വിദഗ്ധരുമായി സൗജന്യ കൺസൾട്ടേഷൻ",
        "മുൻഗണനാ പിന്തുണയും ഫീഡ്ബാക്ക് ഉൾപ്പെടുത്തലും"
      ]
    }
  };

  const currentText = texts[language];

  const handleSubmit = async () => {
    if (!email || !phone || !location) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setPhone('');
      setLocation('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-green-700 dark:from-green-800 dark:via-blue-800 dark:to-green-900 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-green-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-16 h-16 bg-blue-300 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {currentText.title}
          </h2>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
            {currentText.subtitle}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {currentText.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                <div className="text-green-100 font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Information */}
          <div className="space-y-8">
            {/* Why Join Section */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-yellow-300" />
                {currentText.whyJoin}
              </h3>
              <div className="space-y-4">
                {currentText.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-green-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-green-100 italic mb-4 text-lg">
                "{currentText.testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-800 font-bold">
                    {currentText.testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {currentText.testimonial.author}
                  </div>
                  <div className="text-green-200 text-sm flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {currentText.testimonial.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                {language === 'en' ? 'What You Get:' : 'നിങ്ങൾക്ക് ലഭിക്കുന്നത്:'}
              </h3>
              <div className="grid gap-3">
                {currentText.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    <span className="text-green-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Signup Form */}
          <div className="bg-white dark:bg-green-800 rounded-3xl p-8 shadow-2xl">
            {!isSubmitted ? (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-green-800 dark:text-green-200 mb-4">
                    {currentText.betaTitle}
                  </h3>
                  <p className="text-green-600 dark:text-green-300">
                    {currentText.betaDesc}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={currentText.emailPlaceholder}
                        className="w-full pl-12 pr-4 py-4 border-2 border-green-200 dark:border-green-600 rounded-xl focus:border-green-500 focus:outline-none bg-white dark:bg-green-700 text-green-800 dark:text-green-200 placeholder-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={currentText.phonePlaceholder}
                        className="w-full pl-12 pr-4 py-4 border-2 border-green-200 dark:border-green-600 rounded-xl focus:border-green-500 focus:outline-none bg-white dark:bg-green-700 text-green-800 dark:text-green-200 placeholder-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder={currentText.locationPlaceholder}
                        className="w-full pl-12 pr-4 py-4 border-2 border-green-200 dark:border-green-600 rounded-xl focus:border-green-500 focus:outline-none bg-white dark:bg-green-700 text-green-800 dark:text-green-200 placeholder-green-500"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isLoading || !email || !phone || !location}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>{currentText.submitting}</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>{currentText.joinBeta}</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </button>
                </div>

                {/* Alternative Actions */}
                <div className="mt-8 pt-8 border-t border-green-200 dark:border-green-600">
                  <div className="grid gap-4">
                    <button className="w-full bg-white dark:bg-green-700 text-green-600 dark:text-green-200 py-3 px-6 rounded-xl font-semibold border-2 border-green-500 hover:bg-green-50 dark:hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <span>{currentText.contactTeam}</span>
                    </button>
                    
                    <button className="w-full bg-yellow-400 text-green-800 py-3 px-6 rounded-xl font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>{currentText.downloadConcept}</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
                  {language === 'en' ? 'Welcome to the Future!' : 'ഭാവിയിലേക്ക് സ്വാഗതം!'}
                </h3>
                <p className="text-green-600 dark:text-green-300 text-lg">
                  {currentText.thankYou}
                </p>
                <div className="mt-6 flex items-center justify-center text-green-500">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-semibold">
                    {language === 'en' ? 'Beta Program Member' : 'ബീറ്റാ പ്രോഗ്രാം അംഗം'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3 text-green-100">
            <Calendar className="w-5 h-5 mr-2" />
            <span className="font-semibold">
              {language === 'en' 
                ? 'Beta launching March 2025 • Limited spots available' 
                : 'ബീറ്റാ മാർച്ച് 2025 ൽ ലോഞ്ച് ചെയ്യുന്നു • പരിമിതമായ സ്ലോട്ടുകൾ ലഭ്യം'
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;