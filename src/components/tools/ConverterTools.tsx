import React, { useState, useMemo } from 'react';
import { RefreshCw, FileJson, FileCode, Binary, ArrowRightLeft, Image as ImageIcon, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { xml2json, json2xml } from 'xml-js';

export const UnitConverter = () => {
  const [value, setValue] = useState<number>(1);
  const [type, setType] = useState<'length' | 'weight' | 'temp'>('length');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const units = {
    length: { m: 1, km: 1000, cm: 0.01, mm: 0.001, inch: 0.0254, ft: 0.3048, mile: 1609.34 },
    weight: { kg: 1, g: 0.001, mg: 0.000001, lb: 0.453592, oz: 0.0283495 },
    temp: { c: 'Celsius', f: 'Fahrenheit', k: 'Kelvin' }
  };

  React.useEffect(() => {
    if (type === 'length') { setFrom('m'); setTo('km'); }
    else if (type === 'weight') { setFrom('kg'); setTo('lb'); }
    else { setFrom('c'); setTo('f'); }
  }, [type]);

  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<string>('0.0010');

  const convert = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 400));
    
    let finalResult = '';
    if (type === 'temp') {
      let c = value;
      if (from === 'f') c = (value - 32) * 5/9;
      if (from === 'k') c = value - 273.15;
      
      if (to === 'c') finalResult = c.toFixed(2);
      else if (to === 'f') finalResult = (c * 9/5 + 32).toFixed(2);
      else if (to === 'k') finalResult = (c + 273.15).toFixed(2);
      else finalResult = value.toString();
    } else {
      const fromRate = units[type][from as keyof typeof units.length] as number;
      const toRate = units[type][to as keyof typeof units.length] as number;
      finalResult = ((value * fromRate) / toRate).toFixed(4);
    }
    setResult(finalResult);
    setIsProcessing(false);
  };

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Trigger conversion on input change
  React.useEffect(() => {
    convert();
  }, [value, type, from, to]);

  return (
    <div className="space-y-8 max-w-md mx-auto">
      <div className="flex flex-wrap justify-center gap-2 p-1 bg-slate-50 rounded-2xl border border-slate-100">
        {['length', 'weight', 'temp'].map(t => (
          <button 
            key={t} onClick={() => setType(t as any)}
            className={`px-6 py-2.5 rounded-xl font-bold text-xs capitalize transition-all active:scale-95 ${type === t ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:text-indigo-600'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <input 
          type="number" value={value} onChange={(e) => setValue(parseFloat(e.target.value) || 0)}
          className="w-full p-6 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:ring-2 focus:ring-indigo-500 text-center text-3xl font-black text-indigo-600 shadow-inner transition-all"
        />
        <div className="flex items-center gap-4 p-2 bg-slate-50 rounded-2xl border border-slate-100">
          <select value={from} onChange={(e) => setFrom(e.target.value)} className="flex-grow p-3 bg-white border border-slate-200 rounded-xl outline-none font-bold text-xs uppercase tracking-wider text-slate-600 focus:border-indigo-300 transition-all">
            {Object.keys(units[type]).map(u => <option key={u} value={u}>{u.toUpperCase()}</option>)}
          </select>
          <div className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
            <ArrowRightLeft className="text-indigo-400" size={16} />
          </div>
          <select value={to} onChange={(e) => setTo(e.target.value)} className="flex-grow p-3 bg-white border border-slate-200 rounded-xl outline-none font-bold text-xs uppercase tracking-wider text-slate-600 focus:border-indigo-300 transition-all">
            {Object.keys(units[type]).map(u => <option key={u} value={u}>{u.toUpperCase()}</option>)}
          </select>
        </div>
      </div>

      <div className="bg-indigo-600 p-10 rounded-[40px] text-center shadow-2xl shadow-indigo-100 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
        <div className="text-[10px] font-black text-indigo-200 uppercase tracking-[0.3em] mb-2">Converted Result</div>
        <div className="text-4xl sm:text-5xl font-black text-white tracking-tighter flex items-center justify-center gap-4">
          {isProcessing ? (
            <RefreshCw size={40} className="animate-spin text-indigo-300" />
          ) : (
            <>
              {result} <span className="text-indigo-200 text-2xl">{to.toUpperCase()}</span>
            </>
          )}
        </div>
        
        <button 
          onClick={copyResult}
          className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs transition-all flex items-center gap-2 mx-auto border border-white/10"
        >
          {copied ? 'Copied!' : 'Copy Result'}
        </button>
      </div>
    </div>
  );
};

export const JsonCsvConverter = ({ mode }: { mode: 'json-to-csv' | 'csv-to-json' }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const convert = async () => {
    if (!input.trim()) return;
    setIsProcessing(true);
    
    // Simulate processing for better UX
    await new Promise(resolve => setTimeout(resolve, 600));

    try {
      if (mode === 'json-to-csv') {
        const json = JSON.parse(input);
        const items = Array.isArray(json) ? json : [json];
        const replacer = (key: string, value: any) => value === null ? '' : value;
        const header = Object.keys(items[0]);
        const csv = [
          header.join(','),
          ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
        ].join('\r\n');
        setOutput(csv);
      } else {
        const lines = input.split('\n').filter(l => l.trim());
        if (lines.length < 2) throw new Error('Insufficient data');
        const header = lines[0].split(',');
        const json = lines.slice(1).map(line => {
          const values = line.split(',');
          return header.reduce((obj: any, h, i) => {
            obj[h.trim()] = values[i]?.trim();
            return obj;
          }, {});
        });
        setOutput(JSON.stringify(json, null, 2));
      }
    } catch (err) {
      setOutput('Error: Invalid input format');
    } finally {
      setIsProcessing(false);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Input {mode === 'json-to-csv' ? 'JSON' : 'CSV'}</label>
          <textarea 
            value={input} onChange={(e) => setInput(e.target.value)}
            placeholder={mode === 'json-to-csv' ? '[{"name": "John", "age": 30}]' : 'name,age\nJohn,30'}
            className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl outline-none font-mono text-xs resize-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-600"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Output {mode === 'json-to-csv' ? 'CSV' : 'JSON'}</label>
          <div className="relative h-64 group">
            <textarea 
              readOnly value={output}
              className="w-full h-full p-6 bg-indigo-50/30 border border-indigo-100 rounded-3xl outline-none font-mono text-xs resize-none text-indigo-900"
            />
            {output && (
              <button onClick={copy} className="absolute right-6 bottom-6 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 shadow-lg active:scale-95 transition-all text-indigo-600">
                {copied ? 'Copied!' : 'Copy Result'}
              </button>
            )}
          </div>
        </div>
      </div>
      <button 
        onClick={convert}
        disabled={isProcessing}
        className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-bold hover:bg-indigo-700 flex items-center justify-center gap-3 shadow-lg shadow-indigo-100 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? (
          <>
            <RefreshCw size={20} className="animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <RefreshCw size={20} />
            Convert Data
          </>
        )}
      </button>
    </div>
  );
};

export const XmlJsonConverter = ({ mode }: { mode: 'xml-to-json' | 'json-to-xml' }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const convert = async () => {
    if (!input.trim()) return;
    setIsProcessing(true);
    
    // Simulate processing for better UX
    await new Promise(resolve => setTimeout(resolve, 600));

    try {
      if (mode === 'xml-to-json') {
        const result = xml2json(input, { compact: true, spaces: 2 });
        setOutput(result);
      } else {
        const result = json2xml(input, { compact: true, spaces: 2 });
        setOutput(result);
      }
    } catch (err) {
      setOutput('Error: Invalid input format');
    } finally {
      setIsProcessing(false);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Input {mode === 'xml-to-json' ? 'XML' : 'JSON'}</label>
          <textarea 
            value={input} onChange={(e) => setInput(e.target.value)}
            placeholder={mode === 'xml-to-json' ? '<note><to>User</to></note>' : '{"note":{"to":"User"}}'}
            className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl outline-none font-mono text-xs resize-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-600"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Output {mode === 'xml-to-json' ? 'JSON' : 'XML'}</label>
          <div className="relative h-64 group">
            <textarea 
              readOnly value={output}
              className="w-full h-full p-6 bg-indigo-50/30 border border-indigo-100 rounded-3xl outline-none font-mono text-xs resize-none text-indigo-900"
            />
            {output && (
              <button onClick={copy} className="absolute right-6 bottom-6 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 shadow-lg active:scale-95 transition-all text-indigo-600">
                {copied ? 'Copied!' : 'Copy Result'}
              </button>
            )}
          </div>
        </div>
      </div>
      <button 
        onClick={convert}
        disabled={isProcessing}
        className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-bold hover:bg-indigo-700 flex items-center justify-center gap-3 shadow-lg shadow-indigo-100 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? (
          <>
            <RefreshCw size={20} className="animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <RefreshCw size={20} />
            Convert Data
          </>
        )}
      </button>
    </div>
  );
};

export const Base64ToImage = () => {
  const [base64, setBase64] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const convert = async () => {
    if (!base64.trim()) return;
    setIsProcessing(true);
    
    // Simulate processing for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    let finalBase64 = base64.trim();
    if (!finalBase64.startsWith('data:image')) {
      finalBase64 = `data:image/png;base64,${finalBase64}`;
    }
    setImage(finalBase64);
    setIsProcessing(false);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-3">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Paste Base64 String</label>
        <textarea 
          value={base64} onChange={(e) => setBase64(e.target.value)}
          placeholder="Paste Base64 string here (with or without data:image prefix)..."
          className="w-full h-48 p-6 bg-slate-50 border border-slate-200 rounded-3xl outline-none font-mono text-xs resize-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-600"
        />
      </div>
      <button 
        onClick={convert}
        disabled={isProcessing}
        className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-bold hover:bg-indigo-700 flex items-center justify-center gap-3 shadow-lg shadow-indigo-100 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? (
          <>
            <RefreshCw size={20} className="animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <ImageIcon size={20} />
            Preview Image
          </>
        )}
      </button>
      {image && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-10 bg-slate-50 rounded-[40px] text-center border border-slate-100 shadow-inner">
          <div className="relative group inline-block">
            <img src={image} alt="Preview" className="max-w-full max-h-96 mx-auto rounded-3xl shadow-2xl border-4 border-white transition-transform group-hover:scale-[1.02]" />
          </div>
          <div className="mt-8">
            <a 
              href={image} download="converted-image.png" 
              className="inline-flex items-center gap-3 px-10 py-4 bg-emerald-600 text-white rounded-2xl font-bold text-sm hover:bg-emerald-700 shadow-lg shadow-emerald-100 active:scale-95 transition-all"
            >
              <ImageIcon size={18} /> Download Image
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};
