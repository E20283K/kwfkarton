import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import ScrollToTop from './components/ScrollToTop';

// Pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

// Home page components
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductCatalog from './components/ProductCatalog';
import Advantages from './components/Advantages';
import CompanyVideoSection from './components/CompanyVideoSection';
import WorkProcess from './components/WorkProcess';
import ProductionGallery from './components/ProductionGallery';
import NewsSection from './components/NewsSection';
import Partners from './components/Partners';
import FactoryLocationSection from './components/FactoryLocationSection';
import Footer from './components/Footer';

function HomePage() {
  const navigate = useNavigate();

  const handleOpenQuote = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 selection:bg-[#C6893F] selection:text-white relative font-sans antialiased">
      <Navbar onOpenQuote={handleOpenQuote} />

      <main className="space-y-4 sm:space-y-8">
        {/* 1. Hero Banner */}
        <HeroBanner onOpenQuote={handleOpenQuote} />

        {/* 2. Product Catalog Grid */}
        <ProductCatalog onOpenQuote={handleOpenQuote} />

        {/* 3. Our Advantages */}
        <Advantages onOpenQuote={handleOpenQuote} />

        {/* 3.1 Company Video Showcase */}
        <CompanyVideoSection />

        {/* 4. Work Process / Scheme */}
        <WorkProcess onOpenQuote={handleOpenQuote} />

        {/* 5. Production Gallery */}
        <ProductionGallery onOpenQuote={handleOpenQuote} />

        {/* 6. Yangiliklar (News & Instagram Feed) */}
        <NewsSection />

        {/* 9. Brand Partners */}
        <Partners />

        {/* 10. Gofroqadoq ishlab chiqarish zavodi & Action / Location Map */}
        <FactoryLocationSection />
      </main>

      <Footer onOpenQuote={handleOpenQuote} />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
