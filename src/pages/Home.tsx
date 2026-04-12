import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight, Fingerprint, FileText, FileEdit, Zap, BadgeCheck, Banknote, MapPin, ChevronRight, Sparkles, ImageIcon, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { tools } from './ToolsPage';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const featuredTools = tools.filter(t => t.popular).slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              {t('hero.badge')}
            </span>
            <h1 className="font-sans font-extrabold text-5xl lg:text-7xl text-slate-900 leading-tight tracking-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:scale-105 transition-transform active:scale-95" href="tel:+916350489219" target="_blank" rel="noopener noreferrer">
                <Phone size={20} />
                {t('nav.callUs')}
              </a>
              <a className="inline-flex items-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-emerald-200 hover:scale-105 transition-transform active:scale-95" href="https://wa.me/916350489219" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                {t('hero.whatsapp')}
              </a>
              <a 
                href="/services"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold border border-indigo-100 hover:bg-slate-50 transition-colors active:scale-95"
              >
                {t('hero.cta')}
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <img 
              alt="E-Mitra Center" 
              className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl border-8 border-white" 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services-section" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">{t('home.servicesBadge')}</span>
              <h2 className="font-sans font-bold text-4xl text-slate-900 mt-2">{t('home.servicesTitle')}</h2>
            </div>
            <a 
              href="/services"
              className="text-indigo-600 font-bold flex items-center gap-1 hover:gap-2 transition-all"
            >
              {t('home.viewAll')} <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="w-14 h-14 bg-indigo-50 flex items-center justify-center rounded-xl text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Fingerprint size={32} />
              </div>
              <h3 className="font-sans font-bold text-xl mb-3">Aadhaar Services (आधार)</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {t('home.aadhaarDesc')}
              </p>
              <a 
                href="/services#aadhaar"
                className="text-indigo-600 font-semibold flex items-center gap-1"
              >
                View More <ChevronRight size={16} />
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="w-14 h-14 bg-indigo-50 flex items-center justify-center rounded-xl text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <FileText size={32} />
              </div>
              <h3 className="font-sans font-bold text-xl mb-3">PAN & Tax (पैन कार्ड)</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {t('home.panDesc')}
              </p>
              <a 
                href="/services#pan"
                className="text-indigo-600 font-semibold flex items-center gap-1"
              >
                View More <ChevronRight size={16} />
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="w-14 h-14 bg-indigo-50 flex items-center justify-center rounded-xl text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <FileEdit size={32} />
              </div>
              <h3 className="font-sans font-bold text-xl mb-3">Exam Forms (सरकारी फॉर्म)</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {t('home.examDesc')}
              </p>
              <a 
                href="/services#exams"
                className="text-indigo-600 font-semibold flex items-center gap-1"
              >
                View More <ChevronRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Government Schemes Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-4xl text-slate-900">{t('home.schemesTitle')}</h2>
            <p className="text-slate-500 mt-4">{t('home.schemesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-indigo-600 text-white flex items-center justify-center rounded-xl mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">PM Surya Ghar</h3>
              <p className="text-slate-600 text-sm mb-6">{t('home.suryaDesc')}</p>
              <a href="/services#surya-ghar" className="text-indigo-600 font-bold text-sm flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </a>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-indigo-600 text-white flex items-center justify-center rounded-xl mb-6">
                <BadgeCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Kusum Yojana</h3>
              <p className="text-slate-600 text-sm mb-6">{t('home.kusumDesc')}</p>
              <a href="/services#kusum-yojana" className="text-indigo-600 font-bold text-sm flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </a>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-indigo-600 text-white flex items-center justify-center rounded-xl mb-6">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Food Security (NFSA)</h3>
              <p className="text-slate-600 text-sm mb-6">{t('home.nfsaDesc')}</p>
              <a href="/forms" className="text-indigo-600 font-bold text-sm flex items-center gap-2">
                Download Form <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Free Online Tools</span>
              <h2 className="font-sans font-bold text-4xl text-slate-900 mt-2">Popular Digital Tools</h2>
            </div>
            <a 
              href="/tools"
              className="text-indigo-600 font-bold flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All 300+ Tools <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTools.map((tool) => (
              <motion.div 
                key={tool.id}
                whileHover={{ y: -5 }}
                className="group bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
              >
                <div className="w-14 h-14 bg-indigo-50 flex items-center justify-center rounded-2xl text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <tool.icon size={32} />
                </div>
                <h3 className="font-sans font-bold text-xl mb-3 group-hover:text-indigo-600 transition-colors">{tool.name}</h3>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed flex-grow">
                  {tool.description}
                </p>
                <a 
                  href={`/tools/${tool.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98]"
                >
                  Use Tool <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-4xl text-slate-900">{t('home.whyChooseTitle')}</h2>
            <p className="text-slate-500 mt-4">{t('home.whyChooseSubtitle')}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 text-indigo-600 mb-6">
                <Zap size={40} />
              </div>
              <h4 className="font-bold text-lg mb-2">{t('home.features.0.title')}</h4>
              <p className="text-sm text-slate-500">{t('home.features.0.desc')}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 text-indigo-600 mb-6">
                <BadgeCheck size={40} />
              </div>
              <h4 className="font-bold text-lg mb-2">{t('home.features.1.title')}</h4>
              <p className="text-sm text-slate-500">{t('home.features.1.desc')}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 text-indigo-600 mb-6">
                <Banknote size={40} />
              </div>
              <h4 className="font-bold text-lg mb-2">{t('home.affordableTitle')}</h4>
              <p className="text-sm text-slate-500">{t('home.affordableDesc')}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 text-indigo-600 mb-6">
                <MapPin size={40} />
              </div>
              <h4 className="font-bold text-lg mb-2">{t('home.localSupportTitle')}</h4>
              <p className="text-sm text-slate-500">{t('home.localSupportDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-4xl text-slate-900">{t('home.faqTitle')}</h2>
            <p className="text-slate-500 mt-4">{t('home.faqSubtitle')}</p>
          </div>
          <div className="space-y-4">
            {(t('home.faqs') as any[]).map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 list-none">
                  {faq.q}
                  <ChevronRight className="group-open:rotate-90 transition-transform" size={20} />
                </summary>
                <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Keyword Cloud Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-2xl text-slate-800 mb-4">Popular Tools & Searches</h2>
            <p className="text-slate-500 text-sm">Quickly access our most searched digital tools and government services.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Merge PDF Online", "Compress PDF Free", "Split PDF Pages", "Rotate PDF Permanently", "PDF to Word Converter", "Word to PDF Free", "PDF to JPG High Quality", "JPG to PDF Combined", "PDF to Text OCR", "Edit PDF Online",
              "Resize Image Pixels", "Compress Image No Quality Loss", "Convert Image Format", "Image to PDF Online", "Extract Text from Image", "Online OCR Tool", "Image Filters & Effects", "Crop Image Online", "Background Remover", "Image to Base64 String",
              "Word Counter Online", "Case Converter Tool", "Lorem Ipsum Generator", "Text to Speech AI", "Remove Duplicate Lines", "Reverse Text Online", "Binary to Text Converter", "JSON Formatter & Validator", "SQL Formatter Online", "Extract Emails from Text", "Extract URLs from Text",
              "MD5 Hash Generator", "SHA256 Hash Tool", "Base64 Encoder Online", "Base64 Decoder Free", "JSON to YAML Converter", "YAML to JSON Online", "UUID Generator Tool", "Unix Timestamp Converter", "HTML Formatter & Minifier", "CSS Minifier Online", "JS Minifier Free",
              "Unit Converter Online", "JSON to CSV Converter", "CSV to JSON Online", "XML to JSON Converter", "JSON to XML Free", "Base64 to Image Decoder",
              "AI Text Generator", "Organize PDF Online", "Add Watermark to PDF", "Add Page Numbers to PDF", "AI Summarizer Tool", "Gemini AI Online",
              "YouTube Thumbnail Downloader", "WhatsApp Link Generator", "Instagram Profile Link",
              "Password Strength Meter", "Credit Card Validator", "IBAN Validator Online",
              "Aadhaar Card Download", "PAN Card Apply Online", "Ration Card Status", "Voter ID Card Search", "Birth Certificate Online", "Death Certificate Download", "Income Certificate Form", "Caste Certificate Rajasthan", "Domicile Certificate Apply", "Jan Aadhaar Card Status", "SSO ID Rajasthan Login", "PM Surya Ghar Yojana Apply", "Kusum Yojana Registration", "NFSA Form Download",
              "Free Online Tools", "Digital India Services", "E-Mitra Bhilwara", "Government Forms PDF", "Online Document Editor", "Fast File Converter", "Secure Data Tools", "Privacy Friendly Tools", "No Registration Tools", "Unlimited Free Tools"
            ].map((keyword, i) => (
              <a 
                key={i} 
                href={`/tools?q=${keyword.toLowerCase().replace(/\s+/g, '+')}`}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-indigo-400 hover:text-indigo-600 hover:shadow-sm transition-all"
              >
                {keyword}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
