import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { toolSEOContent } from '../data/toolSEOContent';
import { ArrowLeft, CheckCircle2, ShieldCheck, HelpCircle, PlayCircle } from 'lucide-react';
import Markdown from 'react-markdown';

interface ToolSEOPageProps {
  toolId: string | undefined;
}

const ToolSEOPage: React.FC<ToolSEOPageProps> = ({ toolId }) => {
  const { t } = useLanguage();
  
  if (!toolId || !toolSEOContent[toolId]) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Tool Not Found</h1>
        <p className="text-slate-600 mb-8">The tool SEO page you are looking for does not exist.</p>
        <a href="/tools.html" className="text-indigo-600 font-bold hover:underline">Go back to Tools</a>
      </div>
    );
  }

  const content = toolSEOContent[toolId];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-100 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <a href="/tools.html" className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Back to All Tools
          </a>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            {content.seoTitle}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            {content.introduction}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`/tools/${toolId}.html`} className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
              Try {content.toolName} Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-16">
          
          {/* How it Works */}
          <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                <PlayCircle size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-900">How This Tool Works</h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
              <Markdown>{content.howItWorks}</Markdown>
            </div>
          </section>

          {/* Features */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                <CheckCircle2 size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Key Features & Benefits</h2>
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

          {/* Use Cases */}
          <section className="bg-indigo-900 text-white p-8 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-black mb-8">Common Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.useCases.map((useCase, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-8 h-1 bg-indigo-400 rounded-full" />
                  <p className="text-indigo-100 leading-relaxed">{useCase}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Use */}
          <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-8">Step-by-Step Guide to Use {content.toolName}</h2>
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

          {/* Security */}
          <section className="flex flex-col md:flex-row items-center gap-10 bg-emerald-50 p-8 md:p-12 rounded-3xl border border-emerald-100">
            <div className="p-6 bg-white rounded-2xl text-emerald-600 shadow-sm">
              <ShieldCheck size={48} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Security & Privacy Guaranteed</h2>
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
                  href={tool.link.endsWith('.html') ? tool.link : `${tool.link}.html`} 
                  className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all"
                >
                  {tool.name}
                </a>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-10">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Ready to get started?</h2>
            <a href={`/tools/${toolId}.html`} className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl">
              Use {content.toolName} for Free
            </a>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ToolSEOPage;
