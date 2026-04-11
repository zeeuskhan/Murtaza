import React, { useState, useMemo, useEffect } from 'react';
import { Search, FileText, LayoutGrid, X, ChevronLeft, ChevronRight, Filter, Info, Download, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { formsData, ExtendedService } from '../data/formsData';
import ServiceCard from './ServiceCard';
import { useLanguage } from '../context/LanguageContext';

const FORMS_PER_PAGE = 24;

const FormsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFormForGuide, setSelectedFormForGuide] = useState<ExtendedService | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(formsData.map(f => language === 'hi' ? f.categoryHi : f.category));
    return ['All', ...Array.from(cats)];
  }, [language]);

  const filteredForms = useMemo(() => {
    return formsData.filter((form) => {
      const isHi = language === 'hi';
      const searchLower = searchQuery.toLowerCase();
      const category = isHi ? form.categoryHi : form.category;
      
      const matchesSearch = 
        form.serviceName.toLowerCase().includes(searchLower) ||
        (form.serviceNameHi && form.serviceNameHi.toLowerCase().includes(searchLower)) ||
        form.formName.toLowerCase().includes(searchLower) ||
        (form.formNameHi && form.formNameHi.toLowerCase().includes(searchLower)) ||
        form.category.toLowerCase().includes(searchLower) ||
        (form.categoryHi && form.categoryHi.toLowerCase().includes(searchLower));
      
      const matchesCategory = selectedCategory === 'All' || category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, language]);

  const totalPages = Math.ceil(filteredForms.length / FORMS_PER_PAGE);
  const paginatedForms = useMemo(() => {
    const start = (currentPage - 1) * FORMS_PER_PAGE;
    return filteredForms.slice(start, start + FORMS_PER_PAGE);
  }, [filteredForms, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            {t('forms.title')}
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl font-serif italic text-indigo-600 mb-6"
          >
            {t('forms.subtitle')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-500 text-lg"
          >
            {t('forms.description')}
          </motion.p>
        </div>

        {/* Search and Filter Controls */}
        <div className="relative z-10 mb-8 sm:mb-12 space-y-6 sm:space-y-8">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder={t('forms.searchPlaceholder')}
              className="block w-full pl-11 pr-12 py-4 bg-white border border-slate-200 rounded-2xl shadow-lg focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-200 text-slate-900 placeholder-slate-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-[24px] text-xs font-black uppercase tracking-widest transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat 
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 scale-105' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat === 'All' ? (language === 'hi' ? 'सभी' : 'All') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 px-2 gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <LayoutGrid size={16} />
            <span>
              {language === 'hi' 
                ? `${filteredForms.length} फॉर्म मिले (पेज ${currentPage}/${totalPages})` 
                : `Found ${filteredForms.length} forms (Page ${currentPage}/${totalPages})`}
            </span>
          </div>
          
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button 
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-30 hover:bg-slate-50 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-1">
                {[...Array(Math.min(5, totalPages))].map((_, i) => {
                  let pageNum = currentPage;
                  if (currentPage <= 3) pageNum = i + 1;
                  else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                  else pageNum = currentPage - 2 + i;
                  
                  if (pageNum <= 0 || pageNum > totalPages) return null;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                        currentPage === pageNum 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              <button 
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-30 hover:bg-slate-50 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {paginatedForms.map((form) => (
              <ServiceCard 
                key={form.id} 
                service={form} 
                onShowGuide={() => setSelectedFormForGuide(form)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredForms.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200"
          >
            <div className="p-4 bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FileText className="text-slate-300" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {language === 'hi' ? 'कोई फॉर्म नहीं मिला' : 'No forms found'}
            </h3>
            <p className="text-slate-500">
              {language === 'hi' 
                ? 'कृपया कुछ और खोजने का प्रयास करें या श्रेणियां ब्राउज़ करें।' 
                : 'Try searching for something else or browse categories.'}
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-6 text-indigo-600 font-bold hover:underline"
            >
              {language === 'hi' ? 'खोज साफ़ करें' : 'Clear search'}
            </button>
          </motion.div>
        )}

        {/* Pagination Bottom */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button 
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-30 hover:bg-slate-50 transition-colors font-bold"
            >
              <ChevronLeft size={18} />
              {language === 'hi' ? 'पिछला' : 'Previous'}
            </button>
            <span className="text-slate-500 font-medium">
              {language === 'hi' ? `पेज ${currentPage} / ${totalPages}` : `Page ${currentPage} of ${totalPages}`}
            </span>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-30 hover:bg-slate-50 transition-colors font-bold"
            >
              {language === 'hi' ? 'अगला' : 'Next'}
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Guide Modal */}
        <AnimatePresence>
          {selectedFormForGuide && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-indigo-600 text-white">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-2xl">
                      {React.createElement(selectedFormForGuide.icon, { size: 24 })}
                    </div>
                    <div>
                      <h3 className="text-xl font-black leading-tight">
                        {language === 'hi' ? selectedFormForGuide.formNameHi : selectedFormForGuide.formName}
                      </h3>
                      <p className="text-indigo-100 text-sm font-medium">
                        {language === 'hi' ? selectedFormForGuide.serviceNameHi : selectedFormForGuide.serviceName}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedFormForGuide(null)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="overflow-y-auto p-8 space-y-8">
                  {selectedFormForGuide.guide ? (
                    <>
                      {/* Purpose */}
                      <section>
                        <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                          {language === 'hi' ? 'उद्देश्य (Purpose)' : 'Purpose'}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {selectedFormForGuide.guide.purpose[language]}
                        </p>
                      </section>

                      {/* Eligibility */}
                      <section>
                        <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                          {language === 'hi' ? 'पात्रता (Eligibility)' : 'Eligibility'}
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {Array.isArray(selectedFormForGuide.guide.eligibility[language]) ? (
                            (selectedFormForGuide.guide.eligibility[language] as string[]).map((item, i) => (
                              <li key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl text-sm text-slate-700">
                                <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">
                                  {i + 1}
                                </div>
                                {item}
                              </li>
                            ))
                          ) : (
                            <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl text-sm text-slate-700">
                              <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">
                                1
                              </div>
                              {selectedFormForGuide.guide.eligibility[language]}
                            </li>
                          )}
                        </ul>
                      </section>

                      {/* Documents */}
                      <section>
                        <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                          {language === 'hi' ? 'आवश्यक दस्तावेज (Required Documents)' : 'Required Documents'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedFormForGuide.guide.documents[language].map((doc, i) => (
                            <span key={i} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-100">
                              {doc}
                            </span>
                          ))}
                        </div>
                      </section>

                      {/* Process */}
                      <section>
                        <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                          {language === 'hi' ? 'आवेदन प्रक्रिया (Application Process)' : 'Application Process'}
                        </h4>
                        <div className="space-y-4 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                          {Array.isArray(selectedFormForGuide.guide.process[language]) ? (
                            (selectedFormForGuide.guide.process[language] as string[]).map((step, i) => (
                              <div key={i} className="relative pl-8">
                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center z-10">
                                  <div className="w-2 h-2 rounded-full bg-indigo-600" />
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">{step}</p>
                              </div>
                            ))
                          ) : (
                            <div className="relative pl-8">
                              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center z-10">
                                <div className="w-2 h-2 rounded-full bg-indigo-600" />
                              </div>
                              <p className="text-slate-600 text-sm leading-relaxed">{selectedFormForGuide.guide.process[language]}</p>
                            </div>
                          )}
                        </div>
                      </section>

                      {/* Tips */}
                      <section className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                        <h4 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                          <Info size={20} className="text-amber-600" />
                          {language === 'hi' ? 'महत्वपूर्ण सुझाव (Important Tips)' : 'Important Tips'}
                        </h4>
                        <ul className="space-y-2">
                          {Array.isArray(selectedFormForGuide.guide.tips[language]) ? (
                            (selectedFormForGuide.guide.tips[language] as string[]).map((tip, i) => (
                              <li key={i} className="text-sm text-amber-800 flex items-start gap-2">
                                <span className="text-amber-400 font-bold">•</span>
                                {tip}
                              </li>
                            ))
                          ) : (
                            <li className="text-sm text-amber-800 flex items-start gap-2">
                              <span className="text-amber-400 font-bold">•</span>
                              {selectedFormForGuide.guide.tips[language]}
                            </li>
                          )}
                        </ul>
                      </section>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="p-4 bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Info className="text-slate-300" size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {language === 'hi' ? 'गाइड उपलब्ध नहीं है' : 'Guide not available'}
                      </h3>
                      <p className="text-slate-500">
                        {language === 'hi' 
                          ? 'इस फॉर्म के लिए विस्तृत गाइड जल्द ही जोड़ी जाएगी।' 
                          : 'Detailed guide for this form will be added soon.'}
                      </p>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const query = encodeURIComponent(selectedFormForGuide.searchQuery);
                      window.open(`https://www.google.com/search?q=${query}`, '_blank');
                    }}
                    className="flex-1 flex items-center justify-center gap-3 py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[24px] text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
                  >
                    <Download size={20} />
                    {t('forms.openPdf')}
                  </button>
                  <button
                    onClick={() => {
                      const formName = language === 'hi' ? selectedFormForGuide.formNameHi : selectedFormForGuide.formName;
                      const message = encodeURIComponent(`Hello, mujhe ${formName} bharne me help chahiye.`);
                      window.open(`https://wa.me/916350489219?text=${message}`, '_blank');
                    }}
                    className="flex-1 flex items-center justify-center gap-3 py-4 px-6 bg-white hover:bg-slate-50 text-emerald-600 border-2 border-emerald-100 rounded-[24px] text-xs font-black uppercase tracking-widest transition-all active:scale-[0.98]"
                  >
                    <MessageCircle size={20} />
                    {t('forms.whatsappHelp')}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Footer Info */}
        <div className="mt-20 pt-10 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span>Aadhaar</span>
            <span>PAN</span>
            <span>Ration Card</span>
            <span>Rajasthan Services</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormsSection;
