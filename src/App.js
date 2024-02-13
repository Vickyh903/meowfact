import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FunMeowPhotos from './pages/FunMeowPhotos';
import MemeGenerator from './pages/MemeGenerator';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound'; // Import the NotFound component
import './App.css';
import './pages/FunMeowPhotos.css';
import './pages/MemeGenerator.css';
import './pages/ContactUs.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';





function App() {
  const client = new QueryClient({defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
    }
  }});
  return (
    <QueryClientProvider client={client}>
    <Router basename='/meowfact'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fun-meow-photos" element={<FunMeowPhotos />} />
        <Route path="/meme-generator" element={<MemeGenerator />} />
        <Route path="/contact-us" element={<ContactUs />} />
        
        <Route path="*" element={<NotFound />} /> {/* Use the NotFound component for unmatched routes */} 
      </Routes>
      <Footer />
    </Router>
    </QueryClientProvider>
  );
}

export default App;


 