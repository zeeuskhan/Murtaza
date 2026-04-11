import React, { useState } from 'react';
import { Copy, Check, Download, RefreshCw, Youtube, MessageSquare, Instagram } from 'lucide-react';

const ToolContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    {children}
  </div>
);

const InputField: React.FC<{
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  type?: string;
}> = ({ label, value, onChange, placeholder, type = 'text' }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-slate-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
    />
  </div>
);

export const YoutubeThumbnailDownloader = () => {
  const [url, setUrl] = useState('');
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [error, setError] = useState('');

  const getThumbnail = () => {
    setError('');
    const videoId = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (videoId && videoId[1]) {
      setThumbnail(`https://img.youtube.com/vi/${videoId[1]}/maxresdefault.jpg`);
    } else {
      setThumbnail(null);
      setError('Invalid YouTube URL. Please check and try again.');
    }
  };

  return (
    <ToolContainer title="YouTube Thumbnail Downloader">
      <div className="space-y-4">
        <InputField label="YouTube Video URL" value={url} onChange={setUrl} placeholder="https://www.youtube.com/watch?v=..." />
        {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
        <button
          onClick={getThumbnail}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
        >
          <Youtube size={18} /> Get Thumbnail
        </button>
        {thumbnail && (
          <div className="space-y-4">
            <img src={thumbnail} alt="Thumbnail" className="w-full rounded-xl shadow-lg" referrerPolicy="no-referrer" />
            <a
              href={thumbnail}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              <Download size={18} /> Download High Res
            </a>
          </div>
        )}
      </div>
    </ToolContainer>
  );
};

export const WhatsappLinkGenerator = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [link, setLink] = useState('');
  const [copied, setCopied] = useState(false);

  const generateLink = () => {
    const cleanPhone = phone.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    setLink(`https://wa.me/${cleanPhone}?text=${encodedMessage}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="WhatsApp Link Generator">
      <div className="space-y-4">
        <InputField label="Phone Number (with country code)" value={phone} onChange={setPhone} placeholder="919876543210" />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Pre-filled Message (Optional)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hello, I'm interested in your services..."
            className="w-full h-24 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
          />
        </div>
        <button
          onClick={generateLink}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
        >
          <MessageSquare size={18} /> Generate Link
        </button>
        {link && (
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-4">
            <span className="text-xs font-mono truncate text-slate-600">{link}</span>
            <button onClick={copyToClipboard} className="text-indigo-600 hover:text-indigo-700 flex-shrink-0">
              {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
            </button>
          </div>
        )}
      </div>
    </ToolContainer>
  );
};

export const InstagramProfileGenerator = () => {
  const [username, setUsername] = useState('');
  const [link, setLink] = useState('');
  const [copied, setCopied] = useState(false);

  const generateLink = () => {
    setLink(`https://instagram.com/${username.replace('@', '')}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolContainer title="Instagram Profile Link Generator">
      <div className="space-y-4">
        <InputField label="Instagram Username" value={username} onChange={setUsername} placeholder="username" />
        <button
          onClick={generateLink}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
        >
          <Instagram size={18} /> Generate Link
        </button>
        {link && (
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-4">
            <span className="text-xs font-mono truncate text-slate-600">{link}</span>
            <button onClick={copyToClipboard} className="text-indigo-600 hover:text-indigo-700 flex-shrink-0">
              {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
            </button>
          </div>
        )}
      </div>
    </ToolContainer>
  );
};
