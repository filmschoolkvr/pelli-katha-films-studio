import { motion, useReducedMotion } from "framer-motion";
import heroImg from "@/assets/hero-bride.jpg";
import { Logo } from "./Logo";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* Cinematic background — slow scale */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: reduce ? 1.08 : 1.0 }}
        transition={{ duration: 18, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Cinematic wedding film still"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[color:var(--ink)]/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--ink)]/70 via-transparent to-[color:var(--ink)]" />

      {/* Top nav */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2 }}
          className="font-serif text-[color:var(--cream)] tracking-editorial text-sm md:text-base"
        >
          pellikatha<span className="text-[color:var(--gold)]">.</span>films
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.4 }}
          className="hidden md:block text-[10px] tracking-luxe text-[color:var(--cream)]/60 uppercase"
        >
          Est · A Studio of Cinematic Memory
        </motion.span>
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo size={56} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 md:mt-20 max-w-4xl"
        >
          <p className="text-[10px] md:text-xs tracking-luxe text-[color:var(--gold)] uppercase mb-6">
            A Wedding Film Studio
          </p>
          <h1 className="font-serif text-[color:var(--cream)] text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] italic font-light">
            Every Pelli, a Katha.
          </h1>
          <div className="mx-auto my-8 h-px w-24 hairline-gold" />
          <p className="font-serif text-[color:var(--cream)]/85 text-2xl md:text-3xl italic font-light">
            Every Katha, a Film.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#films"
            className="gold-glow cinema-ease inline-flex items-center justify-center border border-[color:var(--gold)]/70 text-[color:var(--gold)] px-8 py-3.5 text-xs tracking-luxe uppercase hover:text-[color:var(--cream)]"
          >
            Watch Stories
          </a>
          <a
            href="#contact"
            className="gold-glow cinema-ease inline-flex items-center justify-center border border-[color:var(--cream)]/20 text-[color:var(--cream)]/80 px-8 py-3.5 text-xs tracking-luxe uppercase hover:border-[color:var(--cream)]/50 hover:text-[color:var(--cream)]"
          >
            Book Your Film
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-luxe text-[color:var(--cream)]/50 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-[color:var(--gold)]/80 to-transparent"
        />
      </motion.div>
    </section>
  );
}
