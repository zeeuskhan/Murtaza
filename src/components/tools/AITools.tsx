import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Image as ImageIcon, FileText } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const ToolContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    {children}
  </div>
);

const ApiKeyWarning = () => (
  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 text-sm mb-4">
    <p className="font-bold">Gemini API Key Missing</p>
    <p>Please ensure GEMINI_API_KEY is set in your environment variables.</p>
  </div>
);

export const AITextGen = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const hasApiKey = !!process.env.GEMINI_API_KEY;

  const generate = async () => {
    if (!prompt) return;
    if (!hasApiKey) {
      setResult('API Key missing. Please configure it in the settings.');
      return;
    }
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });
      setResult(response.text || 'No response generated.');
    } catch (error) {
      console.error(error);
      setResult('Error generating text. Please try again.');
    }
    setLoading(false);
  };

  return (
    <ToolContainer title="AI Text Generator">
      {!hasApiKey && <ApiKeyWarning />}
      <div className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          className="w-full h-32 p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
        />
        <button
          onClick={generate}
          disabled={loading || !hasApiKey}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
          Generate Content
        </button>
        {result && (
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 whitespace-pre-wrap text-slate-700">
            {result}
          </div>
        )}
      </div>
    </ToolContainer>
  );
};

export const AISummarizer = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const hasApiKey = !!process.env.GEMINI_API_KEY;

  const summarize = async () => {
    if (!text) return;
    if (!hasApiKey) return;
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Please summarize the following text:\n\n${text}`,
      });
      setSummary(response.text || 'No summary generated.');
    } catch (error) {
      console.error(error);
      setSummary('Error generating summary.');
    }
    setLoading(false);
  };

  return (
    <ToolContainer title="AI Text Summarizer">
      {!hasApiKey && <ApiKeyWarning />}
      <div className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste the text you want to summarize..."
          className="w-full h-48 p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
        />
        <button
          onClick={summarize}
          disabled={loading || !hasApiKey}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : <FileText size={18} />}
          Summarize Text
        </button>
        {summary && (
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-slate-700">
            <h4 className="font-bold mb-2">Summary:</h4>
            <p className="whitespace-pre-wrap">{summary}</p>
          </div>
        )}
      </div>
    </ToolContainer>
  );
};
