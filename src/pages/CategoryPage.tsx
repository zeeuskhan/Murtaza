import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { toolSEOContent } from '../data/toolSEOContent';
import { tools } from './ToolsPage';
import { ArrowLeft, ArrowRight, FileText, ImageIcon, Type, RefreshCw, Wrench, Sparkles, Share2, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface CategoryPageProps {
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const { t, language } = useLanguage();
  const isHi = language === 'hi';

  const categoryInfo: Record<string, { title: string; subtitle: string; icon: any }> = {
    'pdf': {
      title: isHi ? 'पीडीएफ टूल्स' : 'PDF Tools',
      subtitle: isHi ? 'सभी पीडीएफ फाइलों को मैनेज करने के लिए बेहतरीन टूल्स।' : 'The best tools to manage all your PDF files.',
      icon: FileText
    },
    'image': {
      title: isHi ? 'इमेज टूल्स' : 'Image Tools',
      subtitle: isHi ? 'इमेज को कंप्रेस, रिसाइज और कन्वर्ट करने के लिए शक्तिशाली टूल्स।' : 'Powerful tools to compress, resize, and convert images.',
      icon: ImageIcon
    },
    'text': {
      title: isHi ? 'टेक्स्ट टूल्स' : 'Text Tools',
      subtitle: isHi ? 'टेक्स्ट को फॉर्मेट और एनालाइज करने के लिए उपयोगी टूल्स।' : 'Useful tools to format and analyze text.',
      icon: Type
    },
    'converter': {
      title: isHi ? 'कन्वर्टर टूल्स' : 'Converter Tools',
      subtitle: isHi ? 'विभिन्न फाइल फॉर्मेट्स के बीच आसानी से कन्वर्ट करें।' : 'Easily convert between different file formats.',
      icon: RefreshCw
    },
    'utility': {
      title: isHi ? 'यूटिलिटी टूल्स' : 'Utility Tools',
      subtitle: isHi ? 'दैनिक कार्यों को आसान बनाने के लिए सहायक टूल्स।' : 'Helpful tools to make daily tasks easier.',
      icon: Wrench
    },
    'social': {
      title: isHi ? 'सोशल मीडिया' : 'Social Media',
      subtitle: isHi ? 'सोशल मीडिया प्रोफाइल्स और लिंक्स के लिए टूल्स।' : 'Tools for social media profiles and links.',
      icon: Share2
    },
    'security': {
      title: isHi ? 'सिक्योरिटी टूल्स' : 'Security Tools',
      subtitle: isHi ? 'पासवर्ड और डेटा सिक्योरिटी के लिए टूल्स।' : 'Tools for password and data security.',
      icon: Shield
    },
    'ai': {
      title: isHi ? 'एआई टूल्स' : 'AI Tools',
      subtitle: isHi ? 'आर्टिफिशियल इंटेलिजेंस की शक्ति का उपयोग करें।' : 'Harness the power of Artificial Intelligence.',
      icon: Sparkles
    }
  };

  const info = categoryInfo[category] || categoryInfo['utility'];
  const Icon = info.icon;

  // Filter tools by category using the official tools array
  const categoryTools = tools.filter(tool => tool.category === category);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Helmet>
        <title>{info.title} - Free Online Tools | e-Mitra Portal</title>
        <meta name="description" content={info.subtitle} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-white border-b border-slate-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <a href="/tools" className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Back to All Tools
          </a>
          <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Icon size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            {info.title}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            {info.subtitle}
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryTools.map((tool) => {
            const content = toolSEOContent[tool.id];
            if (!content) return null;
            return (
              <div key={tool.id} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors w-fit mb-6">
                  <tool.icon className="w-8 h-8 text-slate-600 group-hover:text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-slate-500 mb-8 flex-grow leading-relaxed">
                  {tool.description}
                </p>
                <div className="flex flex-col gap-3">
                  <a 
                    href={`/tools/${tool.id}`} 
                    className="w-full py-4 px-6 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 active:scale-[0.98]"
                  >
                    Use Tool <ArrowRight size={18} />
                  </a>
                  <a 
                    href={`/guides/${tool.id}`} 
                    className="w-full py-4 px-6 bg-slate-50 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all text-center text-sm"
                  >
                    Read Guide
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
