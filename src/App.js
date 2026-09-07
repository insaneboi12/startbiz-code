import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ContactForm from './components/ContactForm';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import CategoryPage from './pages/CategoryPage';
import FinderPage from './pages/FinderPage';
import ComparePage from './pages/ComparePage';
import KnowledgePage from './pages/KnowledgePage';
import KnowledgeArticle from './pages/KnowledgeArticle';
import IndustriesPage from './pages/IndustriesPage';
import IndustryDetail from './pages/IndustryDetail';

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/finder" element={<FinderPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/knowledge" element={<KnowledgePage />} />
            <Route path="/knowledge/:slug" element={<KnowledgeArticle />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <ContactForm />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
    // <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-brand-surface px-4 text-center">
    //   <div
    //     className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600"
    //     aria-hidden
    //   >
    //     <svg
    //       viewBox="0 0 24 24"
    //       className="h-9 w-9"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <circle cx="12" cy="12" r="10" />
    //       <path d="M12 8v5" />
    //       <path d="M12 16h.01" />
    //     </svg>
    //   </div>
    //   <h1 className="max-w-lg font-display text-xl font-semibold text-brand-text sm:text-2xl">
    //     Error: the link has expired please contact the owner or the developer
    //   </h1>
    // </div>
  );
}

export default App;
