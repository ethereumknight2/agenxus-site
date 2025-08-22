import React, { useState, useEffect } from "react";
import {
  Phone,
  Calendar,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  PhoneCall,
  BookOpen,
  DollarSign,
  Settings,
  Mail,
  Calculator,
  BarChart3,
  Target,
  Zap,
} from "lucide-react";

const CarDealershipAILanding = () => {
  const brand = "Agenxus";
  const phoneNumber = "+19172031833";
  const phoneDisplay = "(917) 203-1833";
  const bookUrl = "https://cal.com/agenxus/discoverycall-30min";

  // Dynamic logo path that works in dev and production
  const logoPath = `${import.meta.env.BASE_URL}logo.png`;

  const pricingBlurb =
    "Get a custom AI solution built for your dealership and budget • Pilot in 48 hours • 14-day risk-free • Cancel anytime";
  const specificityLine =
    "After-hours & overflow on day 1. Live inventory, payments, and service booking by day 2.";

  useEffect(() => {
    window.gtag?.("event", "view_section", { id: "hero" });
  }, []);

  const testimonials = [
    {
      quote:
        "Our customers love how quickly they get answers about inventory and pricing. The AI handles payment calculations instantly and routes calls perfectly to the right department.",
    },
    {
      quote:
        "Service appointment booking has never been smoother. The SMS reminders cut our no-shows by 60% and customers appreciate the streamlined experience.",
    },
    {
      quote:
        "This system improved our entire customer experience. Whether it's sales, service, or just general questions, every caller gets professional, knowledgeable assistance.",
    },
  ];

  // ROI Calculator Component
  const ROICalculator = () => {
    const [inputs, setInputs] = useState({
      monthlyServiceAppointments: 150,
      averageServiceRevenue: 350,
      currentNoShowRate: 25,
      monthlyCarsOld: 25,
      averageCarProfit: 3500,
      missedCallsPerMonth: 40,
    });

    const [results, setResults] = useState({});

    useEffect(() => {
      calculateROI();
    }, [inputs]);

    const calculateROI = () => {
      // Setup costs (one-time)
      const setupCost = 3500; // Average of 2500-5000
      const monthlyCost = 1125; // Average of 750-1500

      // Service calculations
      const noShowReduction = 0.6; // 60% reduction
      const currentNoShows =
        (inputs.monthlyServiceAppointments * inputs.currentNoShowRate) / 100;
      const newNoShows = currentNoShows * (1 - noShowReduction);
      const recoveredAppointments = currentNoShows - newNoShows;
      const monthlyServiceBenefit =
        recoveredAppointments * inputs.averageServiceRevenue;

      // Sales calculations - conservative 30% conversion on missed calls
      const convertedCalls = inputs.missedCallsPerMonth * 0.3;
      const additionalCarsSold = convertedCalls * 0.4; // 40% of converted calls result in sales
      const monthlySalesBenefit = additionalCarsSold * inputs.averageCarProfit;

      // Total monthly benefit
      const totalMonthlyBenefit = monthlyServiceBenefit + monthlySalesBenefit;
      const netMonthlyBenefit = totalMonthlyBenefit - monthlyCost;

      // Calculate ROI for different periods
      const periods = [
        { name: "30 Days", months: 1 },
        { name: "90 Days", months: 3 },
        { name: "6 Months", months: 6 },
        { name: "1 Year", months: 12 },
      ];

      const roiResults = periods.map((period) => {
        const totalBenefit = totalMonthlyBenefit * period.months;
        const totalCost = setupCost + monthlyCost * period.months;
        const netProfit = totalBenefit - totalCost;
        const roiPercentage = (netProfit / totalCost) * 100;

        return {
          period: period.name,
          totalBenefit: totalBenefit,
          totalCost: totalCost,
          netProfit: netProfit,
          roiPercentage: roiPercentage,
        };
      });

      setResults({
        monthlyServiceBenefit,
        monthlySalesBenefit,
        totalMonthlyBenefit,
        netMonthlyBenefit,
        recoveredAppointments,
        additionalCarsSold,
        roiResults,
      });
    };

    const formatCurrency = (amount) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    };

    const formatPercentage = (percentage) => {
      return `${percentage >= 0 ? "+" : ""}${percentage.toFixed(0)}%`;
    };

    return (
      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold mb-2 text-white">ROI Calculator</h3>
          <p className="text-gray-300">
            See your potential return on investment
          </p>
        </div>

        {/* Input Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Service Department
            </h4>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Monthly Service Appointments
              </label>
              <input
                type="number"
                value={inputs.monthlyServiceAppointments}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    monthlyServiceAppointments: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Average Service Revenue per Appointment
              </label>
              <input
                type="number"
                value={inputs.averageServiceRevenue}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    averageServiceRevenue: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Current No-Show Rate (%)
              </label>
              <input
                type="number"
                value={inputs.currentNoShowRate}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    currentNoShowRate: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Sales Department
            </h4>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Cars Sold Per Month (Current)
              </label>
              <input
                type="number"
                value={inputs.monthlyCarsOld}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    monthlyCarsOld: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Average Profit Per Car
              </label>
              <input
                type="number"
                value={inputs.averageCarProfit}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    averageCarProfit: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Missed Calls Per Month
              </label>
              <input
                type="number"
                value={inputs.missedCallsPerMonth}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    missedCallsPerMonth: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        {results.totalMonthlyBenefit && (
          <div className="space-y-6">
            {/* Monthly Benefits */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/30">
                <div className="text-center">
                  <Settings className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    {formatCurrency(results.monthlyServiceBenefit)}
                  </div>
                  <div className="text-sm text-purple-300">
                    Monthly Service Boost
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {Math.round(results.recoveredAppointments)} recovered
                    appointments
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-400/30">
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    {formatCurrency(results.monthlySalesBenefit)}
                  </div>
                  <div className="text-sm text-blue-300">
                    Monthly Sales Boost
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {Math.round(results.additionalCarsSold)} additional cars
                    sold
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-400/30">
                <div className="text-center">
                  <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    {formatCurrency(results.netMonthlyBenefit)}
                  </div>
                  <div className="text-sm text-green-300">
                    Net Monthly Profit
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    After all costs
                  </div>
                </div>
              </div>
            </div>

            {/* ROI Timeline */}
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-6 border border-indigo-400/30">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 mr-2 text-indigo-400" />
                Return on Investment Timeline
              </h4>

              <div className="grid md:grid-cols-4 gap-4">
                {results.roiResults.map((result, index) => (
                  <div
                    key={index}
                    className="bg-black/20 rounded-lg p-4 text-center border border-white/10"
                  >
                    <div className="text-lg font-bold text-white mb-1">
                      {result.period}
                    </div>
                    <div
                      className={`text-2xl font-bold mb-2 ${
                        result.roiPercentage >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {formatPercentage(result.roiPercentage)}
                    </div>
                    <div className="text-sm text-gray-300 mb-1">
                      Revenue: {formatCurrency(result.totalBenefit)}
                    </div>
                    <div className="text-sm text-gray-400 mb-1">
                      Investment: {formatCurrency(result.totalCost)}
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        result.netProfit >= 0
                          ? "text-green-300"
                          : "text-red-300"
                      }`}
                    >
                      Net: {formatCurrency(result.netProfit)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white overflow-hidden">
      {/* SEO Meta Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: brand,
            url: "https://yourdomain.com",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: phoneNumber,
              contactType: "sales",
            },
            offers: {
              "@type": "Offer",
              description:
                "Custom AI voice agent solutions for car dealerships",
            },
          }),
        }}
      />

      {/* Background Elements - Hidden on mobile for performance */}
      <div className="fixed inset-0 overflow-hidden -z-10 hidden md:block">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 backdrop-blur-sm bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="https://agenxus.com"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img
                src={logoPath}
                alt={`${brand} Logo`}
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "block";
                }}
              />
              <div className="h-12 w-auto" style={{ display: "none" }}>
                <svg
                  width="120"
                  height="48"
                  viewBox="0 0 120 48"
                  className="h-full w-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="logoGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="24" r="16" fill="url(#logoGradient)" />
                  <path d="M14 20h12v8H14z" fill="white" />
                  <circle cx="16" cy="22" r="1.5" fill="#8B5CF6" />
                  <circle cx="24" cy="26" r="1.5" fill="#8B5CF6" />
                  <text
                    x="44"
                    y="20"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="16"
                    fontWeight="700"
                    fill="url(#logoGradient)"
                  >
                    {brand}
                  </text>
                  <text
                    x="44"
                    y="34"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="10"
                    fontWeight="400"
                    fill="#9CA3AF"
                  >
                    AI Voice Solutions
                  </text>
                </svg>
              </div>
            </a>
            <a
              href={`${bookUrl}?utm_source=lp&utm_medium=nav&utm_campaign=header`}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                window.gtag?.("event", "click_book_demo", {
                  location: "header",
                })
              }
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <main>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Never Miss Another
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                Sales or Service Call
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
              Turn Missed Calls Into Closed Deals with Your End-to-End AI
              Dealership Solution.
            </h2>
            <p className="text-lg text-purple-300 mb-4 font-medium">
              Missed calls ≠ missed revenue. Capture after-hours Sales & Service
              automatically.
            </p>
            <p className="text-xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              Answer every Sales & Service call, route intelligently, book on
              the spot, and send SMS reminders.
            </p>
            <p className="text-base text-gray-300 mt-2 mb-8 max-w-3xl mx-auto">
              For franchise & independent dealerships that want fewer missed
              calls, faster speed-to-lead, and lower no-shows—without adding
              headcount.
            </p>

            {/* ROI Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
                <div className="text-2xl font-bold text-green-400">+35%</div>
                <div className="text-xs text-gray-400">More Leads</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
                <div className="text-2xl font-bold text-blue-400">60%</div>
                <div className="text-xs text-gray-400">Fewer No-Shows</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-xs text-gray-400">Never Offline</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
                <div className="text-2xl font-bold text-yellow-400">$15K+</div>
                <div className="text-xs text-gray-400">Monthly Boost</div>
              </div>
            </div>

            {/* Phone CTA */}
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3 text-purple-400" />
                Call the AI Receptionist
              </h3>
              <p className="text-gray-300 mb-4">
                Sales or Service? The agent routes you.
              </p>
              <a
                href={`tel:${phoneNumber}`}
                className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-6 px-12 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 shadow-2xl hover:shadow-green-500/25"
                onClick={() =>
                  window.gtag?.("event", "click_call_ai", { location: "hero" })
                }
              >
                <PhoneCall className="w-8 h-8" />
                <span>{phoneDisplay}</span>
              </a>
              <div className="mt-3 text-sm text-gray-400">{pricingBlurb}</div>
              <div className="mt-2 text-sm text-purple-300">
                {specificityLine}
              </div>
              <div className="mt-2 text-xs text-gray-500">
                If you're not seeing value in 14 days, cancel—no questions
                asked.
              </div>
            </div>

            {/* Secondary CTAs */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={`${bookUrl}?utm_source=lp&utm_medium=cta&utm_campaign=hero`}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg hover:shadow-purple-500/25"
                onClick={() =>
                  window.gtag?.("event", "click_book_demo", {
                    location: "hero",
                  })
                }
              >
                <Calendar className="w-5 h-5" />
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("roi-calculator")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-transparent border-2 border-purple-500 hover:bg-purple-500/20 text-purple-400 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>See Your Dealership's AI Revenue Boost</span>
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mb-8">
              We won't spam you. Opt-out anytime.
            </p>
          </main>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              All-in-One AI Dealership System
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              One AI system that works like{" "}
              <span className="text-purple-400 font-bold">
                three expert employees
              </span>{" "}
              — Receptionist, Sales Specialist, and Service Coordinator.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Reception & Routing */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                Reception & Routing
              </h3>
              <p className="text-sm text-purple-300 mb-4 font-medium">
                Fewer missed calls
              </p>
              <ul className="space-y-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Answers 100% of calls instantly</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Routes calls to sales, service, or any department</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Answers FAQs from your custom knowledge base</span>
                </li>
              </ul>
            </div>

            {/* Sales Agent */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                Sales Agent
              </h3>
              <p className="text-sm text-blue-300 mb-4 font-medium">
                Faster speed-to-lead
              </p>
              <ul className="space-y-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Searches <strong>new & used inventory in real-time</strong>
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Discusses features, incentives, & trade-ins</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Calculates real payments with financing options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Schedules test drives and confirms via SMS</span>
                </li>
              </ul>
            </div>

            {/* Service Department */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                Service Department
              </h3>
              <p className="text-sm text-cyan-300 mb-4 font-medium">
                Lower no-shows
              </p>
              <ul className="space-y-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Books, reschedules, or cancels appointments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Sends automated text reminders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Validates vehicles from 50,000+ model database</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Confirms service history and provides maintenance
                    recommendations
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-400 text-center mt-8">
            Works with: vAuto • CDK • Dealertrack • xTime • Cal.com/Calendly •
            Twilio • Other leading solutions
          </p>
          <p className="text-sm text-gray-400 text-center mt-6">
            Admin controls include: routing & hours, banned phrases, escalation
            rules, transcript export, and opt-out keywords.
          </p>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Not Just a Call Answering Service
            </h2>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
              <p className="text-xl text-gray-200 leading-relaxed">
                This AI is trained specifically for{" "}
                <span className="text-purple-400 font-bold">
                  dealership operations
                </span>
                . It integrates with your{" "}
                <span className="text-blue-400 font-bold">
                  CRM, inventory, and scheduling systems
                </span>{" "}
                <em className="text-gray-300">
                  read-only or write-back as approved
                </em>{" "}
                so customers get{" "}
                <span className="text-cyan-400 font-bold">
                  accurate, helpful, and on-brand interactions every time
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi-calculator" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See exactly how much revenue you could recover with our AI
              solution. Adjust the inputs to match your dealership's current
              performance.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <ROICalculator />
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phoneNumber}`}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
                onClick={() =>
                  window.gtag?.("event", "click_call_ai", {
                    location: "roi_section",
                  })
                }
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call AI Demo: {phoneDisplay}</span>
              </a>
              <a
                href={`${bookUrl}?utm_source=lp&utm_medium=cta&utm_campaign=roi`}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
                onClick={() =>
                  window.gtag?.("event", "click_book_demo", {
                    location: "roi_section",
                  })
                }
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Discovery Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Feedback from Early Adopters
            </h2>
            <p className="text-xl text-gray-300">
              Representative feedback from dealerships testing our AI solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="text-sm text-gray-500">Dealership Customer</div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 text-center mt-8">
            Testimonials are from both users and pilot users.
          </p>
        </div>
      </section>

      {/* Setup Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Full Setup in 48 Hours
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Choose How You Start</h3>
              <p className="text-gray-400">
                Subscription, setup+service, or enterprise—designed for your
                budget
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Trial Period</h3>
              <p className="text-gray-400">Test the system risk-free</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Training</h3>
              <p className="text-gray-400">Knowledge base trained for you</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-Location</h3>
              <p className="text-gray-400">Support for dealer groups</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">
                Can it use our live inventory and incentives?
              </h3>
              <p className="text-gray-300">
                Yes. We connect to your inventory feed and import current
                incentives so callers get accurate, on-brand answers.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">
                How are payments calculated?
              </h3>
              <p className="text-gray-300">
                We apply your finance parameters (APR, term, down payment,
                trade-in) and display estimates with clear disclaimers.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">
                Does this replace our receptionist?
              </h3>
              <p className="text-gray-300">
                It can, or it can serve simply as after-hours and overflow
                coverage—the choice is yours depending on your needs. Most
                dealerships start with <strong>after-hours and overflow</strong>{" "}
                coverage, then decide whether to expand to full-time coverage.
                You control routing rules, escalation to humans, and hours of
                operation.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">
                How do handoffs to humans work?
              </h3>
              <p className="text-gray-300">
                The AI agent can warm-transfer to extensions or cell phones,
                create call-back tasks, and send transcripts to your CRM. You
                decide when to escalate—by intent, sentiment, or wait time.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">
                Where does our data live?
              </h3>
              <p className="text-gray-300">
                Your CRM and inventory data stays in your systems. We store call
                metadata and model prompts for quality only, following
                dealership policies. PII redaction and data retention windows
                are configurable.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">
                What are our rollout options?
              </h3>
              <p className="text-gray-300">
                Choose a fully managed subscription, a one-time setup with a
                light service plan, or an enterprise rollout across multiple
                dealership locations. We scope to your budget and systems.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-2">
                What if we're not happy?
              </h3>
              <p className="text-gray-300">
                Start with a 14-day pilot. If it's not a fit, cancel—no
                questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Got a Question?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>

            <form
              action="https://formspree.io/f/mrblewdv"
              method="POST"
              className="max-w-lg mx-auto grid grid-cols-1 gap-4 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            >
              <input
                required
                name="name"
                placeholder="Your full name"
                className="px-4 py-4 rounded-lg bg-black/40 border border-white/20 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 text-lg"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your email address"
                className="px-4 py-4 rounded-lg bg-black/40 border border-white/20 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 text-lg"
              />
              <input
                name="company"
                placeholder="Company/Dealership name (optional)"
                className="px-4 py-4 rounded-lg bg-black/40 border border-white/20 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 text-lg"
              />
              <textarea
                name="message"
                placeholder="Your message..."
                rows={4}
                className="px-4 py-4 rounded-lg bg-black/40 border border-white/20 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 text-lg resize-vertical"
              ></textarea>
              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </button>
              <p className="text-sm text-gray-400 mt-3 text-center">
                We'll get back to you within 24 hours. Your information is kept
                private and secure.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Automate Your Dealership?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Book your{" "}
            <span className="text-purple-400 font-semibold">
              free discovery call
            </span>{" "}
            now and see how much business you've been leaving on the table.
          </p>

          <div className="flex justify-center">
            <a
              href={`${bookUrl}?utm_source=lp&utm_medium=cta&utm_campaign=footer`}
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 shadow-2xl hover:shadow-purple-500/25"
              onClick={() =>
                window.gtag?.("event", "click_book_demo", {
                  location: "footer",
                })
              }
            >
              <Calendar className="w-6 h-6" />
              <span>Get Started Today</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              🎯 Flexible launch plans • 📞 14-day risk-free pilot • ⚡ Go live
              in 48 hours
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Works with vAuto, CDK, Dealertrack, xTime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Twilio, Cal.com/Calendly, and more...</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Expert-Driven. Dealership-Focused.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile call bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-black/90 backdrop-blur border-t border-white/10">
        <div className="p-3 flex gap-3">
          <a
            href={`tel:${phoneNumber}`}
            className="flex-1 inline-flex items-center justify-center rounded-lg bg-cyan-600 hover:bg-cyan-700 py-3 font-semibold text-white transition-colors"
            onClick={() =>
              window.gtag?.("event", "click_call_ai", {
                location: "sticky_mobile",
              })
            }
          >
            <PhoneCall className="w-5 h-5 mr-2" /> Call the AI Agent
          </a>
          <a
            href={`${bookUrl}?utm_source=lp&utm_medium=sticky&utm_campaign=mobile`}
            className="flex-1 inline-flex items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 py-3 font-semibold text-white transition-colors"
            onClick={() =>
              window.gtag?.("event", "click_book_demo", {
                location: "sticky_mobile",
              })
            }
          >
            <Calendar className="w-5 h-5 mr-2" /> Get Started
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/40 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src={logoPath}
                alt={`${brand} Logo`}
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "block";
                }}
              />
              <div className="h-8 w-auto" style={{ display: "none" }}>
                <svg
                  width="80"
                  height="32"
                  viewBox="0 0 80 32"
                  className="h-full w-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="footerLogoGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="12"
                    cy="16"
                    r="10"
                    fill="url(#footerLogoGradient)"
                  />
                  <path d="M8 13h8v6H8z" fill="white" />
                  <circle cx="9.5" cy="14.5" r="1" fill="#8B5CF6" />
                  <circle cx="14.5" cy="17.5" r="1" fill="#8B5CF6" />
                  <text
                    x="28"
                    y="14"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="12"
                    fontWeight="700"
                    fill="url(#footerLogoGradient)"
                  >
                    {brand}
                  </text>
                  <text
                    x="28"
                    y="22"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="8"
                    fontWeight="400"
                    fill="#9CA3AF"
                  >
                    AI Voice Solutions for Dealerships
                  </text>
                </svg>
              </div>
            </div>

            <div className="flex space-x-6 text-gray-400">
              <a
                href="/privacy"
                className="hover:text-white transition-colors"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-white transition-colors"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>
              &copy; 2025 {brand}. All rights reserved. Transform your
              dealership with AI voice technology.
            </p>
            <p className="text-xs mt-2 text-gray-500">
              No flat tiers. No cookie-cutter pricing. Every dealership is
              different — so is our plan for you.
            </p>
          </div>
        </div>
      </footer>

      {/* Reduced motion styles */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse {
            animation: none !important;
          }
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CarDealershipAILanding;
