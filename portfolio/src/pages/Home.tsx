import { LoadingScreen } from "@/components/LoadingScreen";
import { CustomCursor } from "@/components/CustomCursor";
import { Navigation } from "@/components/Navigation";
import { ParticleBackground } from "@/components/ParticleBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { 
  Code2, 
  Cpu, 
  Lightbulb, 
  LineChart, 
  Rocket, 
  Terminal, 
  Users, 
  Video, 
  Zap,
  BookOpen,
  Target,
  PenTool,
  Network,
  Play,
  ExternalLink,
  TrendingUp,
  Heart,
  Star,
  MessageCircle,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { SiInstagram, SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

// Typing Effect Hook
function useTypingEffect(phrases: string[]) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed]);

  return text;
}

function Counter({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0) {
        const value = Math.floor(latest * end);
        setCount(value > end ? end : value);
      }
    });
  }, [scrollYProgress, end]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white text-glow">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Home() {
  const { toast } = useToast();
  const typedText = useTypingEffect([
    "Building a Team",
    "Creating Opportunities",
    "Growing Together",
    "Changing Lives Daily"
  ]);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    window.location.href = `mailto:piyushbindal1145@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    toast({
      title: "Opening email client...",
      description: "Your message is ready to send to Piyush.",
    });
    form.reset();
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-background min-h-screen selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      <LoadingScreen />
      <Navigation />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918829866598?text=Hi%20Piyush%2C%20I%20visited%20your%20portfolio%20and%20I%27d%20like%20to%20connect!"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-whatsapp-float"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] transition-shadow"
      >
        <SiWhatsapp className="w-7 h-7 text-white" />
      </motion.a>

      {/* 3. Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        {/* Floating Shapes */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-24 h-24 border border-primary/20 rounded-lg backdrop-blur-3xl bg-primary/5"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-32 h-32 border border-secondary/20 rounded-full backdrop-blur-3xl bg-secondary/5"
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white tracking-tight mb-4">
              PIYUSH <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">BINDAL</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/70 uppercase tracking-widest mb-6 font-medium">
              Student • Entrepreneur • Content Creator
            </h2>
            <div className="h-8 mb-10 flex items-center justify-center text-primary text-lg md:text-xl font-mono">
              <span className="opacity-70">&gt;</span> {typedText}
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-primary ml-1 align-middle"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollTo("#join")}
                data-testid="button-join-team"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] hover:scale-105 w-full sm:w-auto flex items-center gap-2 justify-center"
              >
                <Users className="w-5 h-5" /> Join My Team
              </button>
              <a
                href="https://instagram.com/thepiyushbindal"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-follow-instagram-hero"
                className="px-8 py-3 rounded-full border border-white/20 text-white font-bold text-lg hover:border-pink-400/60 hover:bg-pink-500/10 hover:text-pink-300 transition-all w-full sm:w-auto flex items-center gap-2 justify-center"
              >
                <SiInstagram className="w-5 h-5" /> Follow on Instagram
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm flex flex-col items-center gap-2"
        >
          <span>Scroll to explore</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* 4. About Me */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 blur-xl scale-110" />
                  <div className="relative w-full h-full rounded-full border-2 border-primary/40 overflow-hidden"
                    data-testid="img-profile"
                  >
                    <img
                      src="/piyush.jpeg"
                      alt="Piyush Bindal"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Text */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white flex items-center gap-4">
                  <span className="text-primary">/</span> About Me
                </h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                  I'm Piyush Bindal, a Computer Science student passionate about technology, artificial intelligence, content creation, and personal growth. I enjoy exploring new opportunities, learning modern digital skills, and continuously improving myself. Alongside my academic journey, I am building entrepreneurial experience and developing communication, leadership, and networking skills.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. What I Do */}
      <section id="whatido" className="py-24 bg-black/40 border-y border-white/5 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-16 text-center text-white"
          >
            What I Do
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Student", desc: "Pursuing Computer Science and expanding my technical knowledge.", icon: <Code2 className="w-8 h-8 text-primary" /> },
              { title: "Entrepreneur", desc: "Growing through real-world experiences, networking, and business learning.", icon: <Rocket className="w-8 h-8 text-secondary" /> },
              { title: "AI Enthusiast", desc: "Exploring AI tools and emerging technologies.", icon: <Zap className="w-8 h-8 text-primary" /> },
              { title: "Content Creator", desc: "Sharing ideas, experiences, and lessons from my journey.", icon: <Video className="w-8 h-8 text-secondary" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl group"
              >
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Skills */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-12 text-center text-white"
          >
            Core Arsenal
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Communication", "Leadership", "Networking", "Content Creation", 
              "Personal Branding", "AI Tools", "Problem Solving", "Continuous Learning"
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/90 font-medium hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Entrepreneurial Journey */}
      <section id="journey" className="py-24 bg-black/30 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-16 text-white"
          >
            <span className="text-secondary">/</span> Experience
          </motion.h2>

          <div className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="absolute left-[15px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent opacity-50" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative md:w-1/2 md:pr-12 md:ml-auto md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-21px] md:left-0 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(0,212,255,0.8)] transition-all duration-300" />
              
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">Forever Living Products</h3>
                <h4 className="text-primary font-medium mb-4">Entrepreneur</h4>
                <p className="text-white/70 leading-relaxed">
                  Developing skills in communication, leadership, networking, goal setting, and personal development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Interests */}
      <section className="py-24 relative">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-16 text-center text-white"
          >
            Interests
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Artificial Intelligence", icon: <Cpu /> },
              { name: "Technology", icon: <Terminal /> },
              { name: "Entrepreneurship", icon: <Target /> },
              { name: "Content Creation", icon: <PenTool /> },
              { name: "Digital Skills", icon: <Network /> },
              { name: "Personal Growth", icon: <BookOpen /> }
            ].map((interest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-8 rounded-2xl glass-card text-center gap-4 hover:border-secondary/50 group"
              >
                <div className="text-white/50 group-hover:text-secondary group-hover:scale-110 transition-all duration-300">
                  {interest.icon}
                </div>
                <h4 className="text-lg font-medium text-white/90">{interest.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Vision */}
      <section className="py-32 relative overflow-hidden bg-black/60">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-8 opacity-80" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white mb-8 text-glow">
              "Every day is an opportunity to learn, improve, and move one step closer to becoming the person I aspire to be."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 10. Statistics */}
      <section className="py-24 border-y border-white/5 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-2xl text-center flex flex-col items-center justify-center">
              <Counter end={1000} suffix="+" />
              <p className="text-white/60 mt-2 font-medium uppercase tracking-wider text-sm">Learning Hours</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-primary text-glow">AI</span>
              <p className="text-white/60 mt-2 font-medium uppercase tracking-wider text-sm">Explorer</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-secondary text-glow">Future</span>
              <p className="text-white/60 mt-2 font-medium uppercase tracking-wider text-sm">Builder</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-white text-glow">Life</span>
              <p className="text-white/60 mt-2 font-medium uppercase tracking-wider text-sm">Long Learner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join My Team */}
      <section id="join" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              Opportunity is open
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Grow Together?</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              I'm building a team of driven individuals who want to develop real skills, grow their network, and create opportunities for themselves.
            </p>
          </motion.div>

          {/* Why Join cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <TrendingUp className="w-7 h-7 text-primary" />,
                title: "Real Skills",
                desc: "Communication, leadership, sales, and personal development skills you'll use for life — not just in business.",
                color: "primary"
              },
              {
                icon: <Users className="w-7 h-7 text-secondary" />,
                title: "Strong Network",
                desc: "Surround yourself with motivated, like-minded people who push each other to grow every single day.",
                color: "secondary"
              },
              {
                icon: <Heart className="w-7 h-7 text-pink-400" />,
                title: "Real Support",
                desc: "You won't figure it out alone. I'll personally guide you, share what works, and help you get results.",
                color: "pink"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-8 rounded-2xl group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* What you get checklist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">When You Join My Team, You Get:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Personal mentorship from day one",
                "A proven system that works",
                "A community that actually supports you",
                "Training on communication & leadership",
                "Flexible — work around your studies or job",
                "Income potential with no ceiling",
                "Personal branding & social media guidance",
                "A chance to build something of your own"
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white/80">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://instagram.com/thepiyushbindal"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-join-team-instagram"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,212,255,0.4)] hover:shadow-[0_0_60px_rgba(0,212,255,0.6)]"
            >
              <MessageCircle className="w-6 h-6" />
              DM Me on Instagram
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/thepiyushbindal"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-follow-join-section"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full border border-white/20 text-white font-bold text-xl hover:border-pink-400/50 hover:bg-pink-500/10 hover:text-pink-300 transition-all"
            >
              <SiInstagram className="w-6 h-6" />
              Follow First
            </a>
          </motion.div>
          <p className="text-center text-white/30 text-sm mt-6">Just send me a DM saying "Team" and I'll get back to you personally.</p>
        </div>
      </section>

      {/* Content Section */}
      <section id="reels" className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute left-0 top-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm font-medium mb-6">
              <SiInstagram className="w-4 h-4" />
              @thepiyushbindal
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
              What I Create
            </h2>
            <p className="text-white/50 mt-4 text-lg max-w-xl mx-auto">
              Every reel is a lesson, a story, or a spark — here's what you'll find on my profile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: <Rocket className="w-6 h-6" />,
                topic: "Entrepreneurship Journey",
                desc: "Real talk about building a business as a student — the wins, the struggles, and what I've learned.",
                color: "from-purple-500 to-violet-600",
                border: "hover:border-purple-500/40",
                glow: "hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]"
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                topic: "Personal Growth",
                desc: "Mindset shifts, daily habits, and the small decisions that compound into big changes over time.",
                color: "from-pink-500 to-rose-600",
                border: "hover:border-pink-500/40",
                glow: "hover:shadow-[0_0_25px_rgba(236,72,153,0.2)]"
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                topic: "Mindset & Motivation",
                desc: "Content that keeps you moving on days when you don't feel like it — because consistency beats everything.",
                color: "from-amber-500 to-orange-600",
                border: "hover:border-amber-500/40",
                glow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]"
              },
              {
                icon: <Video className="w-6 h-6" />,
                topic: "Content Creation",
                desc: "How I make reels, build my brand, and grow an audience as a student with zero budget.",
                color: "from-green-500 to-emerald-600",
                border: "hover:border-green-500/40",
                glow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                data-testid={`content-card-${i}`}
                className={`glass-card rounded-2xl p-6 border border-white/5 ${item.border} ${item.glow} transition-all duration-300 cursor-default`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-5 opacity-90`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.topic}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3"
          >
            <a
              href="https://instagram.com/thepiyushbindal"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-view-all-reels"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)]"
            >
              <SiInstagram className="w-5 h-5" />
              Watch My Reels on Instagram
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
            <p className="text-white/30 text-sm">Follow to see new content every week</p>
          </motion.div>
        </div>
      </section>

      {/* 12 & 13. Connect & Contact */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white">Let's Connect</h2>
              <p className="text-xl text-white/60 mb-8">
                Interested in joining the team, collaborating, or just want to say hi? Reach out — I reply personally.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <a
                  href="https://instagram.com/thepiyushbindal"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-instagram-connect"
                  className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] w-fit"
                >
                  <SiInstagram className="w-6 h-6" />
                  @thepiyushbindal
                </a>
                <a
                  href="https://wa.me/918829866598?text=Hi%20Piyush%2C%20I%20visited%20your%20portfolio%20and%20I%27d%20like%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-whatsapp-connect"
                  className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold text-lg hover:bg-[#25D366]/20 hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,211,102,0.15)] hover:shadow-[0_0_30px_rgba(37,211,102,0.35)] w-fit"
                >
                  <SiWhatsapp className="w-6 h-6" />
                  WhatsApp Me
                </a>
                <a
                  href="mailto:piyushbindal1145@gmail.com"
                  data-testid="link-email-connect"
                  className="inline-flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-lg group w-fit"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-primary/50 flex items-center justify-center transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  piyushbindal1145@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl"
            >
              <form onSubmit={handleContact} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                  <input 
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Hello Piyush, I'd like to..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 13. Footer */}
      <footer className="py-12 border-t border-white/10 bg-background relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-display text-white mb-1">PIYUSH BINDAL</h3>
            <p className="text-primary text-sm tracking-widest uppercase">Student • Entrepreneur • Content Creator</p>
          </div>
          
          <div className="text-white/50 italic text-sm">
            "Always Learning. Always Growing."
          </div>

          <button 
            onClick={() => scrollTo("#hero")}
            className="text-white/60 hover:text-primary transition-colors text-sm font-medium border border-white/10 rounded-full px-6 py-2 hover:border-primary/50 hover:bg-primary/5"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
