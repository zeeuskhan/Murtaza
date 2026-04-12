import React, { useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import { BusinessSchema } from './components/SEO';
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

import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
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
  
  return null;
};

// Tool ID extractor for legacy .html paths
const ToolRouteWrapper = ({ Component }: { Component: React.FC<{ toolId: string | undefined }> }) => {
  const { pathname } = useLocation();
  const parts = pathname.split('/').filter(Boolean);
  const toolId = parts[parts.length - 1]?.replace('.html', '');
  return <Component toolId={toolId} />;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <BusinessSchema />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <Loader2 className="animate-spin text-indigo-600 mb-4" size={48} />
              <p className="text-slate-500 font-medium text-lg">Loading...</p>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/index.html" element={<Navigate to="/" replace />} />
              
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services.html" element={<Navigate to="/services" replace />} />
              
              <Route path="/forms" element={<FormsSection />} />
              <Route path="/forms.html" element={<Navigate to="/forms" replace />} />
              
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
              
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/tools.html" element={<Navigate to="/tools" replace />} />
              
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/jobs.html" element={<Navigate to="/jobs" replace />} />
              
              <Route path="/tools/:id" element={<ToolRouteWrapper Component={ToolPage} />} />
              <Route path="/guides/:id" element={<ToolRouteWrapper Component={GuidePage} />} />
              
              <Route path="/pdf-tools" element={<CategoryPage category="pdf" />} />
              <Route path="/image-tools" element={<CategoryPage category="image" />} />
              <Route path="/text-tools" element={<CategoryPage category="text" />} />
              <Route path="/converter-tools" element={<CategoryPage category="converter" />} />
              <Route path="/utility-tools" element={<CategoryPage category="utility" />} />
              <Route path="/ai-tools" element={<CategoryPage category="ai" />} />
              <Route path="/social-tools" element={<CategoryPage category="social" />} />
              <Route path="/security-tools" element={<CategoryPage category="security" />} />
              
              {/* Legacy SEO Tool Pages */}
              <Route path="/:id-tool.html" element={<ToolRouteWrapper Component={ToolSEOPage} />} />
              
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <ChatBot />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
