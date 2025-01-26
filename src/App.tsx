import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from "./components/ui/Toast/toaster";
import { ToastProvider } from "./components/ui/Toast/toast";
import { ScrollToTop } from './components/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import { SEO } from './components/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import { lazy } from 'react';
const AllDemos = lazy(() => import('./pages/work/AllDemos'));
const ButtonShowcase = lazy(() => import('./pages/work/ButtonShowcases/ButtonShowcase'));
const CardShowcase = lazy(() => import('./pages/work/CardShowcase/CardShowcase'));
const FormShowcase = lazy(() => import('./pages/work/FormShowcase/FormShowcase'));
const NavigationShowcase = lazy(() => import('./pages/work/NavigationShowcase/NavigationShowcase'));
const PageShowcase = lazy(() => import('./pages/work/PageDesignShowcase/PagesShowcase/PageShowcase'));
const PageDesignDetail = lazy(() => import('./pages/work/PageDesignShowcase/PageDesignDetail'));

// AI Model Pages
const ProfessorPixel = lazy(() => import('./pages/AIModels/ProfessorPixel'));
const CourtsideClara = lazy(() => import('./pages/AIModels/CourtsideClaraPage'));
const ByteGuru = lazy(() => import('./pages/AIModels/ByteGuruPage'));
const HerHighnessHistoriaPage = lazy(() => import('./pages/AIModels/HerHighnessHistoriaPage'));
const ChefByte = lazy(() => import('./pages/AIModels/ChefBytePage'));
const ScriptSage = lazy(() => import('./pages/AIModels/ScriptSagePage'));
const CoachCalm = lazy(() => import('./pages/AIModels/CoachCalmPage'));
const DrData = lazy(() => import('./pages/AIModels/DrDataPage'));
const TrendyTina = lazy(() => import('./pages/AIModels/TrendyTinaPage'));
const PlayGround = lazy(() => import('./pages/AIModels/PlayGroundPage'));

import Contact from './pages/Contact';
import SaasDashboard from './pages/work/PageDesignShowcase/SaasShowcase/SaasDashboard';
import ModernPortfolio from './pages/work/PageDesignShowcase/PortfolioShowcase/ModernPortfolio';
import EcommercePlatform from './pages/work/PageDesignShowcase/EcommerceShowcase/EcommercePlatform';
import RealEstatePlatform from './pages/work/PageDesignShowcase/RealEstateShowcase/RealEstatePlatform';
import RestaurantPlatform from './pages/work/PageDesignShowcase/RestaurantShowcase/RestaurantPlatform';
import BlogPlatform from './pages/work/PageDesignShowcase/BlogShowcase/BlogPlatform';
import AI from './pages/AI';
import LanguageModel from './pages/ai-models/LanguageModel';
import VisionModel from './pages/ai-models/VisionModel';
import AudioModel from './pages/ai-models/AudioModel';
import PhilosopherModel from './pages/ai-models/personas/PhilosopherModel';
import TeacherModel from './pages/ai-models/personas/TeacherModel';
import LiteraryModel from './pages/ai-models/personas/LiteraryModel';
import HistoricalModel from './pages/ai-models/personas/HistoricalModel';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import GPTBuilder from './pages/GPTBuilder/GPTBuilder';
import Blog from './pages/Blog/Blog';
import GPTStore from './pages/GPTStore/GPTStore';
import { useState, useEffect } from 'react';
import SplashPage from './components/PageSections/SplashPage/SplashPage';
import { PageLayout } from './components/layout/PageLayout';
import { GoogleAnalytics } from './components/GoogleAnalytics';

const App = () => {
  const [showSplash, setShowSplash] = useState(() => {
    // Check if it's the first visit
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    return !hasVisited;
  });

  const handleEnter = () => {
    setShowSplash(false);
    // Mark that the user has visited before
    localStorage.setItem('hasVisitedBefore', 'true');
  };

  // If user is coming from a direct link (not homepage), skip splash
  useEffect(() => {
    if (window.location.pathname !== '/') {
      setShowSplash(false);
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <ToastProvider>
          <Router>
            <ScrollToTop />
            <GoogleAnalytics />
            {showSplash && <SplashPage show={showSplash} onEnter={handleEnter} />}
            <SEO />
            <PageLayout>
              <div className={`flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
                <Header />
                <main className="flex-grow overflow-auto pt-16 pb-8">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/work/demos" element={<AllDemos />} />
                    <Route path="/work/buttons" element={<ButtonShowcase />} />
                    <Route path="/work/cards" element={<CardShowcase />} />
                    <Route path="/work/forms" element={<FormShowcase />} />
                    <Route path="/work/navigation" element={<NavigationShowcase />} />
                    <Route path="/work/pages" element={<PageShowcase />} />
                    <Route path="/work/pages/:id" element={<PageDesignDetail />} />
                    <Route path="/work/business-one" element={<NotFound />} />
                    <Route path="/work/pages/saas-dashboard" element={<SaasDashboard />} />
                    <Route path="/work/pages/modern-portfolio" element={<ModernPortfolio />} />
                    <Route path="/work/pages/ecommerce-platform" element={<EcommercePlatform />} />
                    <Route path="/work/pages/real-estate-platform" element={<RealEstatePlatform />} />
                    <Route path="/work/pages/restaurant-platform" element={<RestaurantPlatform />} />
                    <Route path="/work/pages/blog-platform" element={<BlogPlatform />} />
                    <Route path="/ai" element={<AI />} />
                    <Route path="/ai/models/language" element={<LanguageModel />} />
                    <Route path="/ai/models/vision" element={<VisionModel />} />
                    <Route path="/ai/models/audio" element={<AudioModel />} />
                    <Route path="/ai/models/personas/philosopher" element={<PhilosopherModel />} />
                    <Route path="/ai/models/personas/teacher" element={<TeacherModel />} />
                    <Route path="/ai/models/personas/literary" element={<LiteraryModel />} />
                    <Route path="/ai/models/personas/historical" element={<HistoricalModel />} />
                    <Route path="/ai/models/personas/chef-byte" element={<ChefByte />} />
                    <Route path="/ai-models/her-highness-historia" element={<HerHighnessHistoriaPage />} />
                    <Route path="/ai-models/historia" element={<HerHighnessHistoriaPage />} />
                    <Route path="/ai-models/professor-pixel" element={<ProfessorPixel />} />
                    <Route path="/ai-models/courtside-clara" element={<CourtsideClara />} />
                    <Route path="/ai-models/byte-guru" element={<ByteGuru />} />
                    <Route path="/ai-models/chef-byte" element={<ChefByte />} />
                    <Route path="/ai-models/chefbyte" element={<ChefByte />} />
                    <Route path="/ai-models/script-sage" element={<ScriptSage />} />
                    <Route path="/ai-models/coach-calm" element={<CoachCalm />} />
                    <Route path="/ai-models/dr-data" element={<DrData />} />
                    <Route path="/ai-models/trendy-tina" element={<TrendyTina />} />
                    <Route path="/ai-models/playground" element={<PlayGround />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    {/* GPT Builder Page */}
                    <Route path="/gpt-builder" element={<GPTBuilder />} />
                    {/* GPT Store Page */}
                    <Route path="/gpt-store" element={<GPTStore />} />
                    {/* Legal Pages */}
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </PageLayout>
            <Toaster />
          </Router>
        </ToastProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
