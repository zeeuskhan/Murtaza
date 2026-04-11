import React, { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';
import CryptoJS from 'crypto-js';
import yaml from 'js-yaml';

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

export const MD5Hash = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const generateHash = () => {
    setOutput(CryptoJS.MD5(input).toString());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="MD5 Hash Generator">
      <TextArea label="Input Text" value={input} onChange={setInput} placeholder="Enter text to hash..." />
      <ActionButtons onAction={generateHash} actionLabel="Generate MD5" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="MD5 Hash" value={output} readOnly />}
    </ToolContainer>
  );
};

export const SHA256Hash = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const generateHash = () => {
    setOutput(CryptoJS.SHA256(input).toString());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="SHA-256 Hash Generator">
      <TextArea label="Input Text" value={input} onChange={setInput} placeholder="Enter text to hash..." />
      <ActionButtons onAction={generateHash} actionLabel="Generate SHA-256" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="SHA-256 Hash" value={output} readOnly />}
    </ToolContainer>
  );
};

export const Base64Encoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const encode = () => {
    setOutput(btoa(input));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="Base64 Encoder">
      <TextArea label="Input Text" value={input} onChange={setInput} placeholder="Enter text to encode..." />
      <ActionButtons onAction={encode} actionLabel="Encode to Base64" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="Encoded Base64" value={output} readOnly />}
    </ToolContainer>
  );
};

export const Base64Decoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const decode = () => {
    try {
      setOutput(atob(input));
    } catch (e) {
      setOutput('Invalid Base64 string');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="Base64 Decoder">
      <TextArea label="Input Base64" value={input} onChange={setInput} placeholder="Enter Base64 string to decode..." />
      <ActionButtons onAction={decode} actionLabel="Decode from Base64" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="Decoded Text" value={output} readOnly />}
    </ToolContainer>
  );
};

export const JSONtoYAML = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const convert = () => {
    try {
      const obj = JSON.parse(input);
      setOutput(yaml.dump(obj));
    } catch (e) {
      setOutput('Invalid JSON');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="JSON to YAML Converter">
      <TextArea label="Input JSON" value={input} onChange={setInput} placeholder="Paste your JSON here..." />
      <ActionButtons onAction={convert} actionLabel="Convert to YAML" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="YAML Output" value={output} readOnly />}
    </ToolContainer>
  );
};

export const YAMLtoJSON = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const convert = () => {
    try {
      const obj = yaml.load(input);
      setOutput(JSON.stringify(obj, null, 2));
    } catch (e) {
      setOutput('Invalid YAML');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="YAML to JSON Converter">
      <TextArea label="Input YAML" value={input} onChange={setInput} placeholder="Paste your YAML here..." />
      <ActionButtons onAction={convert} actionLabel="Convert to JSON" onCopy={copyToClipboard} onClear={() => { setInput(''); setOutput(''); }} copied={copied} />
      {output && <TextArea label="JSON Output" value={output} readOnly />}
    </ToolContainer>
  );
};

export const UUIDGenerator = () => {
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setOutput(crypto.randomUUID());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="UUID Generator">
      <div className="space-y-4">
        <button
          onClick={generate}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
        >
          <RefreshCw size={18} /> Generate UUID
        </button>
        {output && (
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
            <span className="font-mono text-sm">{output}</span>
            <button onClick={copyToClipboard} className="text-indigo-600 hover:text-indigo-700">
              {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
            </button>
          </div>
        )}
      </div>
    </ToolContainer>
  );
};

export const UnixTimestampConverter = () => {
  const [input, setInput] = useState(Math.floor(Date.now() / 1000).toString());
  const [output, setOutput] = useState('');

  const convert = () => {
    const date = new Date(parseInt(input) * 1000);
    setOutput(date.toString());
  };

  return (
    <ToolContainer title="Unix Timestamp Converter">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Unix Timestamp</label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none font-mono text-sm"
          />
        </div>
        <button
          onClick={convert}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
        >
          Convert to Date
        </button>
        {output && (
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-sm">{output}</span>
          </div>
        )}
      </div>
    </ToolContainer>
  );
};
