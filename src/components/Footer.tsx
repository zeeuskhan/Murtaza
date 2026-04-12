import React from 'react';
import { Globe, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <a href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-indigo-600 rounded-lg text-white group-hover:rotate-12 transition-transform">
              <Globe size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tight leading-none">e-Mitra</span>
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Bhilwara</span>
            </div>
          </a>
          <p className="text-slate-400 text-sm leading-relaxed">
            {t('footer.description')}
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/916350489219" className="p-2 bg-slate-800 rounded-lg text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all">
              <MessageCircle size={20} />
            </a>
            <a href="tel:+916350489219" className="p-2 bg-slate-800 rounded-lg text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all">
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">{t('footer.quickLinks')}</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="/" className="hover:text-white transition-colors">{t('nav.home')}</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">{t('nav.services')}</a></li>
            <li><a href="/forms" className="hover:text-white transition-colors">{t('nav.forms')}</a></li>
            <li><a href="/jobs" className="hover:text-white transition-colors">{t('nav.jobs')}</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</a></li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h4 className="text-lg font-bold mb-6">{t('nav.tools')}</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="/pdf-tools" className="hover:text-white transition-colors">PDF Tools</a></li>
            <li><a href="/image-tools" className="hover:text-white transition-colors">Image Tools</a></li>
            <li><a href="/ai-tools" className="hover:text-white transition-colors">AI Tools</a></li>
            <li><a href="/text-tools" className="hover:text-white transition-colors">Text Tools</a></li>
            <li><a href="/utility-tools" className="hover:text-white transition-colors">Utility Tools</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6">{t('footer.contactUs')}</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-indigo-500 flex-shrink-0" />
              <span>New Nagari, Mustafa Nagar, Pur-Bhilwara, Rajasthan</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-indigo-500 flex-shrink-0" />
              <span>+91 63504 89219</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-indigo-500 flex-shrink-0" />
              <span>murtazadarvesh@gmail.com</span>
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
            <a key={i} href={`/tools?q=${k.toLowerCase().replace(/\s+/g, '+')}`} className="hover:text-indigo-400 transition-colors uppercase tracking-widest">{k}</a>
          ))}
        </div>
        <p>{t('footer.rights')}</p>
        <div className="flex justify-center gap-4">
          <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
          <a href="/robots.txt" className="hover:text-white transition-colors">Robots.txt</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
