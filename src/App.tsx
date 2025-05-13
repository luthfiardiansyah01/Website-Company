import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#12122a] text-white overflow-hidden">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;