interface TechItemProps {
  title: string;
  items: string[];
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
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

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
                  src="/src/logo.png"
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-6 rounded-full text-sm"
              >
                Get Started
              </motion.button>
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
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300"
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
            </motion.button>

            <motion.button
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
            </motion.button>
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
              icon={<Scale className="w-8 h-8" />}
              title="Legal Services"
              description="Law firms can automate lead intake, appointment setting, and initial qualification."
              delay={0.4}
            />
            <IndustryCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="Coaching & Education"
              description="AI tutors and onboarding bots help coaches and course creators deliver personalized support."
              delay={0.5}
            />
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
              author="Sarah Mitchell"
              role="Owner"
              company="Elite HVAC Solutions"
              rating={5}
              delay={0.1}
            />
            <TestimonialCard
              quote="The AI chat agent on our website converted 60% more leads in the first month. Patients love getting instant answers about treatments and scheduling, even at 2 AM."
              author="Dr. James Rodriguez"
              role="Practice Owner"
              company="Rivera Dental Group"
              rating={5}
              delay={0.2}
            />
            <TestimonialCard
              quote="Since implementing Agenxus automation, we've reduced manual data entry by 90% and our team can focus on closing deals instead of admin work. Game changer for our productivity."
              author="Michael Chen"
              role="Sales Director"
              company="Premier Real Estate"
              rating={5}
              delay={0.3}
            />
            <TestimonialCard
              quote="The video AI onboarding system has helped us scale our coaching program to 500+ students without hiring additional support staff. The personalization is incredible."
              author="Lisa Thompson"
              role="Business Coach"
              company="Success Accelerator"
              rating={5}
              delay={0.4}
            />
            <TestimonialCard
              quote="Our law firm's intake process went from 3 days to 3 hours. The AI qualifies leads perfectly and our conversion rate has doubled. Best investment we've made."
              author="Robert Walsh"
              role="Managing Partner"
              company="Walsh & Associates"
              rating={5}
              delay={0.5}
            />
            <TestimonialCard
              quote="The pest control booking agent handles seasonal rushes flawlessly. We went from missing 30% of calls to capturing every lead. Revenue increased 45% in peak season."
              author="Jennifer Adams"
              role="Operations Manager"
              company="Guardian Pest Control"
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
            <StatCard number="95%" label="Client Satisfaction" delay={0.1} />
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
                  Technologies We Use
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <TechItem
                    title="Voice AI"
                    items={[
                      "Retell AI",
                      "Custom GPT agents",
                      "Chat interfaces",
                    ]}
                  />
                  <TechItem
                    title="Automation"
                    items={["Go High Level", "n8n & Zapier", "Calendar APIs"]}
                  />
                  <TechItem
                    title="Development"
                    items={["React & Next.js", "Node.js", "Supabase"]}
                  />
                  <TechItem
                    title="AI & Video"
                    items={["Synthesia", "D-ID", "Vector search"]}
                  />
                </div>
              </div>
            </motion.div>
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book a Free Discovery Call
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white font-semibold py-4 px-8 rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </section>
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
      initial={{ opacity: 0, y: 30, rotateX: 45 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                duration: 0.7,
                delay,
                ease: "easeOut",
              },
            }
          : {}
      }
      whileHover={{
        y: -5,
        scale: 1.02,
        rotateX: -5,
        transition: { duration: 0.3 },
      }}
      className="group relative perspective-1000"
    >
      {/* Enhanced hover glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
        {/* Animated border accent */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100"
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon with enhanced animation */}
        <motion.div
          className="text-purple-400 mb-4"
          initial={{ scale: 0, rotate: 180 }}
          animate={
            isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }
          }
          transition={{
            duration: 0.8,
            delay: delay + 0.2,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{
            scale: 1.2,
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.6 },
          }}
        >
          {icon}
        </motion.div>

        <motion.h3
          className="text-lg font-bold mb-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-300 text-sm leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        >
          {description}
        </motion.p>

        {/* Corner sparkle effect */}
        <motion.div
          className="absolute top-3 right-3"
          animate={{
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sparkles className="w-3 h-3 text-purple-400/50" />
        </motion.div>
      </div>
    </motion.div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  delay: number;
}

function TestimonialCard({
  quote,
  author,
  role,
  company,
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
          <div className="text-blue-400 text-xs font-medium">{company}</div>
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
