import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  Shield, 
  Home as HomeIcon, 
  GraduationCap, 
  Sprout, 
  Zap, 
  Activity, 
  Accessibility,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Globe,
  Loader2,
  Info
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

interface Scheme {
  id: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  eligibility: string;
  link: string;
  icon: React.ReactNode;
}

const SchemesPage: React.FC = () => {
  const { language } = useLanguage();
  const isHi = language === 'hi';
  const [loading, setLoading] = useState(false);

  const schemes: Scheme[] = [
    {
      id: 'pm-kisan',
      title: isHi ? 'पीएम किसान सम्मान निधि' : 'PM Kisan Samman Nidhi',
      category: isHi ? 'कृषि' : 'Agriculture',
      description: isHi 
        ? 'सभी भूमिधारक किसान परिवारों को प्रति वर्ष 6,000 रुपये की वित्तीय सहायता।'
        : 'Financial assistance of ₹6,000 per year to all landholding farmer families.',
      benefits: isHi 
        ? ['₹2,000 की तीन समान किस्तें', 'सीधे बैंक खाते में हस्तांतरण', 'कृषि इनपुट के लिए सहायता']
        : ['Three equal installments of ₹2,000', 'Direct bank transfer', 'Support for agricultural inputs'],
      eligibility: isHi 
        ? 'सभी भूमिधारक किसान परिवार (कुछ अपवादों के साथ)।'
        : 'All landholding farmer families (with certain exclusions).',
      link: 'https://pmkisan.gov.in/',
      icon: <Sprout size={24} />
    },
    {
      id: 'ayushman-bharat',
      title: isHi ? 'आयुष्मान भारत (PM-JAY)' : 'Ayushman Bharat (PM-JAY)',
      category: isHi ? 'स्वास्थ्य' : 'Health',
      description: isHi 
        ? 'दुनिया की सबसे बड़ी स्वास्थ्य बीमा योजना, प्रति परिवार प्रति वर्ष 5 लाख रुपये का कवर।'
        : 'World\'s largest health insurance scheme, providing ₹5 lakh cover per family per year.',
      benefits: isHi 
        ? ['कैशलेस अस्पताल में भर्ती', 'माध्यमिक और तृतीयक देखभाल कवर', '10 करोड़ से अधिक परिवारों को लाभ']
        : ['Cashless hospitalization', 'Secondary and tertiary care cover', 'Benefits over 10 crore families'],
      eligibility: isHi 
        ? 'SECC 2011 डेटा के आधार पर गरीब और कमजोर परिवार।'
        : 'Poor and vulnerable families based on SECC 2011 data.',
      link: 'https://pmjay.gov.in/',
      icon: <Activity size={24} />
    },
    {
      id: 'pm-awas-yojana',
      title: isHi ? 'पीएम आवास योजना (PMAY)' : 'PM Awas Yojana (PMAY)',
      category: isHi ? 'आवास' : 'Housing',
      description: isHi 
        ? 'सभी के लिए आवास - शहरी और ग्रामीण क्षेत्रों में किफायती घर बनाने के लिए सहायता।'
        : 'Housing for All - Assistance for building affordable houses in urban and rural areas.',
      benefits: isHi 
        ? ['घर निर्माण के लिए सब्सिडी', 'ब्याज दर में छूट', 'पक्का घर सुनिश्चित करना']
        : ['Subsidy for house construction', 'Interest rate subvention', 'Ensuring pucca house for all'],
      eligibility: isHi 
        ? 'बेघर परिवार या कच्चे घरों में रहने वाले लोग।'
        : 'Homeless families or those living in dilapidated houses.',
      link: 'https://pmaymis.gov.in/',
      icon: <HomeIcon size={24} />
    },
    {
      id: 'ujjwala-yojana',
      title: isHi ? 'पीएम उज्ज्वला योजना' : 'PM Ujjwala Yojana',
      category: isHi ? 'ऊर्जा' : 'Energy',
      description: isHi 
        ? 'बीपीएल परिवारों की महिलाओं को मुफ्त एलपीजी कनेक्शन प्रदान करना।'
        : 'Providing free LPG connections to women from BPL households.',
      benefits: isHi 
        ? ['मुफ्त गैस कनेक्शन', 'धुआं मुक्त रसोई', 'स्वास्थ्य में सुधार']
        : ['Free gas connection', 'Smoke-free kitchen', 'Improved health for women'],
      eligibility: isHi 
        ? 'बीपीएल परिवार की वयस्क महिला सदस्य।'
        : 'Adult female member of a BPL household.',
      link: 'https://www.pmuy.gov.in/',
      icon: <Zap size={24} />
    },
    {
      id: 'mudra-yojana',
      title: isHi ? 'पीएम मुद्रा योजना' : 'PM Mudra Yojana',
      category: isHi ? 'व्यवसाय' : 'Business',
      description: isHi 
        ? 'गैर-कॉर्पोरेट, गैर-कृषि लघु/सूक्ष्म उद्यमों को 10 लाख रुपये तक का ऋण।'
        : 'Loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises.',
      benefits: isHi 
        ? ['बिना गारंटी के ऋण', 'तीन श्रेणियां: शिशु, किशोर, तरुण', 'स्वरोजगार को बढ़ावा']
        : ['Collateral-free loans', 'Three categories: Shishu, Kishore, Tarun', 'Promoting self-employment'],
      eligibility: isHi 
        ? 'छोटे व्यवसायी, दुकानदार और उद्यमी।'
        : 'Small business owners, shopkeepers, and entrepreneurs.',
      link: 'https://www.mudra.org.in/',
      icon: <Shield size={24} />
    },
    {
      id: 'sukanya-samriddhi',
      title: isHi ? 'सुकन्या समृद्धि योजना' : 'Sukanya Samriddhi Yojana',
      category: isHi ? 'महिला एवं बाल' : 'Women & Child',
      description: isHi 
        ? 'बालिकाओं के भविष्य के लिए एक छोटी बचत योजना।'
        : 'A small deposit scheme for the future of girl children.',
      benefits: isHi 
        ? ['उच्च ब्याज दर', 'आयकर छूट (80C)', 'शिक्षा और विवाह के लिए बचत']
        : ['Higher interest rate', 'Income tax benefits (80C)', 'Savings for education and marriage'],
      eligibility: isHi 
        ? '10 वर्ष से कम आयु की बालिका के नाम पर माता-पिता द्वारा।'
        : 'Parents of a girl child below 10 years of age.',
      link: 'https://www.indiapost.gov.in/',
      icon: <Heart size={24} />
    }
  ];

  const officialPortals = [
    { name: 'MyScheme', url: 'https://www.myscheme.gov.in/' },
    { name: 'National Portal of India', url: 'https://www.india.gov.in/' },
    { name: 'DBT Bharat', url: 'https://dbtbharat.gov.in/' },
    { name: 'Jan Soochna Portal', url: 'https://jansoochna.rajasthan.gov.in/' },
    { name: 'Digital India', url: 'https://www.digitalindia.gov.in/' }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Helmet>
        <title>{isHi ? 'नवीनतम सरकारी योजनाएं 2026 | पीएम किसान, आयुष्मान भारत | e-Mitra' : 'Latest Government Schemes 2026 | PM Kisan, Ayushman Bharat | e-Mitra'}</title>
        <meta name="description" content="Explore the latest government schemes in India and Rajasthan. Details on PM Kisan, Ayushman Bharat, PMAY, and more at e-Mitra Bhilwara." />
        <meta name="keywords" content="government schemes 2026, PM Kisan details, Ayushman Bharat eligibility, PMAY application, Jan Soochna schemes" />
        <link rel="canonical" href="https://jansoochna.vercel.app/schemes" />
      </Helmet>

      <div className="text-center mb-16 perspective-container">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight text-gradient">
          {isHi ? 'नवीनतम सरकारी योजनाएं' : 'Latest Government Schemes'}
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          {isHi 
            ? 'भारत सरकार और राजस्थान सरकार की प्रमुख योजनाओं की विस्तृत जानकारी।' 
            : 'Detailed information on major schemes of the Government of India and Rajasthan.'}
        </p>
      </div>

      {/* Schemes Grid */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <Info size={24} />
          </div>
          <h2 className="text-3xl font-black text-slate-900">
            {isHi ? 'प्रमुख योजनाएं और लाभ' : 'Major Schemes & Benefits'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemes.map((scheme, i) => (
            <motion.div 
              key={scheme.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[40px] shadow-3d border border-slate-100 hover:shadow-3d-hover transition-all group card-3d"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-3d-inner">
                  {scheme.icon}
                </div>
                <div className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full shadow-3d-inner">
                  {scheme.category}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">{scheme.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {scheme.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-900 mb-2">{isHi ? 'प्रमुख लाभ:' : 'Key Benefits:'}</h4>
                <ul className="space-y-1">
                  {scheme.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-emerald-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-900 mb-1">{isHi ? 'पात्रता:' : 'Eligibility:'}</h4>
                <p className="text-xs text-slate-500">{scheme.eligibility}</p>
              </div>

              <a 
                href={scheme.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-3d hover:shadow-3d-hover active:scale-95"
              >
                {isHi ? 'आधिकारिक वेबसाइट' : 'Official Website'} <ExternalLink size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Official Portals */}
      <section>
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <Globe size={24} />
          </div>
          <h2 className="text-3xl font-black text-slate-900">
            {isHi ? 'महत्वपूर्ण योजना पोर्टल' : 'Important Scheme Portals'}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {officialPortals.map((site, i) => (
            <a 
              key={i}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-3d hover:shadow-3d-hover hover:border-indigo-100 transition-all text-center group card-3d"
            >
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all duration-300 shadow-3d-inner mb-3">
                <ExternalLink size={20} />
              </div>
              <span className="text-sm font-bold text-slate-700">{site.name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SchemesPage;
