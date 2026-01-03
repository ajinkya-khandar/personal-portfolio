gsap.registerPlugin(ScrollTrigger);

/* =========================
   PAGE LOAD ANIMATION
========================= */
gsap.from(".me", {
  opacity: 0,
  y: -30,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".wow", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.2,
  ease: "power3.out"
});

gsap.from(".designation", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: 0.4
});

gsap.from(".primary-btn", {
  opacity: 0,
  scale: 0.8,
  duration: 0.6,
  delay: 0.6
});

gsap.from(".banner-img img", {
  opacity: 0,
  x: 60,
  duration: 1,
  delay: 0.5
});

/* =========================
   BRAND SCROLL ANIMATION
========================= */
gsap.from(".owl-item", {
  scrollTrigger: {
    trigger: ".brands-area",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  stagger: 0.08,
  duration: 0.6,
  ease: "power2.out"
});

/* =========================
   ABOUT SECTION
========================= */
gsap.from(".about-right", {
  scrollTrigger: {
    trigger: ".about-area",
    start: "top 75%",
  },
  opacity: 0,
  y: 60,
  duration: 0.9
});

/* =========================
   JOB EXPERIENCE CARDS
========================= */
gsap.from(".single-job", {
  scrollTrigger: {
    trigger: ".job-area",
    start: "top 75%",
  },
  opacity: 0,
  y: 80,
  stagger: 0.25,
  duration: 0.9,
  ease: "power3.out"
});

/* =========================
   CONTACT SECTION
========================= */
gsap.from(".contact-main", {
  scrollTrigger: {
    trigger: ".contact-area",
    start: "top 75%",
  },
  opacity: 0,
  y: 60,
  duration: 0.9
});

/* =========================
   FOOTER FADE
========================= */
gsap.from(".footer-area", {
  scrollTrigger: {
    trigger: ".footer-area",
    start: "top 90%",
  },
  opacity: 0,
  duration: 0.8
});
