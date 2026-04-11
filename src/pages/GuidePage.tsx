import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { toolSEOContent } from '../data/toolSEOContent';
import { ArrowLeft, CheckCircle2, ShieldCheck, HelpCircle, PlayCircle, Wrench, ListChecks, Info } from 'lucide-react';
import Markdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';

interface GuidePageProps {
  toolId: string | undefined;
}

const GuidePage: React.FC<GuidePageProps> = ({ toolId }) => {
  const { t } = useLanguage();
  
  if (!toolId || !toolSEOContent[toolId]) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Guide Not Found</h1>
        <p className="text-slate-600 mb-8">The guide you are looking for does not exist.</p>
        <a href="/tools.html" className="text-indigo-600 font-bold mb-8 hover:underline">Go back to Tools</a>
      </div>
    );
  }

  const content = toolSEOContent[toolId];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Helmet>
        <title>How to Use {content.toolName} - Step by Step Guide</title>
        <meta name="description" content={`Learn how to use ${content.toolName} online for free. Step-by-step guide, benefits, and common use cases.`} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-white border-b border-slate-100 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <a href="/tools.html" className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Back to All Tools
          </a>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            How to Use {content.toolName} Online
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Follow our comprehensive guide to master the {content.toolName} tool. Learn how to get the best results in seconds.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`/tools/${toolId}.html`} className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2">
              <Wrench size={20} /> Try {content.toolName} Tool
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-16">
          
          {/* Introduction */}
          <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                <Info size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Introduction</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              {content.introduction}
            </p>
          </section>

          {/* Step-by-Step Explanation */}
          <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                <ListChecks size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Step-by-Step Explanation</h2>
            </div>
            <div className="space-y-8">
              {content.howToUseSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center text-xl shadow-lg shadow-indigo-100">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-slate-700 leading-relaxed text-lg">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How it Works (Technical/Detailed) */}
          <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                <PlayCircle size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-900">How It Works</h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
              <Markdown>{content.howItWorks}</Markdown>
            </div>
          </section>

          {/* Benefits */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                <CheckCircle2 size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Benefits of Using This Tool</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Common Use Cases */}
          <section className="bg-indigo-900 text-white p-8 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-black mb-8">Common Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.useCases.map((useCase, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-8 h-1 bg-indigo-400 rounded-full" />
                  <p className="text-indigo-100 leading-relaxed text-lg">{useCase}</p>
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Security & Privacy</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
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
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 hover:bg-slate-50 transition-colors text-lg">
                    {faq.question}
                    <span className="text-indigo-600 group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed text-lg">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Internal Tool Link */}
          <section className="text-center py-10 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Try our free {content.toolName} Tool here.</h2>
            <a href={`/tools/${toolId}.html`} className="inline-block bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl text-lg">
              Open {content.toolName}
            </a>
          </section>

        </div>
      </div>
    </div>
  );
};

export default GuidePage;
