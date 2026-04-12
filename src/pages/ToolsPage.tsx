import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ArrowRight, 
  FileText, 
  Image as ImageIcon, 
  Code, 
  Settings, 
  Shield, 
  Zap, 
  Globe, 
  Share2, 
  X, 
  Star, 
  Clock, 
  Check, 
  MessageSquare,
  Lock,
  Terminal,
  Layout,
  Hash,
  Type,
  FileSearch,
  FileJson,
  FileCode,
  FileText as FileTextIcon,
  Sparkles,
  Link as LinkIcon,
  Mail,
  CreditCard,
  Key,
  RefreshCw,
  Trash2,
  Binary,
  Volume2,
  ArrowRightLeft,
  Loader2,
  Calculator,
  Activity,
  Calendar,
  Scan
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

// Tool Components Imports
import { 
  MergePDF, 
  SplitPDF, 
  RotatePDF, 
  CompressPDF, 
  PDFtoJPG, 
  JPGtoPDF,
  PDFtoWord,
  WordtoPDF,
  PDFtoText,
  OrganizePDF,
  AddWatermark,
  AddPageNumbers
} from '../components/tools/PDFTools';
import { 
  AITextGen, 
  AISummarizer 
} from '../components/tools/AITools';
import { 
  ImageResizer, 
  ImageConverter, 
  ImageCompressor, 
  ImageToBase64,
  ImageFilters,
  ImageCropper,
  ImageToText
} from '../components/tools/ImageTools';
import { 
  CaseConverter, 
  WordCounter, 
  LoremIpsumGenerator, 
  TextToSpeech, 
  RemoveDuplicateLines, 
  ReverseText, 
  BinaryConverter, 
  JsonFormatter, 
  SqlFormatter, 
  ExtractEmails, 
  ExtractURLs, 
  TextToMorse,
  MorseToText 
} from '../components/tools/TextTools';
import { 
  UnitConverter,
  JsonCsvConverter,
  XmlJsonConverter,
  Base64ToImage
} from '../components/tools/ConverterTools';
import { 
  MD5Hash, 
  SHA256Hash, 
  Base64Encoder, 
  Base64Decoder, 
  JSONtoYAML, 
  YAMLtoJSON, 
  UUIDGenerator, 
  UnixTimestampConverter 
} from '../components/tools/DevTools';
import { 
  HTMLFormatter, 
  HTMLMinifier, 
  CSSFormatter, 
  CSSMinifier, 
  JSFormatter, 
  JSMinifier, 
  URLEncoder, 
  URLDecoder 
} from '../components/tools/WebTools';
import {
  PasswordGenerator,
  BMICalculator,
  AgeCalculator,
  QRGenerator,
  DateCalculator,
  URLShortener,
  QRScanner as QRScannerUtil,
  PercentageCalculator,
  RandomNumberGenerator,
  RandomStringGenerator
} from '../components/tools/UtilityTools';
import { 
  YoutubeThumbnailDownloader, 
  WhatsappLinkGenerator, 
  InstagramProfileGenerator 
} from '../components/tools/SocialTools';
import { 
  PasswordStrengthMeter, 
  CreditCardValidator, 
  IBANValidator 
} from '../components/tools/SecurityTools';
import { toolSEOContent } from '../data/toolSEOContent';

// Tool definitions
export const tools = [
  // PDF Tools
  { id: 'merge-pdf', name: 'Merge PDF', description: 'Combine multiple PDF files into one single document instantly.', category: 'pdf', icon: FileText, popular: true },
  { id: 'split-pdf', name: 'Split PDF', description: 'Extract specific pages or split your PDF into multiple files.', category: 'pdf', icon: FileText },
  { id: 'rotate-pdf', name: 'Rotate PDF', description: 'Rotate PDF pages permanently in any direction.', category: 'pdf', icon: FileText },
  { id: 'compress-pdf', name: 'Compress PDF', description: 'Reduce PDF file size while maintaining document quality.', category: 'pdf', icon: FileText, popular: true },
  { id: 'pdf-to-jpg', name: 'PDF to JPG', description: 'Convert PDF pages into high-quality JPG images.', category: 'pdf', icon: ImageIcon },
  { id: 'jpg-to-pdf', name: 'JPG to PDF', description: 'Convert JPG images to a professional PDF document.', category: 'pdf', icon: FileText },
  { id: 'pdf-to-word', name: 'PDF to Word', description: 'Convert PDF documents to editable Microsoft Word files.', category: 'pdf', icon: FileTextIcon },
  { id: 'word-to-pdf', name: 'Word to PDF', description: 'Convert Word documents (.docx) to PDF format.', category: 'pdf', icon: FileTextIcon },
  { id: 'pdf-to-text', name: 'PDF to Text', description: 'Extract plain text from your PDF documents.', category: 'pdf', icon: Type },
  { id: 'unlock-pdf', name: 'Organize PDF', description: 'Reorder, rotate, or delete pages from your PDF document.', category: 'pdf', icon: Settings },
  { id: 'protect-pdf', name: 'Add Watermark', description: 'Add text or image watermarks to your PDF pages.', category: 'pdf', icon: Sparkles },
  { id: 'add-page-numbers', name: 'Add Page Numbers', description: 'Add customizable page numbers to your PDF document.', category: 'pdf', icon: Hash },

  // Image Tools
  { id: 'image-resizer', name: 'Image Resizer', description: 'Change image dimensions for social media or web.', category: 'image', icon: ImageIcon, popular: true },
  { id: 'image-converter', name: 'Image Converter', description: 'Convert between JPG, PNG, WEBP, and more.', category: 'image', icon: ImageIcon },
  { id: 'image-compressor', name: 'Image Compressor', description: 'Reduce image file size without losing quality.', category: 'image', icon: ImageIcon, popular: true },
  { id: 'image-to-pdf', name: 'Image to PDF', description: 'Convert JPG, PNG, and other images to PDF.', category: 'image', icon: FileText },
  { id: 'qr-generator', name: 'QR Code Generator', description: 'Create custom QR codes for URLs, text, or Wi-Fi.', category: 'image', icon: Layout },
  { id: 'qr-scanner', name: 'QR Code Scanner', description: 'Scan and decode QR codes from images or camera.', category: 'image', icon: FileSearch },
  { id: 'image-to-text', name: 'Image to Text (OCR)', description: 'Extract text from images using advanced OCR.', category: 'image', icon: Type },
  { id: 'image-to-base64', name: 'Image to Base64', description: 'Convert images to Base64 strings for web use.', category: 'image', icon: Code },
  { id: 'image-filters', name: 'Image Filters', description: 'Apply beautiful filters and effects to your images.', category: 'image', icon: Sparkles },
  { id: 'image-cropper', name: 'Image Cropper', description: 'Crop images to specific aspect ratios or custom sizes.', category: 'image', icon: ImageIcon },

  // AI Tools
  { id: 'ai-text', name: 'AI Text Generator', description: 'Generate blogs, emails, and creative content with AI.', category: 'ai', icon: Sparkles, popular: true },
  { id: 'ai-summarizer', name: 'AI Summarizer', description: 'Summarize long articles and documents instantly.', category: 'ai', icon: FileSearch },

  // Text Tools
  { id: 'word-counter', name: 'Word Counter', description: 'Count words, characters, and lines in your text.', category: 'text', icon: Hash },
  { id: 'case-converter', name: 'Case Converter', description: 'Convert text to UPPERCASE, lowercase, Title Case, etc.', category: 'text', icon: Type },
  { id: 'lorem-ipsum', name: 'Lorem Ipsum Generator', description: 'Generate placeholder text for your designs.', category: 'text', icon: Type },
  { id: 'text-to-speech', name: 'Text to Speech', description: 'Convert written text into natural-sounding audio.', category: 'text', icon: Volume2 },
  { id: 'remove-duplicates', name: 'Remove Duplicate Lines', description: 'Clean up lists by removing duplicate entries.', category: 'text', icon: Trash2 },
  { id: 'reverse-text', name: 'Reverse Text', description: 'Flip your text backwards or reverse word order.', category: 'text', icon: ArrowRightLeft },
  { id: 'binary-converter', name: 'Binary Converter', description: 'Convert text to binary and binary back to text.', category: 'text', icon: Binary },
  { id: 'json-formatter', name: 'JSON Formatter', description: 'Beautify and validate your JSON data.', category: 'text', icon: FileJson },
  { id: 'sql-formatter', name: 'SQL Formatter', description: 'Format and beautify your SQL queries.', category: 'text', icon: Terminal },
  { id: 'extract-emails', name: 'Extract Emails', description: 'Find all email addresses from any block of text.', category: 'text', icon: Mail },
  { id: 'extract-urls', name: 'Extract URLs', description: 'Find all website links from any block of text.', category: 'text', icon: LinkIcon },
  { id: 'text-to-morse', name: 'Text to Morse', description: 'Convert text to Morse code and vice versa.', category: 'text', icon: Binary },
  { id: 'morse-to-text', name: 'Morse to Text', description: 'Convert Morse code back to plain text.', category: 'text', icon: Binary },

  // Security Tools
  { id: 'password-strength', name: 'Password Strength', description: 'Check how secure your password really is.', category: 'security', icon: Shield },
  { id: 'cc-validator', name: 'Credit Card Validator', description: 'Validate credit card numbers using Luhn algorithm.', category: 'security', icon: CreditCard },
  { id: 'iban-validator', name: 'IBAN Validator', description: 'Validate International Bank Account Numbers.', category: 'security', icon: Globe },

  // Social Media Tools
  { id: 'yt-thumbnail', name: 'YouTube Thumbnail', description: 'Download thumbnails from any YouTube video URL.', category: 'social', icon: Share2 },
  { id: 'wa-link', name: 'WhatsApp Link', description: 'Create direct chat links with custom messages.', category: 'social', icon: MessageSquare },
  { id: 'ig-links', name: 'Instagram Links', description: 'Generate direct links to Instagram profiles.', category: 'social', icon: Share2 },

  // Utility Tools
  { id: 'unit-converter', name: 'Unit Converter', description: 'Convert length, weight, temperature, and more.', category: 'utility', icon: Settings },
  { id: 'password-generator', name: 'Password Generator', description: 'Generate highly secure random passwords.', category: 'utility', icon: Lock },
  { id: 'bmi-calculator', name: 'BMI Calculator', description: 'Calculate your Body Mass Index instantly.', category: 'utility', icon: Activity },
  { id: 'age-calculator', name: 'Age Calculator', description: 'Calculate your exact age in years, months, and days.', category: 'utility', icon: Clock },
  { id: 'date-calculator', name: 'Date Calculator', description: 'Add/subtract days or find difference between dates.', category: 'utility', icon: Calendar },
  { id: 'url-shortener', name: 'URL Shortener', description: 'Create short, trackable links from long URLs.', category: 'utility', icon: LinkIcon },
  { id: 'percentage-calculator', name: 'Percentage Calculator', description: 'Calculate percentages, increases, and decreases.', category: 'utility', icon: Calculator },
  { id: 'random-number', name: 'Random Number', description: 'Generate random numbers within a custom range.', category: 'utility', icon: Hash },
  { id: 'random-string', name: 'Random String', description: 'Generate random strings for passwords or keys.', category: 'utility', icon: Type },
  { id: 'md5-hash', name: 'MD5 Hash Generator', description: 'Generate MD5 hashes from text', category: 'utility', icon: Hash },
  { id: 'sha256-hash', name: 'SHA-256 Hash Generator', description: 'Generate secure SHA-256 hashes', category: 'utility', icon: Shield },
  { id: 'base64-encode', name: 'Base64 Encoder', description: 'Encode text to Base64 format', category: 'converter', icon: Binary },
  { id: 'base64-decode', name: 'Base64 Decoder', description: 'Decode Base64 strings to text', category: 'converter', icon: Binary },
  { id: 'json-to-yaml', name: 'JSON to YAML', description: 'Convert JSON data to YAML', category: 'converter', icon: FileJson },
  { id: 'yaml-to-json', name: 'YAML to JSON', description: 'Convert YAML data to JSON', category: 'converter', icon: FileJson },
  { id: 'uuid-generator', name: 'UUID Generator', description: 'Generate random UUIDs (v4)', category: 'utility', icon: RefreshCw },
  { id: 'unix-timestamp', name: 'Unix Timestamp', description: 'Convert Unix timestamps to dates', category: 'utility', icon: Clock },
  { id: 'html-formatter', name: 'HTML Formatter', description: 'Beautify messy HTML code', category: 'text', icon: FileCode },
  { id: 'html-minifier', name: 'HTML Minifier', description: 'Compress HTML code', category: 'text', icon: FileCode },
  { id: 'css-formatter', name: 'CSS Formatter', description: 'Beautify messy CSS code', category: 'text', icon: FileCode },
  { id: 'css-minifier', name: 'CSS Minifier', description: 'Compress CSS code', category: 'text', icon: FileCode },
  { id: 'js-formatter', name: 'JS Formatter', description: 'Beautify messy JavaScript code', category: 'text', icon: FileCode },
  { id: 'js-minifier', name: 'JS Minifier', description: 'Compress JavaScript code', category: 'text', icon: FileCode },
  { id: 'url-encoder', name: 'URL Encoder', description: 'Encode text for URLs', category: 'converter', icon: LinkIcon },
  { id: 'url-decoder', name: 'URL Decoder', description: 'Decode URL-encoded strings', category: 'converter', icon: LinkIcon },

  // Converters (New)
  { id: 'json-to-csv', name: 'JSON to CSV', description: 'Convert JSON data to CSV format easily.', category: 'utility', icon: FileJson },
  { id: 'csv-to-json', name: 'CSV to JSON', description: 'Convert CSV files to JSON format.', category: 'utility', icon: FileJson },
  { id: 'xml-to-json', name: 'XML to JSON', description: 'Convert XML documents to JSON format.', category: 'utility', icon: FileCode },
  { id: 'json-to-xml', name: 'JSON to XML', description: 'Convert JSON data to XML format.', category: 'utility', icon: FileCode },
  { id: 'base64-to-image', name: 'Base64 to Image', description: 'Convert Base64 strings back to viewable images.', category: 'utility', icon: ImageIcon },
];

import ErrorBoundary from '../components/ErrorBoundary';

export const ToolRenderer = ({ toolId }: { toolId: string }) => {
  return (
    <ErrorBoundary fallback={
      <div className="p-12 text-center bg-red-50 rounded-[40px] border border-red-100">
        <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mx-auto mb-4">
          <X size={32} className="text-red-500" />
        </div>
        <h3 className="text-xl font-black text-slate-900 mb-2">Tool temporarily unavailable</h3>
        <p className="text-slate-600 mb-6">We're sorry, this tool is currently experiencing issues. Please try again later.</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all"
        >
          Reload
        </button>
      </div>
    }>
      <ToolContent toolId={toolId} />
    </ErrorBoundary>
  );
};

const ToolContent = ({ toolId }: { toolId: string }) => {
  switch (toolId) {
    // PDF Tools
    case 'merge-pdf': return <MergePDF />;
    case 'split-pdf': return <SplitPDF />;
    case 'rotate-pdf': return <RotatePDF />;
    case 'compress-pdf': return <CompressPDF />;
    case 'pdf-to-jpg': return <PDFtoJPG />;
    case 'jpg-to-pdf': return <JPGtoPDF />;
    case 'pdf-to-word': return <PDFtoWord />;
    case 'word-to-pdf': return <WordtoPDF />;
    case 'pdf-to-text': return <PDFtoText />;
    case 'unlock-pdf': return <OrganizePDF />;
    case 'protect-pdf': return <AddWatermark />;
    case 'add-page-numbers': return <AddPageNumbers />;

    // AI Tools
    case 'ai-text': return <AITextGen />;
    case 'ai-summarizer': return <AISummarizer />;

    // Text Tools
    case 'word-counter': return <WordCounter />;
    case 'case-converter': return <CaseConverter />;
    case 'lorem-ipsum': return <LoremIpsumGenerator />;
    case 'text-to-speech': return <TextToSpeech />;
    case 'remove-duplicates': return <RemoveDuplicateLines />;
    case 'reverse-text': return <ReverseText />;
    case 'binary-converter': return <BinaryConverter />;
    case 'json-formatter': return <JsonFormatter />;
    case 'sql-formatter': return <SqlFormatter />;
    case 'extract-emails': return <ExtractEmails />;
    case 'extract-urls': return <ExtractURLs />;
    case 'text-to-morse': return <TextToMorse />;
    case 'morse-to-text': return <MorseToText />;

    // Image Tools
    case 'image-resizer': return <ImageResizer />;
    case 'image-converter': return <ImageConverter />;
    case 'image-compressor': return <ImageCompressor />;
    case 'image-to-pdf': return <JPGtoPDF />;
    case 'qr-generator': return <QRGenerator />;
    case 'qr-scanner': return <QRScannerUtil />;
    case 'image-to-text': return <ImageToText />;
    case 'image-to-base64': return <ImageToBase64 />;
    case 'image-filters': return <ImageFilters />;
    case 'image-cropper': return <ImageCropper />;

    // Social Tools
    case 'yt-thumbnail': return <YoutubeThumbnailDownloader />;
    case 'wa-link': return <WhatsappLinkGenerator />;
    case 'ig-links': return <InstagramProfileGenerator />;

    // Security Tools
    case 'password-strength': return <PasswordStrengthMeter />;
    case 'cc-validator': return <CreditCardValidator />;
    case 'iban-validator': return <IBANValidator />;

    // Utility Tools
    case 'unit-converter': return <UnitConverter />;
    case 'password-generator': return <PasswordGenerator />;
    case 'bmi-calculator': return <BMICalculator />;
    case 'age-calculator': return <AgeCalculator />;
    case 'date-calculator': return <DateCalculator />;
    case 'url-shortener': return <URLShortener />;
    case 'percentage-calculator': return <PercentageCalculator />;
    case 'random-number': return <RandomNumberGenerator />;
    case 'random-string': return <RandomStringGenerator />;
    case 'md5-hash': return <MD5Hash />;
    case 'sha256-hash': return <SHA256Hash />;
    case 'base64-encode': return <Base64Encoder />;
    case 'base64-decode': return <Base64Decoder />;
    case 'json-to-yaml': return <JSONtoYAML />;
    case 'yaml-to-json': return <YAMLtoJSON />;
    case 'uuid-generator': return <UUIDGenerator />;
    case 'unix-timestamp': return <UnixTimestampConverter />;
    case 'html-formatter': return <HTMLFormatter />;
    case 'html-minifier': return <HTMLMinifier />;
    case 'css-formatter': return <CSSFormatter />;
    case 'css-minifier': return <CSSMinifier />;
    case 'js-formatter': return <JSFormatter />;
    case 'js-minifier': return <JSMinifier />;
    case 'url-encoder': return <URLEncoder />;
    case 'url-decoder': return <URLDecoder />;

    // Converters
    case 'json-to-csv': return <JsonCsvConverter mode="json-to-csv" />;
    case 'csv-to-json': return <JsonCsvConverter mode="csv-to-json" />;
    case 'xml-to-json': return <XmlJsonConverter mode="xml-to-json" />;
    case 'json-to-xml': return <XmlJsonConverter mode="json-to-xml" />;
    case 'base64-to-image': return <Base64ToImage />;

    default: return <div className="text-center py-12 text-slate-500">Tool coming soon...</div>;
  }
};

const GuideRenderer = ({ toolId }: { toolId: string }) => {
  const content = toolSEOContent[toolId];
  if (!content) return <div className="text-center py-12 text-slate-500">Guide coming soon...</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      <section className="space-y-4">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">About {content.toolName}</h2>
        <p className="text-lg text-slate-600 leading-relaxed">{content.introduction}</p>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.features.map((feature, i) => (
            <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">How to Use</h3>
        <div className="space-y-4">
          {content.howToUseSteps.map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </div>
              <p className="text-slate-600 pt-1">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {content.faqs.map((faq, i) => (
            <div key={i} className="p-6 bg-white border border-slate-200 rounded-3xl">
              <h4 className="font-bold text-slate-900 mb-2">{faq.question}</h4>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ToolsPage = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Categories definition
  const categories = [
    { id: 'all', name: t('tools.categories.all').includes('.') ? 'All Tools' : t('tools.categories.all'), icon: Zap },
    { id: 'pdf', name: t('tools.categories.pdf').includes('.') ? 'PDF Tools' : t('tools.categories.pdf'), icon: FileText },
    { id: 'image', name: t('tools.categories.image').includes('.') ? 'Image Tools' : t('tools.categories.image'), icon: ImageIcon },
    { id: 'ai', name: t('tools.categories.ai').includes('.') ? 'AI Tools' : t('tools.categories.ai'), icon: Sparkles },
    { id: 'text', name: t('tools.categories.text').includes('.') ? 'Text Tools' : t('tools.categories.text'), icon: Type },
    { id: 'converter', name: t('tools.categories.converter').includes('.') ? 'Converter Tools' : t('tools.categories.converter'), icon: RefreshCw },
    { id: 'utility', name: t('tools.categories.utility').includes('.') ? 'Utility Tools' : t('tools.categories.utility'), icon: Settings },
    { id: 'social', name: t('tools.categories.social').includes('.') ? 'Social Media' : t('tools.categories.social'), icon: Share2 },
    { id: 'security', name: t('tools.categories.security').includes('.') ? 'Security Tools' : t('tools.categories.security'), icon: Shield },
  ];

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <Helmet>
        <title>300+ Free Online Tools | AI, PDF, Image, Dev | e-Mitra Portal</title>
        <meta name="description" content="Access 300+ free online tools. AI text generator, PDF editor, image converter, developer utilities, and more at e-Mitra Portal." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Free Online Tools - e-Mitra Portal",
            "description": "A collection of 300+ free online tools for PDF, images, AI, and development.",
            "url": "https://jansoochna.vercel.app/tools",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": tools.slice(0, 10).map((tool, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": tool.name,
                "description": tool.description,
                "url": `https://jansoochna.vercel.app/tools/${tool.id}`
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Header Section */}
      <div className="text-center mb-16 perspective-container">
        <motion.h1 
          initial={{ opacity: 0, y: -30, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          Free Online <span className="text-gradient">Tools</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-500 max-w-2xl mx-auto"
        >
          300+ professional tools for PDF, images, AI, and development. Fast, free, and secure.
        </motion.p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-12 space-y-8">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search for tools (e.g. merge pdf, ai text...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-slate-700"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-3d hover:shadow-3d-hover active:scale-95 ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-indigo-200' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
                }`}
              >
                <Icon size={18} />
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <AnimatePresence mode="popLayout">
          {filteredTools.map((tool) => (
            <motion.div
              key={tool.id}
              layout
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
              className="group bg-white rounded-[40px] p-8 border border-slate-100 shadow-3d hover:shadow-3d-hover hover:border-indigo-100 transition-all duration-500 flex flex-col h-full card-3d"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-3d-inner">
                  <tool.icon className="w-8 h-8 group-hover:text-white transition-colors" />
                </div>
                {tool.popular && (
                  <span className="px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1 shadow-3d-inner">
                    <Star size={10} fill="currentColor" /> Popular
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {tool.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {tool.description}
              </p>
              
              <div className="flex items-center gap-3">
                <a
                  href={`/tools/${tool.id}`}
                  className="flex-1 bg-indigo-600 text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-3d hover:shadow-3d-hover active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Use Tool <ArrowRight size={16} />
                </a>
                <a
                  href={`/guides/${tool.id}`}
                  className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 hover:text-slate-600 transition-all active:scale-95 shadow-3d-inner"
                  title="View Guide"
                >
                  <FileText size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* SEO Text Block */}
      <div className="mt-20 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Professional Online Tools for Everyone
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Our platform provides a comprehensive suite of free online tools designed to simplify your digital workflow. From powerful PDF manipulation and AI-driven content generation to essential developer utilities and image processing, we offer everything you need in one place. All our tools are fast, secure, and require no registration, ensuring your privacy while delivering high-quality results.
        </p>
      </div>
    </div>
  );
};

export default ToolsPage;
