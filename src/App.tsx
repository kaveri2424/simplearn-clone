import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Courses from './components/Courses';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

import Login from "./login";
import Register from "./Register";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Categories />
            <Courses />
            <Features />
            <Stats />
            <Testimonials />
            <CTA />
            <Footer />
          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
