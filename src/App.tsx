import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductCatalog from './components/ProductCatalog';
import Advantages from './components/Advantages';
import DeliveryGeography from './components/DeliveryGeography';
import WorkProcess from './components/WorkProcess';
import ProductionGallery from './components/ProductionGallery';
import CustomerReviews from './components/CustomerReviews';
import NewsSection from './components/NewsSection';
import Partners from './components/Partners';
import CallbackContact from './components/CallbackContact';
import Footer from './components/Footer';

function App() {
  const handleOpenQuote = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F8F9FA] text-slate-900 selection:bg-[#C6893F] selection:text-white relative font-sans antialiased">
        <Navbar onOpenQuote={handleOpenQuote} />
        
        <main className="space-y-4 sm:space-y-8">
          {/* 1. Hero Banner */}
          <HeroBanner onOpenQuote={handleOpenQuote} />

          {/* 2. Product Catalog Grid */}
          <ProductCatalog onOpenQuote={handleOpenQuote} />

          {/* 3. Our Advantages */}
          <Advantages onOpenQuote={handleOpenQuote} />

          {/* 4. Delivery Geography */}
          <DeliveryGeography onOpenQuote={handleOpenQuote} />

          {/* 5. Work Process / Scheme */}
          <WorkProcess onOpenQuote={handleOpenQuote} />

          {/* 6. Production Gallery */}
          <ProductionGallery onOpenQuote={handleOpenQuote} />

          {/* 7. Customer Reviews */}
          <CustomerReviews onOpenQuote={handleOpenQuote} />

          {/* 8. Yangiliklar (News & Instagram Feed) */}
          <NewsSection />

          {/* 9. Brand Partners */}
          <Partners />

          {/* 10. Callback Request Contact Section */}
          <CallbackContact />
        </main>

        <Footer onOpenQuote={handleOpenQuote} />
      </div>
    </LanguageProvider>
  );
}

export default App;
