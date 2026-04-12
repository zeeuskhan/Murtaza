import React, { Suspense } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { toolSEOContent } from '../data/toolSEOContent';
import { ToolRenderer } from './ToolsPage';
import { ArrowLeft, CheckCircle2, ShieldCheck, HelpCircle, PlayCircle, Loader2, BookOpen } from 'lucide-react';
import Markdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';

interface ToolPageProps {
  toolId: string | undefined;
}

const ToolPage: React.FC<ToolPageProps> = ({ toolId }) => {
  const { t } = useLanguage();
  
  if (!toolId || !toolSEOContent[toolId]) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Tool Not Found</h1>
        <p className="text-slate-600 mb-8">This tool is currently unavailable.</p>
        <a href="/tools" className="text-indigo-600 font-bold hover:underline">Go back to Tools</a>
      </div>
    );
  }

  const content = toolSEOContent[toolId];

  // Schema Markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": content.toolName,
    "operatingSystem": "All",
    "applicationCategory": "MultimediaApplication",
    "description": content.metaDescription,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Helmet>
        <title>{content.seoTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <a href="/tools" className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Back to All Tools
          </a>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            {content.toolName}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            {content.introduction}
          </p>
        </div>
      </div>

      {/* Tool Interface Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-16">
          <div className="p-6 sm:p-10">
            <Suspense fallback={
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="animate-spin text-indigo-600 mb-4" size={48} />
                <p className="text-slate-500 font-medium text-lg">Loading tool interface...</p>
              </div>
            }>
              <ToolRenderer toolId={toolId} />
            </Suspense>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="grid grid-cols-1 gap-16 max-w-4xl mx-auto">
          
          {/* Internal Guide Link */}
          <section className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-lg text-indigo-600">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Need help?</h3>
                <p className="text-sm text-slate-600">Read our detailed guide on how to use this tool.</p>
              </div>
            </div>
            <a 
              href={`/guides/${toolId}`} 
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all"
            >
              View Guide
            </a>
          </section>

          {/* How it Works */}
          <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                <PlayCircle size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-900">How to Use {content.toolName}</h2>
            </div>
            <div className="space-y-6">
              {content.howToUseSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="text-slate-600 leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                <CheckCircle2 size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Features & Benefits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Security */}
          <section className="flex flex-col md:flex-row items-center gap-10 bg-emerald-50 p-8 md:p-12 rounded-3xl border border-emerald-100">
            <div className="p-6 bg-white rounded-2xl text-emerald-600 shadow-sm">
              <ShieldCheck size={48} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-4">100% Secure & Private</h2>
              <p className="text-slate-600 leading-relaxed">
                {content.securityPrivacy}
              </p>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                <HelpCircle size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {content.faqs.map((faq, index) => (
                <details key={index} className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:bg-slate-50 transition-colors">
                    {faq.question}
                    <span className="text-indigo-600 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section className="pt-10 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Explore Related Tools</h2>
            <div className="flex flex-wrap gap-3">
              {content.relatedTools.map((tool, index) => (
                <a 
                  key={index} 
                  href={tool.link.replace('.html', '')} 
                  className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all"
                >
                  {tool.name}
                </a>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ToolPage;
