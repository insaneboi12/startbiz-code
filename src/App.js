import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ContactForm from './components/ContactForm';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <ContactForm />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
