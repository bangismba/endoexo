// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/problemsection";
import SolutionSection from "./components/solutionsection";
import MarketOpportunity from "./components/marketopportunity";
import ProductServices from "./components/productservices";
import BusinessModel from "./components/businessmodel";
import TractionMilestones from "./components/tractionmilestones";
import CompetitiveAdvantage from "./components/competitiveadvantage";
import FinancialProjections from "./components/financialprojections";
import FundingAsk from "./components/fundingask";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <div className="pt-16">
        <section id="hero"><Hero /></section>
        <section id="problem"><ProblemSection /></section>
        <section id="solution"><SolutionSection /></section>
        <section id="market"><MarketOpportunity /></section>
        <section id="product"><ProductServices /></section>
        <section id="business"><BusinessModel /></section>
        <section id="traction"><TractionMilestones /></section>
        <section id="competitive"><CompetitiveAdvantage /></section>
        <section id="financial"><FinancialProjections /></section>
        <section id="funding"><FundingAsk /></section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
