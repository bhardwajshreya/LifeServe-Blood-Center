// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './Components/HeroSection';
import CardSection from './Components/CardSection';
import InfoSection from './Components/InfoSection';
import Footer from './Components/Footer';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage';
import DonatePage from './Components/DonatePage';
import ProcessSection from './Components/ProcessSection';
import EligibilitySection from './Components/EligibilitySection';
import FAQSection from './Components/FAQSection';
import Form from './Components/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <CardSection />
            <InfoSection />
            <Footer />
          </>
        } />
        <Route path="/donatepage" element={
          <>
          <DonatePage />
          <ProcessSection />
          <EligibilitySection />
          <FAQSection />
          <Footer />
          </>
          } />
        <Route path="/form" element={
          <>
          <DonatePage />
          <Form />
          <Footer />
          </>
          } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
