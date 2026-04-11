import React, { useState } from 'react';
import { Copy, Check, Download, RefreshCw } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ToolContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    {children}
  </div>
);

const TextArea: React.FC<{
  label: string;
  value: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  readOnly?: boolean;
}> = ({ label, value, onChange, placeholder, readOnly }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-slate-700">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      readOnly={readOnly}
      className="w-full h-48 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none font-mono text-sm"
    />
  </div>
);

const ActionButtons: React.FC<{
  onAction: () => void;
  actionLabel: string;
  onCopy: () => void;
  onClear: () => void;
  copied: boolean;
}> = ({ onAction, actionLabel, onCopy, onClear, copied }) => (
  <div className="flex flex-wrap gap-3">
    <button
      onClick={onAction}
      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
    >
      <RefreshCw size={18} /> {actionLabel}
    </button>
    <button
      onClick={onCopy}
      className="bg-white border border-slate-200 text-slate-600 hover:border-indigo-600 hover:text-indigo-600 px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
    >
      {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
    <button
      onClick={onClear}
      className="bg-white border border-slate-200 text-slate-600 hover:border-red-600 hover:text-red-600 px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
    >
      Clear
    </button>
  </div>
);

export const HTMLFormatter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const formatHTML = () => {
    let formatted = '';
    let indent = '';
    const tab = '  ';
    input.split(/>\s*</).forEach((element) => {
      if (element.match(/^\/\w/)) indent = indent.substring(tab.length);
      formatted += indent + '<' + element + '>\r\n';
      if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith('input') && !element.startsWith('img') && !element.startsWith('br') && !element.startsWith('hr')) {
        indent += tab;
      }
    });
    setOutput(formatted.substring(1, formatted.length - 3));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="HTML Formatter">
      <TextArea label="Input HTML" value={input} onChange={setInput} placeholder="Paste your messy HTML here..." />
      <ActionButtons onAction={formatHTML} actionLabel="Format HTML" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="Formatted HTML" value={output} readOnly />}
    </ToolContainer>
  );
};

export const HTMLMinifier = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const minifyHTML = () => {
    const minified = input.replace(/\s+/g, ' ').replace(/>\s+</g, '><').trim();
    setOutput(minified);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="HTML Minifier">
      <TextArea label="Input HTML" value={input} onChange={setInput} placeholder="Paste your HTML here..." />
      <ActionButtons onAction={minifyHTML} actionLabel="Minify HTML" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="Minified HTML" value={output} readOnly />}
    </ToolContainer>
  );
};

export const CSSFormatter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const formatCSS = () => {
    const formatted = input
      .replace(/\s*\{\s*/g, ' {\n  ')
      .replace(/\s*;\s*/g, ';\n  ')
      .replace(/\s*\}\s*/g, '\n}\n\n')
      .replace(/\n  \n/g, '\n')
      .replace(/\n\n\}/g, '\n}')
      .trim();
    setOutput(formatted);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="CSS Formatter">
      <TextArea label="Input CSS" value={input} onChange={setInput} placeholder="Paste your messy CSS here..." />
      <ActionButtons onAction={formatCSS} actionLabel="Format CSS" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="Formatted CSS" value={output} readOnly />}
    </ToolContainer>
  );
};

export const CSSMinifier = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const minifyCSS = () => {
    const minified = input
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\s+/g, ' ')
      .replace(/\s*\{\s*/g, '{')
      .replace(/\s*\}\s*/g, '}')
      .replace(/\s*:\s*/g, ':')
      .replace(/\s*;\s*/g, ';')
      .replace(/;}/g, '}')
      .trim();
    setOutput(minified);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="CSS Minifier">
      <TextArea label="Input CSS" value={input} onChange={setInput} placeholder="Paste your CSS here..." />
      <ActionButtons onAction={minifyCSS} actionLabel="Minify CSS" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="Minified CSS" value={output} readOnly />}
    </ToolContainer>
  );
};

export const JSFormatter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const formatJS = () => {
    // Simple naive formatter
    const formatted = input
      .replace(/\s*\{\s*/g, ' {\n  ')
      .replace(/\s*;\s*/g, ';\n  ')
      .replace(/\s*\}\s*/g, '\n}\n')
      .replace(/\n\s*\n/g, '\n')
      .trim();
    setOutput(formatted);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="JS Formatter">
      <TextArea label="Input JS" value={input} onChange={setInput} placeholder="Paste your messy JS here..." />
      <ActionButtons onAction={formatJS} actionLabel="Format JS" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="Formatted JS" value={output} readOnly />}
    </ToolContainer>
  );
};

export const JSMinifier = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const minifyJS = () => {
    const minified = input
      .replace(/\/\/.*?\n/g, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\s+/g, ' ')
      .replace(/\s*\{\s*/g, '{')
      .replace(/\s*\}\s*/g, '}')
      .replace(/\s*:\s*/g, ':')
      .replace(/\s*;\s*/g, ';')
      .replace(/\s*,\s*/g, ',')
      .trim();
    setOutput(minified);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="JS Minifier">
      <TextArea label="Input JS" value={input} onChange={setInput} placeholder="Paste your JS here..." />
      <ActionButtons onAction={minifyJS} actionLabel="Minify JS" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="Minified JS" value={output} readOnly />}
    </ToolContainer>
  );
};

export const URLEncoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const encodeURL = () => {
    setOutput(encodeURIComponent(input));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="URL Encoder">
      <TextArea label="Input Text" value={input} onChange={setInput} placeholder="Enter text to encode..." />
      <ActionButtons onAction={encodeURL} actionLabel="Encode URL" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="Encoded URL" value={output} readOnly />}
    </ToolContainer>
  );
};

export const URLDecoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const decodeURL = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch (e) {
      setOutput('Invalid URL encoding');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="URL Decoder">
      <TextArea label="Input Encoded URL" value={input} onChange={setInput} placeholder="Enter encoded URL to decode..." />
      <ActionButtons onAction={decodeURL} actionLabel="Decode URL" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="Decoded Text" value={output} readOnly />}
    </ToolContainer>
  );
};
