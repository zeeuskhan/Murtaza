import React, { useState, useRef } from 'react';
import { PDFDocument, rgb, degrees } from 'pdf-lib';
import { FileUp, Download, Loader2, Merge, Scissors, RotateCw, Minimize, ImageIcon, FileText, Type, Settings, Sparkles, Hash, Trash2, ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import mammoth from 'mammoth';
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import * as pdfjsLib from 'pdfjs-dist';

// Set worker source for pdfjs
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// Helper to download blob
const downloadBlob = (blob: Blob, name: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
};

export const MergePDF = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const { t } = useLanguage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const process = async () => {
    if (files.length < 2) return;
    setProcessing(true);
    try {
      const mergedPdf = await PDFDocument.create();
      for (const file of files) {
        const bytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(bytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }
      const pdfBytes = await mergedPdf.save();
      downloadBlob(new Blob([pdfBytes], { type: 'application/pdf' }), 'merged.pdf');
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-6 text-center">
      <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 hover:border-indigo-400 transition-all bg-slate-50/50 relative group">
        <input type="file" multiple accept=".pdf" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
        <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
          <FileUp size={32} className="text-indigo-600" />
        </div>
        <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        <p className="text-sm text-slate-400 mt-2">Selected: {files.length} files</p>
      </div>

      <div className="space-y-6">
        <div className="max-h-80 overflow-y-auto space-y-3 p-3 bg-slate-50 rounded-[40px] border border-slate-100 shadow-inner">
          {files.map((f, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm group hover:border-indigo-200 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <FileText size={18} />
                </div>
                <div className="text-left">
                  <p className="truncate max-w-[180px] sm:max-w-[300px] font-bold text-slate-700 text-sm">{f.name}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{(f.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>
              <button 
                onClick={() => setFiles(prev => prev.filter((_, idx) => idx !== i))} 
                className="text-slate-400 hover:text-red-500 font-bold text-[10px] uppercase tracking-widest p-2 hover:bg-red-50 rounded-xl transition-all active:scale-90"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button 
          onClick={process}
          disabled={files.length < 2 || processing}
          className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
        >
          {processing ? <Loader2 className="animate-spin" size={20} /> : <Merge size={20} />}
          {processing ? t('tools.processing') : 'Merge PDF Files'}
        </button>
      </div>
    </div>
  );
};

export const SplitPDF = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [range, setRange] = useState('1');
  const { t } = useLanguage();

  const process = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const splitPdf = await PDFDocument.create();
      
      // Simple range parsing: "1,2,3" or "1-5"
      const pages = range.split(',').flatMap(r => {
        if (r.includes('-')) {
          const [start, end] = r.split('-').map(Number);
          return Array.from({ length: end - start + 1 }, (_, i) => start + i - 1);
        }
        return [Number(r) - 1];
      }).filter(p => p >= 0 && p < pdf.getPageCount());

      const copiedPages = await splitPdf.copyPages(pdf, pages);
      copiedPages.forEach(p => splitPdf.addPage(p));
      
      const pdfBytes = await splitPdf.save();
      downloadBlob(new Blob([pdfBytes], { type: 'application/pdf' }), 'split.pdf');
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
          <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <FileUp size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <FileText size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => setFile(null)} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>
          <div className="space-y-4 text-left">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Page Range</label>
              <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">e.g. 1-3, 5</span>
            </div>
            <input 
              type="text" value={range} onChange={(e) => setRange(e.target.value)}
              placeholder="Enter page numbers..."
              className="w-full p-5 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:ring-2 focus:ring-indigo-500 font-bold text-slate-700 transition-all placeholder:text-slate-300"
            />
          </div>
          <button 
            onClick={process}
            disabled={processing}
            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
          >
            {processing ? <Loader2 className="animate-spin" size={20} /> : <Scissors size={20} />}
            {processing ? t('tools.processing') : 'Split PDF File'}
          </button>
        </div>
      )}
    </div>
  );
};

export const RotatePDF = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [rotation, setRotation] = useState(90);
  const { t } = useLanguage();

  const process = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const pages = pdf.getPages();
      pages.forEach(p => p.setRotation(degrees(rotation)));
      
      const pdfBytes = await pdf.save();
      downloadBlob(new Blob([pdfBytes], { type: 'application/pdf' }), 'rotated.pdf');
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
          <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <FileUp size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <FileText size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => setFile(null)} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>
          <div className="p-8 bg-slate-50 rounded-[40px] border border-slate-100 grid grid-cols-3 gap-2">
            {[90, 180, 270].map(r => (
              <button 
                key={r} onClick={() => setRotation(r)}
                className={`py-5 rounded-2xl font-black text-sm transition-all active:scale-95 ${rotation === r ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'}`}
              >
                {r}°
              </button>
            ))}
          </div>
          <button 
            onClick={process}
            disabled={processing}
            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
          >
            {processing ? <Loader2 className="animate-spin" size={20} /> : <RotateCw size={20} />}
            {processing ? t('tools.processing') : 'Rotate PDF Pages'}
          </button>
        </div>
      )}
    </div>
  );
};

export const CompressPDF = () => {
  const [file, setFile] = useState<File | null>(null);
  const [compressionLevel, setCompressionLevel] = useState(50);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{ size: number } | null>(null);
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
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      
      // pdf-lib's compression is mostly structural optimization
      // Higher levels use more aggressive object stream settings
      const pdfBytes = await pdf.save({
        useObjectStreams: compressionLevel > 0,
        updateFieldAppearances: compressionLevel < 50
      });
      
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      setResult({ size: blob.size });
      downloadBlob(blob, `compressed-${file.name}`);
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  const estimatedSize = file ? file.size * Math.max(0.7, 1 - (compressionLevel / 100) * 0.2) : 0;

  return (
    <div className="space-y-6 text-center">
      {!file ? (
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 hover:border-indigo-400 transition-all bg-slate-50/50 relative group">
          <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Minimize size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <FileText size={18} />
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
                  <p className="text-lg font-bold text-green-600">-{Math.round((1 - estimatedSize / file.size) * 100)}%</p>
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
                  style={{ width: `${(estimatedSize / file.size) * 100}%` }}
                />
                <div 
                  className="h-full bg-indigo-100 transition-all duration-500 ease-out" 
                  style={{ width: `${(1 - estimatedSize / file.size) * 100}%` }}
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
            {processing ? t('tools.processing') : 'Compress PDF'}
          </button>

          {result && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500 rounded-lg text-white">
                  <Download size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-emerald-600 uppercase">Success!</p>
                  <p className="text-sm font-bold text-slate-700">Final Size: {formatSize(result.size)}</p>
                </div>
              </div>
              <p className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">DOWNLOADED</p>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export const PDFtoJPG = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const { t } = useLanguage();

  const process = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: bytes });
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 2 });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      if (context) {
        await page.render({ canvasContext: context, viewport, canvas }).promise;
        canvas.toBlob((blob) => {
          if (blob) downloadBlob(blob, 'page-1.jpg');
        }, 'image/jpeg', 0.9);
      }
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
          <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
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
                <FileText size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => setFile(null)} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>
          <div className="p-6 bg-slate-50 rounded-[40px] border border-slate-100">
            <p className="text-sm text-slate-600 font-bold leading-relaxed">Converts the first page of your PDF into a high-quality JPG image.</p>
          </div>
          <button 
            onClick={process}
            disabled={processing}
            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
          >
            {processing ? <Loader2 className="animate-spin" size={20} /> : <ImageIcon size={20} />}
            {processing ? t('tools.processing') : 'Convert to JPG'}
          </button>
        </div>
      )}
    </div>
  );
};

export const JPGtoPDF = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const { t } = useLanguage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const process = async () => {
    if (files.length === 0) return;
    setProcessing(true);
    try {
      const pdf = await PDFDocument.create();
      for (const file of files) {
        const bytes = await file.arrayBuffer();
        let image;
        if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
          image = await pdf.embedJpg(bytes);
        } else if (file.type === 'image/png') {
          image = await pdf.embedPng(bytes);
        } else {
          continue;
        }
        const page = pdf.addPage([image.width, image.height]);
        page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
      }
      const pdfBytes = await pdf.save();
      downloadBlob(new Blob([pdfBytes], { type: 'application/pdf' }), 'images.pdf');
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-6 text-center">
      <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 hover:border-indigo-400 transition-all bg-slate-50/50 relative group">
        <input type="file" multiple accept="image/jpeg,image/png" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
        <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
          <ImageIcon size={32} className="text-indigo-600" />
        </div>
        <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        <p className="text-sm text-slate-400 mt-2">Selected: {files.length} images</p>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 max-h-80 overflow-y-auto p-4 bg-slate-50 rounded-[32px] border border-slate-100 shadow-inner">
          {files.map((f, i) => (
            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-sm group hover:scale-105 transition-all">
              <img src={URL.createObjectURL(f)} alt="" className="w-full h-full object-cover" />
              <button 
                onClick={() => setFiles(prev => prev.filter((_, idx) => idx !== i))} 
                className="absolute top-1.5 right-1.5 w-7 h-7 bg-red-500/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center text-sm font-black shadow-lg hover:bg-red-600 transition-colors active:scale-90"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <button 
          onClick={process} 
          disabled={files.length === 0 || processing} 
          className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
        >
          {processing ? <Loader2 className="animate-spin" size={20} /> : <FileText size={20} />}
          {processing ? t('tools.processing') : 'Convert Images to PDF'}
        </button>
      </div>
    </div>
  );
};

export const PDFtoWord = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const { t } = useLanguage();

  const process = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: bytes });
      const pdf = await loadingTask.promise;
      
      const paragraphs: Paragraph[] = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const text = textContent.items.map((item: any) => item.str).join(' ');
        paragraphs.push(new Paragraph({
          children: [new TextRun(text)],
        }));
      }

      const doc = new Document({
        sections: [{
          properties: {},
          children: paragraphs,
        }],
      });

      const blob = await Packer.toBlob(doc);
      downloadBlob(blob, `${file.name.replace('.pdf', '')}.docx`);
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
          <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <FileText size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <FileText size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => setFile(null)} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>
          <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100">
            <p className="text-sm text-slate-600 font-bold leading-relaxed">Extracts text from your PDF and saves it as a Word document (.docx).</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => setFile(null)}
              className="flex-1 py-5 bg-slate-100 text-slate-600 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-slate-200 active:scale-[0.98] transition-all shadow-sm"
            >
              Change File
            </button>
            <button 
              onClick={process}
              disabled={processing}
              className="flex-[2] py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
            >
              {processing ? <Loader2 className="animate-spin" size={20} /> : <FileText size={20} />}
              {processing ? t('tools.processing') : 'Convert to Word'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const WordtoPDF = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const { t } = useLanguage();

  const process = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      const html = result.value;
      
      const doc = new jsPDF();
      // Simple text-based conversion for now as doc.html is complex to set up
      const text = html.replace(/<[^>]*>/g, '\n').trim();
      const lines = doc.splitTextToSize(text, 180);
      doc.text(lines, 10, 10);
      doc.save(`${file.name.replace('.docx', '').replace('.doc', '')}.pdf`);
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
          <input type="file" accept=".doc,.docx" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <FileUp size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <FileText size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => setFile(null)} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>
          <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100">
            <p className="text-sm text-slate-600 font-bold leading-relaxed">Converts your Word document (.doc, .docx) to PDF format.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => setFile(null)}
              className="flex-1 py-5 bg-slate-100 text-slate-600 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-slate-200 active:scale-[0.98] transition-all shadow-sm"
            >
              Change File
            </button>
            <button 
              onClick={process}
              disabled={processing}
              className="flex-[2] py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
            >
              {processing ? <Loader2 className="animate-spin" size={20} /> : <FileUp size={20} />}
              {processing ? t('tools.processing') : 'Convert to PDF'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const PDFtoText = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const process = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item: any) => item.str).join(' ');
        fullText += pageText + '\n\n';
      }
      setResult(fullText);
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

  const download = () => {
    downloadBlob(new Blob([result], { type: 'text/plain' }), `${file?.name.replace('.pdf', '')}.txt`);
  };

  return (
    <div className="space-y-6 text-center">
      {!file ? (
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 hover:border-indigo-400 transition-all bg-slate-50/50 relative group">
          <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
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
                <FileText size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => { setFile(null); setResult(''); }} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>

          {!result && !processing && (
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => { setFile(null); setResult(''); }}
                className="flex-1 py-5 bg-slate-100 text-slate-600 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-slate-200 active:scale-[0.98] transition-all shadow-sm"
              >
                Change File
              </button>
              <button 
                onClick={process}
                className="flex-[2] py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3"
              >
                <Type size={20} /> Extract Text from PDF
              </button>
            </div>
          )}

          {processing && (
            <div className="py-12 flex flex-col items-center gap-4">
              <Loader2 className="animate-spin text-indigo-600" size={48} />
              <p className="text-slate-500 font-bold animate-pulse">Extracting text from pages...</p>
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
                <div className="absolute right-6 bottom-6 flex gap-3">
                  <button 
                    onClick={copy}
                    className="flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-slate-50 shadow-xl active:scale-[0.98] transition-all text-indigo-600"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <button 
                    onClick={download}
                    className="flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-emerald-700 shadow-xl shadow-emerald-100 active:scale-[0.98] transition-all"
                  >
                    <Download size={18} /> Download .txt
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export const OrganizePDF = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [pages, setPages] = useState<number[]>([]);
  const { t } = useLanguage();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      setFile(f);
      const bytes = await f.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      setPages(Array.from({ length: pdf.getPageCount() }, (_, i) => i));
    }
  };

  const movePage = (index: number, direction: 'up' | 'down') => {
    const newPages = [...pages];
    const target = direction === 'up' ? index - 1 : index + 1;
    if (target >= 0 && target < newPages.length) {
      [newPages[index], newPages[target]] = [newPages[target], newPages[index]];
      setPages(newPages);
    }
  };

  const deletePage = (index: number) => {
    setPages(prev => prev.filter((_, i) => i !== index));
  };

  const process = async () => {
    if (!file || pages.length === 0) return;
    setProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const srcPdf = await PDFDocument.load(bytes);
      const newPdf = await PDFDocument.create();
      const copiedPages = await newPdf.copyPages(srcPdf, pages);
      copiedPages.forEach(p => newPdf.addPage(p));
      const pdfBytes = await newPdf.save();
      downloadBlob(new Blob([pdfBytes], { type: 'application/pdf' }), `organized-${file.name}`);
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
          <input type="file" accept=".pdf" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Settings size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <FileText size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => setFile(null)} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[400px] overflow-y-auto p-4 bg-slate-50 rounded-[32px] border border-slate-100">
            {pages.map((pageIdx, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="aspect-[3/4] bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 font-bold text-xl">
                  {pageIdx + 1}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <button onClick={() => movePage(i, 'up')} disabled={i === 0} className="p-1.5 hover:bg-slate-100 rounded-lg disabled:opacity-30"><ArrowUp size={14} /></button>
                    <button onClick={() => movePage(i, 'down')} disabled={i === pages.length - 1} className="p-1.5 hover:bg-slate-100 rounded-lg disabled:opacity-30"><ArrowDown size={14} /></button>
                  </div>
                  <button onClick={() => deletePage(i)} className="p-1.5 hover:bg-red-50 text-red-500 rounded-lg"><Trash2 size={14} /></button>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={process}
            disabled={processing || pages.length === 0}
            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
          >
            {processing ? <Loader2 className="animate-spin" size={20} /> : <Settings size={20} />}
            {processing ? t('tools.processing') : 'Save Organized PDF'}
          </button>
        </div>
      )}
    </div>
  );
};

export const AddWatermark = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [text, setText] = useState('CONFIDENTIAL');
  const [opacity, setOpacity] = useState(0.3);
  const { t } = useLanguage();

  const process = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const pages = pdf.getPages();
      
      for (const page of pages) {
        const { width, height } = page.getSize();
        page.drawText(text, {
          x: width / 4,
          y: height / 2,
          size: 50,
          opacity: opacity,
          rotate: degrees(45),
          color: rgb(0.5, 0.5, 0.5),
        });
      }
      
      const pdfBytes = await pdf.save();
      downloadBlob(new Blob([pdfBytes], { type: 'application/pdf' }), `watermarked-${file.name}`);
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
          <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Sparkles size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <FileText size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => setFile(null)} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>
          
          <div className="space-y-4 text-left bg-slate-50 p-8 rounded-[40px] border border-slate-100">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Watermark Text</label>
              <input 
                type="text" value={text} onChange={(e) => setText(e.target.value)}
                className="w-full p-5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 font-bold text-slate-700 transition-all"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between px-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Opacity</label>
                <span className="text-[10px] font-bold text-indigo-600">{Math.round(opacity * 100)}%</span>
              </div>
              <input 
                type="range" min="0.1" max="1" step="0.1" value={opacity} onChange={(e) => setOpacity(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          </div>

          <button 
            onClick={process}
            disabled={processing}
            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
          >
            {processing ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
            {processing ? t('tools.processing') : 'Add Watermark'}
          </button>
        </div>
      )}
    </div>
  );
};

export const AddPageNumbers = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [position, setPosition] = useState<'bottom-center' | 'bottom-right' | 'top-center'>('bottom-center');
  const { t } = useLanguage();

  const process = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const pages = pdf.getPages();
      
      pages.forEach((page, i) => {
        const { width, height } = page.getSize();
        const text = `Page ${i + 1} of ${pages.length}`;
        let x = width / 2 - 20;
        let y = 20;

        if (position === 'bottom-right') {
          x = width - 80;
        } else if (position === 'top-center') {
          y = height - 30;
        }

        page.drawText(text, {
          x,
          y,
          size: 10,
          color: rgb(0.3, 0.3, 0.3),
        });
      });
      
      const pdfBytes = await pdf.save();
      downloadBlob(new Blob([pdfBytes], { type: 'application/pdf' }), `numbered-${file.name}`);
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
          <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Hash size={32} className="text-indigo-600" />
          </div>
          <p className="text-slate-600 font-bold text-lg">{t('tools.dropzone')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <FileText size={18} />
              </div>
              <span className="font-bold text-indigo-900 truncate max-w-[200px]">{file.name}</span>
            </div>
            <button onClick={() => setFile(null)} className="text-xs font-bold text-indigo-600 hover:text-red-500 uppercase tracking-wider p-2 hover:bg-white rounded-lg transition-colors">Change</button>
          </div>
          
          <div className="grid grid-cols-1 gap-3 p-8 bg-slate-50 rounded-[40px] border border-slate-100">
            {[
              { id: 'bottom-center', label: 'Bottom Center' },
              { id: 'bottom-right', label: 'Bottom Right' },
              { id: 'top-center', label: 'Top Center' }
            ].map(pos => (
              <button 
                key={pos.id} onClick={() => setPosition(pos.id as any)}
                className={`py-4 px-6 rounded-2xl font-bold text-sm transition-all ${position === pos.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'}`}
              >
                {pos.label}
              </button>
            ))}
          </div>

          <button 
            onClick={process}
            disabled={processing}
            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
          >
            {processing ? <Loader2 className="animate-spin" size={20} /> : <Hash size={20} />}
            {processing ? t('tools.processing') : 'Add Page Numbers'}
          </button>
        </div>
      )}
    </div>
  );
};
