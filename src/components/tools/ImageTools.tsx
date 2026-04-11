import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { FileUp, Download, Loader2, Minimize, Maximize, RefreshCw, Binary, ImageIcon, Scissors, Type } from 'lucide-react';
import { createWorker } from 'tesseract.js';
import { motion } from 'motion/react';
import Cropper from 'react-easy-crop';
import { useLanguage } from '../../context/LanguageContext';

const downloadUrl = (url: string, name: string) => {
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
};

export const ImageCompressor = () => {
  const [file, setFile] = useState<File | null>(null);
  const [compressionLevel, setCompressionLevel] = useState(50);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{ url: string, size: number } | null>(null);
  const { t } = useLanguage();

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const process = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      // Calculate target size based on compression level
      // 0% level = high quality (large size)
      // 100% level = low quality (small size)
      const quality = Math.max(0.1, 1 - (compressionLevel / 100));
      const options = {
        maxSizeMB: (file.size / (1024 * 1024)) * quality,
        initialQuality: quality,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);
      const url = URL.createObjectURL(compressedFile);
      setResult({ 
        url, 
        size: compressedFile.size
      });
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  const estimatedSize = file ? file.size * Math.max(0.1, 1 - (compressionLevel / 100) * 0.8) : 0;

  return (
    <div className="space-y-6 text-center">
      {!file ? (
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 hover:border-indigo-400 transition-all bg-slate-50/50 relative group">
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <ImageIcon size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <ImageIcon size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => { setFile(null); setResult(null); }} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end px-1">
                <div className="space-y-1 text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Compression Level</p>
                  <p className="text-2xl font-black text-indigo-600">{compressionLevel}%</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Estimated Reduction</p>
                  <p className="text-lg font-bold text-green-600">-{compressionLevel}%</p>
                </div>
              </div>
              <div className="relative py-4">
                <input 
                  type="range" min="0" max="100" value={compressionLevel} 
                  onChange={(e) => {
                    setCompressionLevel(parseInt(e.target.value));
                    setResult(null);
                  }}
                  className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Original Size</p>
                <p className="text-lg font-black text-slate-700">{formatSize(file.size)}</p>
              </div>
              <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100 text-left">
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">Est. Compressed</p>
                <p className="text-lg font-black text-indigo-600">{formatSize(estimatedSize)}</p>
              </div>
            </div>

            {/* Comparison Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
                <span>Compressed</span>
                <span>Original</span>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                <div 
                  className="h-full bg-indigo-600 transition-all duration-500 ease-out" 
                  style={{ width: `${100 - compressionLevel}%` }}
                />
                <div 
                  className="h-full bg-indigo-100 transition-all duration-500 ease-out" 
                  style={{ width: `${compressionLevel}%` }}
                />
              </div>
            </div>
          </div>

          <button 
            onClick={process}
            disabled={processing}
            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
          >
            {processing ? <Loader2 className="animate-spin" size={20} /> : <Minimize size={20} />}
            {processing ? t('tools.processing') : 'Compress Image'}
          </button>

          {result && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-inner">
                <img src={result.url} alt="Compressed" className="w-full h-full object-contain" />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-2">
                  <span className="opacity-60">Final Size:</span>
                  <span>{formatSize(result.size)}</span>
                </div>
              </div>
              <button 
                onClick={() => downloadUrl(result.url, `compressed-${file.name}`)}
                className="w-full py-5 bg-emerald-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-emerald-700 flex items-center justify-center gap-3 transition-colors shadow-xl shadow-emerald-100"
              >
                <Download size={20} /> Download Compressed Image
              </button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export const ImageResizer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { t } = useLanguage();

  const process = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      await new Promise(resolve => img.onload = resolve);
      
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, width, height);
      
      const url = canvas.toDataURL('image/jpeg', 0.9);
      setResult(url);
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-6 text-center">
      {!file ? (
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 hover:border-indigo-400 transition-all bg-slate-50/50 relative group">
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Maximize size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <ImageIcon size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => { setFile(null); setResult(null); }} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4 text-left">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Width (px)</label>
              <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} className="w-full p-5 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:ring-2 focus:ring-indigo-500 font-bold text-slate-700 transition-all" />
            </div>
            <div className="space-y-4 text-left">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Height (px)</label>
              <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} className="w-full p-5 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:ring-2 focus:ring-indigo-500 font-bold text-slate-700 transition-all" />
            </div>
          </div>
          <button 
            onClick={process}
            disabled={processing}
            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
          >
            {processing ? <Loader2 className="animate-spin" size={20} /> : <Maximize size={20} />}
            {processing ? t('tools.processing') : 'Resize Image Now'}
          </button>
          {result && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <img src={result} alt="Resized" className="mx-auto max-h-64 rounded-2xl border border-slate-100" />
              <button 
                onClick={() => downloadUrl(result, 'resized-image.jpg')}
                className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline"
              >
                <Download size={18} /> Download Resized Image
              </button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export const ImageConverter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState('image/png');
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { t } = useLanguage();

  const process = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      await new Promise(resolve => img.onload = resolve);
      
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
      
      const url = canvas.toDataURL(format);
      setResult(url);
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-6 text-center">
      {!file ? (
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 hover:border-indigo-400 transition-all bg-slate-50/50 relative group">
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <RefreshCw size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <ImageIcon size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => { setFile(null); setResult(null); }} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>
          <div className="p-2 bg-slate-50 rounded-3xl border border-slate-100 flex flex-wrap justify-center gap-2">
            {['image/png', 'image/jpeg', 'image/webp'].map(f => (
              <button 
                key={f} onClick={() => setFormat(f)}
                className={`px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 ${format === f ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'}`}
              >
                {f.split('/')[1]}
              </button>
            ))}
          </div>
          <button 
            onClick={process}
            disabled={processing}
            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
          >
            {processing ? <Loader2 className="animate-spin" size={20} /> : <RefreshCw size={20} />}
            {processing ? t('tools.processing') : 'Convert Image Format'}
          </button>
          {result && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <img src={result} alt="Converted" className="mx-auto max-h-64 rounded-2xl border border-slate-100" />
              <button 
                onClick={() => downloadUrl(result, `converted-image.${format.split('/')[1]}`)}
                className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline"
              >
                <Download size={18} /> Download Converted Image
              </button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export const ImageToBase64 = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const process = async (f: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setResult(reader.result as string);
    };
    reader.readAsDataURL(f);
  };

  const copy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 text-center">
      {!file ? (
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 hover:border-indigo-400 transition-all bg-slate-50/50 relative group">
          <input type="file" accept="image/*" onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) {
              setFile(f);
              process(f);
            }
          }} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Binary size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <ImageIcon size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => { setFile(null); setResult(''); }} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>
          <div className="relative group">
            <textarea
              readOnly
              value={result}
              className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl outline-none font-mono text-xs break-all text-slate-600 focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <button 
              onClick={copy}
              className="absolute right-4 bottom-4 flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 shadow-lg active:scale-95 transition-all text-indigo-600"
            >
              {copied ? 'Copied!' : 'Copy Base64'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const ImageFilters = () => {
  const [file, setFile] = useState<File | null>(null);
  const [filter, setFilter] = useState('none');
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { t } = useLanguage();

  const filters = [
    { id: 'none', name: 'None' },
    { id: 'grayscale(100%)', name: 'B&W' },
    { id: 'sepia(100%)', name: 'Sepia' },
    { id: 'blur(5px)', name: 'Blur' },
    { id: 'invert(100%)', name: 'Invert' },
    { id: 'brightness(150%)', name: 'Bright' },
    { id: 'contrast(150%)', name: 'Contrast' },
    { id: 'hue-rotate(90deg)', name: 'Hue' },
  ];

  const process = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      await new Promise(resolve => img.onload = resolve);
      
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.filter = filter;
        ctx.drawImage(img, 0, 0);
      }
      
      const url = canvas.toDataURL('image/jpeg', 0.9);
      setResult(url);
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-6 text-center">
      {!file ? (
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 hover:border-indigo-400 transition-all bg-slate-50/50 relative group">
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <ImageIcon size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <ImageIcon size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => { setFile(null); setResult(null); }} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>
          <div className="p-2 bg-slate-50 rounded-3xl border border-slate-100 flex flex-wrap justify-center gap-2">
            {filters.map(f => (
              <button 
                key={f.id} onClick={() => setFilter(f.id)}
                className={`px-5 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 ${filter === f.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'}`}
              >
                {f.name}
              </button>
            ))}
          </div>
          <button 
            onClick={process}
            disabled={processing}
            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
          >
            {processing ? <Loader2 className="animate-spin" size={20} /> : <RefreshCw size={20} />}
            {processing ? t('tools.processing') : 'Apply Filter Now'}
          </button>
          {result && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-inner">
                <img src={result} alt="Filtered" className="w-full h-full object-contain" />
              </div>
              <button 
                onClick={() => downloadUrl(result, `filtered-${file.name}`)}
                className="w-full py-5 bg-emerald-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-emerald-700 flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-100 active:scale-[0.98]"
              >
                <Download size={20} /> Download Filtered Image
              </button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export const ImageCropper = () => {
  const [file, setFile] = useState<File | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { t } = useLanguage();

  const onCropComplete = (_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const process = async () => {
    if (!file || !croppedAreaPixels) return;
    setProcessing(true);
    try {
      const image = new Image();
      image.src = URL.createObjectURL(file);
      await new Promise(resolve => image.onload = resolve);

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;

      ctx?.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );

      const url = canvas.toDataURL('image/jpeg');
      setResult(url);
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-6 text-center">
      {!file ? (
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 hover:border-indigo-400 transition-all bg-slate-50/50 relative group">
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Scissors size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <ImageIcon size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => { setFile(null); setResult(null); }} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>
          
          {!result ? (
            <>
              <div className="relative h-64 sm:h-96 bg-slate-900 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Cropper
                  image={URL.createObjectURL(file)}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </div>
              <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 space-y-6 shadow-inner">
                <div className="flex justify-between items-center px-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Zoom Level</p>
                  <p className="text-sm font-black text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full">{zoom.toFixed(1)}x</p>
                </div>
                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-labelledby="Zoom"
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-indigo-600"
                />
              </div>
              <button 
                onClick={process}
                disabled={processing}
                className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
              >
                {processing ? <Loader2 className="animate-spin" size={20} /> : <Scissors size={20} />}
                {processing ? t('tools.processing') : 'Crop Image Now'}
              </button>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
              <div className="relative aspect-square max-w-xs mx-auto rounded-3xl overflow-hidden border-4 border-white bg-slate-50 shadow-2xl">
                <img src={result} alt="Cropped" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setResult(null)}
                  className="flex-1 py-5 bg-slate-100 text-slate-600 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-slate-200 active:scale-[0.98] transition-all shadow-sm"
                >
                  Back to Crop
                </button>
                <button 
                  onClick={() => downloadUrl(result, `cropped-${file.name}`)}
                  className="flex-[2] py-5 bg-emerald-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-emerald-700 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-100"
                >
                  <Download size={20} /> Download
                </button>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export const ImageToText = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState('');
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const process = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const worker = await createWorker('eng', 1, {
        logger: m => {
          if (m.status === 'recognizing text') {
            setProgress(Math.round(m.progress * 100));
          }
        }
      });
      const { data: { text } } = await worker.recognize(file);
      setResult(text);
      await worker.terminate();
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 text-center">
      {!file ? (
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 hover:border-indigo-400 transition-all bg-slate-50/50 relative group">
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Type size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <ImageIcon size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => { setFile(null); setResult(''); setProgress(0); }} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>

          {!result && !processing && (
            <button 
              onClick={process}
              className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3"
            >
              <Type size={20} /> Extract Text from Image
            </button>
          )}

          {processing && (
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 space-y-6 shadow-inner">
              <div className="flex justify-between items-center px-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Processing Image</p>
                <p className="text-sm font-black text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full">{progress}%</p>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-indigo-600" 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs font-bold text-slate-400 animate-pulse">Running OCR engine...</p>
            </div>
          )}

          {result && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <div className="relative group">
                <textarea
                  readOnly
                  value={result}
                  className="w-full h-64 p-8 bg-slate-50 border border-slate-200 rounded-[40px] outline-none font-medium text-slate-700 focus:ring-2 focus:ring-indigo-500 transition-all leading-relaxed"
                />
                <button 
                  onClick={copy}
                  className="absolute right-6 bottom-6 flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 shadow-lg active:scale-95 transition-all text-indigo-600"
                >
                  {copied ? 'Copied!' : 'Copy Text'}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
