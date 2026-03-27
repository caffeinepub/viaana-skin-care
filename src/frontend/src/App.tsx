import {
  Award,
  ChevronRight,
  Clock,
  Facebook,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Twitter,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ── Intersection Observer hook ────────────────────────
function useIntersectionObserver(
  options: IntersectionObserverInit = { threshold: 0.15 },
) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}

// ── Animated counter ──────────────────────────────────
function useCountUp(target: number, duration = 1800, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return value;
}

// ── Particles ─────────────────────────────────────────
const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  top: `${Math.floor(10 + ((i * 47) % 75))}%`,
  left: `${Math.floor(5 + ((i * 31) % 88))}%`,
  size: 4 + (i % 5) * 3,
  duration: `${3.5 + (i % 4) * 1.2}s`,
  delay: `${(i % 6) * 0.6}s`,
}));

// ── Static data ───────────────────────────────────────
const SERVICES = [
  {
    key: "skin-therapy",
    icon: <Sparkles className="w-7 h-7" />,
    name: "Skin Therapy",
    desc: "Advanced treatments for acne, pigmentation, anti-aging, and overall skin rejuvenation tailored to your skin type.",
  },
  {
    key: "hair-therapy",
    icon: <Zap className="w-7 h-7" />,
    name: "Hair Therapy",
    desc: "Comprehensive hair loss solutions, PRP treatments, and scalp care using cutting-edge dermatological techniques.",
  },
  {
    key: "advanced-tech",
    icon: <Award className="w-7 h-7" />,
    name: "Advanced Technology",
    desc: "State-of-the-art laser, RF, and HIFU machines for non-invasive skin tightening, resurfacing, and hair removal.",
  },
  {
    key: "personalized-care",
    icon: <Heart className="w-7 h-7" />,
    name: "Personalized Care",
    desc: "Every treatment plan is customized after thorough consultation to deliver safe, effective, and lasting results.",
  },
];

const REVIEWS = [
  {
    key: "digital-mitul",
    name: "Digital Mitul",
    initials: "DM",
    text: "Best clinic in Surat for Skin And Hair Therapy. Dr Komal given best and proper guidance for my Skin And Hair problems. I get better results in less time. Advice to visit this clinic.",
  },
  {
    key: "kartik-baldaniya",
    name: "KARTIK BALDANIYA",
    initials: "KB",
    text: "Very good treatment. Very short time good results and premium service.",
  },
  {
    key: "tanoj-patil",
    name: "Tanoj Patil",
    initials: "TP",
    text: "Dr. Komal Patel is a highly professional and polite skin specialist. She listens carefully, explains everything clearly, and provides effective treatment. I truly recommend this clinic.",
  },
];

const RATING_BARS = [
  { star: 5, pct: 85 },
  { star: 4, pct: 10 },
  { star: 3, pct: 3 },
  { star: 2, pct: 1 },
  { star: 1, pct: 1 },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const STARS_5 = ["s1", "s2", "s3", "s4", "s5"];

const CLINIC_INFO = [
  {
    key: "address",
    icon: <MapPin className="w-5 h-5" />,
    label: "Address",
    value:
      "201, 2nd floor, Jivandeep Complex, Hirabaug Rd, Surat, Gujarat 395006",
  },
  {
    key: "phone",
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "099042 32232",
  },
  {
    key: "hours",
    icon: <Clock className="w-5 h-5" />,
    label: "Hours",
    value: "Mon–Sat: 10:00 am – 1:00 pm & 4:00 pm – 8:00 pm",
  },
];

const CLINIC_HIGHLIGHTS = [
  {
    key: "machines",
    icon: <Zap className="w-5 h-5" />,
    title: "Advanced Machines",
    desc: "State-of-the-art technology for skin, hair, and aesthetic treatments.",
  },
  {
    key: "trust",
    icon: <Users className="w-5 h-5" />,
    title: "Varachha’s Best",
    desc: "Trusted by thousands of patients across Surat and nearby areas.",
  },
  {
    key: "location",
    icon: <MapPin className="w-5 h-5" />,
    title: "Conveniently Located",
    desc: "201, 2nd floor, Jivandeep Complex, Hirabaug Rd, Surat, Gujarat.",
  },
  {
    key: "timings",
    icon: <Clock className="w-5 h-5" />,
    title: "Flexible Timings",
    desc: "Mon–Sat: 10 am–1 pm & 4 pm–8 pm. Book your slot easily.",
  },
];

const SOCIAL_LINKS = [
  {
    key: "instagram",
    icon: <Instagram className="w-4 h-4" />,
    href: "#",
    label: "Instagram",
  },
  {
    key: "facebook",
    icon: <Facebook className="w-4 h-4" />,
    href: "#",
    label: "Facebook",
  },
  {
    key: "twitter",
    icon: <Twitter className="w-4 h-4" />,
    href: "#",
    label: "Twitter",
  },
];

const STATS_DATA = [
  {
    key: "patients",
    suffix: "+",
    label: "Patients Treated",
    iconEl: <Users className="w-6 h-6" />,
  },
  {
    key: "years",
    suffix: "+",
    label: "Years Experience",
    iconEl: <Award className="w-6 h-6" />,
  },
  {
    key: "rating",
    suffix: "\u2605",
    label: "Star Rating",
    iconEl: <Star className="w-6 h-6" />,
  },
  {
    key: "reviews",
    suffix: "",
    label: "Google Reviews",
    iconEl: <Heart className="w-6 h-6" />,
  },
];

// ── Leaf logo SVG ─────────────────────────────────────
function LeafLogo({
  stroke = "oklch(0.72 0.065 20)",
  fill = "oklch(0.72 0.065 20 / 0.15)",
}: { stroke?: string; fill?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-label="Viaana leaf logo"
      role="img"
    >
      <title>Viaana Leaf Logo</title>
      <ellipse
        cx="16"
        cy="20"
        rx="7"
        ry="10"
        stroke={stroke}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M16 10 C16 10 10 4 16 2 C22 4 16 10 16 10Z"
        stroke={stroke}
        strokeWidth="1.5"
        fill={fill}
      />
      <path
        d="M16 10 C16 10 8 8 6 14"
        stroke={stroke}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M16 10 C16 10 24 8 26 14"
        stroke={stroke}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ── Main component ────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // section observers
  const hero = useIntersectionObserver();
  const stats = useIntersectionObserver();
  const about = useIntersectionObserver();
  const services = useIntersectionObserver();
  const reviews = useIntersectionObserver();
  const contact = useIntersectionObserver();

  // counting stats
  const patients = useCountUp(10000, 2000, stats.visible);
  const years = useCountUp(10, 1200, stats.visible);
  const rating = useCountUp(49, 1400, stats.visible); // ×10 → display as x.x
  const revCount = useCountUp(463, 1800, stats.visible);

  const statValues = [patients, years, rating, revCount];

  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      {/* ── NAVBAR ─────────────────────────────────── */}
      <header
        data-ocid="nav.panel"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F6F1EC]/95 backdrop-blur-md shadow-xs"
            : "bg-[#F6F1EC]"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <LeafLogo />
            <span className="font-serif text-xl font-semibold text-[#2F2624] tracking-wide">
              Viaana Skin Care
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                data-ocid="nav.link"
                href={l.href}
                className="text-sm text-[#3A2E2B] hover:text-[oklch(0.38_0.07_355)] transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              data-ocid="nav.primary_button"
              href="tel:+919904232232"
              className="ml-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-[oklch(0.62_0.055_20)] hover:bg-[oklch(0.38_0.07_355)] transition-colors"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            data-ocid="nav.toggle"
            className="md:hidden p-2 rounded-lg text-[#3A2E2B]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden bg-[#F6F1EC] border-t border-border px-4 pb-4 pt-2 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#3A2E2B] py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+919904232232"
              className="mt-1 text-center px-5 py-2 rounded-full text-sm font-semibold text-white bg-[oklch(0.38_0.07_355)]"
            >
              Book Consultation
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ───────────────────────────────────── */}
      <section
        id="home"
        ref={hero.ref}
        className="relative overflow-hidden pt-16 min-h-[92vh] flex items-center"
      >
        <div
          className="absolute inset-0 animate-hero-gradient"
          style={{
            background:
              "linear-gradient(135deg, #fde8e8 0%, #fdf3ee 25%, #f6effa 50%, #fef0e8 75%, #fde8ee 100%)",
          }}
        />

        {/* Floating particles */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full pointer-events-none animate-float"
            style={
              {
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                background: "oklch(0.72 0.065 20 / 0.5)",
                boxShadow: `0 0 ${p.size * 2}px oklch(0.72 0.065 20 / 0.3)`,
                "--duration": p.duration,
                animationDelay: p.delay,
              } as React.CSSProperties
            }
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left – gradient portrait placeholder */}
          <div
            className={`section-enter ${hero.visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div
              className="relative mx-auto md:mx-0 w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-card-hover"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.85 0.04 20) 0%, oklch(0.75 0.07 355) 50%, oklch(0.60 0.09 340) 100%)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 30%, oklch(1 0 0 / 0.35) 0%, transparent 65%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 flex flex-col items-center justify-end pb-8 text-white text-center px-4">
                <p className="font-serif text-2xl font-semibold drop-shadow">
                  Dr. Komal Patel
                </p>
                <p className="text-sm mt-1 text-white/80">MD Dermatologist</p>
                <div className="mt-3 flex items-center gap-1">
                  {STARS_5.map((sk) => (
                    <Star
                      key={sk}
                      className="w-4 h-4 fill-[oklch(0.70_0.12_75)] text-[oklch(0.70_0.12_75)]"
                    />
                  ))}
                  <span className="ml-2 text-xs text-white/80">
                    4.9 · 463 reviews
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right – copy */}
          <div
            className={`section-enter ${hero.visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.25s" }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[oklch(0.62_0.055_20)] mb-4">
              Viaana Skin Care · Surat
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2F2624] leading-tight mb-5">
              Experience{" "}
              <em className="not-italic text-[oklch(0.62_0.055_20)]">
                Radiant Skin
              </em>
              <br />
              with Expert Care
            </h1>
            <p className="text-[#6A5A55] text-lg leading-relaxed mb-8 max-w-md">
              Under the expert guidance of Dr. Komal Patel — MD Dermatologist
              with 10+ years of experience — we combine advanced technology with
              personalized care for visible, lasting results.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                data-ocid="hero.primary_button"
                href="#services"
                className="px-6 py-3 rounded-full font-semibold text-white bg-[oklch(0.38_0.07_355)] hover:bg-[oklch(0.33_0.07_355)] transition-all hover:-translate-y-0.5 shadow-card"
              >
                Explore Services
              </a>
              <a
                data-ocid="hero.secondary_button"
                href="tel:+919904232232"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[#2F2624] border-2 border-[oklch(0.72_0.065_20)] hover:border-[oklch(0.38_0.07_355)] hover:text-[oklch(0.38_0.07_355)] transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                data-ocid="hero.directions_button"
                href="https://maps.google.com/?q=201+2nd+floor+Jivandeep+complex+Hirabaug+Rd+Surat+Gujarat+395006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[#6A5A55] bg-white/70 border border-border hover:bg-white transition-all hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4" /> Directions
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ── STATS ──────────────────────────────────── */}
      <section id="stats" ref={stats.ref} className="py-16 bg-white">
        <div
          className={`max-w-5xl mx-auto px-4 sm:px-6 section-enter ${stats.visible ? "visible" : ""}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS_DATA.map((s, i) => (
              <div
                key={s.key}
                data-ocid={`stats.card.${(i + 1) as 1 | 2 | 3 | 4}`}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#F7F3EE] to-white border border-border shadow-xs hover:shadow-card transition-shadow"
              >
                <span className="text-[oklch(0.62_0.055_20)] mb-2">
                  {s.iconEl}
                </span>
                <span className="font-serif text-4xl font-bold text-[#2F2624]">
                  {s.key === "rating"
                    ? (statValues[i] / 10).toFixed(1)
                    : statValues[i].toLocaleString()}
                  {s.suffix}
                </span>
                <span className="mt-1 text-sm text-[#6A5A55] font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / DOCTOR ─────────────────────────── */}
      <section id="about" ref={about.ref} className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className={`text-center mb-14 section-enter ${about.visible ? "visible" : ""}`}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.62_0.055_20)] mb-2">
              About Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2F2624]">
              Meet Our Expert Doctor
            </h2>
          </div>
          <div
            className={`grid md:grid-cols-2 gap-8 section-enter ${about.visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            {/* Doctor card */}
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div
                className="h-48 relative"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.85 0.04 20) 0%, oklch(0.70 0.07 355) 60%, oklch(0.58 0.09 330) 100%)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 20%, oklch(1 0 0 / 0.3) 0%, transparent 70%)",
                  }}
                />
                <div className="absolute bottom-4 left-6">
                  <div
                    className="w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center text-white text-2xl font-serif font-bold"
                    style={{ background: "oklch(0.38 0.07 355 / 0.6)" }}
                  >
                    KP
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-[#2F2624]">
                  Dr. Komal Patel
                </h3>
                <p className="text-[oklch(0.62_0.055_20)] font-semibold mt-0.5 mb-4">
                  MD Dermatologist · MBBS, MD Skin
                </p>
                <p className="text-[#6A5A55] text-sm leading-relaxed">
                  Viaana skin clinic is driven by Dr Komal Patel MD
                  Dermatologist. She is very expertise and best Dermatologist in
                  Varachha area, Surat. She has done her MBBS and MD in skin
                  from New Civil Hospital, Surat. She has treated more than
                  10,000 patients and has more than 10 years experience. Viaana
                  skin clinic has advanced technology machines for all skin and
                  hair problems.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "MD Dermatology",
                    "10+ Years",
                    "10,000+ Patients",
                    "New Civil Hospital",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-[#F7F3EE] text-[oklch(0.38_0.07_355)] border border-border font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Clinic highlights */}
            <div className="flex flex-col gap-5">
              {CLINIC_HIGHLIGHTS.map((item) => (
                <div
                  key={item.key}
                  className="flex gap-4 bg-white rounded-xl p-5 border border-border shadow-xs hover:shadow-card transition-shadow"
                >
                  <span className="mt-0.5 shrink-0 text-[oklch(0.62_0.055_20)]">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-semibold text-[#2F2624] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#6A5A55]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────── */}
      <section id="services" ref={services.ref} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className={`text-center mb-14 section-enter ${services.visible ? "visible" : ""}`}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.62_0.055_20)] mb-2">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2F2624]">
              Our Signature Services
            </h2>
            <p className="mt-3 text-[#6A5A55] max-w-xl mx-auto text-sm">
              Expert dermatological care backed by advanced technology and 10+
              years of clinical experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.key}
                data-ocid={`services.card.${(i + 1) as 1 | 2 | 3 | 4}`}
                className={`section-enter ${services.visible ? "visible" : ""} group flex flex-col p-6 rounded-2xl bg-background border-2 border-[oklch(0.88_0.022_25)] hover:border-[oklch(0.72_0.065_20)] hover:shadow-card-hover transition-all hover:-translate-y-1 cursor-default`}
                style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 text-[oklch(0.62_0.055_20)] bg-[#F7F3EE] border border-border group-hover:bg-[oklch(0.38_0.07_355)] group-hover:text-white transition-colors">
                  {s.icon}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#2F2624] mb-2">
                  {s.name}
                </h3>
                <p className="text-sm text-[#6A5A55] leading-relaxed flex-1">
                  {s.desc}
                </p>
                <span className="mt-4 inline-flex items-center text-xs font-semibold text-[oklch(0.62_0.055_20)] gap-1">
                  Learn more <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS + RATINGS ──────────────────────── */}
      <section id="reviews" ref={reviews.ref} className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className={`text-center mb-14 section-enter ${reviews.visible ? "visible" : ""}`}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.62_0.055_20)] mb-2">
              Patient Stories
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2F2624]">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Review cards */}
            <div className="flex flex-col gap-5">
              {REVIEWS.map((r, i) => (
                <div
                  key={r.key}
                  data-ocid={`reviews.card.${(i + 1) as 1 | 2 | 3}`}
                  className={`section-enter ${reviews.visible ? "visible" : ""} bg-white rounded-2xl p-6 border border-border shadow-xs hover:shadow-card-hover hover:-translate-y-1 transition-all`}
                  style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.72 0.065 20) 0%, oklch(0.38 0.07 355) 100%)",
                      }}
                    >
                      {r.initials}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#2F2624] text-sm">
                          {r.name}
                        </span>
                        <span className="flex">
                          {STARS_5.map((sk) => (
                            <Star
                              key={sk}
                              className="w-3.5 h-3.5 fill-[oklch(0.70_0.12_75)] text-[oklch(0.70_0.12_75)]"
                            />
                          ))}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[#6A5A55] leading-relaxed">
                        {r.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ratings breakdown */}
            <div
              className={`section-enter ${reviews.visible ? "visible" : ""} bg-white rounded-2xl p-8 border border-border shadow-xs`}
              style={{ transitionDelay: "0.35s" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div>
                  <p className="font-serif text-6xl font-bold text-[#2F2624]">
                    4.9
                  </p>
                  <div className="flex mt-1">
                    {STARS_5.map((sk) => (
                      <Star
                        key={sk}
                        className="w-5 h-5 fill-[oklch(0.70_0.12_75)] text-[oklch(0.70_0.12_75)]"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-[#6A5A55] mt-1">
                    Based on 463 reviews
                  </p>
                </div>
                <div
                  className="ml-4 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.065 20) 0%, oklch(0.38 0.07 355) 100%)",
                  }}
                >
                  Top
                </div>
              </div>
              <div className="space-y-3">
                {RATING_BARS.map((rb) => (
                  <div key={rb.star} className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#6A5A55] w-6 text-right">
                      {rb.star}★
                    </span>
                    <div className="flex-1 h-2.5 bg-[#F7F3EE] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: reviews.visible ? `${rb.pct}%` : "0%",
                          background:
                            "linear-gradient(90deg, oklch(0.72 0.065 20) 0%, oklch(0.38 0.07 355) 100%)",
                          transition: reviews.visible
                            ? `width 1.2s ease ${rb.star * 0.1}s`
                            : "none",
                        }}
                      />
                    </div>
                    <span className="text-xs text-[#6A5A55] w-8">
                      {rb.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────── */}
      <section id="contact" ref={contact.ref} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className={`text-center mb-14 section-enter ${contact.visible ? "visible" : ""}`}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.62_0.055_20)] mb-2">
              Find Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2F2624]">
              Visit Viaana Skin Care
            </h2>
          </div>
          <div
            className={`grid md:grid-cols-2 gap-10 section-enter ${contact.visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            {/* Info */}
            <div className="space-y-6">
              {CLINIC_INFO.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <span className="shrink-0 mt-0.5 w-10 h-10 flex items-center justify-center rounded-xl text-[oklch(0.62_0.055_20)] bg-[#F7F3EE] border border-border">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[oklch(0.62_0.055_20)] uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#2F2624] font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-4">
              <a
                data-ocid="contact.primary_button"
                href="tel:+919904232232"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.065 20) 0%, oklch(0.38 0.07 355) 100%)",
                }}
              >
                <Phone className="w-5 h-5" /> Call Now — 099042 32232
              </a>
              <a
                data-ocid="contact.directions_button"
                href="https://maps.google.com/?q=201+2nd+floor+Jivandeep+complex+Hirabaug+Rd+Surat+Gujarat+395006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold text-[#2F2624] bg-[#F7F3EE] border-2 border-[oklch(0.80_0.04_20)] hover:border-[oklch(0.62_0.055_20)] transition-all hover:-translate-y-0.5"
              >
                <MapPin className="w-5 h-5" /> Get Directions on Maps
              </a>
              <a
                data-ocid="contact.whatsapp_button"
                href="https://wa.me/919904232232"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                style={{
                  background:
                    "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                }}
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <a
                data-ocid="contact.map_button"
                href="https://maps.google.com/?q=201+2nd+floor+Jivandeep+complex+Hirabaug+Rd+Surat+Gujarat+395006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold text-[oklch(0.38_0.07_355)] border-2 border-[oklch(0.38_0.07_355)] hover:bg-[oklch(0.38_0.07_355/0.06)] transition-all hover:-translate-y-0.5"
              >
                <MapPin className="w-5 h-5" /> View on Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer className="bg-footer text-white pt-14 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <LeafLogo
                  stroke="oklch(0.80 0.04 20)"
                  fill="oklch(0.80 0.04 20 / 0.25)"
                />
                <span className="font-serif text-xl font-semibold text-white">
                  Viaana Skin Care
                </span>
              </div>
              <p className="text-white/65 text-sm leading-relaxed max-w-xs">
                Advanced dermatological care led by Dr. Komal Patel, MD —
                bringing expert skin and hair treatments to Surat.
              </p>
              <div className="flex gap-3 mt-6">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-white/65 hover:text-white hover:border-white/60 transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-white/65 text-sm hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wide">
                Services
              </h4>
              <ul className="space-y-2">
                {SERVICES.map((s) => (
                  <li key={s.key}>
                    <span className="text-white/65 text-sm">{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/45">
            <span>
              © {new Date().getFullYear()} Viaana Skin Care, Surat. All rights
              reserved.
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>

      {/* ── FLOATING BOOK BUTTON ────────────────────── */}
      <a
        data-ocid="floating.primary_button"
        href="tel:+919904232232"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-semibold shadow-card-hover animate-pulse-ring transition-all hover:scale-105 hover:shadow-xl"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.72 0.065 20) 0%, oklch(0.38 0.07 355) 100%)",
        }}
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">Book Appointment</span>
      </a>
    </div>
  );
}
