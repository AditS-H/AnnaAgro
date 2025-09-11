import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, TrendingUp, Users, Clock } from 'lucide-react';

const Impact = ({ language, isDarkMode }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({
    queries: 0,
    farmers: 0,
    accuracy: 0,
    timeSaved: 0
  });

  const texts = {
    en: {
      title: "Empowering Farmers, One Query at a Time",
      subtitle: "Real impact from farmers across Kerala who are transforming their agricultural practices with AI assistance",
      testimonials: [
        {
          name: "Raju Krishnan",
          location: "Palakkad",
          crop: "Banana",
          quote: "My banana crop was saved! The AI identified the leaf spot disease in minutes and gave me the exact treatment. I saved ₹15,000 that season.",
          rating: 5,
          avatar: "👨‍🌾",
          impact: "Saved crop worth ₹15,000"
        },
        {
          name: "Suma Nair",
          location: "Thrissur",
          crop: "Rice",
          quote: "Speaking in Malayalam made all the difference. The AI understood my rice problem and connected me with the local agricultural officer immediately.",
          rating: 5,
          avatar: "👩‍🌾",
          impact: "Prevented 2-acre crop loss"
        },
        {
          name: "Thomas Joseph",
          location: "Wayanad",
          crop: "Coffee",
          quote: "The weather-based advice helped me time my coffee processing perfectly. My yield increased by 30% this season using AI recommendations.",
          rating: 5,
          avatar: "👨‍🌾",
          impact: "30% yield increase"
        }
      ],
      stats: [
        { label: "Queries Handled", value: 10000, icon: TrendingUp, suffix: "+" },
        { label: "Active Farmers", value: 5000, icon: Users, suffix: "+" },
        { label: "Accuracy Rate", value: 95, icon: Star, suffix: "%" },
        { label: "Hours Saved", value: 25000, icon: Clock, suffix: "+" }
      ]
    },
    ml: {
      title: "കർഷകരെ ശാക്തീകരിക്കുന്നു, ഓരോ ചോദ്യത്തിലൂടെയും",
      subtitle: "AI സഹായത്തോടെ തങ്ങളുടെ കാർഷിക രീതികൾ മാറ്റിമറിക്കുന്ന കേരളത്തിലെ കർഷകരിൽ നിന്നുള്ള യഥാർത്ഥ സ്വാധീനം",
      testimonials: [
        {
          name: "രാജു കൃഷ്ണൻ",
          location: "പാലക്കാട്",
          crop: "വാഴ",
          quote: "എന്റെ വാഴവിള രക്ഷപ്പെട്ടു! AI മിനിറ്റുകൾക്കുള്ളിൽ ഇല പുള്ളി രോഗം കണ്ടെത്തി കൃത്യമായ ചികിത്സ നൽകി. ആ സീസണിൽ ₹15,000 ലാഭിച്ചു.",
          rating: 5,
          avatar: "👨‍🌾",
          impact: "₹15,000 വിലയുള്ള വിള രക്ഷിച്ചു"
        },
        {
          name: "സുമ നായർ",
          location: "തൃശ്ശൂർ",
          crop: "നെല്ല്",
          quote: "മലയാളത്തിൽ സംസാരിക്കാൻ കഴിഞ്ഞത് വലിയ വ്യത്യാസമുണ്ടാക്കി. AI എന്റെ നെൽകൃഷി പ്രശ്നം മനസ്സിലാക്കി പ്രാദേശിക കൃഷി ഓഫീസറുമായി ഉടൻ ബന്ധിপ്പിച്ചു.",
          rating: 5,
          avatar: "👩‍🌾",
          impact: "2 ഏക്കർ വിള നഷ്ടം തടയാൻ കഴിഞ്ഞു"
        },
        {
          name: "തോമസ് ജോസഫ്",
          location: "വയനാട്",
          crop: "കാപ്പി",
          quote: "കാലാവസ്ഥാധിഷ്ഠിത ഉപദേശം എന്റെ കാപ്പി പ്രോസസ്സിംഗ് സമയം കൃത്യമായി നിശ്ചയിക്കാൻ സഹായിച്ചു. AI ശുപാർശകൾ ഉപയോഗിച്ച് ഈ സീസണിൽ വിളവ് 30% വർദ്ധിച്ചു.",
          rating: 5,
          avatar: "👨‍🌾",
          impact: "30% വിളവ് വർദ്ധനവ്"
        }
      ],
      stats: [
        { label: "കൈകാര്യം ചെയ്ത ചോദ്യങ്ങൾ", value: 10000, icon: TrendingUp, suffix: "+" },
        { label: "സജീവ കർഷകർ", value: 5000, icon: Users, suffix: "+" },
        { label: "കൃത്യതാ നിരക്ക്", value: 95, icon: Star, suffix: "%" },
        { label: "ലാഭിച്ച സമയം (മണിക്കൂർ)", value: 25000, icon: Clock, suffix: "+" }
      ]
    }
  };

  const currentText = texts[language];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        (prev + 1) % currentText.testimonials.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentText.testimonials.length]);

  // Animate counters
  useEffect(() => {
    const targetValues = [10000, 5000, 95, 25000];
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        queries: Math.floor(targetValues[0] * progress),
        farmers: Math.floor(targetValues[1] * progress),
        accuracy: Math.floor(targetValues[2] * progress),
        timeSaved: Math.floor(targetValues[3] * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        // Set final values to ensure accuracy
        setCounters({
          queries: targetValues[0],
          farmers: targetValues[1],
          accuracy: targetValues[2],
          timeSaved: targetValues[3]
        });
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      (prev + 1) % currentText.testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? currentText.testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonialData = currentText.testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50 dark:from-green-800 dark:to-green-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-500 rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-blue-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-200 mb-6">
            {currentText.title}
          </h2>
          <p className="text-xl text-green-600 dark:text-green-300 max-w-4xl mx-auto leading-relaxed">
            {currentText.subtitle}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {currentText.stats.map((stat, index) => {
            const Icon = stat.icon;
            const counterKeys = ['queries', 'farmers', 'accuracy', 'timeSaved'];
            const value = counters[counterKeys[index]];
            
            return (
              <div key={index} className="bg-white dark:bg-green-800 rounded-2xl p-6 shadow-xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-200 mb-2">
                  {value.toLocaleString()}{stat.suffix}
                </div>
                <p className="text-green-600 dark:text-green-300 font-semibold">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-green-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative">
              {/* Testimonial Content */}
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-700 rounded-full flex items-center justify-center text-2xl">
                      {currentTestimonialData.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200">
                        {currentTestimonialData.name}
                      </h3>
                      <p className="text-green-600 dark:text-green-400">
                        {currentTestimonialData.location} • {currentTestimonialData.crop}
                      </p>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[...Array(currentTestimonialData.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-green-700 dark:text-green-300 leading-relaxed mb-6 italic">
                  "{currentTestimonialData.quote}"
                </blockquote>

                {/* Impact Badge */}
                <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold text-sm">
                  💡 {currentTestimonialData.impact}
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white dark:bg-green-700 rounded-full shadow-lg flex items-center justify-center hover:bg-green-50 dark:hover:bg-green-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-green-600 dark:text-green-300" />
                </button>
              </div>
              
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white dark:bg-green-700 rounded-full shadow-lg flex items-center justify-center hover:bg-green-50 dark:hover:bg-green-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-green-600 dark:text-green-300" />
                </button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="bg-green-50 dark:bg-green-900 px-8 py-4">
              <div className="flex justify-center space-x-2">
                {currentText.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-green-500 scale-125' 
                        : 'bg-green-300 dark:bg-green-600 hover:bg-green-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 text-white text-center">
            <div className="text-4xl mb-4">🌾</div>
            <h3 className="text-xl font-bold mb-2">
              {language === 'en' ? 'Instant Access' : 'തൽക്ഷണ പ്രവേശനം'}
            </h3>
            <p className="text-green-100">
              {language === 'en' ? 'Saves 24+ hours per query' : 'ഓരോ ചോദ്യത്തിലും 24+ മണിക്കൂർ ലാഭിക്കുന്നു'}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 text-white text-center">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold mb-2">
              {language === 'en' ? 'Scales Support' : 'സപ്പോർട്ട് വിപുലീകരിക്കുന്നു'}
            </h3>
            <p className="text-blue-100">
              {language === 'en' ? 'Frees Agri Officers for fieldwork' : 'കൃഷി ഓഫീസർമാർക്ക് ഫീൽഡ് വർക്കിനായി സമയം നൽകുന്നു'}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-2">
              {language === 'en' ? 'Bridges Gaps' : 'വിടവുകൾ നികത്തുന്നു'}
            </h3>
            <p className="text-yellow-100">
              {language === 'en' ? 'In Malayalam, for all literacy levels' : 'മലയാളത്തിൽ, എല്ലാ സാക്ഷരതാ തലങ്ങൾക്കും'}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="2" fill="white"/><circle cx="75" cy="75" r="2" fill="white"/><circle cx="25" cy="75" r="1" fill="white"/><circle cx="75" cy="25" r="1" fill="white"/></pattern></defs><rect width="100" height="100" fill="url(#grain)"/></svg>')}")`,
                backgroundSize: '100px 100px'
              }}></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'en' ? 'Join the Agricultural Revolution' : 'കാർഷിക വിപ്ലവത്തിൽ ചേരുക'}
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Be part of the change. Transform your farming with AI-powered insights and join thousands of successful farmers.'
                  : 'മാറ്റത്തിന്റെ ഭാഗമാകുക. AI-പവർഡ് ഉൾക്കാഴ്ചകൾ ഉപയോഗിച്ച് നിങ്ങളുടെ കൃഷി മാറ്റുകയും ആയിരക്കണക്കിന് വിജയകരമായ കർഷകരോട് ചേരുകയും ചെയ്യുക.'
                }
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                {language === 'en' ? 'Get Started Today' : 'ഇന്ന് തുടങ്ങുക'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;