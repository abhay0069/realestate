import { ReactLenis } from '@studio-freight/react-lenis'
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroCanvas from './components/HeroCanvas';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import GenericPage from './components/GenericPage';
import TravelPage from './components/TravelPage';
import ServicePage from './components/ServicePage';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage'; // Added GalleryPage import
import ContactPage from './components/ContactPage'; // Added ContactPage import
import JournalPage from './components/JournalPage'; // Added JournalPage import

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const lenisOptions = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <Router>
        <div className="bg-[#0c0c0c] min-h-screen text-white selection:bg-white selection:text-black font-sans">
          <Header />
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/about" element={<GenericPage title="Who We Are" subtitle="Legacy & Trust" image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" />} />
            <Route path="/dates" element={<GenericPage title="Open Houses" subtitle="Visit Today" image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" />} />
            <Route path="/travel" element={<TravelPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/private-jets" element={
              <ServicePage
                title="Buying"
                subtitle="Your Future Home"
                heroImage="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2670&auto=format&fit=crop"
                description="Our buying agents are dedicated to finding your perfect match. From off-market listings to negotiation, we guide you through every step of the acquisition process."
                features={[
                  { title: "Market Analysis", desc: "Data-driven insights" },
                  { title: "Off-Market", desc: "Exclusive access" },
                  { title: "Negotiation", desc: "Expert representation" },
                  { title: "Closing", desc: "Seamless transactions" }
                ]}
              />
            } />
            <Route path="/villas" element={
              <ServicePage
                title="Selling"
                subtitle="Maximize Value"
                heroImage="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2525&auto=format&fit=crop"
                description="We position your property to the world's most qualified buyers. Our marketing strategies blend high-end visual storytelling with targeted digital reach."
                features={[
                  { title: "Staging", desc: "Professional design" },
                  { title: "Photography", desc: "Editorial quality" },
                  { title: "Global Reach", desc: "International network" },
                  { title: "Open Houses", desc: "Exclusive events" }
                ]}
              />
            } />
            <Route path="/experiences" element={
              <ServicePage
                title="Relocation"
                subtitle="Move with Ease"
                heroImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop"
                description="Whether moving across the country or across the globe, our team handles logistics, school placement, and community integration for you and your family."
                features={[
                  { title: "Logistics", desc: "Moving coordination" },
                  { title: "Schools", desc: "Educational consulting" },
                  { title: "Orientation", desc: "City tours & guides" },
                  { title: "Temporary", desc: "Short-term housing" }
                ]}
              />
            } />
            <Route path="/concierge" element={
              <ServicePage
                title="Concierge"
                subtitle="Property Management"
                heroImage="https://images.unsplash.com/photo-1565551984260-60a674488a0b?q=80&w=2574&auto=format&fit=crop"
                description="Protect your investment with our white-glove management services. We handle maintenance, tenant relations, and financial reporting so you don't have to."
                features={[
                  { title: "Maintenance", desc: "24/7 repairs" },
                  { title: "Tenants", desc: "Screening & leasing" },
                  { title: "Financials", desc: "Monthly reporting" },
                  { title: "Security", desc: "Asset protection" }
                ]}
              />
            } />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/support" element={<GenericPage title="Services" subtitle="Comprehensive Care" image="https://images.unsplash.com/photo-1557992260-ec58e38d363c?q=80&w=2574&auto=format&fit=crop" />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ReactLenis>
  )
}

export default App
