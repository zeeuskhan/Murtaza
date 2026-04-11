import React, { useState, useMemo } from 'react';
import { Hash, Type, FileText, Volume2, Loader2, Check, Copy, Trash2, ArrowRightLeft, Binary } from 'lucide-react';
import { motion } from 'motion/react';

export const WordCounter = () => {
  const [text, setText] = useState('');
  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const lines = text.split('\n').filter(l => l.length > 0).length;
    return { words, chars, lines };
  }, [text]);

  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-medium text-slate-700"
        />
        {text && (
          <button 
            onClick={() => setText('')}
            className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 transition-all shadow-sm"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Words', value: stats.words },
          { label: 'Characters', value: stats.chars },
          { label: 'Lines', value: stats.lines },
        ].map(s => (
          <div key={s.label} className="bg-white p-6 rounded-[32px] text-center border border-slate-100 shadow-sm group hover:border-indigo-200 transition-all">
            <div className="text-4xl font-black text-indigo-600 mb-1 tracking-tighter">{s.value}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CaseConverter = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const convert = async (type: string) => {
    if (!text.trim()) return;
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 400));

    let newText = text;
    switch (type) {
      case 'upper': newText = text.toUpperCase(); break;
      case 'lower': newText = text.toLowerCase(); break;
      case 'title': newText = text.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '); break;
      case 'sentence': newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase()); break;
    }
    setText(newText);
    setIsProcessing(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-medium text-slate-700"
        />
        {text && (
          <button 
            onClick={() => setText('')}
            className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 transition-all shadow-sm"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-wrap gap-2 flex-grow p-2 bg-slate-50 rounded-2xl border border-slate-100">
          <button disabled={isProcessing} onClick={() => convert('upper')} className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-[10px] uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:border-indigo-200 active:scale-95 transition-all disabled:opacity-50">UPPERCASE</button>
          <button disabled={isProcessing} onClick={() => convert('lower')} className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-[10px] uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:border-indigo-200 active:scale-95 transition-all disabled:opacity-50">lowercase</button>
          <button disabled={isProcessing} onClick={() => convert('title')} className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-[10px] uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:border-indigo-200 active:scale-95 transition-all disabled:opacity-50">Title Case</button>
          <button disabled={isProcessing} onClick={() => convert('sentence')} className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-[10px] uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:border-indigo-200 active:scale-95 transition-all disabled:opacity-50">Sentence case</button>
        </div>
        <button onClick={copy} className="flex items-center justify-center gap-3 px-10 py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]">
          {copied ? <Check size={20} /> : <Copy size={20} />}
          {copied ? 'Copied!' : 'Copy Text'}
        </button>
      </div>
    </div>
  );
};

export const LoremIpsumGenerator = () => {
  const [count, setCount] = useState(3);
  const [type, setType] = useState('paragraphs');
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const generate = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 500));

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const sentences = text.split('. ');
    
    let output = '';
    if (type === 'paragraphs') {
      output = Array(count).fill(text).join('\n\n');
    } else if (type === 'sentences') {
      output = Array(count).fill(0).map((_, i) => sentences[i % sentences.length]).join('. ') + '.';
    } else {
      output = text.split(' ').slice(0, count).join(' ') + '.';
    }
    setResult(output);
    setIsProcessing(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Count</label>
          <input 
            type="number" min="1" max="100" value={count} 
            onChange={(e) => setCount(parseInt(e.target.value))}
            className="w-full p-5 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:ring-2 focus:ring-indigo-500 font-black text-indigo-600 text-xl transition-all"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Type</label>
          <div className="flex gap-2 p-1 bg-slate-50 rounded-3xl border border-slate-100">
            {['paragraphs', 'sentences', 'words'].map(t => (
              <button 
                key={t} onClick={() => setType(t)}
                className={`flex-grow px-4 py-4 rounded-2xl text-[10px] font-black uppercase tracking-wider transition-all active:scale-95 ${type === t ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white text-slate-500 hover:text-indigo-600'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <button 
        onClick={generate} 
        disabled={isProcessing}
        className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
      >
        {isProcessing ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Generating...
          </>
        ) : (
          'Generate Lorem Ipsum'
        )}
      </button>

      {result && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="relative group">
            <textarea
              readOnly
              value={result}
              className="w-full h-64 p-8 bg-slate-50 border border-slate-200 rounded-[40px] font-serif leading-relaxed text-slate-600 resize-none outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <button onClick={copy} className="absolute bottom-6 right-6 flex items-center justify-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-2xl font-bold text-sm hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-95">
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied!' : 'Copy Result'}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [speaking, setSpeaking] = useState(false);

  const speak = () => {
    if (!text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste text to speak..."
          className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-medium text-slate-700"
        />
        {text && (
          <button 
            onClick={() => setText('')}
            className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 transition-all shadow-sm"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>
      <button 
        onClick={speak}
        disabled={!text || speaking}
        className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100 active:scale-[0.98] transition-all"
      >
        {speaking ? <Loader2 className="animate-spin" size={20} /> : <Volume2 size={20} />}
        {speaking ? 'Speaking...' : 'Speak Text'}
      </button>
    </div>
  );
};

export const RemoveDuplicateLines = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const process = async () => {
    if (!text.trim()) return;
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 500));

    const lines = text.split('\n');
    const uniqueLines = Array.from(new Set(lines));
    setText(uniqueLines.join('\n'));
    setIsProcessing(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-medium text-slate-700"
        />
        {text && (
          <button 
            onClick={() => setText('')}
            className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 transition-all shadow-sm"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={process} 
          disabled={isProcessing}
          className="flex-grow py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100 active:scale-[0.98] transition-all disabled:opacity-50"
        >
          {isProcessing ? <Loader2 size={20} className="animate-spin" /> : <Trash2 size={20} />}
          {isProcessing ? 'Processing...' : 'Remove Duplicates'}
        </button>
        <button onClick={copy} className="px-10 py-5 bg-white border border-slate-200 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-slate-50 hover:border-indigo-200 flex items-center justify-center gap-3 active:scale-[0.98] transition-all text-slate-600 shadow-sm">
          {copied ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} className="text-slate-400" />}
          {copied ? 'Copied!' : 'Copy Result'}
        </button>
      </div>
    </div>
  );
};

export const ReverseText = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const process = async (mode: 'chars' | 'words' | 'lines') => {
    if (!text.trim()) return;
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 400));

    let result = '';
    if (mode === 'chars') result = text.split('').reverse().join('');
    else if (mode === 'words') result = text.split(' ').reverse().join(' ');
    else result = text.split('\n').reverse().join('\n');
    setText(result);
    setIsProcessing(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-medium text-slate-700"
        />
        {text && (
          <button 
            onClick={() => setText('')}
            className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 transition-all shadow-sm"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-wrap gap-2 flex-grow p-2 bg-slate-50 rounded-2xl border border-slate-100">
          <button disabled={isProcessing} onClick={() => process('chars')} className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-[10px] uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:border-indigo-200 active:scale-95 transition-all disabled:opacity-50">Reverse Chars</button>
          <button disabled={isProcessing} onClick={() => process('words')} className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-[10px] uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:border-indigo-200 active:scale-95 transition-all disabled:opacity-50">Reverse Words</button>
          <button disabled={isProcessing} onClick={() => process('lines')} className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-[10px] uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:border-indigo-200 active:scale-95 transition-all disabled:opacity-50">Reverse Lines</button>
        </div>
        <button onClick={copy} className="flex items-center justify-center gap-3 px-10 py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]">
          {copied ? <Check size={20} /> : <Copy size={20} />}
          {copied ? 'Copied!' : 'Copy Result'}
        </button>
      </div>
    </div>
  );
};

export const BinaryConverter = () => {
  const [text, setText] = useState('');
  const [binary, setBinary] = useState('');
  const [mode, setMode] = useState<'t2b' | 'b2t'>('t2b');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  const convert = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    try {
      if (mode === 't2b') {
        const res = text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
        setBinary(res);
      } else {
        const res = binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
        setText(res);
      }
    } catch (err) {
      // Error handled silently or via UI
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-2 mb-4 p-1 bg-slate-50 rounded-2xl w-fit mx-auto">
        <button 
          onClick={() => setMode('t2b')}
          className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${mode === 't2b' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:bg-white hover:text-indigo-600'}`}
        >
          Text to Binary
        </button>
        <button 
          onClick={() => setMode('b2t')}
          className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${mode === 'b2t' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:bg-white hover:text-indigo-600'}`}
        >
          Binary to Text
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Text Input</label>
          <textarea 
            value={text} onChange={(e) => setText(e.target.value)}
            placeholder="Hello World"
            className="w-full h-48 p-6 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-700 resize-none transition-all"
          />
        </div>
        <div className="space-y-2 relative group">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Binary Output</label>
          <textarea 
            value={binary} onChange={(e) => setBinary(e.target.value)}
            placeholder="01001000 01100101..."
            className="w-full h-48 p-6 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-sm text-indigo-600 resize-none transition-all"
          />
          {binary && (
            <button 
              onClick={() => {
                navigator.clipboard.writeText(binary);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="absolute right-4 bottom-4 flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 shadow-lg active:scale-95 transition-all text-indigo-600"
            >
              {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'Copy Result'}
            </button>
          )}
        </div>
      </div>

      <button 
        onClick={convert} 
        disabled={isProcessing}
        className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100 active:scale-[0.98] transition-all disabled:opacity-50"
      >
        {isProcessing ? <Loader2 size={20} className="animate-spin" /> : <Binary size={20} />}
        {isProcessing ? 'Processing...' : 'Convert Data'}
      </button>
    </div>
  );
};

export const JsonFormatter = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const format = async () => {
    if (!text.trim()) return;
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    try {
      const obj = JSON.parse(text);
      setText(JSON.stringify(obj, null, 2));
      setError('');
    } catch (err) {
      setError('Invalid JSON');
    } finally {
      setIsProcessing(false);
    }
  };

  const minify = async () => {
    if (!text.trim()) return;
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    try {
      const obj = JSON.parse(text);
      setText(JSON.stringify(obj));
      setError('');
    } catch (err) {
      setError('Invalid JSON');
    } finally {
      setIsProcessing(false);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='{ "key": "value" }'
          className={`w-full h-96 p-6 bg-slate-50 border rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-mono text-sm ${error ? 'border-red-200' : 'border-slate-200'}`}
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {text && (
            <button 
              onClick={() => setText('')}
              className="p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 transition-all shadow-sm"
            >
              <Trash2 size={18} />
            </button>
          )}
          <button onClick={copy} className="p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 transition-all shadow-sm">
            {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
          </button>
        </div>
      </div>

      {error && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-bold flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          {error}
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button 
          onClick={format} 
          disabled={isProcessing}
          className="py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isProcessing ? <Loader2 size={18} className="animate-spin" /> : null}
          {isProcessing ? 'Processing...' : 'Beautify JSON'}
        </button>
        <button 
          onClick={minify} 
          disabled={isProcessing}
          className="py-5 bg-white border border-slate-200 text-slate-600 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-slate-50 hover:border-indigo-200 transition-all active:scale-[0.98] shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isProcessing ? <Loader2 size={18} className="animate-spin" /> : null}
          {isProcessing ? 'Processing...' : 'Minify JSON'}
        </button>
      </div>
    </div>
  );
};

export const SqlFormatter = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const format = async () => {
    if (!text.trim()) return;
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 500));

    // Simple SQL formatter logic (very basic)
    const keywords = ['SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'GROUP BY', 'ORDER BY', 'INSERT INTO', 'UPDATE', 'DELETE', 'SET', 'VALUES', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'ON', 'LIMIT'];
    let formatted = text.replace(/\s+/g, ' ').trim();
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      formatted = formatted.replace(regex, `\n${keyword.toUpperCase()}`);
    });

    setText(formatted.trim());
    setIsProcessing(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="SELECT * FROM users WHERE id = 1"
          className="w-full h-96 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-mono text-sm text-slate-700"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {text && (
            <button 
              onClick={() => setText('')}
              className="p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 transition-all shadow-sm"
            >
              <Trash2 size={18} />
            </button>
          )}
          <button onClick={copy} className="p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 transition-all shadow-sm">
            {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
          </button>
        </div>
      </div>

      <button 
        onClick={format} 
        disabled={isProcessing}
        className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
      >
        {isProcessing ? <Loader2 size={20} className="animate-spin" /> : null}
        {isProcessing ? 'Formatting...' : 'Format SQL Query'}
      </button>
    </div>
  );
};

export const ExtractEmails = () => {
  const [text, setText] = useState('');
  const [emails, setEmails] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const extract = async () => {
    if (!text.trim()) return;
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 600));

    const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const found = text.match(regex) || [];
    setEmails([...new Set(found)]);
    setIsProcessing(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(emails.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste text containing emails..."
          className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-medium text-slate-700"
        />
        {text && (
          <button 
            onClick={() => setText('')}
            className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 transition-all shadow-sm"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      <button 
        onClick={extract} 
        disabled={isProcessing}
        className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
      >
        {isProcessing ? <Loader2 size={20} className="animate-spin" /> : null}
        {isProcessing ? 'Extracting...' : 'Extract Emails'}
      </button>

      {emails.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="flex items-center justify-between px-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Found {emails.length} Emails</span>
            <button onClick={copy} className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-2 p-2 bg-indigo-50 rounded-xl transition-all active:scale-95">
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy All'}
            </button>
          </div>
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-[40px] max-h-64 overflow-y-auto space-y-2 custom-scrollbar">
            {emails.map((email, i) => (
              <div key={i} className="p-4 bg-white border border-slate-100 rounded-2xl text-sm font-mono text-slate-600 shadow-sm flex items-center justify-between group">
                <span>{email}</span>
                <button onClick={() => { navigator.clipboard.writeText(email); }} className="opacity-0 group-hover:opacity-100 p-2 hover:bg-slate-50 rounded-lg transition-all">
                  <Copy size={14} className="text-slate-400" />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const ExtractURLs = () => {
  const [text, setText] = useState('');
  const [urls, setUrls] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const extract = async () => {
    if (!text.trim()) return;
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 600));

    const regex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
    const found = text.match(regex) || [];
    setUrls([...new Set(found)]);
    setIsProcessing(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(urls.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste text containing URLs..."
          className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-medium text-slate-700"
        />
        {text && (
          <button 
            onClick={() => setText('')}
            className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 transition-all shadow-sm"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      <button 
        onClick={extract} 
        disabled={isProcessing}
        className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
      >
        {isProcessing ? <Loader2 size={20} className="animate-spin" /> : null}
        {isProcessing ? 'Extracting...' : 'Extract URLs'}
      </button>

      {urls.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="flex items-center justify-between px-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Found {urls.length} URLs</span>
            <button onClick={copy} className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-2 p-2 bg-indigo-50 rounded-xl transition-all active:scale-95">
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy All'}
            </button>
          </div>
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-[40px] max-h-64 overflow-y-auto space-y-2 custom-scrollbar">
            {urls.map((url, i) => (
              <div key={i} className="p-4 bg-white border border-slate-100 rounded-2xl text-sm font-mono text-indigo-600 shadow-sm flex items-center justify-between group">
                <span className="truncate max-w-[80%]">{url}</span>
                <button onClick={() => { navigator.clipboard.writeText(url); }} className="opacity-0 group-hover:opacity-100 p-2 hover:bg-slate-50 rounded-lg transition-all">
                  <Copy size={14} className="text-slate-400" />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const TextToMorse = () => {
  const [text, setText] = useState('');
  const [morse, setMorse] = useState('');
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const morseCode: { [key: string]: string } = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/'
  };

  const convert = async () => {
    if (!text.trim()) return;
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 500));

    const result = text.toUpperCase().split('').map(char => morseCode[char] || char).join(' ');
    setMorse(result);
    setIsProcessing(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(morse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type text to convert to Morse code..."
          className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-medium text-slate-700"
        />
        {text && (
          <button 
            onClick={() => setText('')}
            className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 transition-all shadow-sm"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      <button 
        onClick={convert} 
        disabled={isProcessing}
        className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
      >
        {isProcessing ? <Loader2 size={20} className="animate-spin" /> : null}
        {isProcessing ? 'Converting...' : 'Convert to Morse'}
      </button>

      {morse && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="relative group">
            <textarea
              readOnly
              value={morse}
              className="w-full h-48 p-8 bg-slate-50 border border-slate-200 rounded-[40px] font-mono text-xl tracking-widest text-indigo-600 resize-none outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <button onClick={copy} className="absolute bottom-6 right-6 flex items-center justify-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-2xl font-bold text-sm hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-95">
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied!' : 'Copy Morse'}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const MorseToText = () => {
  const [morse, setMorse] = useState('');
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const morseToChar: { [key: string]: string } = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H',
    '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P',
    '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5',
    '-....': '6', '--...': '7', '---..': '8', '----.': '9', '-----': '0', '/': ' '
  };

  const convert = async () => {
    if (!morse.trim()) return;
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 500));

    const result = morse.trim().split(/\s+/).map(code => morseToChar[code] || '?').join('');
    setText(result);
    setIsProcessing(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={morse}
          onChange={(e) => setMorse(e.target.value)}
          placeholder="Paste Morse code here (e.g., .... . .-.. .-.. ---)..."
          className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-mono text-xl tracking-widest text-indigo-600"
        />
        {morse && (
          <button 
            onClick={() => setMorse('')}
            className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 transition-all shadow-sm"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      <button 
        onClick={convert} 
        disabled={isProcessing}
        className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
      >
        {isProcessing ? <Loader2 size={20} className="animate-spin" /> : null}
        {isProcessing ? 'Converting...' : 'Convert to Text'}
      </button>

      {text && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="relative group">
            <textarea
              readOnly
              value={text}
              className="w-full h-48 p-8 bg-slate-50 border border-slate-200 rounded-[40px] font-medium text-slate-700 resize-none outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <button onClick={copy} className="absolute bottom-6 right-6 flex items-center justify-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-2xl font-bold text-sm hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-95">
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied!' : 'Copy Text'}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const TextReplacement = () => {
  const [text, setText] = useState('');
  const [find, setFind] = useState('');
  const [replace, setReplace] = useState('');
  const [copied, setCopied] = useState(false);

  const handleReplace = () => {
    if (!find) return;
    const newText = text.split(find).join(replace);
    setText(newText);
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here..."
        className="w-full h-48 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-medium text-slate-700"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          value={find}
          onChange={(e) => setFind(e.target.value)}
          placeholder="Find text..."
          className="p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
        />
        <input
          type="text"
          value={replace}
          onChange={(e) => setReplace(e.target.value)}
          placeholder="Replace with..."
          className="p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleReplace}
          className="flex-grow py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
        >
          Replace All
        </button>
        <button onClick={copy} className="px-10 py-5 bg-white border border-slate-200 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-slate-50 hover:border-indigo-200 flex items-center justify-center gap-3 active:scale-[0.98] transition-all text-slate-600 shadow-sm">
          {copied ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} className="text-slate-400" />}
          {copied ? 'Copied!' : 'Copy Result'}
        </button>
      </div>
    </div>
  );
};

export const TextRepeater = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(10);
  const [separator, setSeparator] = useState('\n');
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const handleRepeat = () => {
    setResult(Array(count).fill(text).join(separator));
  };

  const copy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text to repeat..."
        className="w-full h-32 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-medium text-slate-700"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
          placeholder="Repeat count..."
          className="p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
        />
        <select
          value={separator}
          onChange={(e) => setSeparator(e.target.value)}
          className="p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
        >
          <option value="\n">New Line</option>
          <option value=" ">Space</option>
          <option value=", ">Comma</option>
          <option value="">None</option>
        </select>
      </div>
      <button
        onClick={handleRepeat}
        className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
      >
        Repeat Text
      </button>
      {result && (
        <div className="relative">
          <textarea
            readOnly
            value={result}
            className="w-full h-48 p-6 bg-slate-50 border border-slate-200 rounded-3xl font-medium text-slate-700 resize-none outline-none"
          />
          <button
            onClick={copy}
            className="absolute bottom-4 right-4 p-2 bg-white border border-slate-200 rounded-xl text-indigo-600 hover:bg-slate-50"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
      )}
    </div>
  );
};

export const WordFrequency = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<{ word: string; count: number }[]>([]);

  const analyze = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const freq: { [key: string]: number } = {};
    words.forEach(w => freq[w] = (freq[w] || 0) + 1);
    const sorted = Object.entries(freq)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count);
    setResult(sorted);
  };

  return (
    <div className="space-y-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste text to analyze word frequency..."
        className="w-full h-48 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-medium text-slate-700"
      />
      <button
        onClick={analyze}
        className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
      >
        Analyze Frequency
      </button>
      {result.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {result.slice(0, 30).map((item, i) => (
            <div key={i} className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex justify-between items-center">
              <span className="font-bold text-slate-700 truncate mr-2">{item.word}</span>
              <span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-lg text-xs font-black">{item.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const RemoveEmptyLines = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const process = () => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    setText(lines.join('\n'));
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste text with empty lines..."
        className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-medium text-slate-700"
      />
      <div className="flex gap-4">
        <button
          onClick={process}
          className="flex-grow py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
        >
          Remove Empty Lines
        </button>
        <button onClick={copy} className="px-10 py-5 bg-white border border-slate-200 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-slate-50 hover:border-indigo-200 flex items-center justify-center gap-3 active:scale-[0.98] transition-all text-slate-600 shadow-sm">
          {copied ? <Check size={20} /> : <Copy size={20} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};
