import React from 'react';
import { MessageCircle, Download, Info, ExternalLink, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { ExtendedService } from '../data/formsData';
import { useLanguage } from '../context/LanguageContext';

interface ServiceCardProps {
  service: ExtendedService;
  onShowGuide?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onShowGuide }) => {
  const { language, t } = useLanguage();
  const Icon = service.icon;

  const isHi = language === 'hi';
  const category = isHi ? service.categoryHi : service.category;
  const serviceName = isHi ? service.serviceNameHi : service.serviceName;
  const formName = isHi ? service.formNameHi : service.formName;
  const description = isHi ? service.descriptionHi : service.description;
  const guidelines = isHi ? service.guidelinesHi : service.guidelines;

  const handleOpenPDF = () => {
    const query = encodeURIComponent(service.searchQuery);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  const handleWhatsAppHelp = () => {
    const message = encodeURIComponent(`Hello, mujhe ${formName} bharne me help chahiye.`);
    window.open(`https://wa.me/916350489219?text=${message}`, '_blank');
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group"
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
            <Icon size={24} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
            {category}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">
          {formName}
        </h3>
        <p className="text-sm font-medium text-indigo-600 mb-3">
          {serviceName}
        </p>
        <p className="text-sm text-slate-500 line-clamp-2 mb-4">
          {description}
        </p>
      </div>

      {/* Guidelines */}
      <div className="px-6 py-4 bg-slate-50 border-y border-slate-100 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Info size={14} className="text-slate-400" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
              {isHi ? 'दिशानिर्देश' : 'Guidelines'}
            </span>
          </div>
          {service.guide && (
            <button 
              onClick={onShowGuide}
              className="text-[10px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 uppercase tracking-tighter"
            >
              <BookOpen size={12} />
              {isHi ? 'गाइड देखें' : 'View Guide'}
            </button>
          )}
        </div>
        <ul className="space-y-1.5">
          {guidelines.map((guide, idx) => (
            <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
              {guide}
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="p-4 grid grid-cols-1 gap-2">
        <button
          onClick={handleOpenPDF}
          className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[24px] text-xs font-black uppercase tracking-widest transition-all duration-200 shadow-xl shadow-indigo-100 active:scale-[0.98]"
        >
          <Download size={18} />
          {t('forms.openPdf')}
          <ExternalLink size={14} className="opacity-50" />
        </button>
        <button
          onClick={handleWhatsAppHelp}
          className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-[24px] text-xs font-black uppercase tracking-widest transition-all duration-200 active:scale-[0.98]"
        >
          <MessageCircle size={18} />
          {t('forms.whatsappHelp')}
        </button>
      </div>
    </motion.div>
  );
};


export default ServiceCard;
