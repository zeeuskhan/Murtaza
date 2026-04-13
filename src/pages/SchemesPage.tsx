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
  Info,
  X,
  FileText
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
  documents: string[];
  process: string;
  link: string;
  icon: React.ReactNode;
}

const SchemesPage: React.FC = () => {
  const { language } = useLanguage();
  const isHi = language === 'hi';
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);

  const schemes: Scheme[] = [
    {
      id: 'jan-aadhaar',
      title: isHi ? 'जन आधार योजना' : 'Jan Aadhaar Yojana',
      category: isHi ? 'राजस्थान सरकार' : 'Rajasthan Govt',
      description: isHi 
        ? 'राजस्थान के परिवारों की जनसांख्यिकीय और सामाजिक-आर्थिक जानकारी का एक डेटाबेस।'
        : 'A database of demographic and socio-economic information of families in Rajasthan.',
      benefits: isHi 
        ? ['एक नंबर, एक कार्ड, एक पहचान', 'सीधे नकद लाभ हस्तांतरण (DBT)', 'सरकारी सेवाओं तक आसान पहुंच']
        : ['One Number, One Card, One Identity', 'Direct Benefit Transfer (DBT)', 'Easy access to govt services'],
      eligibility: isHi 
        ? 'राजस्थान के सभी निवासी परिवार।'
        : 'All resident families of Rajasthan.',
      documents: isHi
        ? ['आधार कार्ड', 'राशन कार्ड', 'बैंक पासबुक', 'पहचान पत्र']
        : ['Aadhaar Card', 'Ration Card', 'Bank Passbook', 'ID Proof'],
      process: isHi
        ? 'ई-मित्र केंद्र पर जाएं या जन आधार पोर्टल के माध्यम से ऑनलाइन पंजीकरण करें।'
        : 'Visit an e-Mitra center or register online via the Jan Aadhaar portal.',
      link: 'https://janaadhaar.rajasthan.gov.in/',
      icon: <Shield size={24} />
    },
    {
      id: 'chiranjeevi',
      title: isHi ? 'चिरंजीवी स्वास्थ्य बीमा योजना' : 'Chiranjeevi Health Insurance',
      category: isHi ? 'स्वास्थ्य' : 'Health',
      description: isHi 
        ? 'राजस्थान के परिवारों को कैशलेस चिकित्सा सुविधा प्रदान करने वाली योजना।'
        : 'A scheme providing cashless medical facilities to families in Rajasthan.',
      benefits: isHi 
        ? ['₹25 लाख तक का स्वास्थ्य बीमा', 'गंभीर बीमारियों का इलाज शामिल', 'निजी और सरकारी अस्पतालों में मान्य']
        : ['Health insurance up to ₹25 Lakh', 'Coverage for critical illnesses', 'Valid in private & govt hospitals'],
      eligibility: isHi 
        ? 'राजस्थान के सभी परिवार (NFSA/SECC परिवारों के लिए मुफ्त)।'
        : 'All families of Rajasthan (Free for NFSA/SECC families).',
      documents: isHi
        ? ['जन आधार कार्ड', 'आधार कार्ड', 'मोबाइल नंबर']
        : ['Jan Aadhaar Card', 'Aadhaar Card', 'Mobile Number'],
      process: isHi
        ? 'ई-मित्र के माध्यम से या स्वयं एसएसओ (SSO) आईडी से ऑनलाइन आवेदन करें।'
        : 'Apply online through e-Mitra or yourself using SSO ID.',
      link: 'https://chiranjeevi.rajasthan.gov.in/',
      icon: <Activity size={24} />
    },
    {
      id: 'anuprati',
      title: isHi ? 'अनुप्रति कोचिंग योजना' : 'Anuprati Coaching Yojana',
      category: isHi ? 'शिक्षा' : 'Education',
      description: isHi 
        ? 'मेधावी छात्रों को विभिन्न प्रतियोगी परीक्षाओं के लिए मुफ्त कोचिंग सहायता।'
        : 'Free coaching assistance for meritorious students for various competitive exams.',
      benefits: isHi 
        ? ['IAS, RAS, NEET, JEE के लिए मुफ्त कोचिंग', 'आवास और भोजन के लिए अतिरिक्त सहायता', 'प्रतिष्ठित संस्थानों में पढ़ने का अवसर']
        : ['Free coaching for IAS, RAS, NEET, JEE', 'Additional support for housing & food', 'Opportunity to study in reputed institutes'],
      eligibility: isHi 
        ? 'SC/ST/OBC/EWS छात्र जिनकी पारिवारिक आय ₹8 लाख से कम है।'
        : 'SC/ST/OBC/EWS students with family income less than ₹8 Lakh.',
      documents: isHi
        ? ['जाति प्रमाण पत्र', 'मूल निवास', 'आय प्रमाण पत्र', 'मार्कशीट']
        : ['Caste Certificate', 'Domicile', 'Income Certificate', 'Marksheets'],
      process: isHi
        ? 'एसजेई (SJE) पोर्टल के माध्यम से ऑनलाइन आवेदन आमंत्रित किए जाते हैं।'
        : 'Online applications are invited through the SJE portal.',
      link: 'https://sje.rajasthan.gov.in/',
      icon: <GraduationCap size={24} />
    },
    {
      id: 'pension',
      title: isHi ? 'सामाजिक सुरक्षा पेंशन' : 'Social Security Pension',
      category: isHi ? 'सामाजिक न्याय' : 'Social Justice',
      description: isHi 
        ? 'वृद्धजनों, विधवाओं और विकलांग व्यक्तियों को मासिक वित्तीय सहायता।'
        : 'Monthly financial assistance to elderly, widows, and disabled persons.',
      benefits: isHi 
        ? ['न्यूनतम ₹1000 प्रति माह पेंशन', 'सीधे बैंक खाते में भुगतान', 'वार्षिक सत्यापन की सुविधा']
        : ['Minimum ₹1000 per month pension', 'Direct payment to bank account', 'Annual verification facility'],
      eligibility: isHi 
        ? 'निर्धारित आयु सीमा और आय मानदंडों को पूरा करने वाले राजस्थान के निवासी।'
        : 'Residents of Rajasthan meeting age and income criteria.',
      documents: isHi
        ? ['जन आधार', 'आधार', 'बैंक विवरण', 'आयु प्रमाण पत्र']
        : ['Jan Aadhaar', 'Aadhaar', 'Bank Details', 'Age Proof'],
      process: isHi
        ? 'ई-मित्र केंद्र पर जाकर या राजएसपीपी (RajSSP) पोर्टल से आवेदन करें।'
        : 'Apply by visiting an e-Mitra center or via RajSSP portal.',
      link: 'https://rajssp.raj.nic.in/',
      icon: <Accessibility size={24} />
    },
    {
      id: 'palanhari',
      title: isHi ? 'पालनहार योजना' : 'Palanhari Yojana',
      category: isHi ? 'महिला एवं बाल' : 'Women & Child',
      description: isHi 
        ? 'अनाथ और पात्र बच्चों के पालन-पोषण और शिक्षा के लिए वित्तीय सहायता।'
        : 'Financial assistance for the upbringing and education of orphans and eligible children.',
      benefits: isHi 
        ? ['मासिक अनुदान ₹500 से ₹1500 तक', 'स्कूल ड्रेस और जूतों के लिए वार्षिक सहायता', 'शिक्षा सुनिश्चित करना']
        : ['Monthly grant from ₹500 to ₹1500', 'Annual help for school dress & shoes', 'Ensuring education'],
      eligibility: isHi 
        ? 'अनाथ बच्चे या ऐसे बच्चे जिनके माता-पिता विशेष परिस्थितियों में हैं।'
        : 'Orphan children or children whose parents are in special circumstances.',
      documents: isHi
        ? ['जन आधार', 'मृत्यु प्रमाण पत्र (यदि लागू हो)', 'स्कूल अध्ययन प्रमाण पत्र']
        : ['Jan Aadhaar', 'Death Certificate (if applicable)', 'School Study Certificate'],
      process: isHi
        ? 'ई-मित्र के माध्यम से ऑनलाइन आवेदन पत्र भरें।'
        : 'Fill the online application form through e-Mitra.',
      link: 'https://sje.rajasthan.gov.in/',
      icon: <Heart size={24} />
    },
    {
      id: 'yuva-sambal',
      title: isHi ? 'मुख्यमंत्री युवा संबल योजना' : 'Mukhyamantri Yuva Sambal',
      category: isHi ? 'रोजगार' : 'Employment',
      description: isHi 
        ? 'शिक्षित बेरोजगार युवाओं को आर्थिक सहायता प्रदान करने के लिए बेरोजगारी भत्ता योजना।'
        : 'Unemployment allowance scheme to provide financial assistance to educated unemployed youth.',
      benefits: isHi 
        ? ['पुरुषों के लिए ₹4000 प्रति माह', 'महिलाओं/दिव्यांगों के लिए ₹4500 प्रति माह', 'कौशल प्रशिक्षण के अवसर']
        : ['₹4000/month for men', '₹4500/month for women/disabled', 'Skill training opportunities'],
      eligibility: isHi 
        ? 'राजस्थान के स्नातक (Graduate) बेरोजगार युवा।'
        : 'Unemployed graduates who are residents of Rajasthan.',
      documents: isHi
        ? ['स्नातक डिग्री', 'मूल निवास', 'आय प्रमाण पत्र', 'एसबीआइ बैंक खाता']
        : ['Graduate Degree', 'Domicile', 'Income Certificate', 'SBI Bank Account'],
      process: isHi
        ? 'कौशल, रोजगार और उद्यमिता विभाग के पोर्टल पर ऑनलाइन आवेदन करें।'
        : 'Apply online on the Department of Skill, Employment and Entrepreneurship portal.',
      link: 'https://employment.livelihoods.rajasthan.gov.in/',
      icon: <Zap size={24} />
    },
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
      documents: isHi
        ? ['आधार कार्ड', 'जमीन की जमाबंदी', 'बैंक पासबुक']
        : ['Aadhaar Card', 'Land Jamabandi', 'Bank Passbook'],
      process: isHi
        ? 'पीएम किसान पोर्टल पर स्वयं पंजीकरण करें या ई-मित्र की सहायता लें।'
        : 'Self-register on PM Kisan portal or take help from e-Mitra.',
      link: 'https://pmkisan.gov.in/',
      icon: <Sprout size={24} />
    }
  ];

  const officialPortals = [
    { name: 'Jan Soochna Portal', url: 'https://jansoochna.rajasthan.gov.in/' },
    { name: 'SSO Rajasthan', url: 'https://sso.rajasthan.gov.in/' },
    { name: 'MyScheme', url: 'https://www.myscheme.gov.in/' },
    { name: 'Rajasthan Govt Portal', url: 'https://rajasthan.gov.in/' },
    { name: 'Digital India', url: 'https://www.digitalindia.gov.in/' }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Helmet>
        <title>{isHi ? 'राजस्थान सरकारी योजनाएं 2026 | जन आधार, चिरंजीवी | e-Mitra' : 'Rajasthan Govt Schemes 2026 | Jan Aadhaar, Chiranjeevi | e-Mitra'}</title>
        <meta name="description" content="Explore popular Rajasthan government schemes. Details on Jan Aadhaar, Chiranjeevi, Anuprati, and more at e-Mitra Bhilwara." />
        <meta name="keywords" content="Rajasthan schemes 2026, Jan Aadhaar details, Chiranjeevi eligibility, Anuprati coaching, Rajasthan pension schemes" />
        <link rel="canonical" href="https://jansoochna.vercel.app/schemes" />
      </Helmet>

      <div className="text-center mb-16 perspective-container">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight text-gradient">
          {isHi ? 'राजस्थान सरकारी योजनाएं' : 'Rajasthan Govt Schemes'}
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          {isHi 
            ? 'राजस्थान सरकार की प्रमुख जन-कल्याणकारी योजनाओं की विस्तृत जानकारी।' 
            : 'Detailed information on major public welfare schemes of the Rajasthan Government.'}
        </p>
      </div>

      {/* Schemes Grid */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <Info size={24} />
          </div>
          <h2 className="text-3xl font-black text-slate-900">
            {isHi ? 'लोकप्रिय योजनाएं और विवरण' : 'Popular Schemes & Details'}
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
              className="bg-white p-8 rounded-[40px] shadow-3d border border-slate-100 hover:shadow-3d-hover transition-all group card-3d flex flex-col"
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
              <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
                {scheme.description}
              </p>
              
              <div className="mb-6 flex-grow">
                <h4 className="text-sm font-bold text-slate-900 mb-2">{isHi ? 'प्रमुख लाभ:' : 'Key Benefits:'}</h4>
                <ul className="space-y-1">
                  {scheme.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-emerald-500" />
                      {benefit}
                    </li>
                  ))}
                  {scheme.benefits.length > 2 && (
                    <li className="text-[10px] text-indigo-500 font-bold ml-5">
                      +{scheme.benefits.length - 2} {isHi ? 'और लाभ...' : 'more benefits...'}
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedScheme(scheme)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all active:scale-95"
                >
                  {isHi ? 'विवरण देखें' : 'View Details'}
                </button>
                <a 
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-3d hover:shadow-3d-hover active:scale-95"
                  title={isHi ? 'आधिकारिक वेबसाइट' : 'Official Website'}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Scheme Detail Modal */}
      {selectedScheme && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl relative"
          >
            <button 
              onClick={() => setSelectedScheme(null)}
              className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-indigo-600 text-white rounded-2xl shadow-3d">
                  {selectedScheme.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{selectedScheme.category}</span>
                  <h2 className="text-3xl font-black text-slate-900">{selectedScheme.title}</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Info size={20} className="text-indigo-600" />
                    {isHi ? 'योजना के बारे में' : 'About the Scheme'}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{selectedScheme.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Heart size={20} className="text-rose-500" />
                      {isHi ? 'प्रमुख लाभ' : 'Key Benefits'}
                    </h3>
                    <ul className="space-y-3">
                      {selectedScheme.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-emerald-500 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Accessibility size={20} className="text-amber-500" />
                      {isHi ? 'पात्रता मानदंड' : 'Eligibility Criteria'}
                    </h3>
                    <p className="text-sm text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      {selectedScheme.eligibility}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <FileText size={20} className="text-indigo-600" />
                    {isHi ? 'आवश्यक दस्तावेज' : 'Required Documents'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedScheme.documents.map((doc, idx) => (
                      <span key={idx} className="px-4 py-2 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-100">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Zap size={20} className="text-indigo-600" />
                    {isHi ? 'आवेदन प्रक्रिया' : 'Application Process'}
                  </h3>
                  <div className="bg-indigo-600 text-white p-6 rounded-3xl shadow-3d">
                    <p className="text-sm leading-relaxed">{selectedScheme.process}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href={selectedScheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-black transition-all shadow-3d active:scale-[0.98]"
                  >
                    {isHi ? 'आधिकारिक पोर्टल पर जाएं' : 'Visit Official Portal'} <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Official Portals */}
      <section>
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <Globe size={24} />
          </div>
          <h2 className="text-3xl font-black text-slate-900">
            {isHi ? 'महत्वपूर्ण सरकारी पोर्टल' : 'Important Govt Portals'}
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
