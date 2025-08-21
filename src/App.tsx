import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Video,
  Cog,
  Building2,
  Heart,
  Home,
  Scale,
  GraduationCap,
  ChevronDown,
  CheckCircle,
  Calendar,
  Mail,
  Sparkles,
  Zap,
  Star,
  Quote,
  Car,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface TechLogoProps {
  name: string;
}

function TechLogo({ name }: TechLogoProps) {
  const getLogoColor = (techName: string) => {
    const colors = {
      "Retell AI": "from-blue-400 to-cyan-400",
      OpenAI: "from-green-400 to-emerald-400",
      "Go High Level": "from-purple-400 to-pink-400",
      LangChain: "from-yellow-400 to-orange-400",
      n8n: "from-red-400 to-pink-400",
      Make: "from-blue-400 to-indigo-400",
      React: "from-cyan-400 to-blue-400",
      "Node.js": "from-green-400 to-lime-400",
      TypeScript: "from-blue-400 to-blue-600",
      Supabase: "from-green-400 to-teal-400",
      Zapier: "from-orange-400 to-red-400",
      HTML5: "from-orange-400 to-red-400",
      CSS3: "from-blue-400 to-cyan-400",
      JavaScript: "from-yellow-400 to-orange-400",
      Synthesia: "from-purple-400 to-indigo-400",
      "D-ID": "from-pink-400 to-rose-400",
      Tailwind: "from-cyan-400 to-teal-400",
      "Next.js": "from-gray-400 to-gray-600",
      Python: "from-blue-400 to-yellow-400",
      PostgreSQL: "from-blue-400 to-indigo-400",
    };
    return (
      colors[techName as keyof typeof colors] || "from-gray-400 to-gray-600"
    );
  };

  const getInitials = (techName: string) => {
    const specialCases = {
      "Retell AI": "RA",
      OpenAI: "AI",
      "Go High Level": "GHL",
      LangChain: "LC",
      n8n: "n8n",
      Make: "MK",
      React: "⚛️",
      "Node.js": "N",
      TypeScript: "TS",
      Supabase: "SB",
      Zapier: "Z",
      HTML5: "H",
      CSS3: "C",
      JavaScript: "JS",
      Synthesia: "SY",
      "D-ID": "DI",
      Tailwind: "TW",
      "Next.js": "N",
      Python: "🐍",
      PostgreSQL: "PG",
    };

    return (
      specialCases[techName as keyof typeof specialCases] ||
      techName
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    );
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="group relative flex-shrink-0"
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${getLogoColor(
          name
        )} rounded-2xl blur-lg opacity-0 group-hover:opacity-30`}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main card */}
      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 w-32 h-24 flex flex-col items-center justify-center group-hover:bg-white/20 transition-all duration-300">
        {/* Logo/Icon */}
        <motion.div
          className={`w-8 h-8 rounded-lg bg-gradient-to-r ${getLogoColor(
            name
          )} flex items-center justify-center text-white font-bold text-sm mb-2`}
          whileHover={{
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          {getInitials(name)}
        </motion.div>

        {/* Tech name */}
        <div className="text-gray-300 text-xs font-medium text-center leading-tight group-hover:text-white transition-colors">
          {name}
        </div>

        {/* Subtle sparkle effect */}
        <motion.div
          className="absolute top-2 right-2 w-1 h-1 bg-white/40 rounded-full"
          animate={{
            scale: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      </div>
    </motion.div>
  );
}

interface TechItemProps {
  title: string;
  items: string[];
}

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  link?: string;
}

function TechItem({ title, items }: TechItemProps) {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-blue-400">{title}</h4>
      <div className="space-y-1">
        {items.map((item, index) => (
          <div key={index} className="text-gray-300 text-xs">
            • {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactItem({ icon, title, content, link }: ContactItemProps) {
  const ItemContent = () => (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
    >
      <div className="text-blue-400 flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <div className="text-gray-300 text-sm leading-relaxed">{content}</div>
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} className="block">
        <ItemContent />
      </a>
    );
  }

  return <ItemContent />;
}

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Add favicon to document head
  useEffect(() => {
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/x-icon";
    favicon.href =
      "https://raw.githubusercontent.com/ethereumknight2/agenxus-site/main/public/favicon.ico";
    document.head.appendChild(favicon);

    const favicon16 = document.createElement("link");
    favicon16.rel = "icon";
    favicon16.type = "image/png";
    favicon16.sizes = "16x16";
    favicon16.href =
      "https://raw.githubusercontent.com/ethereumknight2/agenxus-site/main/public/favicon-16x16.png";
    document.head.appendChild(favicon16);

    const favicon32 = document.createElement("link");
    favicon32.rel = "icon";
    favicon32.type = "image/png";
    favicon32.sizes = "32x32";
    favicon32.href =
      "https://raw.githubusercontent.com/ethereumknight2/agenxus-site/main/public/favicon-32x32.png";
    document.head.appendChild(favicon32);

    const appleTouchIcon = document.createElement("link");
    appleTouchIcon.rel = "apple-touch-icon";
    appleTouchIcon.sizes = "180x180";
    appleTouchIcon.href =
      "https://raw.githubusercontent.com/ethereumknight2/agenxus-site/main/public/apple-touch-icon.png";
    document.head.appendChild(appleTouchIcon);

    // Cleanup function
    return () => {
      if (document.head.contains(favicon)) document.head.removeChild(favicon);
      if (document.head.contains(favicon16))
        document.head.removeChild(favicon16);
      if (document.head.contains(favicon32))
        document.head.removeChild(favicon32);
      if (document.head.contains(appleTouchIcon))
        document.head.removeChild(appleTouchIcon);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white overflow-hidden"
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/80 via-blue-950/60 to-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/ethereumknight2/agenxus-site/main/public/logo.png"
                  alt="Agenxus Logo"
                  className="h-20 w-auto"
                />
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex items-center gap-8"
            >
              <a
                href="#services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#industries"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Industries
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <motion.a
                href="https://cal.com/agenxus/discoverycall-30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-6 rounded-full text-sm"
              >
                Get Started
              </motion.a>
            </motion.nav>
          </div>
        </div>
      </header>

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Animated grid pattern */}
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Enhanced mouse follower */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        {/* Secondary mouse follower for depth */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl pointer-events-none"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{ type: "spring", damping: 40, stiffness: 150 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 pt-20 z-30">
        <div className="text-center max-w-6xl mx-auto relative z-40">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-7xl md:text-9xl font-bold mb-6 leading-none"
          >
            <span className="block">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Agen
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                xus
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-100 mb-6"
          >
            AI Agents for Smarter Business.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Agenxus helps modern businesses grow with intelligent systems that
            engage, convert, and streamline—24/7. From voice and chat agents to
            video AI and automation workflows, we build scalable solutions that
            act like team members (but never sleep).
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-50"
          >
            <motion.a
              href="https://cal.com/agenxus/discoverycall-30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-2"
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />

              <span className="relative z-10 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Calendar className="w-4 h-4" />
                </motion.div>
                Book a Free Discovery Call
                <motion.div
                  className="group-hover:translate-x-1 transition-transform"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </span>
            </motion.a>

            <motion.a
              href="contact.html"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(255, 255, 255, 0.5)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white font-semibold py-4 px-8 rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Mail className="w-4 h-4" />
              </motion.div>
              Contact Us
            </motion.a>
          </motion.div>
        </div>

        {/* Floating geometric elements - positioned behind content */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <FloatingElement delay={0} className="top-20 left-20" />
          <FloatingElement delay={1} className="top-40 right-32" />
          <FloatingElement delay={2} className="bottom-32 left-1/3" />

          {/* Additional animated elements */}
          <motion.div
            className="absolute top-1/2 left-10 w-8 h-8 border border-blue-400/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute top-1/3 right-20 w-6 h-6 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative py-32 px-4 bg-gradient-to-b from-black/80 to-transparent z-20"
        style={{ marginTop: "200px" }}
      >
        <div className="max-w-7xl mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 relative z-20">
              <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                AI Solutions That
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Work 24/7
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Intelligent systems that engage customers, convert leads, and
              streamline operations while you focus on growing your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Phone className="w-8 h-8" />}
              title="Voice Agents"
              description="Human-like phone assistants that handle incoming calls, qualify leads, answer questions, and book appointments."
              delay={0.1}
            />
            <ServiceCard
              icon={<MessageCircle className="w-8 h-8" />}
              title="AI Chat Agents"
              description="Conversational chatbots trained on your business data—capable of guiding users and converting visitors into qualified leads."
              delay={0.2}
            />
            <ServiceCard
              icon={<Video className="w-8 h-8" />}
              title="Video Agents"
              description="AI-generated video assistants that deliver personalized messages, guide product demos, or onboard customers."
              delay={0.3}
            />
            <ServiceCard
              icon={<Cog className="w-8 h-8" />}
              title="Automation Systems"
              description="Streamlined pipelines that connect your marketing, CRM, calendars, email, and more—running in the background."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        id="industries"
        className="relative py-32 px-4 bg-gradient-to-b from-transparent to-gray-900/20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                Industries We
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Focus On
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We specialize in helping service-driven businesses that benefit
              most from intelligent automation and conversational AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard
              icon={<Home className="w-8 h-8" />}
              title="Home Services"
              description="HVAC, plumbing, cleaning, pest control—where missed calls = missed revenue. Our agents answer instantly and book jobs."
              delay={0.1}
            />
            <IndustryCard
              icon={<Heart className="w-8 h-8" />}
              title="Healthcare & Wellness"
              description="Chiropractors, dentists, med spas benefit from HIPAA-friendly automations and appointment agents."
              delay={0.2}
            />
            <IndustryCard
              icon={<Building2 className="w-8 h-8" />}
              title="Real Estate & Mortgage"
              description="Capture leads day and night with agents that qualify buyers, schedule viewings, and explain listings."
              delay={0.3}
            />
            <IndustryCard
              icon={<Car className="w-8 h-8" />}
              title="Auto Dealerships"
              description="Never miss a sales or service call. AI agents handle inventory queries, book test drives, and schedule maintenance 24/7."
              delay={0.4}
            />
            <IndustryCard
              icon={<Scale className="w-8 h-8" />}
              title="Legal Services"
              description="Law firms can automate lead intake, appointment setting, and initial qualification."
              delay={0.5}
            />
            <IndustryCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="Coaching & Education"
              description="AI tutors and onboarding bots help coaches and course creators deliver personalized support."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Why Agenxus Section */}
      <section id="about" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Why Choose
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Agenxus?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We don't just install bots—we build tailored systems that think,
                respond, and drive ROI.
              </p>

              <div className="space-y-4">
                {[
                  "Built for your business—not off-the-shelf templates",
                  "Systems that scale with you over time",
                  "Reliable setup and support",
                  "Transparent processes and human oversight",
                  "One-time builds or ongoing retainers available",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Our Approach
                </h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-blue-400 mb-2">
                      Discovery & Strategy
                    </h4>
                    <p className="text-sm text-gray-300">
                      We analyze your business needs and design the perfect AI
                      solution
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-purple-400 mb-2">
                      Build & Deploy
                    </h4>
                    <p className="text-sm text-gray-300">
                      Custom development using cutting-edge AI technologies
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-cyan-400 mb-2">
                      Scale & Support
                    </h4>
                    <p className="text-sm text-gray-300">
                      Ongoing optimization and expansion as your business grows
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-gray-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                What Our Clients
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Are Saying
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how AI agents have transformed businesses across
              industries, driving growth and efficiency 24/7.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Our voice agent handles 85% of incoming calls and books 40% more appointments than our previous system. It's like having our best receptionist working 24/7 without breaks."
              author="Sarah M."
              role="Owner"
              rating={5}
              delay={0.1}
            />
            <TestimonialCard
              quote="The AI chat agent on our website converted 60% more leads in the first month. Patients love getting instant answers about treatments and scheduling, even at 2 AM."
              author="Dr. James R."
              role="Practice Owner"
              rating={5}
              delay={0.2}
            />
            <TestimonialCard
              quote="Since implementing Agenxus automation, we've reduced manual data entry by 90% and our team can focus on closing deals instead of admin work. Game changer for our productivity."
              author="Michael C."
              role="Sales Director"
              rating={5}
              delay={0.3}
            />
            <TestimonialCard
              quote="The video AI onboarding system has helped us scale our coaching program to 500+ students without hiring additional support staff. The personalization is incredible."
              author="Lisa T."
              role="Business Coach"
              rating={5}
              delay={0.4}
            />
            <TestimonialCard
              quote="Our law firm's intake process went from 3 days to 3 hours. The AI qualifies leads perfectly and our conversion rate has doubled. Best investment we've made."
              author="Robert W."
              role="Managing Partner"
              rating={5}
              delay={0.5}
            />
            <TestimonialCard
              quote="The pest control booking agent handles seasonal rushes flawlessly. We went from missing 30% of calls to capturing every lead. Revenue increased 45% in peak season."
              author="Jennifer A."
              role="Operations Manager"
              rating={5}
              delay={0.6}
            />
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-white/10"
          >
            <StatCard
              number="$15k+"
              label="Monthly Revenue Boost"
              delay={0.1}
            />
            <StatCard number="60%" label="Average Lead Increase" delay={0.2} />
            <StatCard number="24/7" label="Uptime Guaranteed" delay={0.3} />
            <StatCard
              number="30 Days"
              label="Average ROI Timeline"
              delay={0.4}
            />
          </motion.div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-transparent to-gray-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                Powered by
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Leading Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage the best tools and platforms to build robust, scalable
              AI solutions for your business
            </p>
          </motion.div>

          {/* Scrolling Logo Container */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10"></div>

            {/* First row - scrolling right */}
            <motion.div
              className="flex gap-12 py-8 mb-8"
              animate={{
                x: [0, -1200],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ width: "200%" }}
            >
              {/* First set */}
              <TechLogo name="Retell AI" />
              <TechLogo name="OpenAI" />
              <TechLogo name="Go High Level" />
              <TechLogo name="LangChain" />
              <TechLogo name="n8n" />
              <TechLogo name="Make" />
              <TechLogo name="React" />
              <TechLogo name="Node.js" />
              <TechLogo name="TypeScript" />
              <TechLogo name="Supabase" />

              {/* Duplicate set for seamless loop */}
              <TechLogo name="Retell AI" />
              <TechLogo name="OpenAI" />
              <TechLogo name="Go High Level" />
              <TechLogo name="LangChain" />
              <TechLogo name="n8n" />
              <TechLogo name="Make" />
              <TechLogo name="React" />
              <TechLogo name="Node.js" />
              <TechLogo name="TypeScript" />
              <TechLogo name="Supabase" />
            </motion.div>

            {/* Second row - scrolling left */}
            <motion.div
              className="flex gap-12 py-8"
              animate={{
                x: [-1200, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ width: "200%" }}
            >
              {/* First set */}
              <TechLogo name="Zapier" />
              <TechLogo name="HTML5" />
              <TechLogo name="CSS3" />
              <TechLogo name="JavaScript" />
              <TechLogo name="Synthesia" />
              <TechLogo name="D-ID" />
              <TechLogo name="Tailwind" />
              <TechLogo name="Next.js" />
              <TechLogo name="Python" />
              <TechLogo name="PostgreSQL" />

              {/* Duplicate set for seamless loop */}
              <TechLogo name="Zapier" />
              <TechLogo name="HTML5" />
              <TechLogo name="CSS3" />
              <TechLogo name="JavaScript" />
              <TechLogo name="Synthesia" />
              <TechLogo name="D-ID" />
              <TechLogo name="Tailwind" />
              <TechLogo name="Next.js" />
              <TechLogo name="Python" />
              <TechLogo name="PostgreSQL" />
            </motion.div>
          </div>

          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-lg">
              And many more cutting-edge tools to deliver the perfect solution
              for your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to know about AI agents and how they can
              transform your business
            </p>
          </motion.div>

          <div className="space-y-6">
            <FAQItem
              question="How quickly can an AI agent be deployed?"
              answer="Most AI agents can be deployed within 2-4 weeks, depending on complexity. Simple voice agents can often be live within 1 week, while more complex integrations with multiple systems may take 3-4 weeks."
              delay={0.1}
            />
            <FAQItem
              question="What's the ROI of implementing AI agents?"
              answer="Most clients see ROI within 30-60 days. Benefits include 24/7 availability, 40-60% increase in lead capture, reduced staffing costs, and improved customer satisfaction. The average business saves $3,000-8,000 monthly on staffing while increasing revenue."
              delay={0.2}
            />
            <FAQItem
              question="Can AI agents integrate with my existing systems?"
              answer="Yes! We specialize in integrating with popular CRMs (Salesforce, HubSpot, Go High Level), calendars (Calendly, Cal.com), phone systems, and business tools. Our agents work within your existing workflow."
              delay={0.3}
            />
            <FAQItem
              question="How human-like are the AI voice agents?"
              answer="Our voice agents are virtually indistinguishable from human representatives. They handle interruptions, natural conversation flow, and emotional nuances. Most customers don't realize they're speaking with AI."
              delay={0.4}
            />
            <FAQItem
              question="What happens if the AI can't handle a request?"
              answer="Agents are programmed to seamlessly transfer to human staff when needed. They can identify complex requests, escalate frustrated customers, or handle situations requiring human judgment. You maintain full control."
              delay={0.5}
            />
            <FAQItem
              question="Is my business data secure?"
              answer="Absolutely. We use enterprise-grade security, end-to-end encryption, and comply with GDPR, HIPAA, and other regulations. Your data stays within your systems—we only access what's necessary for the agent to function."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Let's
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Talk.
            </span>
          </h3>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            If you're curious how an AI agent could work in your business—or
            ready to start building— reach out and we'll walk you through it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://cal.com/agenxus/discoverycall-30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book a Free Discovery Call
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white font-semibold py-4 px-8 rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Contact & Footer Section */}
      <footer
        id="contact"
        className="relative bg-gradient-to-b from-gray-900/50 to-black border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Send Us a Message
                </span>
              </h3>
              <p className="text-gray-300 mb-8">
                Ready to transform your business with AI? Drop us a line and
                we'll get back to you within 24 hours.
              </p>

              <form
                action="https://formspree.io/f/mrblewdv"
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    required
                    name="name"
                    placeholder="Your full name"
                    className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    required
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300"
                  />
                </div>

                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  name="company"
                  placeholder="Company name (optional)"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300"
                />

                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 resize-vertical transition-all duration-300"
                ></motion.textarea>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Get In Touch
                  </span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ready to see how AI agents can transform your business? We're
                  here to help you get started.
                </p>
              </div>

              <div className="space-y-6">
                <ContactItem
                  icon={<Mail className="w-6 h-6" />}
                  title="Email"
                  content="hello@agenxus.com"
                  link="mailto:hello@agenxus.com"
                />

                <ContactItem
                  icon={<Phone className="w-6 h-6" />}
                  title="Phone"
                  content="+1 (555) 123-4567"
                  link="tel:+15551234567"
                />

                <ContactItem
                  icon={<Building2 className="w-6 h-6" />}
                  title="Office"
                  content={
                    <>
                      123 Innovation Drive
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </>
                  }
                />

                <ContactItem
                  icon={<Calendar className="w-6 h-6" />}
                  title="Business Hours"
                  content={
                    <>
                      Monday - Friday: 9:00 AM - 6:00 PM PST
                      <br />
                      Saturday: 10:00 AM - 4:00 PM PST
                      <br />
                      Sunday: Closed
                    </>
                  }
                />
              </div>

              {/* Quick Response Promise */}
              <motion.div
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold text-white">
                    Quick Response
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  We typically respond to all inquiries within 2-4 hours during
                  business hours. For urgent matters, please call us directly.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-white/10 mt-16 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://raw.githubusercontent.com/ethereumknight2/agenxus-site/main/public/logo.png"
                  alt="Agenxus Logo"
                  className="h-8 w-auto"
                />
                <span className="text-gray-400 text-sm">
                  © 2025 Agenxus. All rights reserved.
                </span>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </a>
                <motion.a
                  href="https://cal.com/agenxus/discoverycall-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold py-2 px-4 rounded-full"
                >
                  Book Call
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            delay,
            ease: "easeOut",
          },
        },
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative"
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Card content */}
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full overflow-hidden">
        {/* Animated corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full"
          initial={{ scale: 0, rotate: -45 }}
          animate={
            isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }
          }
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        />

        {/* Icon with animation */}
        <motion.div
          className="text-blue-400 mb-4"
          whileHover={{
            scale: 1.1,
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.5 },
          }}
        >
          {icon}
        </motion.div>

        {/* Animated title */}
        <motion.h3
          className="text-xl font-bold mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>

        {/* Animated description */}
        <motion.p
          className="text-gray-300 text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
        >
          {description}
        </motion.p>

        {/* Subtle particle effect */}
        <motion.div
          className="absolute bottom-2 right-2 w-2 h-2 bg-cyan-400/50 rounded-full"
          animate={{
            scale: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
        />
      </div>
    </motion.div>
  );
}

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function IndustryCard({ icon, title, description, delay }: IndustryCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay,
                ease: "easeOut",
              },
            }
          : {}
      }
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="group relative"
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />

      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
        {/* Icon with simple animation */}
        <motion.div
          className="text-purple-400 mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.1 }}
        >
          {icon}
        </motion.div>

        <motion.h3
          className="text-lg font-bold mb-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-300 text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
        >
          {description}
        </motion.p>

        {/* Simple corner sparkle */}
        <div className="absolute top-3 right-3">
          <Sparkles className="w-3 h-3 text-purple-400/50" />
        </div>
      </div>
    </motion.div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  delay: number;
}

function TestimonialCard({
  quote,
  author,
  role,
  rating,
  delay,
}: TestimonialCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: 15 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              rotateY: 0,
              transition: {
                duration: 0.8,
                delay,
                ease: "easeOut",
              },
            }
          : {}
      }
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="group relative perspective-1000"
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
        {/* Quote icon */}
        <motion.div
          className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={
            isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
          }
          transition={{
            duration: 0.6,
            delay: delay + 0.2,
            type: "spring",
            stiffness: 200,
          }}
        >
          <Quote className="w-4 h-4 text-white" />
        </motion.div>

        {/* Star rating */}
        <motion.div
          className="flex gap-1 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.6, delay: delay + 0.1 }}
        >
          {[...Array(rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: -180 }}
              animate={
                isInView
                  ? { opacity: 1, rotate: 0 }
                  : { opacity: 0, rotate: -180 }
              }
              transition={{ duration: 0.4, delay: delay + 0.3 + i * 0.1 }}
            >
              <Star className="w-4 h-4 text-purple-400 fill-current" />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote text */}
        <motion.blockquote
          className="text-gray-300 text-sm leading-relaxed mb-6 italic"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
        >
          "{quote}"
        </motion.blockquote>

        {/* Author info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: delay + 0.6 }}
        >
          <div className="font-semibold text-white text-sm">{author}</div>
          <div className="text-gray-400 text-xs">{role}</div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          className="absolute bottom-3 right-3 w-8 h-8 border border-pink-400/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
}

interface StatCardProps {
  number: string;
  label: string;
  delay: number;
}

function StatCard({ number, label, delay }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.6,
                delay,
                ease: "easeOut",
              },
            }
          : {}
      }
      className="text-center"
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
        animate={
          isInView
            ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {number}
      </motion.div>
      <div className="text-gray-400 text-sm font-medium">{label}</div>
    </motion.div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  delay: number;
}

function FAQItem({ question, answer, delay }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay,
                ease: "easeOut",
              },
            }
          : {}
      }
      className="group"
    >
      <motion.div
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
        whileHover={{ scale: 1.01 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-2xl"
        >
          <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-blue-400" />
          </motion.div>
        </button>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6">
            <p className="text-gray-300 leading-relaxed">{answer}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

interface FloatingElementProps {
  delay: number;
  className: string;
}

function FloatingElement({ delay, className }: FloatingElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: 360 }}
      transition={{ duration: 1, delay }}
      className={`absolute ${className} pointer-events-none`}
    >
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative"
      >
        {/* Main geometric shape */}
        <div className="w-16 h-16 border border-white/20 rounded-xl backdrop-blur-sm bg-white/5" />

        {/* Inner rotating element */}
        <motion.div
          className="absolute inset-2 border border-blue-400/30 rounded-lg"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Central dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400/60 rounded-full"
          animate={{
            scale: [0.5, 1.2, 0.5],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
