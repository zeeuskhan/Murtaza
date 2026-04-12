import React, { useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import { 
  Fingerprint, 
  CreditCard, 
  FileEdit, 
  ShieldCheck, 
  Car, 
  Home as HomeIcon, 
  ExternalLink, 
  MessageCircle, 
  Download, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Sprout,
  CookingPot,
  Zap,
  Activity,
  Accessibility,
  Loader2
} from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FormsSection = lazy(() => import('./components/FormsSection'));
const ToolsPage = lazy(() => import('./pages/ToolsPage'));
const ToolSEOPage = lazy(() => import('./pages/ToolSEOPage'));
const ToolPage = lazy(() => import('./pages/ToolPage'));
const GuidePage = lazy(() => import('./pages/GuidePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const JobsPage = lazy(() => import('./pages/JobsPage'));

function App() {
  const pathname = window.location.pathname;
  const hash = window.location.hash;

  // Scroll to top or to hash element
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  let content;
  const isPath = (name: string) => 
    pathname === `/${name}` || 
    pathname.endsWith(`/${name}`) ||
    pathname.includes(`${name}.html`) || 
    pathname.endsWith(`/${name}.html`);

  if (isPath('services')) {
    content = <ServicesPage />;
  } else if (isPath('forms')) {
    content = <FormsSection />;
  } else if (isPath('contact')) {
    content = <ContactPage />;
  } else if (isPath('tools')) {
    content = <ToolsPage />;
  } else if (isPath('jobs')) {
    content = <JobsPage />;
  } else if (pathname.includes('/tools/')) {
    const parts = pathname.split('/').filter(Boolean);
    const toolId = parts[parts.length - 1]?.replace('.html', '');
    content = <ToolPage toolId={toolId} />;
  } else if (pathname.includes('/guides/')) {
    const parts = pathname.split('/').filter(Boolean);
    const toolId = parts[parts.length - 1]?.replace('.html', '');
    content = <GuidePage toolId={toolId} />;
  } else if (isPath('pdf-tools')) {
    content = <CategoryPage category="pdf" />;
  } else if (isPath('image-tools')) {
    content = <CategoryPage category="image" />;
  } else if (isPath('text-tools')) {
    content = <CategoryPage category="text" />;
  } else if (isPath('converter-tools')) {
    content = <CategoryPage category="converter" />;
  } else if (isPath('utility-tools')) {
    content = <CategoryPage category="utility" />;
  } else if (isPath('ai-tools')) {
    content = <CategoryPage category="ai" />;
  } else if (isPath('social-tools')) {
    content = <CategoryPage category="social" />;
  } else if (isPath('security-tools')) {
    content = <CategoryPage category="security" />;
  } else if (pathname.includes('-tool.html')) {
    const toolId = pathname.split('/').pop()?.replace('-tool.html', '');
    content = <ToolSEOPage toolId={toolId} />;
  } else {
    content = <Home />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <Loader2 className="animate-spin text-indigo-600 mb-4" size={48} />
            <p className="text-slate-500 font-medium text-lg">Loading...</p>
          </div>
        }>
          {content}
        </Suspense>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
