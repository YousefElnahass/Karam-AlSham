import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-brown-100">
        <Helmet>
          <title>Karam Elsham - مطعم مميز</title>
          <meta name="description" content="استمتع بأشهى الأطباق العالمية في مطعم Karam Elsham. احجز طاولتك الآن!" />
          <meta name="keywords" content="مطعم, Karam Elsham, طعام, حجوزات, قائمة طعام" />
        </Helmet>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

