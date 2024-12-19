import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from "./components/ui/toaster";
import { ToastProvider } from "./components/ui/toast";
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

const App = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
            <Header />
            <main className="flex-grow overflow-auto pb-8">
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
