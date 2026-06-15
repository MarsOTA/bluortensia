"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Animations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".hero-copy > *", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" });
    gsap.to(".hero-parasol", { y: -14, rotate: 1.6, duration: 3.2, ease: "sine.inOut", repeat: -1, yoyo: true });
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.to(el, { opacity: 1, y: 0, duration: 0.95, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 84%" } });
    });
    gsap.utils.toArray<HTMLElement>(".image-reveal").forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 34, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 86%" } });
    });
  }, []);
  return null;
}
