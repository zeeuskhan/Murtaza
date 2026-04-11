import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, Building2, ArrowRight, ExternalLink, GraduationCap, CheckCircle2, Globe, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GoogleGenAI } from "@google/genai";

interface Job {
  id?: string;
  title: string;
  organization: string;
  lastDate: string;
  description: string;
  link: string;
  isAiGenerated?: boolean;
}

const JobsPage: React.FC = () => {
  const { language } = useLanguage();
  const isHi = language === 'hi';
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getSampleJobs = (hi: boolean): Job[] => [
    {
      title: hi ? 'राजस्थान पुलिस कांस्टेबल भर्ती 2026' : 'Rajasthan Police Constable Recruitment 2026',
      organization: 'Rajasthan Police',
      lastDate: '15 July 2026',
      description: hi 
        ? 'राजस्थान पुलिस कांस्टेबल भर्ती के लिए ऑनलाइन आवेदन करें। पात्रता, आवश्यक दस्तावेज और आवेदन प्रक्रिया की जांच करें।'
        : 'Apply online for Rajasthan Police Constable recruitment. Check eligibility, required documents and application process.',
      link: 'https://police.rajasthan.gov.in/',
      id: 'sample-1'
    },
    {
      title: hi ? 'REET परीक्षा 2026 अधिसूचना' : 'REET Exam 2026 Notification',
      organization: 'RBSE / Education Department',
      lastDate: '20 August 2026',
      description: hi
        ? 'राजस्थान प्राथमिक और उच्च प्राथमिक विद्यालय अध्यापक सीधी भर्ती परीक्षा।'
        : 'Rajasthan Eligibility Examination for Teachers (REET) for primary and upper primary levels.',
      link: 'https://rajeduboard.rajasthan.gov.in/',
      id: 'sample-2'
    },
    {
      title: hi ? 'SSC MTS भर्ती 2026' : 'SSC MTS Recruitment 2026',
      organization: 'Staff Selection Commission',
      lastDate: '30 June 2026',
      description: hi
        ? 'मल्टी टास्किंग (गैर-तकनीकी) स्टाफ, और हवलदार (CBIC और CBN) परीक्षा, 2026।'
        : 'Multi Tasking (Non-Technical) Staff, and Havildar (CBIC & CBN) Examination, 2026.',
      link: 'https://ssc.nic.in/',
      id: 'sample-3'
    }
  ];

  const fetchJobs = async (silent = false) => {
    if (!silent) setLoading(true);
    setIsRefreshing(true);
    setError(null);
    
    try {
      // 1. Fetch sitemap XML via proxy
      const sitemapUrl = 'https://vacancymitra.org/sitemap.xml';
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(sitemapUrl)}`;
      const response = await fetch(proxyUrl);
      
      if (!response.ok) throw new Error('Failed to fetch sitemap');
      
      const data = await response.json();
      const xmlString = data.contents;
      
      // 2. Extract URLs using regex (simple and effective for sitemaps)
      const urlRegex = /<loc>(https:\/\/vacancymitra\.org\/[^<]+)<\/loc>/g;
      const urls: string[] = [];
      let match;
      while ((match = urlRegex.exec(xmlString)) !== null) {
        // Filter out non-job URLs if possible, or just take the first few
        const url = match[1];
        if (url.includes('-recruitment-') || url.includes('-bharti-') || url.includes('-vacancy-')) {
          urls.push(url);
        }
      }

      const latestUrls = urls.slice(0, 10);
      
      if (latestUrls.length === 0) {
        throw new Error('No job URLs found in sitemap');
      }

      // 3. Detect new URLs
      const storedJobsKey = `processed_jobs_sitemap_${language}`;
      const storedJobsRaw = localStorage.getItem(storedJobsKey);
      const storedJobs: Job[] = storedJobsRaw ? JSON.parse(storedJobsRaw) : [];
      
      const processedJobs: Job[] = [];

      for (const url of latestUrls) {
        const existingJob = storedJobs.find(j => j.link === url);
        if (existingJob) {
          processedJobs.push(existingJob);
        } else {
          // 4. Fetch and rewrite using Gemini with URL context
          try {
            const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
            const prompt = `
              Extract job details from this URL: ${url}
              
              Requirements:
              1. Rewrite the title to be clear and professional for an e-Mitra website (e.g., "SSC MTS Vacancy 2026 – Eligibility and Application").
              2. Extract the Organization Name.
              3. Extract the Last Date for application.
              4. Rewrite the description in 2 simple, conversational sentences in ${language === 'hi' ? 'Hindi' : 'English'}.
              5. Do NOT copy text word-for-word.
              6. Use SEO keywords like "Latest Government Jobs", "Government Jobs 2026".

              Return ONLY a JSON object:
              {
                "title": "string",
                "organization": "string",
                "lastDate": "string",
                "description": "string"
              }
            `;

            const aiResponse = await ai.models.generateContent({
              model: "gemini-3-flash-preview",
              contents: prompt,
              config: {
                tools: [{ urlContext: {} }],
                responseMimeType: "application/json"
              }
            });

            const result = JSON.parse(aiResponse.text);
            processedJobs.push({
              ...result,
              link: url,
              id: url,
              isAiGenerated: true
            });
          } catch (aiErr) {
            console.error('AI Processing Error for URL:', url, aiErr);
            // Fallback for this specific URL if AI fails
            processedJobs.push({
              title: 'New Job Notification',
              organization: 'Government Department',
              lastDate: 'Check Website',
              description: 'A new government job notification has been released. Click view details for more information.',
              link: url,
              id: url
            });
          }
        }
      }

      const finalJobs = [...processedJobs, ...getSampleJobs(isHi)].slice(0, 8);
      setJobs(finalJobs);
      localStorage.setItem(storedJobsKey, JSON.stringify(processedJobs));
      
    } catch (error) {
      console.error('Error fetching jobs from sitemap:', error);
      setError(isHi 
        ? 'नवीनतम नौकरियां जल्द ही यहां दिखाई देंगी। कृपया दोबारा जांचें।' 
        : 'Latest jobs will appear here shortly. Please check back again.');
      
      if (jobs.length === 0) {
        setJobs(getSampleJobs(isHi));
      }
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchJobs();
    const interval = setInterval(() => fetchJobs(true), 300000); // 5 minutes
    return () => clearInterval(interval);
  }, [language]);

  const guidelines = [
    {
      title: isHi ? 'सरकारी नौकरियों के लिए ऑनलाइन आवेदन कैसे करें' : 'How to apply for government jobs online',
      desc: isHi 
        ? 'आधिकारिक वेबसाइट पर पंजीकरण से लेकर अंतिम प्रिंटआउट तक की चरण-दर-चरण मार्गदर्शिका।'
        : 'Step-by-step guide from registration on official websites to the final printout.',
      link: '#'
    },
    {
      title: isHi ? 'आवश्यक दस्तावेज' : 'Documents required for job applications',
      desc: isHi
        ? 'जाति, मूल निवास, शैक्षणिक प्रमाण पत्र और फोटो/हस्ताक्षर के सही आकार की जानकारी।'
        : 'Information about Caste, Domicile, Academic certificates and correct photo/signature sizes.',
      link: '#'
    },
    {
      title: isHi ? 'ऑनलाइन फॉर्म सही तरीके से कैसे भरें' : 'How to fill online job forms correctly',
      desc: isHi
        ? 'सामान्य गलतियों से बचें और सुनिश्चित करें कि आपका आवेदन खारिज न हो।'
        : 'Avoid common mistakes and ensure your application doesn\'t get rejected.',
      link: '#'
    },
    {
      title: isHi ? 'प्रतियोगी परीक्षाओं की तैयारी कैसे करें' : 'How to prepare for competitive exams',
      desc: isHi
        ? 'सिलेबस को समझना, टाइम टेबल बनाना और पिछले वर्षों के पेपर हल करने के टिप्स।'
        : 'Tips on understanding syllabus, making a time table, and solving previous year papers.',
      link: '#'
    }
  ];

  const officialWebsites = [
    { name: 'UPSC', url: 'https://www.upsc.gov.in' },
    { name: 'SSC', url: 'https://ssc.nic.in' },
    { name: 'RPSC', url: 'https://rpsc.rajasthan.gov.in' },
    { name: 'RSSB', url: 'https://rssb.rajasthan.gov.in' },
    { name: 'National Career Service', url: 'https://www.ncs.gov.in' }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          {isHi ? 'नवीनतम सरकारी नौकरियां और मार्गदर्शिका' : 'Latest Government Jobs & Guidelines'}
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          {isHi 
            ? 'नवीनतम सरकारी नौकरी सूचनाएं, आवेदन मार्गदर्शिका और आधिकारिक लिंक।' 
            : 'Latest government job notifications, application guides and official links.'}
        </p>
      </div>

      {/* Section 1: Job Notifications */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-600 rounded-lg text-white">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-black text-slate-900">
              {isHi ? 'नवीनतम सरकारी नौकरी सूचनाएं' : 'Latest Government Job Notifications'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            {error && (
              <div className="text-rose-500 text-sm font-bold bg-rose-50 px-4 py-2 rounded-xl border border-rose-100">
                {error}
              </div>
            )}
            {isRefreshing && (
              <div className="flex items-center gap-2 text-indigo-600 text-sm font-bold animate-pulse">
                <Loader2 className="animate-spin" size={16} />
                {isHi ? 'अपडेट हो रहा है...' : 'Updating...'}
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="animate-pulse bg-white p-8 rounded-3xl border border-slate-100 h-64 shadow-sm" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Building2 size={24} />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-rose-500 bg-rose-50 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {job.lastDate}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{job.title}</h3>
                <p className="text-sm font-bold text-indigo-600 mb-4">{job.organization}</p>
                <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                  {job.description}
                </p>
                <a 
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-indigo-600 transition-colors"
                >
                  {isHi ? 'विवरण देखें' : 'View Details'} <ArrowRight size={18} />
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Section 2: Guidelines */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-3xl font-black text-slate-900">
            {isHi ? 'सरकारी नौकरी मार्गदर्शिका' : 'Government Job Guidelines'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guidelines.map((guide, i) => (
            <div key={i} className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-2xl text-emerald-600 flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{guide.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{guide.desc}</p>
                <button className="text-indigo-600 font-bold text-sm flex items-center gap-2 hover:underline">
                  {isHi ? 'गाइड पढ़ें' : 'Read Guide'} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Important Websites */}
      <section>
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <Globe size={24} />
          </div>
          <h2 className="text-3xl font-black text-slate-900">
            {isHi ? 'महत्वपूर्ण सरकारी नौकरी वेबसाइट' : 'Important Government Job Websites'}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {officialWebsites.map((site, i) => (
            <a 
              key={i}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all text-center group"
            >
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors mb-3">
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

export default JobsPage;
