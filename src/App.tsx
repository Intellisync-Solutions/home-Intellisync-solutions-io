import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from "./components/ui/Toast/toaster";
import { ToastProvider } from "./components/ui/Toast/toast";
import { ScrollToTop } from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import ButtonShowcase from './pages/work/ButtonShowcase/ButtonShowcase';
import CardShowcase from './pages/work/CardShowcase/CardShowcase';
import FormShowcase from './pages/work/FormShowcase/FormShowcase';
import NavigationShowcase from './pages/work/NavigationShowcase/NavigationShowcase';
import PageShowcase from './pages/work/PageDesignShowcase/PagesShowcase/PageShowcase';
import PageDesignDetail from './pages/work/PageDesignShowcase/PageDesignDetail';
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
import { useState } from 'react';
import SplashPage from './components/PageSections/SplashPage/SplashPage';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleEnter = () => {
    setShowSplash(false);
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <ScrollToTop />
          <SplashPage show={showSplash} onEnter={handleEnter} />
          <div className={`min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 overflow-x-hidden transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
            <Header />
            <main className="flex-grow overflow-auto pt-16 pb-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/buttons" element={<ButtonShowcase />} />
                <Route path="/work/cards" element={<CardShowcase />} />
                <Route path="/work/forms" element={<FormShowcase />} />
                <Route path="/work/navigation" element={<NavigationShowcase />} />
                <Route path="/work/pages" element={<PageShowcase />} />
                <Route path="/work/pages/:id" element={<PageDesignDetail />} />
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
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <Toaster />
          </div>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
