"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Animations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hero-parasol", { y: -12, rotate: 2, duration: 2.8, ease: "sine.inOut", repeat: -1, yoyo: true });
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
    });
  }, []);
  return null;
}
