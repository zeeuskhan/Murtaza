import React from 'react';
import { Globe, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        {/* Brand */}
        <div className="space-y-6">
          <a href="/" className="flex items-center gap-2 group perspective-container">
            <div className="p-2 bg-indigo-600 rounded-lg text-white group-hover:rotate-12 transition-transform shadow-3d">
              <Globe size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tight leading-none group-hover:text-indigo-400 transition-colors">e-Mitra</span>
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Bhilwara</span>
            </div>
          </a>
          <p className="text-slate-400 text-sm leading-relaxed">
            {t('footer.description')}
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/916350489219" className="p-3 bg-slate-800 rounded-xl text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all shadow-3d hover:shadow-3d-hover active:scale-95">
              <MessageCircle size={20} />
            </a>
            <a href="tel:+916350489219" className="p-3 bg-slate-800 rounded-xl text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all shadow-3d hover:shadow-3d-hover active:scale-95">
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-indigo-400">{t('footer.quickLinks')}</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.home')}</Link></li>
            <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.services')}</Link></li>
            <li><Link to="/forms" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.forms')}</Link></li>
            <li><Link to="/jobs" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.jobs')}</Link></li>
            <li><Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-indigo-400">{t('nav.tools')}</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/tools" className="hover:text-white hover:translate-x-1 transition-all inline-block">All Tools</Link></li>
            <li><Link to="/tools?category=pdf" className="hover:text-white hover:translate-x-1 transition-all inline-block">PDF Tools</Link></li>
            <li><Link to="/tools?category=image" className="hover:text-white hover:translate-x-1 transition-all inline-block">Image Tools</Link></li>
            <li><Link to="/tools?category=ai" className="hover:text-white hover:translate-x-1 transition-all inline-block">AI Tools</Link></li>
            <li><Link to="/tools?category=text" className="hover:text-white hover:translate-x-1 transition-all inline-block">Text Tools</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-indigo-400">{t('footer.contactUs')}</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3 group">
              <div className="p-2 bg-slate-800 rounded-lg text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-3d">
                <MapPin size={18} />
              </div>
              <span className="group-hover:text-slate-200 transition-colors">New Nagari, Mustafa Nagar, Pur-Bhilwara, Rajasthan</span>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="p-2 bg-slate-800 rounded-lg text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-3d">
                <Phone size={18} />
              </div>
              <span className="group-hover:text-slate-200 transition-colors">+91 63504 89219</span>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="p-2 bg-slate-800 rounded-lg text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-3d">
                <Mail size={18} />
              </div>
              <span className="group-hover:text-slate-200 transition-colors">murtazadarvesh@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-800 text-center text-slate-500 text-[10px] space-y-6">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-4xl mx-auto opacity-60 hover:opacity-100 transition-opacity">
          {[
            "Merge PDF", "Compress PDF", "Split PDF", "Rotate PDF", "PDF to Word", "Word to PDF", "PDF to JPG", "JPG to PDF", "PDF to Text", "Edit PDF",
            "Resize Image", "Compress Image", "Convert Image", "Image to PDF", "OCR Online", "Extract Text", "Image Filters", "Crop Image", "BG Remover", "Image to Base64",
            "Word Counter", "Case Converter", "Lorem Ipsum", "Text to Speech", "Remove Duplicates", "Reverse Text", "Binary Converter", "JSON Formatter", "SQL Formatter", "Extract Emails", "Extract URLs",
            "MD5 Hash", "SHA256 Hash", "Base64 Encode", "Base64 Decode", "JSON to YAML", "YAML to JSON", "UUID Generator", "Unix Timestamp", "HTML Formatter", "CSS Minifier", "JS Minifier",
            "Unit Converter", "JSON to CSV", "CSV to JSON", "XML to JSON", "JSON to XML", "Base64 to Image",
            "AI Text Gen", "Organize PDF", "Add Watermark", "Add Page Numbers", "AI Summarizer", "Gemini AI",
            "YT Thumbnail", "WA Link Gen", "IG Profile Link",
            "Password Meter", "CC Validator", "IBAN Validator",
            "Aadhaar Download", "PAN Card Apply", "Ration Card", "Voter ID", "Birth Certificate", "Death Certificate", "Income Certificate", "Caste Certificate", "Domicile Certificate", "Jan Aadhaar", "SSO ID Login", "PM Surya Ghar", "Kusum Yojana", "NFSA Form"
          ].map((k, i) => (
            <Link key={i} to={`/tools?q=${k.toLowerCase().replace(/\s+/g, '+')}`} className="hover:text-indigo-400 transition-colors uppercase tracking-widest">{k}</Link>
          ))}
        </div>
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
